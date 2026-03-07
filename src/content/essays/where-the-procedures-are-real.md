---
title: "I've Worked Where the Procedures Are Real"
subtitle: "What healthcare tech taught me about operations — and why your gym, your property, and your lawn care company need the same discipline."
date: "2026-03-07"
description: "In healthcare tech, procedures weren't optional. Policies weren't tribal knowledge. The ledger was real. Then I left and built software for small businesses — and found the same six structures, with none of the discipline."
order: 10
series: "Phase 2"
draft: true
---

## The Other Side

Before I built software for gyms and property managers, I built software in healthcare tech — the kind where the data touches patients, clinical decisions, and regulatory bodies that don't care about your shipping velocity.

In that world, you don't ship code and hope the procedure was followed. You prove it. You don't have policies in someone's head. You have policies in a system — versioned, reviewed, enforced. You don't skip the audit trail because it's inconvenient. The audit trail is the product.

I didn't appreciate this at the time. It felt like overhead. Like process for the sake of process. Like the kind of bureaucracy that slows engineering teams down.

Then I left and started building software for operations that had none of it.

---

## What Healthcare Tech Looked Like

Every system that touched patient data had a defined set of constraints. Not suggestions. Not best practices. Constraints.

**Policy was authored.** Who can access what. Under what conditions. What happens when the conditions change. These weren't in a wiki nobody reads — they were in the system, enforced at runtime, auditable after the fact. When a regulator asked "who accessed this record and why?" the answer wasn't "let me check Slack." The answer was a ledger entry with a timestamp, an actor, a policy reference, and a justification.

**Procedures were real.** Not "we have a deploy checklist in Confluence." Real procedures with gates. Step 3 doesn't happen until step 2 is verified. The verification isn't a checkbox — it's evidence. Test results. Review approvals. Compliance checks. You can't skip a step because you're confident. The system doesn't care about your confidence.

**The ledger was everything.** Every decision. Every access. Every change. Append-only. Attributed. Timestamped. Not because we were paranoid — because the domain demanded it. When something goes wrong in healthcare, "the model decided" isn't an answer. "The engineer thought it was fine" isn't an answer. The only acceptable answer is a traceable chain: this event triggered this policy, which invoked this procedure, executed by this person, on this asset, and here's the record.

**People had qualifications.** Not "Jordan is senior so Jordan can do it." Explicit qualifications mapped to explicit capabilities. This person is authorized for this operation. That person isn't — not because they're bad, but because authorization requires training, certification, or role assignment that hasn't happened yet.

**Events were classified.** Not "something happened and we reacted." Structured events with severity, category, source, and downstream routing. An anomaly in a data pipeline wasn't a Slack message — it was a classified event that triggered a defined response procedure.

I'm describing the six primitives. I just didn't have the vocabulary yet.

---

## What the Gym Looked Like

Then I left, and my family opened a ninja warrior gym. Kids climbing walls, swinging on obstacles, having birthday parties. Lower stakes than healthcare. Same operational problems.

**Policy was in someone's head.** "We don't let more than 25 kids in a party." Says who? Where is that written? What happens at 26? "We just... know." What happens when the person who "just knows" isn't working that day?

**Procedures were habits.** The Monday opening routine existed as a concept — everyone knew the gym needed to be set up before the first class. But the *steps* varied by who was opening. Mike checks the obstacles first, then the mats, then the sound system. Sarah starts with the bathrooms. Jordan skips the parking lot check because "it's always fine." None of them are wrong, exactly. But none of them are following a procedure, either. They're following habits that approximate a procedure nobody wrote down.

**The ledger was nonexistent.** Did the equipment get inspected last week? Probably. By who? I think Mike. What did he find? Nothing, I guess — he didn't mention anything. Can you prove it? No. What if a kid gets hurt on an obstacle that should have been flagged? Silence.

**People were interchangeable — on paper.** "Any coach can open." Can they? Can Jordan do course prep? Does the new hire know the waiver system? Can the weekend staff handle a birthday party cancellation? The schedule said "staffed." The reality was "staffed, but not with the right person for the work that needed to happen."

**Events were reactive.** Things happened and people responded. No classification. No routing. A parent complains about a dirty bathroom — that's the same priority as a parent reporting a loose bolt on the warped wall? In practice, yes, because there's no system distinguishing them. Just whoever picks up the phone.

Same six primitives. Every single one implicit, scattered, and fragile.

---

## The Gap

Here's what I realized: the difference between healthcare tech and the gym wasn't the stakes. It was whether anyone had been *forced* to author the system.

Healthcare has the FDA. Aviation has the FAA. Nuclear has the NRC. These industries author their operations because the consequences of not doing it are catastrophic and the regulators won't let you skip it.

A gym doesn't have an FDA. Neither does a property management company, a lawn care service, or a 30-person engineering team. Nobody forces them to write down their policies, define their procedures, track their assets, qualify their people, classify their events, or keep a ledger.

So they don't. And the operation works — until it doesn't.

Until the coach who "just knows" the opening routine quits. Until the equipment that "probably" got inspected fails. Until the policy that lived in the owner's head walks out the door with the owner.

The six primitives exist in both environments. In healthcare, they were authored — explicit, inspectable, enforceable. At the gym, they were inferred — implicit, scattered, and dependent on specific people showing up and remembering.

---

## The Discipline Gap Is the Opportunity

Here's the thing that surprised me: the *structuring work* is the same. Writing a policy for "who can access patient data under what conditions" is structurally identical to writing a policy for "who can open the gym on Monday morning." The domain is different. The primitive is the same.

In healthcare, that structuring work was mandated. A compliance team existed to make sure it happened. An entire infrastructure of tools, reviews, and audits enforced it.

At the gym, nobody mandates it. There's no compliance team. There's no budget for operational infrastructure. The founder *is* the system — they hold the policies, teach the procedures, track the assets informally, and serve as the institutional memory.

This works until it doesn't scale. Until the founder goes on vacation. Until the business grows past what one person can hold in their head. Until someone gets hurt and you need to prove the equipment was inspected.

The opportunity isn't "bring FDA-level compliance to gyms." That's absurd. The opportunity is: **the same six structures that make healthcare operations reliable can make any operation reliable — if someone authors them.**

The structuring work that cost millions of dollars of institutional infrastructure in healthcare can now be done on a platform that costs less than a single employee. Not because the work is different. Because AI closes the gap — it sees the unstructured input, it validates the execution, it reads the ledger for patterns. The discipline is the same. The cost of implementing it just dropped by orders of magnitude.

---

## What I Brought With Me

I didn't bring the tools. I brought the mental model.

The instinct that says: if a decision matters, there should be a policy you can point to. If a process matters, there should be steps you can follow without calling the boss. If something happened, there should be a record that proves it. If a person did the work, there should be a reason they were the right person for it.

That instinct isn't healthcare-specific. It's operational. It's the same instinct that makes a good engineer write tests before code, document decisions in ADRs, and build alerts before shipping to production.

The six primitives are just that instinct, formalized. Policy. Procedure. Asset. Person. Event. Ledger. The irreducible structures that every operation needs — whether the regulator demands them or not.

I've worked where the procedures are real. Now I'm building the platform that makes them real everywhere.

---

## The One-Liner

> Healthcare doesn't have better operations because it has better people. It has better operations because someone was forced to author the system. The six primitives are the same everywhere. The only question is whether you author them before the failure — or after.
