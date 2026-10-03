AI-POWERED UNIVERSITY LEARNING & INDUSTRY READINESS PLATFORM

Beginner-Friendly Solution, Business Process, Agentic AI, Data
Architecture & Google Technology Stack

Web Application \| Faculty-specific microlearning \| Industry relevance
\| Student competency journeys \| Privacy-aware agents

Figure 1. Conceptual solution architecture (generated infographic;
embedded as a visual reference).

  -----------------------------------------------------------------------
  Purpose of this document This document consolidates the full solution
  discussion into one editable reference. It explains the business
  problem, student journey, agentic workflow, ontology/graph approach,
  privacy model, Google Cloud technology stack, cost-optimized
  alternatives, and a practical pilot-to-production roadmap.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

Design principle: Industry signal → Competency → Assessment → Learning →
Practice → Evidence → Skills → Continuous adaptation

## Contents

1.  Executive summary

2.  The university problem we are solving

3.  The proposed solution in simple terms

4.  Example use case: IT Faculty -- AI-Native Engineering

5.  End-to-end student business process

6.  Detailed student user journey

7.  What makes the system agentic?

8.  The Student Digital Twin and knowledge journeys

9.  Ontology, graph and temporal knowledge model

10. Privacy-aware agent architecture

11. Google Cloud architecture

12. Cost-optimized / free-first technology stack

13. Recommended technology components and roles

14. Data architecture and event model

15. Security, privacy and governance

16. Analytics and university intelligence

17. MVP scope for an IT Faculty pilot

18. Pilot-to-production roadmap

19. Key architectural decisions

20. Beginner glossary

Appendix A. Example competency model

Appendix B. Current technology references

  -----------------------------------------------------------------------
  How to use this guide Read Sections 1--7 to understand the business
  idea. Read Sections 8--10 to understand the modern data and agent
  model. Sections 11--15 explain the technical architecture. Sections
  16--18 are useful for implementation planning and a university
  proposal.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 1. Executive summary

The proposed platform is an AI-powered university web application that
helps students continuously build knowledge and industry-relevant
competencies through personalized microlearning. It is not intended to
be a normal LMS or simply a chatbot. The core idea is a continuous
intelligence loop in which industry signals inform competency models;
competency models inform assessments; assessment results identify
student gaps; gaps drive personalized learning; learning generates
evidence; and the resulting student profile is continuously updated.

  -----------------------------------------------------------------------
  One-sentence proposition An agentic AI learning ecosystem that
  understands each student, understands the competencies required by
  industry, assesses the gap, creates a personalized microlearning
  journey, and continuously adapts that journey as the industry changes.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

### The three levels of value

  -----------------------------------------------------------------------
  Audience                Main question           Platform value
  ----------------------- ----------------------- -----------------------
  Student                 What should I learn     Personalized competency
                          next?                   assessment,
                                                  microlearning,
                                                  practice, feedback and
                                                  skills passport.

  Faculty                 Where are our students  Cohort competency gaps,
                          weak?                   emerging skill signals,
                                                  learning effectiveness
                                                  and intervention
                                                  insights.

  University              How should programmes   Cross-faculty industry
                          stay relevant?          intelligence, skill
                                                  trends, curriculum
                                                  signals and
                                                  institutional learning
                                                  analytics.
  -----------------------------------------------------------------------

### The core continuous loop

  -----------------------------------------------------------------------
  INDUSTRY SIGNALS ↓ EMERGING SKILLS / KNOWLEDGE ↓ FACULTY COMPETENCY
  MODEL ↓ STUDENT ASSESSMENT ↓ SKILL GAP / DIAGNOSIS ↓ PERSONALIZED
  MICRO-LEARNING ↓ PRACTICE + EVIDENCE ↓ REASSESSMENT + SKILLS PASSPORT ↓
  CONTINUOUSLY REFRESHED PROFILE ↺ INDUSTRY SIGNALS
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 2. The university problem we are solving

Technology changes faster than traditional curriculum refresh cycles. A
programme can remain academically valid while some of its examples,
tools and applied skills become less aligned with current industry
expectations.

Students often do not know what they do not know. They may complete
modules without having a clear picture of their current competency level
relative to a target role or emerging technical domain.

One-size-fits-all learning is inefficient. Students enter with different
prior knowledge, career goals, strengths and gaps.

Industry relevance is usually handled manually and periodically. The
proposed platform introduces a continuous, evidence-informed signal
layer that can recommend updates rather than waiting for a large
curriculum revision.

An ordinary chatbot can explain concepts, but it does not automatically
maintain a structured learner profile, run diagnostic assessment, build
a personalized pathway, collect evidence, or govern what private data an
agent is allowed to access.

  -----------------------------------------------------------------------
  The underlying challenge "What a student should know next" is a moving
  target. The platform must therefore connect academic knowledge,
  industry signals and individual competency evidence in one controlled
  system.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 3. The proposed solution in simple terms

