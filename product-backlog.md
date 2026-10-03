# AI-Powered University Learning & Industry Readiness Platform

## Product Backlog and Implementation Status

**Purpose:** Consolidate the proposed epics, Epic 1 features and user stories, the detailed E1-09 task breakdown, and the work implemented in the current pilot starter.

**Status convention:** `Implemented` means present in the current local workspace. `Proposed` or `Planned` means backlog or governance material that is not yet an approved production requirement. The governance roles and permissions below are proposals and require university review.

**Pilot boundary:** IT Faculty / AI-Native Engineering is the illustrative pilot context. The current application uses synthetic data only. It is not connected to university identity or student records, and the competency estimates and recommendations are not official academic decisions.

## 1. Business Outcome

Help students build demonstrable, industry-relevant competencies through a continuous learning loop:

**Industry signal → Competency → Assessment → Learning → Practice → Evidence → Skills → Continuous adaptation**

Students receive guidance on what to learn next. Faculty can identify aggregate competency gaps and evaluate learning interventions. University leaders can use governed signals to review programme relevance. Industry signals may inform recommendations, but official competency standards and academic outcomes remain subject to university governance.

## 2. Epics

| ID | Epic | Intended outcome | Status |
|---|---|---|---|
| EP-01 | Pilot Foundation & Governance | Agree pilot scope, accountable owners, data and AI rules, academic authority, and success measures before using real student data. | Proposed; E1-09 draft exists |
| EP-02 | Identity, Roles & Secure Access | Authenticate users and enforce approved role-, purpose-, assignment-, and ownership-based access. | Planned; not implemented |
| EP-03 | Student and Faculty Web Experience | Provide role-appropriate responsive browser workflows for students and faculty. | Student dashboard starter implemented; faculty experience planned |
| EP-04 | Competency Framework & Knowledge Model | Represent versioned competencies, proficiency levels, prerequisites, outcomes, and evidence. | Synthetic sample only; formal model planned |
| EP-05 | Assessment & Competency Diagnosis | Assess students against approved rubrics and explain judgements with supporting evidence. | Synthetic mission and formative feedback implemented; formal assessment planned |
| EP-06 | Personalized Learning Journeys | Turn authorized competency evidence and goals into prioritized, adaptive learning paths. | Synthetic Learning Coach recommendation implemented; persistence/adaptation planned |
| EP-07 | Learning Content & Retrieval | Ingest, approve, tag, search, and cite relevant learning resources. | Planned; current catalog is hard-coded demo data |
| EP-08 | AI Agent Orchestration & Learning Support | Orchestrate bounded specialist agents for learning support under backend policy controls. | One Learning Coach agent implemented; broader orchestration planned |
| EP-09 | Practice, Feedback & Skills Evidence | Let students practice, submit work, receive formative feedback, and collect traceable evidence. | Synthetic in-session mission and rule-based feedback implemented; durable evidence planned |
| EP-10 | Student Skills Passport & Journey History | Present a student-controlled record of competency progress, learning, and evidence. | Planned; dashboard has illustrative indicators only |
| EP-11 | Learning Events & Data Platform | Record learning events and separate authoritative current state from historical events. | Planned; no event store or message broker integration |
| EP-12 | Faculty Analytics & Intervention | Show privacy-aware cohort gaps and intervention outcomes to authorized faculty. | Planned |
| EP-13 | Industry Intelligence & Framework Review | Detect sourced industry signals and submit proposed competency changes for human approval. | Planned |
| EP-14 | Security, Operations & Release Management | Operate deployments, secrets, monitoring, audit, recovery, and release controls. | Basic local setup only; production operations planned |

## 3. Epic 1: Pilot Foundation & Governance

**Epic goal:** Establish the pilot’s boundaries, decision rights, data-use expectations, and AI/assessment rules before real student records or consequential academic decisions are involved.

These are primarily planning, approval, and governance deliverables. They do not by themselves implement application access controls.

### 3.1 Features

