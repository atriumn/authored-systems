---
title: "Why Six"
subtitle: "Why not five? Why not seven? The answer isn't 'I designed six.' The answer is 'I tried other numbers and they broke.'"
date: "2026-03-05"
description: "The origin story of the six primitives framework — how it started with three concepts and grew to six through contact with real operations."
order: 3
series: "The Foundations"
---

## Where This Came From

I'm a software engineer who left tech to open a small business. My family owns a gym — not a franchise, an independent ninja warrior facility with obstacles, coaches, birthday parties, open gym sessions, and all the operational chaos that comes with a physical space full of kids and equipment that can hurt them.

I figured building software for my own operation would be the easy part. I'd spent years building software for other people's problems. Now I had my own. Nothing on the market modeled what we actually do. Every tool I evaluated was either a generic checklist app that ignored the structure of our work, or an enterprise platform that cost more than our annual revenue.

So I started building. And I kept hitting the same wall: every "simple" feature — assign a coach to an opening shift, schedule a weekly equipment inspection, track a damaged obstacle, cap a birthday party at 25 kids — required me to model the same handful of concepts. I didn't set out to find primitives. I set out to build a checklist app for our team and kept discovering things I couldn't avoid naming.

Then I built the same system for a property management company. Different industry. Different nouns. Same six concepts. That's when I knew it wasn't a coincidence.

## The Question Nobody Asks

People hear "six primitives" and nod. Six sounds right. Tidy. Memorable. They ask about the definitions, or which vertical it applies to, or where AI fits.

Nobody asks the hard question: **Why six? Why not five? Why not seven?**

That's the interesting question. Because the answer isn't "I designed six." The answer is "I tried other numbers and they broke."

---

## We Started with Three

The first version of this framework had three concepts: **Rules, Steps, Records.** That's it. Rules govern what happens. Steps describe how. Records prove it did.

This is how most operations software thinks. If-then logic, checklists, audit logs. Three pillars. Clean.

It broke immediately.

"The warped wall needs to be inspected weekly before first class." Where does that live? It's a rule (Policy). But it's also about a specific thing — the warped wall. The rule doesn't make sense without the thing it governs. And the thing has state that matters: surface condition, kick plate wear, ledge grip integrity, landing mat compression. Our coaches needed to know *which* obstacle — the warped wall with the worn kick plate, not the one we just resurfaced.

I needed **Asset** as its own concept. Rules about things aren't the same as rules about process. The warped wall has an identity that persists across every rule and every step that touches it.

Four primitives. Better.

---

## Then People Broke It

"Mike coaches Monday mornings. Sarah covers weekends. Jordan is new and can't do course prep yet."

In the three-primitive model, these are rules. "Assign Mike to Monday morning" is a policy. But Mike isn't a policy — Mike is a person with qualifications, capacity, availability, and a track record. Treating people as rule parameters meant I couldn't ask the questions that actually matter in operations: Who's overloaded? Who's qualified for course prep? Who's available Saturday?

**Person** became its own primitive. Not because it's theoretically elegant, but because every scheduling problem, every coverage gap, every capacity question we tried to model collapsed into "tell me about the people."

When I built the same system for property management, the same thing happened. "Alex inspects properties on the east side. Casey is new and can't do HVAC yet." Different nouns, identical structure.

Five primitives. Almost there.

---

## The Missing Trigger

Five primitives described the *state* of an operation beautifully. Policy, Procedure, Asset, Person, Ledger. You know the rules, the steps, the things, the people, and the history.

But nothing *happened*.

"When does the opening inspection run?" Monday at 8am. "What triggers a party cancellation?" Unsigned waiver 24 hours before the event. "Why did the system alert the coordinator at 2pm?" Because Thursday afternoon has no qualified coach on the schedule.

I was encoding triggers as policies, and it was a mess. "If it's Monday and it's 8am and a qualified coach is on shift, run the opening runbook" isn't a policy — it's a policy reacting to an event. The event is the thing that happened. The policy is the thing that decides what to do about it.

**Event** had to be its own primitive. Without it, you can't distinguish between the rules (Policy) and the things that activate those rules (Event). You end up with policies that contain their own triggers, which means you can't reuse either one independently.

Six primitives.

---

## What About Seven?

I tried. Multiple times. Here's what almost made it and why it didn't.

### Space / Location

"The gym has three zones. The property has twelve rooms." Surely space is a primitive?

No. Space is an attribute of Asset. The warped wall is in Zone A. The water heater is in the basement. Every "space" question I asked was really an asset question with a location dimension. Adding Space as a primitive would have meant every asset has a parallel space record, duplicating identity for no reason.

### Schedule

"The opening runbook runs Monday through Friday at 8am." Isn't that its own thing?

No. A schedule is an Event (the trigger) governed by Policy (the constraints). "Monday 8am" is a scheduled event. "Only if a qualified coach is available" is a policy gate. Combining them into a single "Schedule" primitive meant you couldn't change the trigger without changing the constraint, or vice versa. Keeping them separate is more powerful.

### Workflow / Runbook

"A runbook is a composition of procedures." Doesn't that deserve primitive status?

No. A runbook is a composition, not a primitive. The distinction matters. Primitives are irreducible — they don't decompose further. A runbook decomposes into procedures, which are the actual primitive. Elevating Runbook to primitive status would mean you have two levels of "steps" (runbook steps and procedure steps) with unclear ownership. The composition layer sits above the primitives, not among them.

### Communication / Notification

"The system texts the parent. The system emails the coordinator. The system pages the manager."

Almost. But every notification is an Event (something happened) that triggers a Procedure (send this message) gated by Policy (to whom, through what channel, at what severity). Notification is a composition of existing primitives, not a new one.

---

## The Test

Here's how I know it's six and not seven: **every time I tried to add a seventh, I could decompose it into existing primitives.** And every time I tried to remove one of the six, I lost the ability to model something real.

Remove Policy and you can't express constraints or eligibility. Remove Procedure and there are no ordered steps. Remove Asset and you can't talk about the thing being acted on. Remove Person and you lose who does the work, who's qualified, who's available. Remove Event and nothing triggers — you have a static system with no concept of "something happened." Remove Ledger and you can describe how the operation *should* work, but you can never prove that it did.

It's not elegant by design. It's what survived contact with real operations across a gym, a property management company, a lawn care marketplace, and every vertical we've tested it against since.

---

## The Constraint Story Is the Real Story

Frameworks that sound clean usually are. They were designed top-down, from theory, to be memorable. They work in a slide deck and break in a codebase.

This one is ugly in origin. It came from a software engineer who thought building tools for his own gym would be easy, and discovered that every "simple" feature required the same six concepts. Then building the same software for property management and finding the same six. I didn't set out to find primitives. I set out to stop losing institutional knowledge every time a coach quit. The framework is what survived.

The number isn't the point. The irreducibility is. If you can decompose one of the six into the others, it shouldn't be a primitive. If you find a seventh that can't be decomposed, it should be. I haven't found one yet. I've been looking.

---

**If you find the seventh, I want to hear about it.** The whole thesis depends on there being exactly as many primitives as operations require — no more, no fewer. If the number is wrong, the framework is wrong. That's the bet.
