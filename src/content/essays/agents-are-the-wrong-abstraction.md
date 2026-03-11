---
title: "Agents Are the Wrong Abstraction"
subtitle: "Take the agent apart. You'll find six LEGO bricks. They're always the same six."
date: "2026-03-02"
description: "The AI industry is converging on 'agents' as the default abstraction for automating operations. This is the wrong level of abstraction."
order: 2
series: "The Foundations"
---

A kid has LEGO bricks. Six shapes. They build a house. Another kid sees the house and says *I want a house*. So they go buy a house kit—pre-molded, one shape, it's a house and only a house.

First kid takes apart the house and builds a spaceship. Same six bricks.

Second kid is stuck with a house.

**Agent is the pre-molded house kit. Primitives are the LEGO bricks.**

That's the whole insight. Everything below is just evidence.

---

## The Claim

The AI industry is converging on **agents** as the default abstraction for automating business operations. AI maintenance director. AI scheduling coordinator. AI property manager. AI front desk.

This is the wrong level of abstraction. Not because agents don't work—many of them do, for now. But because **agent is a noun that hides verbs.** When you say *AI agent*, you stop asking what it actually *does*. And when you finally decompose what it does, you find the same six things every time.

The right mental model isn't agent. It's **primitives**—the irreducible building blocks every operation is made of, whether a human runs it or a machine does.

---

## The Framework (A Mindset, Not a Product)

Every time someone says *AI agent that does X*, ask one question:

> **What are the verbs?**

Triage. Route. Schedule. Score. Document. Verify. Escalate.

Now ask: which of those verbs need intelligence, and which just need rules?

The answer, every single time, is: most of them just need rules. A few need classification. Almost none need reasoning.

The framework is four steps:

1. **Decompose** — break the operation into primitives
2. **Determinize** — make everything that can be a rule, a rule
3. **Bound** — put AI only where classification or optimization is genuinely needed
4. **Record** — log every decision so you can explain it

---

## Why This Matters for LLMs

LLMs are probabilistic. Rules are deterministic.

If you wrap your rules inside an agent's prompt, you have a probabilistic system trying to act deterministic. This is the source of most hallucinations. The model is guessing at the rule rather than following it.

When you decompose the agent into primitives, you move the rules out of the prompt and into the architecture. 

- The **Policy** (the rule) is a structured object. 
- The **AI** is a perception layer that identifies the **Event** or the **Asset**. 
- The **System** then executes the **Procedure** based on the **Policy**.

The AI doesn't have to remember the rule. It just has to see the world. 

By taking the agent apart, you get a system that is cheaper to run, easier to debug, and impossible for the model to "hallucinate" its way out of.
