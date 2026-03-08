---
title: "I've Worked Where the Procedures Are Real"
subtitle: "The difference between healthcare and your gym isn't the stakes. It's whether anyone was forced to write the system down."
date: "2026-03-07"
description: "A software engineer leaves healthcare tech, opens a gym, and discovers that every small business is a system with no documentation and a lot of side effects."
order: 1
series: "The Core Thesis"
---

I built software in healthcare tech for years. The kind where the data touches patients and regulatory bodies that don't care about your shipping velocity.

In that world, the system won't let you proceed without a policy check. Step 3 doesn't happen until step 2 is verified — not with a checkbox, but with evidence. Every access, every decision, every change gets written to an append-only ledger. When a regulator asks "who accessed this record and why?" the answer is a traceable chain: event, policy, procedure, person, asset, record.

I thought this was overhead. Then my family opened a ninja warrior gym, and I tried to build software for it.

---

## The Monday Opening Routine

The gym needs to be set up before the first class every Monday. Everyone knows this. But Mike checks the obstacles first, then the mats, then the sound system. Sarah starts with the bathrooms. Jordan skips the parking lot check because "it's always fine."

Three people, three different procedures, none written down. They're not following a procedure. They're following habits that approximate a procedure nobody authored.

This pattern repeated everywhere I looked:

| What I needed to know | What I got |
|---|---|
| "How many kids in a party?" | "25. Everyone knows that." (Not written down. No one checks at 26.) |
| "Who can open Monday?" | "Any coach." (But Jordan can't do course prep. The new hire doesn't know waivers.) |
| "Was equipment inspected last week?" | "Probably. Mike, I think. He didn't mention anything." |
| "What's the escalation for a safety issue vs. a dirty bathroom?" | Same: whoever picks up the phone. |

In healthcare, every one of these has a defined answer in a system. At the gym, every one lives in someone's head.

---

## What the FDA Actually Does

I had the FDA wrong for years. The FDA doesn't make healthcare *better*. It doesn't make doctors smarter or nurses more careful. It makes healthcare *authored*.

The policy is in the system, not in the breakroom. The procedure has gates that can't be skipped. The record exists whether or not someone remembered to create it. The person doing the work has explicit qualifications mapped to explicit capabilities — not "Jordan is senior so Jordan can do it."

The difference between healthcare and the gym wasn't the stakes. It was that someone had been forced to take the operation out of people's heads and put it into a system.

Healthcare has the FDA. Aviation has the FAA. Nuclear has the NRC. These industries authored their operations because regulators wouldn't let them skip it. Not because the people are more disciplined.

A gym doesn't have an FDA. Neither does a property management company, a lawn care service, or a 30-person engineering team. Nobody forces them. So the system stays in people's heads.

---

## The Failure Mode

This works, actually. It works surprisingly well, for a long time. Which is why nobody fixes it.

The owner holds the policies. The senior coach teaches the procedures by doing them. The equipment gets tracked informally. Institutional memory is a person, not a system.

Here's what breaks it:

- The coach who "just knows" the opening routine quits
- The equipment that "probably" got inspected fails
- The business grows past what one person can hold in their head
- A parent asks why their kid was on an obstacle that should have been flagged, and there's no record

The fragility isn't in the people. The people are great. The fragility is that the system lives *inside* the people instead of alongside them. A software engineer would call it what it is: implicit state held by specific actors, no persistence layer, no validation, no logging. It works the same way a codebase with no tests "works" — until it doesn't.

---

## Why This Didn't Get Fixed Before

Authoring a system used to require a compliance department.

In healthcare, the structuring work — writing policies, defining procedures, qualifying people, classifying events, maintaining the ledger — was done by teams with specialized roles and enterprise tools. The infrastructure cost more than most small businesses make in a year.

That's the part that changed. Not the discipline — the cost.

AI reads a coach's voice note about a damaged obstacle and turns it into a structured inspection record. It watches how your best opener runs Monday morning and proposes the procedure they never wrote down. It reads three months of incident reports and finds the pattern: *obstacles in Zone B get flagged 4x more often on weekends, when the newer coaches are working.* That's a staffing problem dressed up as an equipment problem, and nobody reads 90 inspection logs to notice it.

The perception layer — turning unstructured reality into structured data — used to be the expensive part. A dropdown that says "select issue type" doesn't compete with an LLM that reads a photo of a worn kick plate and extracts condition, location, and severity before the first rule fires.

The structuring work is the same work it's always been. Same six structures. The cost of implementing them dropped by orders of magnitude. What used to require a $5M compliance department now requires someone willing to author the system and a platform that meets them where the work actually happens — voice notes, photos, texts, Tuesday morning.

---

## What I Brought With Me

I didn't bring the tools from healthcare. I brought the mental model.

If a decision matters, there's a policy you can point to. If a process matters, there are steps you can follow without calling the boss. If something happened, there's a record. If a person did the work, there's a reason they were the right person for it.

That's not healthcare-specific. It's operational. It's the same instinct that makes a good engineer write tests, document decisions in ADRs, and build alerts before shipping to production. The six primitives are just that instinct, formalized.

The gym has all six. Every small business does. The question is whether they're authored — explicit, inspectable, enforceable — or whether they're inferred, living in someone's head, walking out the door every time someone clocks out.

---

## The One-Liner

> Healthcare doesn't have better operations because it has better people. It has better operations because someone was forced to author the system. The only question is whether you author yours before the failure — or after.
