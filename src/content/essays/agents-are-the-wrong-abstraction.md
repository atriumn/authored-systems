---
title: "Agents Are the Wrong Abstraction"
subtitle: "Take the agent apart. You'll find six LEGO bricks. They're always the same six."
date: "2026-03-02"
description: "The AI industry is converging on 'agents' as the default abstraction for automating operations. This is the wrong level of abstraction."
order: 3
series: "The Core Thesis"
---

A kid has LEGO bricks. Six shapes. They build a house. Another kid sees the house and says "I want a house." So they go buy a house kit — pre-molded, one shape, it's a house and only a house.

First kid takes apart the house and builds a spaceship. Same six bricks.

Second kid is stuck with a house.

**"Agent" is the pre-molded house kit. Primitives are the LEGO bricks.**

That's the whole insight. Everything below is just evidence.

---

## The Claim

The AI industry is converging on "agents" as the default abstraction for automating business operations. AI maintenance director. AI scheduling coordinator. AI property manager. AI front desk.

This is the wrong level of abstraction. Not because agents don't work — many of them do, for now. But because **"agent" is a noun that hides verbs.** When you say "AI agent," you stop asking what it actually *does*. And when you finally decompose what it does, you find the same six things every time.

The right mental model isn't "agent." It's **primitives** — the irreducible building blocks every operation is made of, whether a human runs it or a machine does.

---

## The Framework (A Mindset, Not a Product)

Every time someone says "AI agent that does X," ask one question:

> **What are the verbs?**

Triage. Route. Schedule. Score. Document. Verify. Escalate.

Now ask: which of those verbs need intelligence, and which just need rules?

The answer, every single time, is: most of them just need rules. A few need classification. Almost none need reasoning.

The framework is four steps:

1. **Decompose** — break the operation into primitives
2. **Determinize** — make everything that *can* be a rule, a rule
3. **Bound** — put AI only where classification or optimization is genuinely needed
4. **Record** — log every decision so you can explain it

This works whether you're building maintenance software, emergency room operations, lawn care, fleet management, or something that doesn't exist yet. It's not anti-agent. It's **agent-agnostic**. The operation doesn't care who's executing it — human, AI, or a cron job. The primitives are the same.

---

## The Six Primitives

Every operation — all of them, always — decomposes into:

| Primitive | What it is | One-liner |
|---|---|---|
| **Policy** | Rules and constraints | "Under what conditions does X happen?" |
| **Procedure** | Ordered steps | "What are the steps to do X?" |
| **Asset** | Things being managed | "What are we operating on?" |
| **Person** | Who's involved | "Who does it / who's it for?" |
| **Event** | What happened | "What triggered this?" |
| **Ledger** | Proof it happened | "Where's the record?" |

That's it. Six bricks. Everything else is a composition.

---

## The Decomposition: A Real "Agent" Product, Taken Apart

Here's a pitch you'll hear at any proptech conference right now — an AI-powered maintenance coordination system:

> It takes a work order from intake to completion without relying on a human maintenance coordinator. The system uses AI agents to immediately triage incoming work orders, text residents to gather details and photos, verify the actual scope, and determine what really needs to be done. From there, it selects the right vendor or in-house technician, coordinates scheduling, documents all communication and work performed, and closes out the job automatically. At completion, it runs a built-in scoring system that grades vendors and technicians.

Sounds like an agent. Now decompose it:

| What the pitch says | What it actually is |
|---|---|
| "Triage incoming work orders" | **Event** (work order submitted) → **Procedure** (classification checklist) |
| "Text residents to gather details and photos" | **Procedure** step with field capture (photo, text input) |
| "Verify the actual scope" | **Policy** gate — does the captured data match a known pattern? |
| "Determine what really needs to be done" | **Policy** evaluation — condition → action mapping |
| "Select the right vendor or technician" | **Policy** matching — eligibility + ranking |
| "Coordinate scheduling" | **Event** + **Policy** orchestration — availability, capacity, proximity |
| "Document all communication and work performed" | **Ledger** — append-only record |
| "Close out the job automatically" | **Event** (completion) → **Policy** (verification gate) → **Ledger** (status change) |
| "Scoring system that grades vendors" | **Ledger** query feeding back into **Policy** — the feedback loop |

Every single capability is a primitive or a composition of primitives. There is no step that requires "an agent." What's being called an "AI agent" is an event-policy loop with classification at the intake.

And this isn't unique to maintenance. Pick any "AI agent" product in any vertical — decompose the verbs, and you'll find the same six primitives.

---

## The Agent in Your Inbox

Forget service ops for a second. Make it personal.

You want an AI agent to manage your email. You tell it: "Read my email and handle it." The agent goes to work. It reads, it archives, it replies, it flags. It *does things*.

Three problems, immediately:

**1. It will do anything.** That's the pitch — and the problem. "Do anything" means "has no constraints." An assistant who does anything without rules isn't helpful. They're a liability. You just handed a stranger the keys to your communication and said "figure it out."