| ID | Feature | Purpose | Completion outcome |
|---|---|---|---|
| E1-F1 | Define pilot scope | Identify pilot users, faculty/domain, duration, included workflows, exclusions, and pause conditions. | Approved pilot charter with explicit out-of-scope decisions, including whether the system may affect official grades. |
| E1-F2 | Assign governance owners | Name accountable owners for academic, privacy, security, and pilot decisions. | Responsibilities, approvals, and escalation route are recorded. |
| E1-F3 | Approve pilot competency framework | Establish shared competency definitions, levels, evidence expectations, and change authority. | Versioned framework approved by an academic owner; changes require human approval. |
| E1-F4 | Define student data rules | Inventory required data, purposes, roles, retention, AI use, and correction/deletion expectations. | Approved data inventory and permitted-use rules; unnecessary data excluded. |
| E1-F5 | Define AI agent boundaries | Specify each agent’s role, data context, tools, allowed actions, and prohibitions. | Agent permissions and prohibited actions approved; agents cannot change official results. |
| E1-F6 | Define assessment review and appeals | Set rubrics, human-review triggers, and a path for students to challenge feedback. | Review and appeal process is documented and owned. |
| E1-F7 | Set pilot success measures | Define learning, completion, experience, faculty-value, privacy, and safety measures. | Measures, collection method, baseline where feasible, and review checkpoints are agreed. |
| E1-F8 | Create feedback and change process | Collect pilot feedback and determine what is accepted into later versions. | Feedback can be categorized, reviewed, prioritized, and tracked with a reason for each decision. |
| E1-F9 | Establish pause and incident handling | Define response to privacy, security, or serious AI-quality concerns. | Reporting, containment, investigation, pause, and restart approval process is documented. |

### 3.2 User Stories

Stories are grouped by feature. Acceptance criteria are concise completion checks; names, authorities, and policy details still require university confirmation.

#### E1-F1: Define pilot scope

**E1-01 — Agree the pilot objective**  
As the pilot owner, I want a written pilot objective so the team has a shared understanding of what the pilot is testing.

- The objective names target users and competency domain.
- Intended student and faculty benefits are recorded.
- The academic sponsor approves the objective.

**E1-02 — Set pilot boundaries**  
As the academic sponsor, I want included and excluded uses documented so the pilot is not used for unapproved purposes.

- Users, workflows, cohort, and duration are recorded.
- Excluded uses are explicit, including effects on official grades and progression.
- A named owner approves scope changes.

#### E1-F2: Assign governance owners

**E1-03 — Assign decision owners**  
As the project team, I want named owners for academic, privacy, security, and pilot decisions so approvals have accountable owners.

- Each decision area has an accountable person or role.
- Responsibilities and approval authority are documented.
- An escalation route exists for unresolved decisions.

**E1-04 — Record approvals**  
As the pilot owner, I want governance decisions and approvals recorded so the team can identify current and pending decisions.

- Decisions record approver, date, and version.
- Pending approvals are identifiable.
- Superseded decisions remain traceable.

#### E1-F3: Approve the pilot competency framework

**E1-05 — Define pilot competencies**  
As a faculty subject matter expert, I want competencies and proficiency levels defined so assessment and learning use a shared standard.

- Every competency has a name, description, and proficiency levels.
- Competencies fit the pilot domain.
- The academic owner approves the framework.

**E1-06 — Link competencies to evidence**  
As an assessment designer, I want competencies linked to acceptable evidence so competency judgements can be explained.

- Each competency has evidence types or assessment methods.
- Rubrics or evaluation guidance are documented.
- Human-review requirements are identified.

**E1-07 — Version and approve framework changes**  
As the academic framework owner, I want changes reviewed and versioned so industry signals cannot silently change university standards.

- Each published version has a version identifier and effective date.
- Proposed changes include rationale and evidence.
- An authorized human approves publication.

#### E1-F4: Define student data rules

**E1-08 — Inventory pilot data**  
As the privacy representative, I want data required by each workflow listed so unnecessary student data is not collected.

- Data items are listed for assessment, learning, feedback, and reporting.
- Each item has a purpose and source.
- Data not needed for a workflow is excluded.

**E1-09 — Define access and permitted use**  
As the security owner, I want access rules documented so users and AI agents access only information needed for their roles and tasks.

- Each data category has proposed authorized user roles and agent access.
- Rules identify ownership, assignment, purpose, and permitted actions.
- Unauthorized access, including another student’s individual record, is denied unless specifically authorized by approved policy.

**E1-10 — Set retention and deletion rules**  
As the records or privacy owner, I want retention and deletion expectations defined so data is not kept longer than approved.

- Retention rule or duration is documented per pilot data category.
- Correction and deletion processes are defined.
- Applicable university policy is identified.

**E1-11 — Approve use of real student data**  
As the pilot owner, I want explicit approval before real student data is used so development does not introduce unapproved exposure.

- Synthetic or de-identified data is used during early development where practical.
- Required approvals are recorded before real student data is introduced.
- Approved scope and purpose are documented.

