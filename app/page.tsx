'use client';

import { useEffect, useState } from 'react';

type Skill = {
  name: string;
  score: number;
  target: number;
  trend: string;
};

type Recommendation = {
  title: string;
  description: string;
  priority: string;
};

type DashboardData = {
  studentName: string;
  readinessScore: number;
  weeklyProgress: number;
  learningStreak: number;
  evidenceCount: number;
  skills: Skill[];
  recommendations: Recommendation[];
  missions: Array<{
    id: string;
    title: string;
    status: string;
    due: string;
    brief: string;
  }>;
};

export default function HomePage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [missionInput, setMissionInput] = useState('');
  const [missionFeedback, setMissionFeedback] = useState<string | null>(null);
  const [coachResponse, setCoachResponse] = useState<string | null>(null);
  const [coachGoal, setCoachGoal] = useState('Build confidence in AI product design and evaluation');
  const [coachError, setCoachError] = useState<string | null>(null);
  const [coachLoading, setCoachLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      const response = await fetch('/api/v1/dashboard');
      const data = await response.json();
      setDashboard(data);
      setLoading(false);
    };

    loadDashboard();
  }, []);

  const handleMissionSubmit = async () => {
    const response = await fetch('/api/v1/missions/ai-evaluation/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentResponse: missionInput })
    });

    const data = await response.json();
    setMissionFeedback(data.feedback ?? 'No feedback returned.');
  };

  const handleCoachRequest = async () => {
    setCoachLoading(true);
    setCoachError(null);
    setCoachResponse(null);

    try {
      const response = await fetch('/api/v1/learning-coach/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal: coachGoal,
          skills: dashboard?.skills.map(({ name, score, target }) => ({ name, score, target })) ?? []
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? 'The Learning Coach request failed.');
      }

      setCoachResponse(data.recommendation);
    } catch (error) {
      setCoachError(error instanceof Error ? error.message : 'The Learning Coach request failed.');
    } finally {
      setCoachLoading(false);
    }
  };

  if (loading) {
    return <main className="page-shell"><div className="panel loading">Loading dashboard...</div></main>;
  }

  if (!dashboard) {
    return <main className="page-shell"><div className="panel loading">Unable to load dashboard.</div></main>;
  }

  return (
    <main className="page-shell">
      <header className="topbar panel">
        <div className="brand-block">
          <div className="brand-mark">AI</div>
          <div>
            <p className="eyebrow">University pilot</p>
            <h1>Industry Readiness Platform</h1>
          </div>
        </div>

        <div className="profile-pill">
          <span className="status-dot" />
          Student view
        </div>
      </header>

      <section className="hero panel">
        <div>
          <p className="eyebrow accent">Learning overview</p>
          <h2>Welcome back, {dashboard.studentName}</h2>
          <p className="lead">
            Your readiness profile shows strong momentum in AI literacy and communication. Continue with small, evidence-based learning actions to close the remaining skill gaps.
          </p>

          <div className="coach-form">
            <label htmlFor="coach-goal">What would you like coaching on?</label>
            <input
              id="coach-goal"
              type="text"
              value={coachGoal}
              maxLength={500}
              onChange={(event) => setCoachGoal(event.target.value)}
              placeholder="Describe a learning goal"
            />
            <button
              className="primary-btn"
              onClick={handleCoachRequest}
              disabled={coachLoading || !coachGoal.trim()}
            >
              {coachLoading ? 'Asking the Learning Coach...' : 'Get learning coach advice'}
            </button>
          </div>

          {coachResponse && (
            <div className="coach-box">
              <strong>Learning coach · Microsoft Foundry</strong>
              <p>{coachResponse}</p>
            </div>
          )}

          {coachError && (
            <div className="coach-error" role="alert">
              {coachError}
            </div>
          )}
        </div>

        <div className="ring-card" aria-label="Current readiness score">
          <div className="ring-wrap">
            <svg viewBox="0 0 160 160" aria-hidden="true">
              <circle cx="80" cy="80" r="58" className="ring-bg" />
              <circle cx="80" cy="80" r="58" className="ring-progress" style={{ strokeDashoffset: `${(1 - dashboard.readinessScore / 100) * 365}` }} />
            </svg>
            <div className="ring-center">
              <span>{dashboard.readinessScore}%</span>
              <small>readiness</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <span className="stat-label">Current competency score</span>
          <strong>{dashboard.readinessScore}.0</strong>
          <small>Up 6.2 pts this term</small>
        </article>
        <article className="stat-card">
          <span className="stat-label">Weekly progress</span>
          <strong>{dashboard.weeklyProgress}%</strong>
          <small>Goal: 80% completion</small>
        </article>
        <article className="stat-card">
          <span className="stat-label">Learning streak</span>
          <strong>{dashboard.learningStreak} days</strong>
          <small>Keep the momentum going</small>
        </article>
        <article className="stat-card">
          <span className="stat-label">Evidence collected</span>
          <strong>{dashboard.evidenceCount}</strong>
          <small>8 validated by faculty</small>
        </article>
      </section>

      <section className="content-grid">
        <div className="panel section-panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Competency snapshot</p>
              <h3>Skill areas</h3>
            </div>
          </div>

          <div className="competency-list">
            {dashboard.skills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-meta">
                  <strong>{skill.name}</strong>
                  <span className={`value-pill ${skill.score < 80 ? 'warning' : ''}`}>{skill.trend}</span>
                </div>
                <div className="progress-bar">
                  <span className={`progress-fill ${skill.score < 80 ? 'warning' : ''}`} style={{ width: `${skill.score}%` }} />
                </div>
                <div className="skill-foot">
                  <span>{skill.score}% proficiency</span>
                  <span>Target: {skill.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="panel section-panel">
          <div className="section-header compact">
            <div>
              <p className="eyebrow">Recommended next steps</p>
              <h3>Learning coach</h3>
            </div>
          </div>

          <div className="recommendation-list">
            {dashboard.recommendations.map((item) => (
              <article key={item.title} className="rec-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="meta-row">
                  <span className="badge">{item.priority}</span>
                  <span>Recommended</span>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="content-grid lower-grid">
        <div className="panel section-panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Practice missions</p>
              <h3>AI Evaluation challenge</h3>
            </div>
          </div>

          <div className="mission-list">
            {dashboard.missions.map((mission) => (
              <div key={mission.id} className="mission-item">
                <div>
                  <h4>{mission.title}</h4>
                  <p>{mission.brief}</p>
                </div>
                <span className="mission-tag">{mission.status}</span>
              </div>
            ))}
          </div>

          <div className="submission-box">
            <h4>Submit your response</h4>
            <textarea
              value={missionInput}
              onChange={(event) => setMissionInput(event.target.value)}
              placeholder="Describe your recommended AI evaluation approach, risks, and evidence..."
            />
            <button className="primary-btn" onClick={handleMissionSubmit}>Submit mission</button>

            {missionFeedback && (
              <div className="feedback-box">
                <strong>Formative feedback</strong>
                <p>{missionFeedback}</p>
              </div>
            )}
          </div>
        </div>

        <div className="panel section-panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Evidence trail</p>
              <h3>Recent learning events</h3>
            </div>
          </div>

          <ul className="timeline">
            <li>
              <strong>AI Design Reflection</strong>
              <span>Submitted a concept note and mapped user value to a risk-aware solution.</span>
            </li>
            <li>
              <strong>Peer review</strong>
              <span>Faculty feedback confirmed improvement in product thinking and evidence quality.</span>
            </li>
            <li>
              <strong>Learning path updated</strong>
              <span>Recommended next steps now emphasize deeper evaluation and communication practice.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