Think of the platform as four connected capabilities:

  -----------------------------------------------------------------------
  Capability              What it does            Simple example
  ----------------------- ----------------------- -----------------------
  Know the environment    Continuously collect    Industry reports and
                          and organize            job signals show rising
                          university, research    importance of AI
                          and industry knowledge. evaluation.

  Know the student        Maintain the student's  Student A is strong in
                          academic context,       LLM applications but
                          goals, competencies,    weak in evaluation.
                          learning history and    
                          evidence.               

  Act as an agent         Plan, teach, assess,    The agent creates a
                          recommend and adapt     2-week learning path
                          rather than only answer and adjusts it after
                          questions.              each challenge.

  Protect and govern      Control what data an    A learning agent can
                          agent can see and what  read a student's own
                          actions it can perform. competency evidence but
                                                  cannot read another
                                                  student's record.
  -----------------------------------------------------------------------

### What the student sees

  -----------------------------------------------------------------------
  HOME My goal: Become an AI Engineer Current competency: Developing
  Today: "AI Evaluation" -- 10 minute mission Next skill: Agentic
  Engineering Ask my learning agent →
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

### What is happening behind the screen

  -----------------------------------------------------------------------
  Student request ↓ Identity + authorization ↓ Context Gateway ↓ Student
  Journey Graph + Knowledge Graph + Assessment evidence ↓ Agent
  Orchestrator ↓ Specialized agent(s) ↓ Personalized response / action ↓
  Journey/event update
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 4. Example use case: IT Faculty -- AI-Native Engineering

To make the concept concrete, assume the university launches "AI-Native
Engineering" as an evolving competency area for IT students. The student
wants to assess their current level against current industry
expectations.

### Illustrative competency areas

  -----------------------------------------------------------------------
  Area                                What the student should be able to
                                      do
  ----------------------------------- -----------------------------------
  AI foundations                      Explain core AI/LLM concepts and
                                      their limitations.

  LLM application engineering         Build grounded AI applications and
                                      use appropriate context.

  Context engineering                 Design useful instructions, context
                                      and supporting information for AI
                                      systems.

  Agentic engineering                 Design multi-step AI workflows and
                                      agents with tools, state and
                                      controls.

  AI evaluation                       Define tests, quality criteria,
                                      failure cases and evidence of
                                      reliability.

  AI security and governance          Recognize prompt injection, data
                                      leakage, privacy and access-control
                                      risks.

  AI operations                       Consider monitoring, cost,
                                      observability, deployment and
                                      lifecycle issues.

  Human-AI engineering                Critically review AI output, reason
                                      about trade-offs and communicate
                                      decisions.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  Important governance point This competency map is an illustrative
  starting point. The university should version it, define proficiency
  levels, review evidence, and approve official changes. Industry AI
  agents should recommend changes; they should not silently redefine
  university competency standards.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 5. End-to-end student business process

  -----------------------------------------------------------------------
  1\. STUDENT ENTRY ↓ 2. GOAL / PURPOSE DEFINITION ↓ 3. CONTEXT
  COLLECTION ↓ 4. INDUSTRY DEMAND ANALYSIS ↓ 5. COMPETENCY FRAMEWORK
  SELECTION ↓ 6. DIAGNOSTIC ASSESSMENT ↓ 7. EVIDENCE + COMPETENCY
  DIAGNOSIS ↓ 8. PERSONALIZED LEARNING PLAN ↓ 9. AGENTIC MICRO-LEARNING ↓
  10. PRACTICAL CHALLENGE ↓ 11. REASSESSMENT ↓ 12. SKILLS PASSPORT ↓ 13.
  CONTINUOUS INDUSTRY REFRESH ↺
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

### Business-process swimlane summary

  --------------------------------------------------------------------------
  Stage             Student           Platform / AI     Faculty / University
  ----------------- ----------------- ----------------- --------------------
  Entry             Logs in and       Loads profile and Provides approved
                    selects subject.  role-based        programme/faculty
                                      context.          context.

  Industry context  Reviews current   Industry Agent    Reviews or approves
                    expectations.     gathers and       competency framework
                                      synthesizes       changes.
                                      signals.          

  Assessment        Answers questions Assessment Agent  Sets rubrics and
                    and completes     selects/adapts    governance rules.
                    tasks.            diagnostic tasks. 

  Diagnosis         Receives          Combines evidence Sees aggregate
                    competency and    and target        cohort gaps.
                    gap explanation.  profile.          

  Learning          Completes short   Learning Agent    Curates/approves
                    missions and      adapts content    learning content.
                    practice.         and difficulty.   

  Validation        Completes         Evidence Agent    Can perform
                    practical         and Assessment    calibration /
                    challenge and     Agent evaluate.   moderation.
                    reassessment.                       

  Continuous loop   Receives new      Industry Agent    Receives
                    recommendations   detects           faculty/university
                    when relevant.    meaningful        intelligence.
                                      changes.          
  --------------------------------------------------------------------------