#### E1-F5: Define AI agent boundaries

**E1-12 — Define each agent’s responsibility**  
As the AI governance owner, I want each pilot agent’s purpose documented so agents have limited, distinct responsibilities.

- Each agent has a purpose and expected outputs.
- Overlapping responsibilities are identified.
- Actions outside the approved purpose are prohibited.

**E1-13 — Define agent permissions and prohibited actions**  
As the security owner, I want permitted data, tools, and actions defined per agent so agents cannot exceed their authority.

- Each agent has an approved list of data and tools.
- Prohibited actions include changing official grades or publishing framework changes without approval.
- Permission changes require approval.

**E1-14 — Explain AI-generated recommendations**  
As a student, I want to understand why a learning recommendation was made so I can judge whether it is relevant.

- A recommendation identifies relevant competency or learning evidence.
- Recommendations are distinguished from official academic decisions.
- Students can report a recommendation they believe is incorrect.

#### E1-F6: Define assessment review and appeals

**E1-15 — Approve assessment rubrics and review rules**  
As a faculty assessment lead, I want rubrics and review requirements agreed before assessments are used so evaluation is consistent.

- Each assessment has approved criteria.
- Rules identify formative output and cases needing human review.
- The assessment owner approves the criteria.

**E1-16 — Handle disputed feedback**  
As a student, I want a way to question assessment feedback so possible errors can be reviewed.

- Students are told how to raise a concern.
- A faculty reviewer is assigned.
- Review outcomes and corrections are recorded.

#### E1-F7: Set pilot success measures

**E1-17 — Define pilot measures and baselines**  
As the pilot owner, I want success measures agreed before the pilot starts so results can be evaluated fairly.

- Measures cover learning progress, completion, student feedback, faculty usefulness, and safety/privacy concerns.
- Each measure has a definition and collection method.
- Baseline or comparison methods are identified where feasible.

**E1-18 — Review pilot results**  
As the steering group, I want results reviewed at agreed checkpoints so the team can decide to improve, continue, pause, or expand the pilot.

- Review dates and decision-makers are set.
- Results are compared with agreed measures.
- Decision and rationale are recorded.

#### E1-F8: Create pilot feedback and change process

**E1-19 — Collect student and faculty feedback**  
As a pilot participant, I want a simple feedback route so confusing, ineffective, or useful parts can be identified.

- Students and faculty can submit feedback through an agreed channel.
- Feedback can be categorized by area.
- Feedback collection follows approved privacy rules.

**E1-20 — Prioritize feedback for the next version**  
As the product owner, I want feedback reviewed and prioritized so the next version addresses the most valuable changes.

- An assigned owner reviews feedback.
- Each item is accepted, deferred, or declined with a recorded reason.
- Accepted items become tracked release work.

#### E1-F9: Establish pause and incident handling

**E1-21 — Report a pilot incident**  
As a pilot participant or staff member, I want a clear route to report privacy, security, or serious AI-quality concerns so they can be investigated.

- Reporting route and responsible contact are documented.
- Reports are acknowledged and assigned.
- Sensitive incident details are shared only with authorized people.

**E1-22 — Pause or restrict an affected feature**  
As the pilot owner, I want a process to pause a feature when a serious concern arises so risk can be contained during investigation.

- Pause criteria and authority are documented.
- Affected features or workflows can be restricted.
- Restart requires review and recorded approval.

### 3.3 E1-09 Task Breakdown

These tasks define and approve the access model; enforcing it in Firebase, Firestore, the Context Gateway, or other production services is separate implementation work.

| Task ID | Task | Output / completion check |
|---|---|---|
| E1-09-T1 | Confirm user and agent roles | Role inventory covers student, lecturer, faculty lead, university administrator, platform administrator, specialist agents, and service identities; owner confirmed for each. |
| E1-09-T2 | Confirm data categories | Reconciled data categories have descriptions, sensitivity, and approved purpose consistent with E1-08. |
| E1-09-T3 | Create user access matrix | Proposed view/create/update/export/delete permissions documented per user and data category, including ownership and assignment boundaries. |
| E1-09-T4 | Create agent access matrix | Each agent has task-scoped input data, permitted tools/actions, and prohibited actions. |
| E1-09-T5 | Define access decision rules | Rules check identity, role, ownership or assignment, purpose, and action; missing authorization results in denial. |
| E1-09-T6 | Define exceptions and audit requirements | Exception access requires named approver, reason, expiry, and audit; sensitive and denied access handling follows university policy. |
| E1-09-T7 | Validate with access scenarios | Allowed and denied student, lecturer, administrator, agent, and cross-student scenarios are reviewed. |
| E1-09-T8 | Review and approve access model | Approved, versioned matrix and rules are ready for technical enforcement; approvers and approval date recorded. |

