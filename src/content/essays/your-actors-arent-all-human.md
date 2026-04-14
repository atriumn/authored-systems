---
title: "Your Actors Aren't All Human"
subtitle: "The biological test is not the test. The operational test is."
date: "2026-04-13"
description: "An Actor in an authored operation is any entity — human or not — that can be delegated to, holds qualifications, has availability, and is accountable to the ledger. The rename from Person to Actor is the framework admitting in public what it already hinted at: the system actor was always there; we just didn't make it first-class."
order: 5
series: "The Foundations"
---

## A machine that accepts or refuses work

Somewhere in every hospital there is a locked cabinet full of drugs that doesn't trust anyone on sight. A nurse walks up, badges in, types in a patient's chart number, and waits. If the prescription is in the system, if the nurse is authorized for that class of drug, if the time window is right, if the dispenser is online, and if none of the interlocks have tripped — then a single drawer unlocks and exactly one dose comes out. The cabinet writes the event to the hospital's audit system. If any check fails, nothing opens, and the refusal is logged too.

What *is* that cabinet, in framework terms? It is not a tool. It is not a rule. It is not a procedure. It is not infrastructure.

It is an **Actor.** It has qualifications — the drugs it is authorized to dispense, the dosages it can deliver, the patients it can match. It has availability — online, in maintenance, out of a given drug. It has ledger attribution — the audit log names *this* dispenser, in *this* room, at *this* time. It accepts or refuses work. It writes to the record.

Nobody would call the Pyxis a "person." But in the six-primitive framework, it sits in the same slot as the nurse standing in front of it. That slot used to be called Person. It is no longer.

## The three-part test

An **Actor** is any entity — human or not — that satisfies three conditions at once:

1. **Qualifications.** The entity holds capabilities or authorizations that gate what work can be assigned to it. A plumber's license. A surgeon's privileges. The drugs a dispenser can release. The assays a lab system can run. The queries a channel session is permitted to answer. The environments a deployment service is allowed to push to. If the capability isn't named, assignment is guessing.

2. **Availability.** The entity can accept or refuse work based on current state. A human's schedule, capacity, on-call status, PTO. A system's uptime, maintenance window, rate limit, queue depth. Qualifications are *can*; availability is *now*. An Actor that can in theory but not right now is still unavailable; an Actor that is online but unqualified is still ineligible.

3. **Ledger attribution.** The entity's actions write to an auditable record that names *it* as the `applied_by` — who did this thing. Not *which process*. Not *some automation*. The specific Actor. The audit trail must be able to answer "who did this?" with a proper noun.

If all three hold, the entity is an Actor. If any fails, it is something else — and naming what it actually is matters.

## What the test rules out

A sloppy framework that calls everything a Person — or, worse, an "agent" — loses the distinctions that make the primitives useful. The Actor test does real work by ruling things out.

- **A cron job is not an Actor.** It holds no qualifications. It does not accept or refuse — it fires on a clock. It is a scheduled **Trigger.** Treating it as an Actor is how you end up with "the system did it" in an audit trail.
- **An API endpoint called inside a procedure is not an Actor.** It is infrastructure the Actor (human or system) uses. The Actor wrote the ledger entry; the endpoint only moved bytes.
- **A model invocation is not an Actor.** An LLM call for classification is the perception layer of Principle 3 — AI perceives, the policy engine decides, an Actor executes. The model doesn't have qualifications, availability, or standing attribution in any meaningful sense. If you're tempted to call the model an Actor, you've given it authority it doesn't have and accountability it can't carry.
- **A workflow is not an Actor.** A workflow is a composition of Procedures. The Actors are whoever — or whatever — executes the steps.

The biological test is not the test. But neither is every piece of software automatically an Actor. The three-part test is the test.

## The same six primitives, different shapes

The rename doesn't add a primitive. The framework is still six: **Policy, Procedure, Asset, Actor, Trigger, Ledger.** Always six. What the rename does is admit that the set of things that can sit in the Actor slot is broader than "human employees."

