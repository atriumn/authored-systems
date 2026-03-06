---
title: "Why Six"
subtitle: "Why not five? Why not seven? The answer isn't 'I designed six.' The answer is 'I tried other numbers and they broke.'"
date: "2026-03-05"
description: "The origin story of the six primitives framework — how it started with three concepts and grew to six through contact with real operations."
order: 2
series: "The Core Thesis"
---

## Where This Came From

I run a property management company. Small — not a tech company, not a startup incubator. A business where people go into houses and inspect water heaters and check sump pumps and report findings to homeowners.

I tried to build software for my own operation. Not because I wanted to be in software — because nothing on the market modeled what we actually do. Every tool I evaluated was either a generic checklist app that ignored the structure of our work, or an enterprise platform that cost more than my annual revenue.

So I started building. And I kept hitting the same wall: every "simple" feature — assign a steward to a property, schedule a quarterly inspection, track a finding, escalate a problem — required me to model the same handful of concepts. I didn't set out to find primitives. I set out to build a checklist app for my own team and kept discovering things I couldn't avoid naming.

## The Question Nobody Asks

People hear "six primitives" and nod. Six sounds right. Tidy. Memorable. They ask about the definitions, or which vertical it applies to, or where AI fits.

Nobody asks the hard question: **Why six? Why not five? Why not seven?**

That's the interesting question. Because the answer isn't "I designed six." The answer is "I tried other numbers and they broke."

---

## We Started with Three

The first version of this framework had three concepts: **Rules, Steps, Records.** That's it. Rules govern what happens. Steps describe how. Records prove it did.

This is how most operations software thinks. If-then logic, checklists, audit logs. Three pillars. Clean.

It broke immediately.

"The water heater needs to be inspected quarterly." Where does that live? It's a rule (Policy). But it's also about a specific thing — the water heater. The rule doesn't make sense without the thing it governs. And the thing has state that matters: age, model, last service date, manufacturer specs. My stewards needed to know *which* water heater — the one that's 15 years old with the corroded anode rod, not the new one in the other unit.

I needed **Asset** as its own concept. Rules about things aren't the same as rules about process. The water heater has an identity that persists across every rule and every step that touches it.

Four primitives. Better.

---

## Then People Broke It

"Alex inspects properties on the east side. Jordan covers west. Casey is new and can't do HVAC yet."

In the three-primitive model, these are rules. "Assign Alex to east side properties" is a policy. But Alex isn't a policy — Alex is a person with qualifications, capacity, availability, and a track record. Treating people as rule parameters meant I couldn't ask the questions that actually matter in operations: Who's overloaded? Who's qualified? Who's available Tuesday?

**Person** became its own primitive. Not because it's theoretically elegant, but because every scheduling problem, every matching problem, every capacity question we tried to model collapsed into "tell me about the people."

Five primitives. Almost there.

---

## The Missing Trigger

Five primitives described the *state* of an operation beautifully. Policy, Procedure, Asset, Person, Ledger. You know the rules, the steps, the things, the people, and the history.

But nothing *happened*.

"When does this inspection run?" Monday at 8am. "What triggers a vendor suspension?" Three complaints in 30 days. "Why did the system page the manager at 2am?" Because the temperature sensor crossed a threshold.

I was encoding triggers as policies, and it was a mess. "If it's Monday and it's 8am and Alex is on shift, run the opening runbook" isn't a policy — it's a policy reacting to an event. The event is the thing that happened. The policy is the thing that decides what to do about it.

**Event** had to be its own primitive. Without it, you can't distinguish between the rules (Policy) and the things that activate those rules (Event). You end up with policies that contain their own triggers, which means you can't reuse either one independently.

Six primitives.

---

## What About Seven?

I tried. Multiple times. Here's what almost made it and why it didn't.

### Space / Location

"The gym has three zones. The property has twelve rooms. The lawn has front yard and back yard." Surely space is a primitive?

No. Space is an attribute of Asset. The warped wall is in Zone A. The water heater is in the basement. The front yard is a section of the property. Every "space" question I asked was really an asset question with a location dimension. Adding Space as a primitive would have meant every asset has a parallel space record, duplicating identity for no reason.

### Schedule

"The opening runbook runs Monday through Friday at 8am." Isn't that its own thing?

No. A schedule is an Event (the trigger) governed by Policy (the constraints). "Monday 8am" is a scheduled event. "Only if a qualified coach is available" is a policy gate. Combining them into a single "Schedule" primitive meant you couldn't change the trigger without changing the constraint, or vice versa. Keeping them separate is more powerful.

### Workflow / Runbook

"A runbook is a composition of procedures." Doesn't that deserve primitive status?

No. A runbook is a composition, not a primitive. The distinction matters. Primitives are irreducible — they don't decompose further. A runbook decomposes into procedures, which are the actual primitive. Elevating Runbook to primitive status would mean you have two levels of "steps" (runbook steps and procedure steps) with unclear ownership. The composition layer sits above the primitives, not among them.

### Communication / Notification

"The system texts the resident. The system emails the manager. The system pages the on-call."

Almost. But every notification is an Event (something happened) that triggers a Procedure (send this message) gated by Policy (to whom, through what channel, at what severity). Notification is a composition of existing primitives, not a new one.

---

## The Test

Here's how I know it's six and not seven: **every time I tried to add a seventh, I could decompose it into existing primitives.** And every time I tried to remove one of the six, I lost the ability to model something real.

- Remove Policy — you can't express constraints, eligibility, or rules
- Remove Procedure — you can't express ordered steps
- Remove Asset — you can't express the thing being acted on
- Remove Person — you can't express who does the work or who it's for
- Remove Event — you can't express what triggers work
- Remove Ledger — you can't prove anything happened

Six is the number where nothing decomposes further and nothing is missing. It's not elegant by design. It's what survived contact with real operations across property management, gym operations, lawn care, and marketplace logistics.

---

## The Constraint Story Is the Real Story

Frameworks that sound clean usually are. They were designed top-down, from theory, to be memorable. They work in a slide deck and break in a codebase.

This one is ugly in origin. It came from a small business owner trying to build software for his own operation, discovering that every "simple" feature required the same six concepts. I didn't set out to find primitives. I set out to stop losing institutional knowledge every time a steward quit. The framework is what survived.

The number isn't the point. The irreducibility is. If you can decompose one of the six into the others, it shouldn't be a primitive. If you find a seventh that can't be decomposed, it should be. I haven't found one yet. I've been looking.

---

**If you find the seventh, we want to hear about it.** The whole thesis depends on there being exactly as many primitives as operations require — no more, no fewer. If the number is wrong, the framework is wrong. That's the bet.
