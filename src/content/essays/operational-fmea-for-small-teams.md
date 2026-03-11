---
title: "Operational FMEA for Small Teams"
subtitle: "Most teams already have failure modes. The win is making them explicit before an incident does it for you."
date: "2026-03-08"
description: "A practical way to run FMEA on everyday operations using six primitives: Policy, Procedure, Asset, Person, Event, Ledger."
order: 5
series: "The Foundations"
draft: true
---

## Why This Matters

FMEA is usually associated with regulated industries and formal quality programs. Most small teams assume they are too early, too lean, or too busy for it.

That assumption creates a blind spot. You still have failure modes. You just discover them in production.

If you run operations where people, equipment, customers, and time-sensitive events intersect, you are already doing a low-quality version of FMEA in your head. This essay is about doing a higher-quality version on purpose.

---

## What FMEA Is in Plain English

FMEA asks three useful questions:

1. How can this step fail?
2. What happens if it does?
3. How likely are we to catch it before damage is done?

Classic FMEA scores severity, occurrence, and detection, then prioritizes actions. You do not need a giant template to get value. You need clear definitions, repeatable scoring, and owners.

---

## The Six-Primitives Mapping

If your team is using the six-primitives model, FMEA becomes easier to run consistently.

- `Asset` and `Event` define where and when a failure can occur
- `Procedure` defines the step that can fail
- `Policy` defines control limits and mitigations
- `Person` defines accountability for prevention and detection
- `Ledger` captures evidence, trend lines, and follow-through

This mapping keeps FMEA from drifting into abstract brainstorming. Every failure mode must anchor to concrete system elements.

---

## A Lightweight Workflow (60 Minutes)

Pick one routine that matters and repeats weekly.

1. Choose scope:
Monday opening, incident triage, payment reconciliation, move-in inspection.

2. List 5-10 failure modes:
Use verb phrases tied to procedure steps.
Examples: "inspection skipped," "wrong escalation path chosen," "waiver not verified."

3. Score each mode:
- Severity (1-10): impact if failure reaches customer/system
- Occurrence (1-10): likelihood under current operation
- Detection (1-10): likelihood failure is *not* caught in time

4. Compute RPN:
`RPN = Severity x Occurrence x Detection`

5. Assign one mitigation per top 3 RPNs:
Policy change, procedure gate, automation assist, ownership clarification, or ledger requirement.

6. Set review date:
Re-score in 30 days using actual incidents and near-misses.

The output is not a polished deck. It is a prioritized list of controls that reduce real risk this month.

---

## Example: Gym Opening Routine

Failure mode: obstacle condition check skipped before first class.

- Severity: 9 (injury and trust risk)
- Occurrence: 5 (likely during rushed mornings or coverage changes)
- Detection: 7 (inferred process catches this late, often after use)
- RPN: 315

Mitigations:

- `Policy`: no first class start until check is complete and signed
- `Procedure`: add a hard gate after floor walkthrough
- `Person`: assign explicit opener role with backup owner
- `Ledger`: time-stamped completion record with photo evidence

After 30 days, detection score should drop if the gate and ledger are actually working.

---

## Common Failure Modes in Small Teams

You will likely find versions of these:

- Critical step depends on one veteran operator
- Escalation path is implied, not written
- "Done" means different things to different people
- Exceptions override policy without documentation
- Records exist but cannot answer basic "what/why/who/when" questions

These are not culture problems first. They are system design problems first.

---

## Where AI Helps (and Where It Doesn't)

AI helps most with perception and classification:

- Voice note to structured incident
- Free text to event category
- Photo to condition flags
- Ledger summarization for trend detection

AI does not replace ownership decisions:

- acceptable risk threshold
- escalation rules
- stop/go criteria
- accountability assignments

Use AI to improve signal quality and cycle time. Keep policy and accountability human-authored.

---

## How to Keep It Alive

Most FMEA efforts fail for one reason: they become a one-time workshop artifact.

Operationalize it with three habits:

1. Tie top risks to weekly operating review.
2. Require evidence in the ledger for completed mitigations.
3. Re-score after incidents, near-misses, and staffing changes.

If scores never change, the process is theater. If scores move and incidents fall, the system is learning.

---

## The One-Liner

> FMEA for small teams is not paperwork. It is a fast way to turn recurring surprises into explicit controls, owners, and evidence.
