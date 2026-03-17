---
title: "Agents Are the Wrong Abstraction"
subtitle: "Take the agent apart. You'll find six structures. They're always the same six."
date: "2026-03-02"
description: "The AI industry is converging on 'agents' as the default abstraction for automating operations. This is the wrong level of abstraction."
order: 2
series: "The Foundations"
---

Call it an AI property manager. An AI scheduling coordinator. An AI front desk. An AI maintenance director.

Now take it apart.

You'll find a policy (a rule about what should happen), a procedure (steps for how it happens), an asset (the thing being acted on), a person (the qualified actor), an event (the trigger that started the work), and a ledger (the record that it happened).

Six structures. Always six. Regardless of what you called the agent, regardless of the industry, regardless of the vendor that sold it to you.

<strong style="color: #2563eb;">The word <em>agent</em> is a noun that hides these verbs. Once you see the verbs, you don't need the noun.</strong>

---

## The Decomposition

Pick any AI agent. Any industry. Ask one question: **what are the verbs?**

Triage. Route. Schedule. Score. Document. Verify. Escalate.

Now sort those verbs. Every one of them maps to one of six structures:

- **Policy**: the rule that governs the decision. "Premium customers get a 2-hour SLA." A lookup, not a judgment call.
- **Procedure**: the steps that execute the work. "Diagnose, quote, schedule, repair, close." A sequence with gates.
- **Asset**: the thing being acted on. "Unit 4B, water heater, installed 2019, last serviced October." This is a record. The model doesn't need to remember it.
- **Person**: the qualified actor. "Licensed plumber, available Tuesday, within 15 miles." A database query.
- **Event**: the trigger that started the work. "Customer reported no hot water." Classification, and the one place AI actually earns its keep.
- **Ledger**: the proof it happened. "Work order opened, assigned, completed, verified." An append to a log.

Most of those verbs don't need intelligence. They need rules. A few need classification. Almost none need reasoning.

The agent was doing all six things at once, inside a prompt, probabilistically. Take it apart and you can do five of them deterministically. Cheaper, faster, and without hallucinations. The AI handles the one thing it's actually good at: perceiving the world and classifying what it sees.

---

## Why This Matters for LLMs

LLMs are probabilistic. If you wrap your rules inside an agent's prompt, you have a probabilistic system trying to act deterministic. The model is guessing at the rule rather than following it, and that's where hallucinations come from.

When you decompose the agent into primitives, you move the rules out of the prompt and into the architecture. 

- The **Policy** (the rule) is a structured object. 
- The **AI** is a perception layer that identifies the **Event** or the **Asset**. 
- The **System** then executes the **Procedure** based on the **Policy**.

The AI doesn't have to remember the rule. It just has to see the world and classify what it sees. The rules engine handles the rest — deterministically, cheaply, and without the possibility of hallucinating its way to a wrong answer.
