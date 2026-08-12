export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "first-blog",
    title:
      "How to Train an AI Like You're Raising Someone, Not Coding Something",
    date: "2026-07-29",
    tags: ["AI Training", "LLM", "RLHF"],
    excerpt:
      "After months curating datasets and shaping model behavior through RLHF, here's what I've learned: training AI well has less to do with clever prompts and more to do with patience, honesty, and treating the process like mentorship.",
    content: `
Somewhere along the way, I stopped thinking of it as "training a model" and started thinking of it as raising one.

That sounds dramatic for something that ultimately boils down to datasets, gradients, and feedback loops. But if you've spent real time in the trenches — curating data, writing critiques, ranking responses, watching a model slowly get *less* wrong — you know the mechanical description doesn't capture what's actually happening. You're not just optimizing a loss function. You're shaping judgment.

## Garbage in, garbage out — but slower and sneakier

Everyone knows the cliché. What they don't tell you is how quietly bad data poisons a model. It's rarely one obviously wrong example. It's a thousand subtly inconsistent ones — a rubric applied loosely on a Tuesday afternoon, an edge case two labelers scored differently, a "close enough" answer that slipped through review. None of it looks like a bug. All of it becomes the model's instincts.

So the real work of training AI well starts before any fine-tuning run: it's deciding, with real precision, what "good" actually means for the task at hand — and then holding that bar the same way on example 1 and example 10,000.

## RLHF is basically parenting with a spreadsheet

Reinforcement Learning from Human Feedback gets described in papers as reward modeling and policy optimization. In practice, it feels a lot more like sitting with a curious, overconfident kid and gently, repeatedly saying: *closer, but here's what you missed.*

The model isn't wrong because it's dumb. It's wrong because nobody told it, clearly and consistently, what mattered. Was the answer technically correct but unhelpful? Confident but unverified? Polished but evasive on the actual question? Every one of those needs a different kind of correction, and if your feedback is inconsistent, the model doesn't learn nuance — it learns noise.

The best sessions I've had weren't the ones where I found the most mistakes. They were the ones where I could explain *why* something was wrong in a way that would generalize — the AI equivalent of teaching a principle instead of just marking an answer wrong.

## Preprocessing is where trust is built or broken

Data curation is unglamorous. It's also where most of the actual trust in a model gets built. Deduplication, consistency checks, catching label drift, making sure the "human" side of human feedback stays genuinely human and not just tired — this is the part nobody screenshots for a portfolio, and it's the part that decides whether the eventual model is dependable or just fluent.

Fluent and dependable are not the same thing. A model can sound completely sure of itself and still be wrong. Good training data is what closes that gap — it's how a model learns to distinguish between "I can answer this" and "I can *sound like* I can answer this."

## Measuring the thing you actually care about

One of the more interesting problems I've worked on is measuring human-agent productivity — not just "did the AI respond fast," but whether the collaboration between a person and an agent actually made the *human* better at their job. That reframes the whole training goal. You're not optimizing a model in isolation; you're optimizing a partnership.

That's the shift I'd want every team training AI to make: stop asking "is the model impressive" and start asking "does working with this model make a person more capable, more confident, and less exhausted." Those are very different objectives, and only one of them survives contact with real users.

## What I'd tell someone starting out

Be relentlessly specific about what "correct" means before you touch a single example. Assume every inconsistency you allow will get learned as a pattern. Write feedback like you're explaining reasoning to a smart junior colleague, not grading a test. And never mistake fluency for understanding — in the model, or in yourself.

Training AI is still, underneath all the tooling, a deeply human act of judgment. Get the judgment right, and the model has a chance. Get it wrong, and no amount of scale will save you.
`,
  },
  {
    slug: "second-blog",
    title: "Why I'm Shifting My Focus Toward Architecture",
    date: "2026-08-12",
    tags: ["Architecture", "System Design", "Scalability", "Performance"],
    excerpt:
      "After sitting a senior-level technical interview, I realized how little the framework or language actually mattered — architecture is what separates engineers who can ship features from engineers who can build systems. Here's what I'm studying now, and why.",
    content: `
A while back I sat through a technical interview built for someone with 10+ years of seniority — the kind of exam that isn't really testing whether you know a framework, but whether you can reason about a system. I didn't walk away thinking about React or Node or whatever stack was on the surface. I walked away thinking about *architecture*.

That's the realization that's been sitting with me since: the framework is not the skill. The language is not the skill. Those are tools, and tools change every few years. What doesn't change — what actually compounds over a career — is the ability to reason about how a system is put together, why it behaves the way it does under load, and where it will break first.

## It was never really about the framework

Early on, "senior" felt like it meant knowing more APIs, more syntax, more of the ecosystem. But the interview made it obvious that's not what's being tested past a certain point. Nobody was asking me to recite hook rules. They were asking me to justify *structure* — why a piece of logic lives where it lives, what happens when three more teams start depending on it, what the failure mode looks like at 10x the traffic.

That's architecture. And it's a completely different muscle than "I can build this feature." So I've decided to deliberately study it, instead of picking it up as an accident of experience.

## What I'm actually studying now

A few concrete threads I'm pulling on:

**How components should be structured.** Not just folder conventions, but the actual boundaries — what belongs together because it changes together, and what should be split apart because it doesn't. Bad structure doesn't look wrong on day one; it looks wrong on day two hundred, when a small change ripples through six unrelated places.

**How components should be rendered.** Client-side, server-side, statically, streamed — each choice trades off differently against time-to-interactive, SEO, server cost, and complexity. I want to be able to justify *why* a given part of a system renders the way it does, not just default to whatever the framework does out of the box.

**How to improve CPU usage, both on the server and the client (browser).** Performance work used to feel like an optimization pass at the end. I'm trying to treat it as a design input from the start — understanding where cycles actually get spent, on the server and in the browser, and designing around that instead of firefighting it later.

**How data flows, and where the bottlenecks are.** Most real-world slowness isn't a slow function — it's a bad path data takes through a system: an extra round trip, a cache that isn't there, a dependency that blocks when it shouldn't. Mapping that flow, and learning to spot where it'll choke before it does, feels like the highest-leverage skill on this list.

## Where I go from here

None of this means the frameworks and languages stop mattering — they're still the tools I build with every day. But I'm no longer treating them as the ceiling. The plan is to keep shipping with the tools I know well, while deliberately studying the layer above them: structure, rendering strategy, performance, and data flow — the decisions that hold up (or don't) long after the framework of the year has changed.

If the last few years were about getting fluent in tools, this next stretch is about getting fluent in systems.
`,
  },
];
