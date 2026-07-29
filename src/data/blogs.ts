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
    title: "How to Train an AI Like You're Raising Someone, Not Coding Something",
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
];