## 6. Detailed student user journey

**Step 1** --- Start --- Student opens the web application and selects
IT Faculty → AI-Native Engineering → "Assess my competency."

**Step 2** --- Set goal --- Student chooses a purpose such as "prepare
for AI Engineer roles" or "understand my current competency."

**Step 3** --- Build context --- The platform uses only the student
information it is authorized to use: programme, year, prior learning,
goals and relevant history.

**Step 4** --- Show industry context --- The system explains the current
competency model and makes clear that it is based on a versioned
university framework informed by industry evidence.

**Step 5** --- Diagnostic assessment --- The student receives a mixture
of conceptual questions, reasoning tasks, practical tasks, architecture
questions and security/evaluation tasks.

**Step 6** --- Diagnose --- The platform identifies strengths, gaps and
supporting evidence rather than giving a single unexplained score.

**Step 7** --- Create learning path --- The Learning Agent creates a
prioritized sequence of short modules based on gaps and prerequisites.

**Step 8** --- Microlearning --- The student learns in 5--15 minute
units with explanations, examples, questions and mini-practice.

**Step 9** --- Practice --- A Practice Agent creates a practical
challenge aligned with the missing competency.

**Step 10** --- Demonstrate --- Student submits code, architecture,
reasoning or other evidence. Automated checks are combined with
rubric-based evaluation.

**Step 11** --- Reassess --- The platform generates a new but equivalent
assessment rather than repeating the exact same questions.

**Step 12** --- Skills passport --- The student sees current competency,
evidence, completed learning and next recommended skills.

**Step 13** --- Continuous relevance --- When the approved competency
framework changes materially, the platform can identify affected
students and recommend new learning.

## 7. What makes the system agentic?

A conventional chatbot mainly follows a question-and-answer pattern. An
agentic learning platform can reason about a goal, select tools,
retrieve authorized context, plan actions, execute steps, evaluate
results, and update a controlled state.

  -----------------------------------------------------------------------
  Conventional chatbot                Agentic learning platform
  ----------------------------------- -----------------------------------
  Student asks a question.            Student gives a goal or problem.

  AI generates an answer.             Agent decides which context, tools
                                      and steps are required.

  Conversation may end there.         Agent may continue through
                                      assessment, practice and follow-up
                                      actions.

  Little persistent structure.        Structured student journey and
                                      competency state are maintained.

  One model does most work.           Specialized agents collaborate
                                      under an orchestrator.

  Limited governance.                 Identity, authorization, tool
                                      permissions and data policies are
                                      enforced.
  -----------------------------------------------------------------------

### Suggested agent ecosystem

  -----------------------------------------------------------------------
  Agent                               Primary responsibility
  ----------------------------------- -----------------------------------
  Learning Agent                      Teach concepts, explain, ask
                                      questions and guide the learning
                                      plan.

  Assessment Agent                    Generate/adapt diagnostic and
                                      reassessment tasks and evaluate
                                      evidence.

  Competency Agent                    Map evidence to competency levels
                                      and identify gaps.

  Industry Intelligence Agent         Monitor approved industry signals
                                      and propose relevant skill changes.

  Content Agent                       Find approved university/industry
                                      knowledge and ground responses.

  Practice Agent                      Generate realistic exercises and
                                      projects.

  Evidence Agent                      Assemble evidence and explain why a
                                      competency judgement was made.

  Career Agent                        Connect competencies with target
                                      roles and career pathways.
  -----------------------------------------------------------------------

## 8. The Student Digital Twin and knowledge journeys

The Student Digital Twin is a controlled, evolving representation of the
learner. It is not a copy of every piece of personal data. It is a
structured model of the information required to personalize learning and
understand the student journey.

  -----------------------------------------------------------------------
  STUDENT DIGITAL TWIN │ ├── Academic context │ ├── Faculty / programme /
  year │ └── completed learning │ ├── Goals │ ├── target role │ └──
  target competencies │ ├── Competency state │ ├── current levels │ ├──
  strengths │ └── gaps │ ├── Learning journey │ ├── modules │ ├──
  challenges │ └── recommendations │ └── Evidence history ├── assessments
  ├── practical evidence └── validated outcomes
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

