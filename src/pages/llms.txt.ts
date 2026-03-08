import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const essays = (await getCollection('essays'))
    .filter((e) => !e.data.draft)
    .sort((a, b) => a.data.order - b.data.order);

  const lines = [
    '# authored.systems',
    '',
    '> Ten principles for building operational systems where humans author the rules and machines enforce them.',
    '',
    'authored.systems is an educational site explaining a framework for operational systems.',
    'Every operation decomposes into six irreducible primitives: Policy, Procedure, Asset, Person, Event, Ledger.',
    'AI operates at the edges — perceiving, optimizing, detecting patterns — but humans author the rules.',
    '',
    '## Pages',
    '',
    '- [Ten Principles](https://authored.systems/): The ten principles of authored systems',
    '- [How It Works](https://authored.systems/explain): Interactive scroll-driven visualization of the six primitives',
    '- [Glossary](https://authored.systems/glossary): Definitions of the six primitives',
    '- [The Operations Architect](https://authored.systems/architect): The role that authors the system',
    '- [About](https://authored.systems/about): What "authored" means and why it matters',
    '',
    '## Essays',
    '',
    ...essays.map(
      (e) => `- [${e.data.title}](https://authored.systems/essays/${e.id}): ${e.data.description}`
    ),
    '',
    '## Core Concepts',
    '',
    '### The Six Primitives',
    '- **Policy** — The rule. Why something must happen. Declarative constraints.',
    '- **Procedure** — The steps. How to do the thing. Ordered actions that satisfy a policy.',
    '- **Asset** — The thing being acted on. Has state that can be good or not good.',
    '- **Person** — Who does the work. Carries availability and qualifications.',
    '- **Event** — The trigger. What causes work to happen.',
    '- **Ledger** — The record. Proof it happened. Append-only.',
    '',
    '### Where AI Fits',
    '- **Perception** — Turning unstructured input into structured data',
    '- **Optimization** — Choosing the best option within human-set constraints',
    '- **Pattern Detection** — Finding what humans can\'t see across the ledger',
    '',
    'AI never authors the rules. Humans author. Machines enforce.',
    '',
    '## Full Content',
    '',
    'For the complete text of all pages and essays: https://authored.systems/llms-full.txt',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
