export async function POST(request: Request) {
  const body = await request.json();
  const response = String(body.studentResponse || '').trim();

  if (!response) {
    return Response.json({ feedback: 'Please provide a response before submitting.' }, { status: 400 });
  }

  const hasProblem = /problem|user|need|goal/i.test(response);
  const hasRisk = /risk|bias|safety|hallucination|privacy/i.test(response);
  const hasEvidence = /evidence|metric|test|feedback|measure/i.test(response);

  const feedbackParts = [
    'Your submission shows good intent and a clear awareness of the problem space.',
    hasProblem ? 'You describe a user problem or need clearly.' : 'You could strengthen the response by naming the user problem more explicitly.',
    hasRisk ? 'You identify important risk considerations such as safety, bias, or trust.' : 'Add a few risk guardrails or quality concerns to strengthen the answer.',
    hasEvidence ? 'Your answer is grounded in evidence and measurable criteria.' : 'Include evidence sources or quality metrics that would help a reviewer assess the recommendation.'
  ];

  return Response.json({
    status: 'accepted',
    feedback: feedbackParts.join(' '),
    summary: {
      answerLength: response.length,
      hasProblem,
      hasRisk,
      hasEvidence
    }
  });
}