### Four types of memory

  --------------------------------------------------------------------------
  Memory type       Purpose           Example           Suggested store
  ----------------- ----------------- ----------------- --------------------
  Session memory    Keep current      "We are           Agent sessions /
                    conversation      discussing AI     runtime state
                    context.          evaluation."      

  Personalization   Remember helpful  "Student prefers  Custom Firestore
  memory            non-sensitive     practical         memory service
                    preferences.      examples."        initially; managed
                                                        Memory Bank later if
                                                        justified

  Journey memory    Preserve the      "Completed        Firestore/events +
                    historical        challenge 12 in   ontology graph
                    learning journey. October."         

  Authoritative     Hold official     "Official         Protected
  memory            university facts. competency level  operational data /
                                      = 3."             controlled record
  --------------------------------------------------------------------------

  -----------------------------------------------------------------------
  Critical distinction Agent memory is not the university system of
  record. Official academic results and competency states should remain
  in governed application data. The agent should retrieve an authorized
  view of that information when it needs it.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 9. Ontology, graph and temporal knowledge model

The platform needs to understand relationships, not only store isolated
records. This is why an ontology/knowledge graph is valuable. It lets
the system represent concepts such as "AI-Native Engineering requires AI
Evaluation," "Student A demonstrated Agentic Engineering," or
"Assessment 12 provides evidence for Competency 4."

### Two connected knowledge graphs

  -----------------------------------------------------------------------
  A. UNIVERSITY / INDUSTRY KNOWLEDGE GRAPH Industry → Job Role → Skill →
  Competency → Learning Outcome → Course → Assessment B. STUDENT JOURNEY
  GRAPH Student → Goal → Competency → Assessment → Learning Activity →
  Evidence → Skill → Outcome Bridge: Industry requirement → competency →
  student gap → learning intervention
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

### Ontology versus graph versus database

  -----------------------------------------------------------------------
  Concept                             Beginner-friendly meaning
  ----------------------------------- -----------------------------------
  Ontology                            A formal vocabulary and set of
                                      relationships describing what the
                                      university means by concepts such
                                      as Skill, Competency, Course and
                                      Evidence.

  Knowledge graph                     A connected network of those
                                      concepts and relationships.

  Operational database                The place for authoritative records
                                      and application transactions.

  Event history                       An append-only record of what
                                      happened and when.

  Vector search                       A way to find semantically similar
                                      content, such as related passages
                                      in learning material.
  -----------------------------------------------------------------------

### Recommended POC graph choice

For a free-first proof of concept, Apache Jena/Fuseki is a strong option
for the ontology layer because it is built around RDF/SPARQL and
semantic-web concepts. If the use case emphasizes a property-graph style
student journey rather than formal ontology reasoning, Neo4j Community
is another open-source option. The production architecture can later
migrate to a managed Google graph service such as Spanner Graph if the
university wants a unified managed relational + graph platform.

## 10. Privacy-aware agent architecture

The strongest design principle in this solution is that an agent should
not have unrestricted access to student data. Instead, the platform
should create a purpose-specific, authorized context package for each
request.

  -----------------------------------------------------------------------
  STUDENT REQUEST ↓ IDENTITY + ROLE ↓ CONTEXT GATEWAY ↓ POLICY CHECK ↓
  What may this agent see for this purpose? ↓ PRIVATE DATA + JOURNEY
  GRAPH + KNOWLEDGE BASE ↓ MINIMAL AUTHORIZED CONTEXT PACKAGE ↓ AGENT
  GATEWAY / SAFETY CONTROLS ↓ GEMINI / AGENT ↓ ANSWER OR ACTION
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

### Example: "Why am I being recommended AI Evaluation?"

The student asks the learning agent why a recommendation was made.

The Context Gateway verifies that the requester is the student and that
the agent is allowed to retrieve the student's own competency and
learning history.

The gateway retrieves only the relevant competency, assessment evidence,
target level and previous learning state.

The agent reasons over that small context and explains the
recommendation.

No unrelated personal information or other students' data is placed in
the prompt.

### Least-privilege tool access

  -----------------------------------------------------------------------
  Agent                   May read                Should not be allowed
                                                  to do
  ----------------------- ----------------------- -----------------------
  Learning Agent          Student's authorized    Change official grades;
                          learning state,         access unrelated
                          competency evidence,    student records.
                          approved knowledge.     

  Assessment Agent        Assessment content,     Modify official results
                          rubric, student attempt without governance
                          and required evidence.  controls.

  Industry Agent          Approved external       Directly change
                          sources and competency  official curriculum
                          framework metadata.     standards without
                                                  approval.

  Faculty Analytics Agent Aggregated or           Reveal restricted
                          role-appropriate cohort student PII outside the
                          data.                   user's authorization.
  -----------------------------------------------------------------------

## 11. Google Cloud architecture

The platform is designed as a web application rather than a mobile app.
Students, faculty and administrators use the same responsive browser
application with role-specific experiences.

Figure 2. Solution architecture overview.

### Logical layers

  -----------------------------------------------------------------------
  Layer                               Primary role
  ----------------------------------- -----------------------------------
  Experience layer                    Responsive web application for
                                      students, faculty and
                                      administrators.

  Application layer                   Business APIs, workflows and
                                      university-domain services.

  Agentic AI layer                    Learning, assessment, competency,
                                      content, practice, industry and
                                      career agents.

  Knowledge & data layer              Private student data, journey
                                      graph, ontology, documents, vectors
                                      and analytics.

  Infrastructure & security           Identity, networking, encryption,
                                      secrets, monitoring, policy and
                                      audit.
  -----------------------------------------------------------------------

