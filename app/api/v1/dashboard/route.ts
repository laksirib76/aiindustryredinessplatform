const dashboardData = {
  studentName: 'Aisha',
  readinessScore: 82,
  weeklyProgress: 76,
  learningStreak: 14,
  evidenceCount: 18,
  skills: [
    { name: 'AI & Data Fluency', score: 86, target: 90, trend: 'Strong' },
    { name: 'Product Thinking', score: 78, target: 85, trend: 'Improving' },
    { name: 'Communication', score: 91, target: 90, trend: 'Strong' },
    { name: 'Research & Synthesis', score: 82, target: 88, trend: 'Strong' },
    { name: 'Team Collaboration', score: 74, target: 80, trend: 'Needs focus' },
    { name: 'Ethical AI Practice', score: 88, target: 90, trend: 'Strong' }
  ],
  recommendations: [
    {
      title: 'Prioritize AI product case study analysis',
      description: 'Review two real industry briefs and map user need, constraints, and AI guardrails before building a solution.',
      priority: 'High impact'
    },
    {
      title: 'Sharpen stakeholder communication',
      description: 'Prepare a short recommendation pitch that connects evidence to a business outcome and acceptable risk.',
      priority: 'Core skill'
    },
    {
      title: 'Practice data storytelling',
      description: 'Turn rough analysis into a brief insight story with assumptions, evidence, and a clear action recommendation.',
      priority: 'Improvement'
    }
  ],
  missions: [
    {
      id: 'ai-evaluation',
      title: 'AI Evaluation challenge',
      status: 'Ready',
      due: 'This week',
      brief: 'Assess an AI solution using quality, risks, trust, and user-value criteria.'
    }
  ]
};

export async function GET() {
  return Response.json(dashboardData);
}
