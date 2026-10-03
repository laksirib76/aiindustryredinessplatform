const mission = {
  id: 'ai-evaluation',
  title: 'AI Evaluation challenge',
  description: 'Evaluate a sample AI assistant against quality, risk, user value, and evidence criteria.',
  instructions: [
    'Describe the problem the AI tool addresses.',
    'Identify 2-3 good design features.',
    'Outline at least 2 risks or quality concerns.',
    'State what evidence would help you judge performance.'
  ],
  status: 'available'
};

export async function GET() {
  return Response.json(mission);
}