## 12. Cost-optimized / free-first technology stack

The solution should not be described as "everything is permanently
free." Google services have different free quotas, trial periods and
billing requirements. A better strategy is to build the pilot with
no-cost quotas and open-source components where they are practical,
while preserving a clean migration path to managed enterprise services.

  -----------------------------------------------------------------------
  Current pricing note Free tiers and quotas change. Before any
  production procurement, re-check the official pricing pages and the
  university's data-residency, identity and support requirements. This
  document treats free-first deployment as a pilot strategy, not a
  promise of zero cost at university scale.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  Capability              Preferred POC           Why
                          technology              
  ----------------------- ----------------------- -----------------------
  Web frontend            Next.js + TypeScript    Modern responsive web
                                                  app and shared
                                                  experience for all
                                                  roles.

  Hosting / backend       Cloud Run               Managed containers with
                                                  a monthly no-cost
                                                  request-based
                                                  allocation.

  Authentication          Firebase Authentication Simple university
                                                  identity layer; later
                                                  extend to enterprise
                                                  Identity Platform/SSO.

  Private student state   Cloud Firestore         Simple managed document
                                                  store with a useful
                                                  no-cost quota for a
                                                  small pilot.

  Ontology                Apache Jena + Fuseki    Open-source RDF/SPARQL
                                                  foundation for a formal
                                                  ontology layer.

  Vector retrieval        BigQuery VECTOR_SEARCH  Avoid adding a
                          initially               separately billed
                                                  vector-serving layer
                                                  during the pilot.

  AI model                Gemini                  Google-native
                                                  foundation model family
                                                  with free/limited
                                                  quotas for development
                                                  depending on model and
                                                  account.

  Agents                  ADK + Agent Runtime or  Supports code-based
                          local ADK during early  agent development and
                          development             production deployment
                                                  later.

  Agent memory            Custom Firestore memory Avoid a paid managed
                          service initially       memory dependency while
                                                  keeping explicit
                                                  control of stored
                                                  memories.

  Events                  Pub/Sub                 Decoupled
                                                  learning-event
                                                  architecture.

  Analytics               BigQuery                Institutional analytics
                                                  and historical event
                                                  analysis.

  Dashboards              Next.js dashboards      Avoid a paid BI
                                                  platform during the
                                                  first pilot.

  Monitoring              Cloud Logging + Cloud   Use built-in platform
                          Monitoring              observability with free
                                                  quotas where possible.

  Security                IAM + KMS + Secret      Keep core security
                          Manager + Model Armor + controls in Google
                          Security Command Center Cloud; scale controls
                          Standard + VPC Service  later.
                          Controls                
  -----------------------------------------------------------------------

## 13. Recommended technology components and roles

  ----------------------------------------------------------------------------------------
  Technology        Role in the solution              Pilot status       Future production
                                                                         option
  ----------------- --------------------------------- ------------------ -----------------
  Next.js           Main responsive web application.  Use now            Keep

  TypeScript        Frontend programming language.    Use now            Keep

  Cloud Run         Run FastAPI backend and selected  Use now            Keep / scale
                    services.                                            

  FastAPI + Python  University business APIs and AI   Use now            Keep
                    integration services.                                

  Firebase          Student/faculty sign-in.          Use now            Add enterprise
  Authentication                                                         SSO as needed

  Firestore         Private student profile,          Use now            Can coexist or
                    preferences, approved agent                          migrate selected
                    memory and simple journey state.                     workloads

  Apache            Ontology and semantic knowledge   Use now            Optionally
  Jena/Fuseki       graph.                                               migrate to
                                                                         managed graph

  BigQuery          Analytics and vector search for   Use now            Keep
                    the pilot.                                           

  Pub/Sub           Event-driven processing.          Use now            Keep

  Gemini            Reasoning/generation/multimodal   Use now            Keep / governance
                    AI.                                                  by approved
                                                                         models

  ADK               Build specialized agents.         Use now            Keep

  Agent Runtime     Managed production agent          Pilot/controlled   Scale in
                    execution.                                           production

  Model Armor       Prompt/response/agent safety      Use within         Keep / scale
                    controls.                         allowance          

  Metabase OSS      Optional self-hosted analytics    Later              Optional; Looker
                    alternative.                                         can replace for
                                                                         enterprise BI

  Spanner Graph     Managed unified relational +      Migration target   Consider when
                    graph platform.                                      scale justifies
                                                                         it

  Vector Search     Managed vector retrieval at       Migration target   Consider when RAG
                    scale.                                               scale justifies
                                                                         it

  Apigee            Enterprise API management.        Defer              Introduce for
                                                                         broad
                                                                         integrations

  Looker            Enterprise BI and governed        Defer              Introduce when BI
                    semantic analytics.                                  needs grow
  ----------------------------------------------------------------------------------------