**2. You don't know why.** The agent archived that email from your kid's school. Why? It replied to your cofounder in a tone you'd never use. Why? There's no policy to inspect — there are weights. You can't open the hood and say "ah, rule 4 fired because condition X was met." You just get a result. And when the result is wrong, your only recourse is "try again" or "be more specific next time."

**3. There's no ledger.** Did it read that email from your boss? What did it decide? When? Based on what? You're trusting a black box with your professional relationships. That's fine until it isn't — and when it isn't, you have nothing to review.

Now here's the deeper point: **the agent is a commodity. Your policy is the asset.**

Claude, GPT, Gemini — any of them can "read email." They're interchangeable execution engines. What *isn't* interchangeable is your rules:

- "Emails from my kids' schools → always surface, never auto-reply"
- "Newsletters → batch into a Sunday digest"
- "Anything from my cofounder → surface immediately, any time of day"
- "Cold outreach → archive, unless it mentions [specific topics]"
- "Receipts and confirmations → file silently, tag for tax season"

That's your **Policy**. It lives in your head right now, unquantified. The agent can't read your mind — so either you make the policy explicit (valuable, durable, portable between agents) or the agent guesses (fragile, opaque, locked to one provider).

An agent without a policy is a contractor without a scope of work. They'll do *something*. You just won't know what until it's done. And when it's wrong, you'll blame the contractor — but the real failure was never writing down what "right" looks like.

### The decomposition

Even "manage my email" — the simplest-sounding agent task — is primitives all the way down:

| What you want | What it actually is |
|---|---|
| "Read my email" | **Event** (new email arrives) triggers a **Procedure** (triage) |
| "Know what's important" | **Policy** — your rules for priority, not the model's guess |
| "Reply to routine stuff" | **Procedure** (templated response) gated by **Policy** (which emails qualify) |
| "Don't bother me with junk" | **Policy** — filter rules. Explicit, inspectable, changeable |
| "File receipts for tax season" | **Asset** (your tax records) + **Procedure** (classify and tag) + **Ledger** (when it was filed, from whom) |
| "Surface anything from my family" | **Person** (sender classification) → **Policy** (always escalate) |
| "Show me what happened while I slept" | **Ledger** query — every decision, every action, reviewable |

The agent doesn't add value here. The *policy* does. The agent is just the thing executing the policy. And if your policy is explicit, you can swap the agent tomorrow — move from Claude to GPT to a local model — and nothing breaks. Your rules are yours. The execution is commodity.

**This is true for every "personal AI agent" pitch.** Manage my calendar. Manage my finances. Manage my tasks. The agent is always the easy part. The hard, valuable, durable work is defining the policy — *your* policy — and recording what happened in a ledger you can actually review.

---

## Why This Matters (Four Walls the "Agent" Approach Hits)

### 1. The explainability wall

"AI determines what really needs to be done" — based on what rules? Can the property manager see them? Change them? When the agent sends a plumber for an electrical issue, who's accountable?

An agent doesn't have policies you can inspect. It has weights. The first time a customer asks "why did it do that?" and the answer is "the model decided," trust breaks.

A primitives-based system answers: "Vendor A was eligible (licensed, available, within 15 miles), highest-rated (4.7 from 23 completed jobs), and lowest-cost for this category. Here's the policy. Here's the ledger data it evaluated."

**Accountability requires explainability. Explainability requires structure.**

### 2. The composability wall

An "AI maintenance director" is one product for one vertical. Try to use it for emergency room operations or lawn care — you rebuild from scratch. The intelligence is baked into the agent, not extracted into reusable pieces.

With primitives, you swap the nouns:

| Property | Lawn Care | ER |
|---|---|---|
| Work order → Asset | Job request → Property | Referral → Patient |
| Triage → classify severity | Scope → assess condition | Intake → assess urgency |
| Dispatch → vendor matching | Dispatch → crew matching | Schedule → provider matching |
| Complete → close + score | Complete → close + photo | Visit → document + bill |

Same engine. Same primitives. Different nouns. An "agent" can't do this because its logic is implicit in its training, not explicit in its configuration.

### 3. The determinism wall

90% of what "AI agents" do is deterministic workflow automation:

- Water leak → plumber. *(Routing rule.)*
- HVAC down → HVAC tech. *(Routing rule.)*
- Vendor A is closer and rated higher → send A. *(Ranking policy.)*
- Three complaints in 30 days → suspend vendor. *(Threshold policy.)*

None of this requires intelligence. It requires policies. Calling it "AI" because you used an LLM to classify the intake doesn't make the routing logic intelligent — it makes the intake smarter while the rest is still just rules.

### 4. The dependency wall

When your entire product *is* the agent, you have a single point of failure on the LLM provider. Pricing changes. Model performance shifts. Rate limits hit. Latency spikes.

