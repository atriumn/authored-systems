---
title: "I've Worked Where the Procedures Are Real"
subtitle: "I spent a decade thinking 'process' was a bureaucratic tax. Then I opened a gym and realized it's the only thing that keeps a business from being a series of lucky breaks."
date: "2026-03-07"
description: "A software engineer leaves healthcare tech, opens a gym, and discovers that every small business is a system with no documentation and a lot of side effects."
order: 1
series: "The Core Thesis"
---

## The Bureaucratic Tax

I spent years building software in healthcare tech — the kind where the data touches patients, clinical decisions, and regulatory bodies that don't care about your shipping velocity.

In that world, the system won't let you proceed without a policy check. Step 3 doesn't happen until step 2 is verified — not with a checkbox, but with evidence. Every access, every decision, every change gets written to an append-only ledger with a timestamp, an actor, and a justification. When a regulator asks "who accessed this record and why?" the answer isn't "let me check Slack." It's a traceable chain from trigger to outcome.

I thought this was overhead. Bureaucracy slowing engineers down. Process for the sake of process.

Then I left and opened a gym.

---

## A System With No Documentation

My family owns a ninja warrior gym. Kids climbing walls, swinging on obstacles, having birthday parties. I figured building software for my own operation would be the easy part. I'd spent years building software for other people's problems.

What I found was a system with no documentation and a lot of side effects.

The Monday opening routine existed as a concept — everyone knew the gym needed to be set up before the first class. But Mike checks the obstacles first, then the mats, then the sound system. Sarah starts with the bathrooms. Jordan skips the parking lot check because "it's always fine." Three people, three different procedures, none of them written down. None of them wrong, exactly. But none of them following a procedure, either. They're following habits that approximate a procedure nobody authored.

"We don't let more than 25 kids in a party." Says who? Where is that written? What happens at 26? "We just... know." What happens when the person who "just knows" isn't working that day?

"Any coach can open." Can they? Can Jordan do course prep? Does the new hire know the waiver system? Can the weekend staff handle a birthday party cancellation? The schedule said "staffed." The reality was "staffed, but not with the right person for the work that needed to happen."

Did the equipment get inspected last week? Probably. By who? Mike, I think. What did he find? Nothing, I guess — he didn't mention anything. Can you prove it? No. What if a kid gets hurt on an obstacle that should have been flagged?

Silence.

A software engineer would look at this and say: no input validation, no error handling, no logging, no tests, no types. The entire system runs on implicit state held by specific people. It works the same way a codebase with no tests "works" — until someone pushes to production on a Friday.

---

## The Tribal Knowledge Trap

Every small business I've looked at since — property management, lawn care, field services — has the same problem. The operation isn't built. It's *remembered*.

The best person does it right because they've done it a hundred times. The new person does it wrong because nobody wrote it down. The owner holds the whole thing together not because they designed a system, but because they *are* the system. They hold the policies, teach the procedures, track the assets in their head, and serve as the institutional memory.

This works. It works surprisingly well, actually, for a long time. Which is why nobody fixes it.

It stops working when the person who holds the knowledge goes on vacation. Or gets sick. Or quits. Or when the business grows past what one person can hold in their head. Or when a parent asks why their kid was on an obstacle that should have been flagged, and you have nothing to show them.

The fragility isn't in the people. The people are great. The fragility is that the system lives *inside* the people instead of alongside them.

---

## What the FDA Actually Does

Here's the thing I got wrong about healthcare: I thought the FDA made healthcare *better*. It doesn't. It makes healthcare *authored*.

The FDA doesn't make doctors smarter or nurses more careful. It forces the system to be written down. The policy is in the code, not in the breakroom. The procedure has gates that can't be skipped. The record exists whether or not someone remembered to write it down. The person doing the work has explicit qualifications mapped to explicit capabilities — not "Jordan is senior so Jordan can do it."

The difference between healthcare and the gym wasn't the stakes. It wasn't the people. It was that someone had been *forced* to author the system. To take the operation that lived in one person's head and turn it into something that survives that person's absence.

Healthcare has the FDA. Aviation has the FAA. Nuclear has the NRC. These industries didn't author their operations because the people are more disciplined. They authored them because regulators wouldn't let them skip it.

A gym doesn't have an FDA. Neither does a property management company or a 30-person engineering team. Nobody forces them. So the system stays in people's heads, and the operation runs on heroics until it can't.

---

## Why Now

Why didn't the gym author its system before? Same reason most small businesses don't: authoring a system used to require a compliance department.

In healthcare, the structuring work — writing policies, defining procedures, qualifying people, classifying events, maintaining the ledger — was done by teams of people with specialized roles and enterprise tools. The infrastructure to author a system cost more than most small businesses make in a year. The discipline was real, but so was the price tag.

That's what changed. Not the discipline — the cost.

AI reads a coach's voice note describing a damaged obstacle and turns it into a structured inspection record. It watches how your best opener runs Monday morning and proposes the procedure they never wrote down. It reads three months of incident reports and surfaces the pattern you'd never see: *obstacles in Zone B get flagged 4x more often than Zone A, but only on weekends when the newer coaches are working.* That's a staffing problem dressed up as an equipment problem, and no human reads 90 inspection logs to notice it.

The perception layer — turning unstructured reality into structured data — used to be the expensive part. A dropdown menu that says "select issue type" doesn't compete with an LLM that reads a blurry photo of a worn kick plate and extracts condition, location, and severity before the first rule fires.

The structuring work is the same work it's always been. The same six structures that make healthcare reliable can make any operation reliable. The difference is that implementing them no longer requires a $5M compliance department. It requires someone willing to author the system and a platform that meets them where the work actually happens — in voice notes, photos, texts, and the messy reality of a Tuesday morning.

---

## The Mental Model

I didn't bring the tools from healthcare. I brought the instinct.

The instinct that says: this is a system, and someone should document it. Not because a regulator demands it, but because the alternative is a business that runs on luck and specific people showing up.

A software engineer would call it the same thing they call an undocumented codebase with no tests and implicit dependencies on specific team members: *tech debt*. Except it's not tech debt. It's *operational* debt. And every business that runs on tribal knowledge is accumulating it.

You don't need a regulator to force you to be reliable. You just need to stop pretending your business lives in your head.

---

## The One-Liner

> Healthcare doesn't have better operations because it has better people. It has better operations because someone was forced to author the system. The only question is whether you author yours before the failure — or after.