## 14. Data architecture and event model

A useful architecture separates "what is true now" from "what happened
over time." This prevents the student profile from becoming an opaque
collection of AI memories.

### Core data domains

  -----------------------------------------------------------------------
  Domain                              Examples
  ----------------------------------- -----------------------------------
  Identity                            Student ID, account, role,
                                      authentication metadata.

  Academic                            Faculty, programme, course,
                                      enrolment, approved results.

  Competency                          Competency definition, proficiency
                                      level, target level, evidence.

  Learning                            Microlearning modules, progress,
                                      recommendations, challenges.

  Journey                             Assessments, attempts, feedback,
                                      transitions and milestones.

  Industry                            Skills, role profiles, trends,
                                      evidence sources and framework
                                      versions.

  Knowledge                           Curriculum documents, research,
                                      industry documents, approved
                                      content.

  Analytics                           Events, cohort statistics,
                                      competency distributions,
                                      improvement metrics.
  -----------------------------------------------------------------------

### Event-driven learning journey

  -----------------------------------------------------------------------
  StudentRegistered AssessmentStarted QuestionAnswered
  AssessmentCompleted CompetencyEvaluated LearningPathCreated
  ModuleStarted ModuleCompleted ChallengeStarted ChallengeSubmitted
  EvidenceGenerated SkillValidated RecommendationCreated
  RecommendationAccepted / Rejected IndustrySignalDetected
  CompetencyFrameworkUpdated
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  Why events matter The current graph/state can answer "Where is the
  student now?" The event history can answer "How did the student get
  there?" This makes the learning journey explainable and auditable.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 15. Security, privacy and governance

### Security principles

Least privilege: agents receive only the tools and data needed for their
task.

Data minimization: do not place unnecessary student PII into prompts or
agent memory.

Separation of concerns: AI agents should reason over authorized context,
not become the system of record.

Human governance: official curriculum or competency changes require
faculty/university approval.

Auditability: keep evidence for important assessment decisions,
recommendations and data access.

Versioning: competency models, rubrics and knowledge sources should have
versions and effective dates.

Isolation: untrusted student code should run in a sandbox rather than
inside the main application environment.

### Role-based access model

  -----------------------------------------------------------------------
  Role                                Typical access
  ----------------------------------- -----------------------------------
  Student                             Own profile, own learning journey,
                                      own assessments and own skills
                                      passport.

  Lecturer                            Assigned students/cohorts and
                                      approved teaching content.

  Head of Department                  Department-level aggregate insight
                                      and selected management views.

  Dean / Faculty Admin                Faculty-level trends, gaps and
                                      programme-level intelligence.

  University Admin                    Institution-level analytics and
                                      policy/governance functions.

  Platform Admin                      Technical configuration and
                                      security; should not automatically
                                      imply academic access.
  -----------------------------------------------------------------------

### Core Google security controls

  -----------------------------------------------------------------------
  Control                             Purpose
  ----------------------------------- -----------------------------------
  IAM                                 Identity-based permissions for
                                      Google Cloud resources.

  Secret Manager                      Protect API keys, passwords and
                                      secrets.

  Cloud KMS                           Encryption key management.

  VPC Service Controls                Reduce data-exfiltration paths
                                      around protected services.

  Model Armor                         Protect AI inputs/outputs and agent
                                      interactions against common AI
                                      threats.

  Security Command Center             Central security visibility and
                                      findings.

  Cloud Logging / Audit Logs          Operational and security auditing.
  -----------------------------------------------------------------------

## 16. Analytics and university intelligence

The platform should produce three levels of insight rather than only one
student progress page.

  -----------------------------------------------------------------------
  View                    Key questions           Example metrics
  ----------------------- ----------------------- -----------------------
  Student                 Where am I now and what Competency level, gaps,
                          should I learn next?    learning completion,
                                                  evidence count, next
                                                  recommendation.

  Faculty                 Where are our students  Competency
                          struggling?             distribution, gap
                                                  frequency, improvement
                                                  after interventions,
                                                  difficult assessment
                                                  areas.

  University              How are programmes      Emerging skill trends,
                          adapting to industry    cross-faculty
                          change?                 competency needs,
                                                  curriculum coverage
                                                  signals, learning
                                                  outcomes.
  -----------------------------------------------------------------------

### Example faculty question

  -----------------------------------------------------------------------
  Natural-language analytics example "What are the largest AI-Native
  Engineering competency gaps among third-year IT students, and which
  learning modules appear to improve those gaps most?" The answer should
  be generated from governed BigQuery data and approved definitions, not
  guessed by a general-purpose chatbot.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 17. MVP scope for an IT Faculty pilot

