import { DefaultAzureCredential } from '@azure/identity';
import { AIProjectClient } from '@azure/ai-projects';

export const runtime = 'nodejs';

const MAX_GOAL_LENGTH = 500;

type RecommendationRequest = {
  goal?: unknown;
  skills?: unknown;
};

type SkillContext = {
  name: string;
  score: number;
  target: number;
};

export async function POST(request: Request) {
  let body: RecommendationRequest;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  const goal = typeof body.goal === 'string' ? body.goal.trim() : '';

  if (!goal) {
    return Response.json({ error: 'Please provide a learning goal.' }, { status: 400 });
  }

  if (goal.length > MAX_GOAL_LENGTH) {
    return Response.json(
      { error: `Learning goals must be ${MAX_GOAL_LENGTH} characters or fewer.` },
      { status: 400 }
    );
  }

  let skills: SkillContext[] = [];

  if (body.skills !== undefined) {
    if (!Array.isArray(body.skills) || body.skills.length > 12) {
      return Response.json({ error: 'Competency context must contain no more than 12 skills.' }, { status: 400 });
    }

    for (const skill of body.skills) {
      if (
        typeof skill !== 'object' ||
        skill === null ||
        !('name' in skill) ||
        !('score' in skill) ||
        !('target' in skill) ||
        typeof skill.name !== 'string' ||
        skill.name.trim().length === 0 ||
        skill.name.length > 100 ||
        typeof skill.score !== 'number' ||
        !Number.isFinite(skill.score) ||
        skill.score < 0 ||
        skill.score > 100 ||
        typeof skill.target !== 'number' ||
        !Number.isFinite(skill.target) ||
        skill.target < 0 ||
        skill.target > 100
      ) {
        return Response.json({ error: 'Competency context contains an invalid skill.' }, { status: 400 });
      }

      skills.push({
        name: skill.name.trim(),
        score: skill.score,
        target: skill.target
      });
    }
  }

  const endpoint = process.env.FOUNDRY_PROJECT_ENDPOINT;
  const agentName = process.env.FOUNDRY_AGENT_NAME;

  if (!endpoint || !agentName) {
    return Response.json(
      {
        error:
          'Microsoft Foundry is not configured. Set FOUNDRY_PROJECT_ENDPOINT and FOUNDRY_AGENT_NAME on the server.'
      },
      { status: 503 }
    );
  }

  try {
    const project = new AIProjectClient(endpoint, new DefaultAzureCredential());
    const openai = project.getOpenAIClient();
    const input = [
      `Student learning goal: ${goal}`,
      skills.length > 0
        ? `Synthetic competency indicators (not official assessment results):\n${skills
            .map((skill) => `- ${skill.name}: ${skill.score}% current, ${skill.target}% target`)
            .join('\n')}`
        : 'No competency context was provided.',
      'Suggest one practical next learning activity, explain why it fits the goal and competency context, and include one way to demonstrate progress.'
    ].join('\n\n');
    const response = await openai.responses.create(
      { input },
      { body: { agent_reference: { name: agentName, type: 'agent_reference' } } }
    );
    const recommendation = response.output_text.trim();

    if (!recommendation) {
      console.error('Microsoft Foundry Learning Coach returned an empty response.');
      return Response.json(
        { error: 'The Learning Coach returned an empty response. Please try again.' },
        { status: 502 }
      );
    }

    return Response.json({
      recommendation,
      source: 'microsoft_foundry'
    });
  } catch (error) {
    console.error(
      'Microsoft Foundry Learning Coach request failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return Response.json(
      { error: 'The Learning Coach could not reach Microsoft Foundry. Check server logs and try again.' },
      { status: 502 }
    );
  }
}
