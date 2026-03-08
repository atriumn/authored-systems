import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const essays = (await getCollection('essays'))
    .filter((e) => !e.data.draft)
    .sort((a, b) => a.data.order - b.data.order);

  const sections: string[] = [];

  // Header
  sections.push(
    '# authored.systems — Full Content',
    '',
    '> Ten principles for building operational systems where humans author the rules and machines enforce them.',
    '',
    '---',
    ''
  );

  // Ten Principles
  sections.push(
    '# The Ten Principles',
    '',
    '01. Six primitives. Always six.',
    'Every operation decomposes into six things: Policy, Procedure, Asset, Person, Event, Ledger. Everything else is a composition. Nothing decomposes further. Nothing is missing.',
    '',
    '02. "Agent" is a noun that hides verbs.',
    'When you say "AI agent," you stop asking what it actually does. Take the agent apart and you\'ll find the same six bricks every time.',
    '',
    '03. AI perceives and optimizes. Humans author.',
    'AI operates at the edges in three modes: it perceives (unstructured → structured), it optimizes (best choice within constraints), and it detects patterns in the ledger. But AI never authors the rules themselves.',
    '',
    '04. The agent is commodity. Your policy is the asset.',
    'Any model can read email. They\'re interchangeable execution engines. What isn\'t interchangeable is your rules: which emails matter, what "urgent" means in your context, who gets escalated to.',
    '',
    '05. Hallucinations are inevitable. Architecture decides if they matter.',
    'Primitives make hallucinations a classification error — caught at the next gate, corrected, logged. Agents make hallucinations a decision error — acted on before anyone reviews it.',
    '',
    '06. Accountability requires explainability. Explainability requires structure.',
    'Every automated decision must trace to a policy a human wrote, approved, and can change.',
    '',
    '07. You don\'t have procedures. You have habits.',
    'The gap between "what we say we do" and "what we actually do" is where all operational risk lives.',
    '',
    '08. Structure first. AI second.',
    'If you haven\'t written down how your business works, you\'re paying to automate operations you haven\'t defined.',
    '',
    '09. The kill switch test.',
    'What happens if you turn off the AI? If it stops your operation, the AI isn\'t assisting your operation — it is your operation.',
    '',
    '10. Authored beats inferred.',
    'An inferred semantic layer tells you what has happened. An authored system tells you what should happen — and alerts you when reality diverges.',
    '',
    '---',
    ''
  );

  // Glossary
  sections.push(
    '# Glossary — The Six Primitives',
    '',
    '## Policy',
    'The rule. Why something must happen. Policies are declarative — they state what must be true, not how to make it true. Policy is constraint, not intelligence.',
    'Examples: "Can this operator take this job?" (assignment policy), "Does this step require a photo?" (spot check policy), "How many kids fit in a party slot?" (capacity policy)',
    '',
    '## Procedure',
    'The steps. How to do the thing. A procedure is a sequence of actions that satisfies a policy. Procedures are specific — they name the thing, the steps, and the order.',
    '',
    '## Asset',
    'The thing being acted on. An asset has state that can be good or not good. Not all assets are physical — some are ephemeral (a party booking, a job, a legal case).',
    '',
    '## Person',
    'Who does the work. Three roles always emerge: the person doing it (Doer), the person overseeing it (Overseer), the person paying for it (Customer). A person carries two dimensions: availability (when they can work) and qualifications (what they can do).',
    '',
    '## Event',
    'The trigger. What causes work to happen. Types: Scheduled (Monday 8am, Quarterly), Condition-based (Member count > 45, Coverage gap detected), Occurrence-based (Customer books service, Injury reported).',
    '',
    '## Ledger',
    'The record. Proof it happened. Every execution of every procedure writes to the ledger. The ledger is append-only. The ledger feeds back into operations: policies can query the ledger to make decisions.',
    '',
    '## What does "authored" mean?',
    'An operation is authored when its rules, steps, people, things, triggers, and records are made explicit — written down by humans, named, and enforced by the system. The opposite is inferred: policies that exist only because a senior person "just knows."',
    '',
    '## The Flow',
    'Events signal that something happened. Policies decide what to do about it. Runbooks define the work. Procedures execute the steps. People do the work, on Assets. The Ledger records everything. The Ledger feeds back into Policy decisions.',
    '',
    '---',
    ''
  );

  // The Operations Architect
  sections.push(
    '# The Operations Architect',
    '',
    'There\'s a person in every organization who sees the system underneath the work. They don\'t have a title for what they actually do. They should.',
    '',
    'They\'re the engineer who spends more time on the incident response runbook than on the fix itself. They\'re the ops lead who can\'t stop asking "but what happens when Sarah\'s out?" They\'re the founder who draws the same six boxes on every whiteboard.',
    '',
    'What they do is author the system:',
    '- Name the policies that are currently tribal knowledge',
    '- Define the procedures that are currently habits',
    '- Model the assets tracked in someone\'s head',
    '- Map the people with qualifications, capacity, and availability',
    '- Identify the events that trigger work',
    '- Build the ledger — the proof',
    '',
    'Every company is about to plug AI into their operations. The operations architect is the person who does the structuring work before the AI shows up.',
    '',
    '---',
    ''
  );

  // About
  sections.push(
    '# About',
    '',
    'An authored system is one where the rules are explicit, inspectable, and enforced. An inferred system is one where the rules live in someone\'s head.',
    '',
    'Healthcare has authored systems. Aviation has authored systems. Nuclear has authored systems. Not because the people are more disciplined — because regulators forced them to author the system.',
    '',
    'The same six structures that make high-stakes operations reliable can make any operation reliable — if someone authors them.',
    '',
    'authored.systems is written by Jeff Rogers. The framework came from building software in healthcare tech — where authored systems were mandatory — and then building software for a family-owned gym and a property management company, where they weren\'t.',
    '',
    '---',
    ''
  );

  // Essays
  for (const essay of essays) {
    sections.push(
      `# ${essay.data.title}`,
      essay.data.subtitle ? `> ${essay.data.subtitle}` : '',
      `Date: ${essay.data.date}`,
      '',
      essay.body ?? '',
      '',
      '---',
      ''
    );
  }

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