**Detailed draft:** See [E1-09 roles and permitted access](governance/e1-09-access-model-draft.md). It is explicitly a proposal, not approved university policy.

## 4. Current Development Status

This section records work present in the current workspace. It is not a claim that all epics or production requirements are complete.

### 4.1 Implemented Technical Slice

| Area | Implemented capability | Important boundary |
|---|---|---|
| Web application | Next.js App Router / TypeScript student dashboard with journey stages, synthetic competency indicators, weekly progress, and responsive layout. | No real user identity or student records. |
| API | FastAPI health, dashboard, mission detail, mission submission, and Learning Coach recommendation endpoints. | Local pilot implementation; no production deployment or authorization. |
| Mission workflow | Student opens the AI Evaluation challenge, submits a response, and receives formative feedback. | Mission completion exists in browser session only; no persistent evidence or official grade. |
| Learning Coach | Python Google ADK agent with Gemini model configuration, structured output, synthetic context, and an approved demo activity catalog. | Live ADK/Gemini path has returned `mode: adk` on port 8001; no real student data. If credentials are absent, deterministic response is marked `demo_fallback`. |
| Recommendation validation | Agent-selected activity ID is checked against the backend catalog before returning a response. | Recommendation is not an official competency or academic decision. |
| Failure handling | Model/agent exception is returned as a generic 502 response; traceback is logged to Uvicorn’s error logger. | Do not share logs containing credentials or secrets. |
| Governance artifact | Draft role and least-privilege access model for E1-09. | Requires university review and approval before real-data implementation. |

### 4.2 Implemented API Routes

| Method and path | Purpose | Data behavior |
|---|---|---|
| `GET /health` | Basic API health check. | No student data. |
| `GET /api/v1/dashboard` | Returns synthetic learner dashboard data. | Hard-coded synthetic demo profile. |
| `GET /api/v1/missions/ai-evaluation` | Returns the demo AI Evaluation activity and instructions. | Approved-for-demo static activity. |
| `POST /api/v1/missions/ai-evaluation/submissions` | Accepts a bounded demo response and returns formative feedback. | No persistence; not an official grade. |
| `POST /api/v1/learning-coach/recommendations` | Recommends one approved activity for the supplied goal. | Synthetic learner context only; ADK/Gemini when configured, otherwise explicit demo fallback. |

### 4.3 Tests and Validation

- Five API regression tests cover mission retrieval, mission feedback, short-answer validation, Learning Coach fallback selection, and invalid goals.
- ADK agent and runner construction has been checked locally.
- Frontend ESLint and production build have passed for the Learning Coach integration.
- Browser checks have confirmed the dashboard recommendation flow and synthetic fallback display.
- A live synthetic Learning Coach request has returned `mode: adk` on port 8001. A later request to another server instance returned 502; traceback routing was updated to Uvicorn’s error logger to make future failures diagnosable.
- Pylance may still report unresolved FastAPI imports if the editor is using a Python environment other than the API’s configured environment.

### 4.4 Not Yet Implemented

- Approved university identity, authentication, role/record authorization, and access audit enforcement.
- Persistent student profiles, assessments, journey state, and evidence.
- Faculty/admin experiences and privacy-governed cohort analytics.
- A governed, versioned competency ontology and production content pipeline.
- Pub/Sub events, BigQuery analytics, Cloud Storage, or production graph/vector services.
- Production safety evaluation, model monitoring, privacy review, incident response, and deployment controls.
- Production-ready Gemini credential management and cloud deployment.

## 5. Suggested Delivery Order

1. Complete university review of pilot scope, role owners, data inventory, access model, AI boundaries, and assessment governance (EP-01).
2. Keep synthetic data while stabilizing the mission and Learning Coach API contracts and tests.
3. Implement authenticated identity and backend-enforced authorization only after access policy approval (EP-02).
4. Formalize and version the competency model and approved activity/content catalog (EP-04, EP-07).
5. Add persistence and auditable learning events for submissions, progress, and evidence (EP-09, EP-10, EP-11).
6. Evaluate AI recommendations and formative feedback with faculty-approved synthetic scenarios before any real-student pilot.
7. Expand faculty workflows, analytics, industry intelligence, and production operations according to pilot evidence (EP-12 through EP-14).