When AI is bounded to specific decision points (classification at intake, optimization within constraints, pattern detection over time), the rest of your system works fine without it. The policies still fire. The ledger still records. The operation continues. You've decoupled your product from your AI dependency.

---

## Where AI Actually Belongs

AI isn't absent from this model. It's not anti-AI — it's anti-AI-as-orchestrator. The difference matters.

When people say "AI agent," they mean AI as the *architect* — it decides what to do, when to do it, and how. That's the wrong role. AI is the *intern*: smart, fast, eager, capable of things humans can't do quickly. But an intern without a job description, a manager, and a paper trail is a liability. Give them structure and they're incredibly valuable.

The structure is the primitives. AI genuinely helps in three modes:

**1. Perception** — turning unstructured input into structured data. Reading a photo, parsing a description, listening to speech and extracting fields. This is where AI is *genuinely better* than any alternative. No dropdown menu competes with an LLM reading a photo of a water heater and saying "rust on the tank, sediment visible, temperature reading 145°F."

**2. Optimization** — choosing the best option from a constrained set. Not "decide what to do" — that's policy. "Of the 5 vendors who *are* eligible, which one is best right now?" Travel time, workload, historical quality. This is bounded decision-making within guardrails someone else set.

**3. Pattern detection** — finding what humans can't see in the data. Not in real-time. Over time. Across the ledger. "Water heaters in homes built before 1990 fail 3x more often in the first winter after purchase." No human reads 10,000 inspection records and notices that. AI does.

Everything else is rules. Routing, gating, scheduling, escalation, scoring — those are policies. Deterministic. Inspectable. Changeable by humans. No AI required.

### The recursive insight

Here's the thing that surprised me writing this out: **the primitives don't just describe operations. They describe the boundaries for AI itself.**

AI is a **Person** (a system actor) that executes **Procedures** within **Policy** constraints on **Assets**, triggered by **Events**, and recorded in the **Ledger**.

The framework for "where AI belongs" *is* the primitives. AI doesn't escape them. It operates within them — just like every human operator, every cron job, every automation that came before it. The primitives are the shape of work itself. AI is just the newest thing doing work.

```
┌─────────────────────────────────────────────┐
│  AI (bounded)                               │
│                                             │
│  Perceive:   Unstructured → structured      │
│  Optimize:   Best choice within constraints │
│  Detect:     Patterns across the ledger     │
│  Draft:      Propose policies & procedures  │
│                                             │
│  Always: within primitives, never above     │
│                                             │
├─────────────────────────────────────────────┤
│  Policies (deterministic)                   │
│                                             │
│  Routing:     condition → action            │
│  Gating:      must meet criteria to pass    │
│  Scheduling:  availability × eligibility    │
│  Escalation:  threshold → notification      │
│  Scoring:     ledger query → rating         │
│                                             │
├─────────────────────────────────────────────┤
│  Ledger (proof)                             │
│                                             │
│  Every decision logged. Every policy eval   │
│  recorded. Every outcome immutable.         │
│  AI reads. Humans write. Nobody edits.      │
│                                             │
└─────────────────────────────────────────────┘
```

The AI doesn't run the operation. The policies run the operation. The AI makes the policies smarter at specific decision points. And the primitives tell you exactly which points those are.

---

## The Industry's Mistake

The current wave of "AI agent" startups is making the same mistake that "big data" startups made a decade ago: treating the technology as the product instead of the substrate.

- **Big data** → everyone built dashboards. The winners built *models*.
- **Agents** → everyone is building autonomous bots. The winners will build *operational ontologies*.

An "AI maintenance director" is a product. The primitives that any director (human or AI) runs on are a *platform*. Different layer entirely.

The agent crowd will hit a wall the first time:
- A customer asks "why did it do that?" and the answer is "the model decided"
- A new vertical needs the same logic but the agent was trained on property maintenance, not emergency rooms
- A regulation requires auditability and there's no structured decision log
- The LLM provider changes pricing or performance and the whole product shifts

Primitives don't have these problems. Policies are inspectable. The engine is vertical-agnostic. The ledger is the audit trail. And the AI layer is bounded — replaceable, upgradeable, and never the single point of failure.

---

## The One-Liner

> Everyone is building AI agents. Take the agent apart. You'll find six LEGO bricks. They're always the same six. **Name the bricks, and you don't need the agent.**

---

## This Is a Mindset, Not a Product

This observation isn't scoped to a single vertical. It's an ontological claim: **this is how operations work.** All of them. Always. Whether a human runs them or a machine does.

Property management. Lawn care. Emergency rooms. Logistics. Hospitality. Education. Insurance claims. Supply chain. Every single one decomposes into Policy, Procedure, Asset, Person, Event, Ledger. The "agent" products in each vertical are just pre-molded house kits — they work, but they only build one thing.

Whether you're building for property management or something that doesn't exist yet — start by asking:

> What are the verbs? Which ones need rules? Which ones need intelligence? And where's the proof?

The agents crowd is building pre-molded houses. The opportunity is in the bricks.