Do not begin by building the complete university platform. Start with
one faculty, one competency domain and a controlled set of students.
This is enough to validate the business model and the agentic learning
loop.

  -----------------------------------------------------------------------
  MVP component                       Suggested scope
  ----------------------------------- -----------------------------------
  Faculty                             IT Faculty only.

  Domain                              AI-Native Engineering.

  Students                            Small controlled cohort; synthetic
                                      data can be used during early
                                      development.

  Competencies                        6--8 carefully defined competency
                                      areas.

  Assessment                          Diagnostic assessment + practical
                                      task + reassessment.

  Microlearning                       20--50 short modules initially.

  Agents                              Learning, Assessment, Competency,
                                      Content and Practice; Industry
                                      Agent can start as a controlled
                                      research component.

  Knowledge base                      Approved university content +
                                      selected industry/research sources.

  Graph                               Ontology covering skills,
                                      competencies, learning outcomes,
                                      courses and assessments.

  Analytics                           Student and faculty dashboards.

  Success test                        Can the platform identify gaps,
                                      personalize learning and
                                      demonstrate improvement?
  -----------------------------------------------------------------------

### MVP success measures

Students can complete a competency self-assessment without lecturer
intervention.

The system can explain why a competency is considered a gap.

The learning plan changes according to assessment evidence.

Students can complete practical challenges and receive evidence-based
feedback.

The post-learning assessment shows measurable competency improvement.

Faculty can see aggregate skill gaps without exposing unauthorized
student PII.

The same architecture can support a second competency domain without
redesigning the platform.

## 18. Pilot-to-production roadmap

  -----------------------------------------------------------------------
  Phase                   Focus                   Main technology
                                                  direction
  ----------------------- ----------------------- -----------------------
  Phase 0 -- Design       Ontology, competency    Next.js design +
                          model, privacy model,   data/agent contracts +
                          UX and data contracts.  Jena ontology.

  Phase 1 -- POC          IT Faculty / AI-Native  Next.js, Cloud Run,
                          Engineering.            Firebase Auth,
                                                  Firestore, Jena,
                                                  BigQuery, Gemini, ADK.

  Phase 2 -- Pilot        Small student cohort    Add stronger assessment
                          and faculty dashboard.  engine, event
                                                  analytics, governance
                                                  and selected external
                                                  signals.

  Phase 3 -- Scale        More IT domains and     Introduce managed
                          another faculty.        services selectively
                                                  where operational
                                                  burden or scale
                                                  justifies them.

  Phase 4 --              All faculties and       Enterprise identity,
  University-wide         institutional           graph/vector managed
                          analytics.              services, governed BI,
                                                  API management and
                                                  stronger security
                                                  controls.
  -----------------------------------------------------------------------

### Migration path for the cost-optimized stack

  -----------------------------------------------------------------------
  POC Next.js + Cloud Run + Firestore + Jena + BigQuery + Gemini ↓ scale
  / governance PRODUCTION OPTION Next.js + Cloud Run/App Hosting +
  Spanner Graph + managed vector + Agent Gateway ↓ enterprise analytics
  BigQuery + Looker + Apigee + enterprise governance
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

## 19. Key architectural decisions

Web-first: Use one responsive web application rather than building
separate mobile applications for the initial programme.

Agentic, not chatbot-only: Use an orchestrator and specialized agents so
the platform can plan, assess, teach and adapt.

Graph-aware: Represent competencies, skills, learning paths and evidence
as relationships rather than disconnected records.

Privacy by context: Agents receive purpose-specific authorized context
instead of unrestricted database access.

Event-driven: Record key learning actions as events so the platform can
reconstruct the student journey.

Evidence-based assessment: Do not treat an LLM score as the sole truth;
combine tests, rubrics, evidence and governance.

Versioned competency model: Industry signals can propose updates, but
official university standards remain governed and versioned.

Free-first with migration paths: Use no-cost quotas and open source for
the pilot while keeping enterprise upgrade paths clear.

