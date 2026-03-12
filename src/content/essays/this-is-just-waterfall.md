---
title: "This Is Just Waterfall"
subtitle: "Authoring the system doesn't mean designing it upfront. It means the rules know who they're talking to."
date: "2026-03-12"
description: "The 'this will slow us down' objection — and why authored systems create less red tape than the systems they replace."
order: 9
series: "The Objections"
draft: true
---

The objection always sounds the same: "If we have to write down every policy and procedure, we'll drown in process. We'll be filling out forms instead of doing work. This is just waterfall with different vocabulary."

It's a reasonable fear. And it's backwards.

---

## The plumber and the new hire

Ralph has been a plumber for thirty years. He walks into a house, listens for two minutes, and knows whether it's a supply line issue or a drain issue. He doesn't need to take photos. He doesn't need to document his diagnostic reasoning. His experience *is* the evidence.

Steve graduated six weeks ago. He's smart, he passed his exams, and he has no idea what a water hammer sounds like in a 1960s copper system. Steve needs to take photos. He needs to document what he found and what he did. Not because he's less capable — because he hasn't earned the trust that Ralph has.

In an inferred system, you get one of two outcomes. Either nobody takes photos — Ralph doesn't because he's Ralph, Steve doesn't because nobody told him to — and a customer disputes a job six months later with nothing in the record. Or you get blanket policy: everyone documents everything, Ralph included. Ralph resents it, starts cutting corners on the paperwork, and now you have a policy that nobody follows.

In an authored system, the policy encodes the nuance:

*Technicians with less than two years of field experience must submit photo evidence for every service visit. Senior technicians are exempt unless the job exceeds $5,000.*

The procedure is the same for both — diagnose, fix, close out. But the gates within the procedure adapt based on the Person's qualifications. Steve hits a gate: upload evidence before marking complete. Ralph doesn't. Both visits get a Ledger entry. Steve's has photos attached. Ralph's doesn't — but the record shows *why*: his qualification exempted him, per the policy.

The flexibility is itself a policy. It's authored, not assumed. And because it's authored, you can change it. If Ralph starts getting callbacks, you tighten his requirements without inventing a new process.

That's less red tape, not more.

---

## This pattern is everywhere

The plumbing example isn't special. Every operation has people at different levels of qualification doing the same work with different levels of oversight. The question is whether the difference in oversight is authored or accidental.

**Engineering.** A staff engineer merges to main with a single approval. A junior engineer needs two reviewers and a CI gate. The staff engineer doesn't write a design doc for a config change. The junior does for anything that touches the data layer. These aren't arbitrary rules — they're policies scoped to qualifications. In most orgs, they're enforced by convention. In an authored system, they're enforced by the system.

The inferred version: the junior pushes a migration on a Friday because nobody told them not to. The staff engineer skips review on something that should have had it because the "two approvals" rule felt like it was for other people. The process is either too loose or too rigid because it can't tell who it's talking to.

**Product.** A senior PM launches a feature to 5% of users with a Slack message. A new PM writes a launch brief, gets sign-off from legal, and runs through a checklist. Both are doing the same thing — shipping a feature. But the gates are different because the risk tolerance is different for someone who's launched forty features versus someone launching their first.

The inferred version: no launch process at all, and a new PM ships something that triggers a compliance issue. Or: a sixteen-step launch checklist that the senior PM ignores because it was designed for the worst case and applied to every case.

**Finance.** A controller approves a $500 vendor payment without escalation. An AP clerk needs a manager's signature for anything over $200. A CFO can authorize up to $50,000 on their own. The thresholds and approval chains aren't bureaucracy — they're risk management scoped to the person's authority.

The inferred version: the approval thresholds are in a PDF from 2019 that nobody reads. The AP clerk asks their manager every time because they don't know what they're authorized to do. The manager approves reflexively because they get too many requests to actually review them. The policy exists on paper. The system ignores it.

**Field operations.** An experienced inspector clears a routine safety check in fifteen minutes with a summary note. A new inspector follows a forty-point checklist with mandatory photos at each station. Same inspection. Different gates. The experienced inspector earned the shorter path through documented qualification — not by being friends with the operations manager.

---

## What red tape actually looks like

Red tape isn't "too many rules." Red tape is rules that can't adapt to context.

The blanket approval chain that treats a $50 purchase the same as a $50,000 one. The code review policy that requires three approvals for a typo fix. The compliance checklist designed for the riskiest possible scenario, applied to every scenario. The weekly status meeting where eight people sit through updates that affect two of them because the system can't route information to the right person.

These aren't symptoms of too much structure. They're symptoms of structure that doesn't know who it's talking to.

An authored system reduces red tape because the Policy is scoped to the Person. The senior engineer doesn't sit through the junior's gates. The experienced inspector doesn't fill out the trainee's checklist. The controller doesn't wait for approval they're authorized to give themselves.

The rules flex because the qualifications are documented. Not because someone made an exception. Not because "Ralph is Ralph." Because the system knows who Ralph is and what he's earned.

---

## The waterfall inversion

Waterfall is designing the entire system before you start. Authored systems are the opposite — you observe what's already happening and name it.

Ralph already skips the photos. That's a fact about your operation. The question is whether "experienced techs skip documentation" is an authored policy with criteria and exceptions, or an unwritten habit that breaks when Ralph retires and nobody knows why the new senior tech is taking photos of everything.

You don't design the system from scratch. You start with one process, author the policies that already govern it implicitly, define the qualifications that already determine who does what, and let the Ledger prove it works. Then you expand.

The red tape objection assumes authored means rigid. It's the opposite. Authored means the system knows the difference between Ralph and Steve — and treats them accordingly.