## 6. Governance and Safety Notes

- The E1-09 access matrix and role names are proposed for discussion, not approved policy.
- Do not put API keys or credentials in source files, README content, screenshots, or Git history. Use process environment variables or an approved secret manager.
- Use synthetic data for agent development and evaluation until university approval for real-data use is documented.
- Keep AI recommendations and formative feedback separate from official academic decisions and records.
- Any transition to real student records requires approved identity, authorization, data-use, retention, audit, review, and incident procedures.
flowchart TB
    %% Layer 1
    subgraph Layer1 ["1. Users & Interactions (Web)"]
        direction LR
        U1(["Student"])
        U2(["Faculty"])
        U3(["Admin"])
        Browser["Web Browser (Responsive Web App)<br/>Next.js + TypeScript"]
        
        U1 <--> Browser
        U2 <--> Browser
        U3 <--> Browser
    end

    %% Layer 2
    subgraph Layer2 ["2. Application Layer (Frontend)"]
        direction LR
        subgraph ULP ["University Learning Platform (Web Application)"]
            direction TB
            C1["Competency Assessment Portal"]
            C2["Personalized Learning Path"]
            C3["Agentic Chat Assistant"]
            C4["Learning Content & Micro-learning"]
            C5["Progress Dashboard & Analytics"]
            C6["Faculty Management Console"]
        end
        Auth["Authentication & Access<br/>Firebase Authentication"]
        
        ULP <--> Auth
    end

    Browser <--> ULP

    %% Side Panels
    subgraph Analytics ["Analytics & Insights"]
        direction TB
        Dash1["Student Dashboard"]
        Dash2["Faculty Dashboard"]
        Dash3["University Dashboard"]
    end

    subgraph External ["External Ecosystem (Optional)"]
        direction TB
        E1["Industry Job Market APIs"]
        E2["Certifications & Learning Platforms"]
        E3["Research & Open Data Sources"]
        E4["University LMS"]
    end

    %% Layer 3
    subgraph Layer3 ["3. Agentic AI Layer"]
        direction TB
        Orch["Agent Orchestrator (Google ADK / Agent Runtime)"]
        
        subgraph Agents [" "]
            direction LR
            A1["Assessment Agent"]
            A2["Learning Coach Agent"]
            A3["Content Agent"]
            A4["Practice & Feedback Agent"]
            A5["Career & Industry Agent"]
        end
        
        Gemini["Powered by Gemini (LLMs, Embeddings, Multimodal)"]
        Safe["Safety & Governance<br/>Model Armor (Responsible AI)"]

        Orch <--> Agents
        Agents <--> Gemini
        Orch <--> Safe
        Agents <--> Safe
    end

    ULP <--> Orch

    %% Layer 4
    subgraph Layer4 ["4. Knowledge & Data Services"]
        direction LR
        D1[("Ontology Graph<br/>Apache Jena / Fuseki (RDF)")]
        D2[("Vector Search & RAG<br/>BigQuery (VECTOR_SEARCH)")]
        D3[("Private Student Data<br/>Cloud Firestore")]
        D4[("Learning Content Store<br/>Cloud Storage")]
        D5[("Analytics Data Store<br/>BigQuery")]
    end

    Gemini <--> Layer4
    Agents <--> Layer4

    %% Layer 5
    subgraph Layer5 ["5. Backend & Integration Layer"]
        direction LR
        B1["Backend Services<br/>FastAPI on Cloud Run"]
        B2["Event Driven Processing<br/>Pub/Sub"]
        B3["Content Processing Pipeline<br/>Document AI / Custom pipeline"]
        
        B1 <--> B2 <--> B3
    end

    Layer4 <--> B1
    Layer4 <--> B3

    %% Layer 6
    subgraph Layer6 ["6. Infrastructure, Security & Operations"]
        direction LR
        I1["Hosting & Infrastructure<br/>Cloud Run"]
        I2["Security & Compliance<br/>IAM, VPC, Cloud KMS, SCC"]
        I3["Monitoring & Logging<br/>Cloud Logging & Monitoring"]
        I4["CI / CD & IaC<br/>GitHub, Cloud Build, Terraform"]
    end

    Layer5 <--> Layer6

    %% Cross-cutting Connections
    D5 -.-> Analytics
    ULP -.-> Analytics
    External -.-> Layer4
    External -.-> Layer5