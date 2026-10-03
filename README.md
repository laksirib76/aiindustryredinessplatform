# AI Industry Readiness Platform

Student dashboard prototype with synthetic learner data and a Microsoft Foundry Learning Coach integration.

## Run locally

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure the Microsoft Foundry Learning Coach

The recommendation API calls an existing **prompt agent** in Microsoft Foundry. Create a Foundry project, deploy a model, and create a prompt agent named `LearningCoach` (or use another name and set that name below). Suggested instructions for the agent:

> You are an advisory university Learning Coach. Use only the student's stated goal and the supplied synthetic competency indicators. Recommend one practical next learning activity, explain why it fits, and suggest one way to demonstrate progress. Treat competency values as illustrative, not official assessment results. Do not assign grades, change academic records, make progression decisions, or claim access to student records or learning materials that were not provided.

The app sends only the goal and synthetic competency indicators from the demo dashboard. Keep the agent advisory: it must not grade students, change official academic results, or claim access to student records.

Copy `.env.example` to `.env.local` and provide the project endpoint and exact Foundry agent name:

```env
FOUNDRY_PROJECT_ENDPOINT=https://<resource-name>.services.ai.azure.com/api/projects/<project-name>
FOUNDRY_AGENT_NAME=LearningCoach
```

Authenticate the local server with Azure CLI:

```bash
az login
```

Grant the signed-in identity the role required to invoke the agent in that Foundry project. Restart the Next.js server after changing environment variables. The endpoint returns an explicit configuration error when settings are missing; it does not silently substitute a fake AI response.

The browser calls the Next.js server route, which authenticates with `DefaultAzureCredential` and invokes the existing agent through the Foundry project endpoint. Credentials stay server-side. Do not commit `.env.local` or put real student information into this synthetic-data pilot.

## API routes

- `GET /api/v1/health` — service health check
- `GET /api/v1/dashboard` — synthetic student dashboard data
- `GET /api/v1/missions/ai-evaluation` — demo mission details
- `POST /api/v1/missions/ai-evaluation/submissions` — in-session formative feedback
- `POST /api/v1/learning-coach/recommendations` — Microsoft Foundry Learning Coach