Walk it across a few domains and the shape repeats.

**Healthcare.** Human Actors: RNs, attendings, techs, aides. Non-human Actors: the pharmacy dispenser from the opening; the lab analyzer that runs panels and reports results with a device ID; the pager service that accepts an escalation Trigger, matches it to an on-call Actor by qualification, and records the page with timestamp and recipient. All Actors. All with qualifications, availability, ledger attribution. The policy engine that routes a critical lab to the covering hospitalist doesn't care whether the next hop is a human or a system — only whether the next hop is eligible and available.

**Restaurant.** Human Actors: server, host, line cook, manager. Non-human Actors: the kitchen line itself (it accepts orders, produces output, runs out of the fish on a Saturday night — availability is real); the POS (it logs every transaction, has uptime, refuses payments when offline); the bar (qualifications: which drinks it can produce; availability: whether the bartender is in the weeds). The ticket-routing policy is the same shape whether it's sending a comp dessert to table twelve or an incident report to the GM's channel.

**Field service.** Human Actors: technicians, dispatchers. Non-human Actors: the parts inventory system, which accepts a reservation for a water heater or refuses because stock is out; the SLA monitor that fires a Trigger when a ticket crosses a threshold; the routing engine that holds a qualification ("this region, these skills") and an availability ("not Sundays, not past 60 hours this week"). The dispatcher and the router co-exist as Actors in the same operation.

**Knowledge work.** Human Actors: you, collaborators, reviewers. Non-human Actors: the CI/CD system that deploys to an environment it is authorized for during a window it is available in and writes a release record; the scheduling assistant that holds a calendar qualification and a working-hours availability; the channel session that is credentialed into a specific set of tools and is either online or not. If you squint at a well-run engineering team, half the "people" in the runbook aren't biological — they're Actors in the framework sense, and the system handles them the same way it handles the on-call human.

Same six primitives. Same Actor test. Different shapes.

## Why this matters

Three things follow from the rename.

**Routing generalizes.** Policies route work to Actors. Whether the target is a human steward or a pharmacy dispenser doesn't change the routing engine. Same asset-tree walk-up; same qualifications check; same availability filter; same "if none eligible, fall back to the supervisor" rule. A routing system that encodes "find me a human" has to be rewritten the first time a non-human Actor is supposed to handle the work. A routing system that encodes "find me an eligible, available Actor" does not.

**Accountability scales.** The ledger answers *"who did this?"* with a named Actor — human or system. An audit trail that stops at *"an automated process"* is broken; it has told you a verb happened and refused to name the subject. An audit trail that names the specific system, the rule it ran under, and the policy that authorized it is complete. The agent is commodity. Your policy is the asset. The Actor is the one the ledger points at.

**The framework survives the next architecture shift.** More work is about to move from human hands to software. If the framework had to invent a seventh primitive called "Agent" every time a new category of non-human executor appeared, it wouldn't survive the transition — it would get overrun by vocabulary. Instead, the framework says the Actor set is broader than you thought. The primitive absorbs the shift. Six primitives. Always six.

## The system actor was always there

This is not a framework correction. It is the natural reading of what the manifesto always said. From the original glossary: *"a fourth role appears: the system actor — automated decisions that must be attributed in the ledger."* The system actor was in the footnotes. The rename from Person to Actor is the manifesto admitting in public what its glossary already hinted at — and then making it load-bearing.

Your Actors aren't all human. The question that matters isn't *"is it a person?"* It's *"does it hold qualifications, accept work, and write to the ledger?"* If yes, it's part of your authored operation. If not, it's infrastructure around the parts that are. Authored beats inferred. We don't talk about agents — nouns that hide verbs. We talk about Actors — primitives with qualifications, availability, and ledger attribution. And we name every one of them.

---

*See the [Actor glossary entry](/glossary#actor) and the [six primitives](/glossary) for the canonical definitions.*