## 20. Beginner glossary

  -----------------------------------------------------------------------
  Term                                Simple explanation
  ----------------------------------- -----------------------------------
  AI agent                            An AI system that can plan and
                                      perform a set of actions rather
                                      than only generate a response.

  Agentic AI                          A pattern in which AI agents can
                                      reason, use tools, execute
                                      multi-step workflows and adapt
                                      based on results.

  RAG                                 Retrieval-Augmented Generation:
                                      retrieve relevant information
                                      first, then ask the model to answer
                                      using that information.

  Ontology                            A formal description of concepts
                                      and relationships in a domain.

  Knowledge graph                     A network of connected concepts and
                                      relationships.

  Student Digital Twin                A structured representation of a
                                      student's learning context, goals,
                                      competencies, journey and evidence.

  Embedding                           A numerical representation of text
                                      or another object used to compare
                                      semantic similarity.

  Vector search                       Search based on semantic similarity
                                      rather than only exact keywords.

  Context Gateway                     A policy-controlled service that
                                      decides what information an agent
                                      may see for a particular request.

  Agent Gateway                       A governed entry point for
                                      agent-to-tool or agent-to-agent
                                      interactions.

  Memory Bank                         A mechanism for retaining selected
                                      information across conversations;
                                      it should not replace the official
                                      university record.

  Event-driven architecture           A system design where important
                                      actions emit events that other
                                      components can react to.

  RBAC                                Role-Based Access Control:
                                      permissions are assigned according
                                      to a user's role.

  Least privilege                     Give a user or agent only the
                                      minimum access required to perform
                                      its task.

  Microlearning                       Short, focused learning units,
                                      often designed to take a few
                                      minutes.

  Competency                          A demonstrable combination of
                                      knowledge, skill, reasoning and
                                      application ability.

  Skills passport                     A structured record showing
                                      competencies, evidence and learning
                                      achievements.

  Fine-tuning                         Additional model training on a
                                      specific dataset; often not
                                      required for the first version of
                                      this platform.
  -----------------------------------------------------------------------

## Appendix A. Example competency model -- AI-Native Engineering

  ---------------------------------------------------------------------------
  Competency        Beginner          Intermediate      Advanced
  ----------------- ----------------- ----------------- ---------------------
  AI Foundations    Explain core      Apply concepts to Critically evaluate
                    AI/LLM terms.     simple            model choices and
                                      applications.     limits.

  LLM Application   Use an API and    Build grounded AI Design robust
  Engineering       basic prompts.    features with     production-oriented
                                      structured        AI application
                                      context.          patterns.

  Context           Write basic       Design context    Design complex
  Engineering       instructions.     and supporting    context strategies
                                      information for   and failure handling.
                                      reliable tasks.   

  Agentic           Understand        Build multi-step  Design governed
  Engineering       agent/tool        workflows with    multi-agent systems
                    concepts.         tools and state.  with clear tool
                                                        boundaries.

  AI Evaluation     Identify basic    Create tests and  Design repeatable
                    quality criteria. evaluation cases. evaluation strategies
                                                        and evidence-based
                                                        quality gates.

  AI Security       Recognize common  Apply basic       Design secure
                    AI risks.         controls.         agent/data boundaries
                                                        and threat-aware
                                                        controls.

  AI Operations     Understand        Use logging and   Design lifecycle,
                    deployment and    simple            observability and
                    monitoring        monitoring.       cost-control
                    basics.                             practices.

  Human-AI          Review AI answers Compare           Lead complex
  Engineering       critically.       alternatives and  AI-assisted
                                      explain           engineering work with
                                      decisions.        explicit
                                                        verification.
  ---------------------------------------------------------------------------

## Appendix B. Current technology references

These links are included so that technology, pricing and free-tier
statements can be re-checked before procurement. The platform design is
intentionally modular because cloud pricing, product names, limits and
quotas change over time.

\[1\] Google Cloud Run pricing --- https://cloud.google.com/run/pricing
Current Cloud Run free-tier and usage pricing.

\[2\] Google Cloud BigQuery --- https://cloud.google.com/bigquery
BigQuery product and current usage/free-tier information.

\[3\] Google Cloud Spanner pricing ---
https://cloud.google.com/spanner/pricing Spanner free-trial and pricing
details; the free trial currently includes Spanner Graph.

\[4\] Google Gemini Enterprise Agent Platform -- ADK / Agent Runtime ---
https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime/quickstart-adk
Current ADK and managed Agent Runtime documentation.

\[5\] Firebase pricing --- https://firebase.google.com/pricing Firebase
plans, Authentication and related product pricing.

\[6\] Apache Jena --- https://jena.apache.org/ RDF, OWL, SPARQL and
Fuseki ecosystem.

\[7\] Neo4j pricing / Community Edition --- https://neo4j.com/pricing/
Alternative open-source property-graph option for a pilot.

\[8\] Metabase Open Source --- https://www.metabase.com/start/oss
Self-hosted analytics alternative.

\[9\] pgvector --- https://github.com/pgvector/pgvector Open-source
PostgreSQL vector similarity extension.

\[10\] Google Cloud VPC Service Controls ---
https://cloud.google.com/security/vpc-service-controls Data-perimeter
security capability.

\[11\] Google Cloud Security Command Center ---
https://cloud.google.com/security-command-center/pricing Security
monitoring and pricing/edition details.

  -----------------------------------------------------------------------
  Recommended next design artifact The next practical step is to convert
  this conceptual architecture into a detailed Level-1 / Level-2 solution
  architecture pack: component diagram, sequence diagrams for the
  assessment and learning journeys, domain model, ontology model,
  agent/tool contracts, API catalogue, data classification matrix and MVP
  backlog.
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
