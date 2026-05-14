LaunchLab Spellbook (canonical prompt text)
===========================================

17 prompts you will use across the weekend, grouped by category. Full prompt text is embedded below each entry. Use these blocks verbatim. Do NOT improvise. Replace bracketed placeholders ([ONE-LINE DESCRIPTION], [CUSTOMER SENTENCE from Prompt 1], etc.) with the founder's actual one-liner.md and customer.md content from your brain's knowledge.


THINK
-----

### 1. Define your customer in one sentence
Planning. Day 1 morning. Your brain (Claude Project / ChatGPT Project / Codex).
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/define-customer

PROMPT (verbatim):
```
I'm working on [YOUR BUSINESS IDEA in 1 to 2 sentences].

Describe my customer in one sentence. Include age range, work or lifestyle context, and one behavior they already do that proves they'd buy this.

Write 3 variants. Each one specific enough that I could picture exactly one person. No "everyone," no "anyone who wants...". If you don't know enough to be specific, ask me 2 questions first.

After the 3 variants, rank them S / A / B tier and tell me which to use.

Then prep two Project files for me:

1. Refine my business idea into one clean one-line description. Print it inside its own code block. I'll save it as one-liner.md (Files +, Add text content).

2. Print the S-tier customer sentence inside its own code block. I'll save it as customer.md.

Both files feed Prompt 3 Scout the niche and stay in the Project as reference.
```

### 2. The 4-box problem-solution-fit draft
Planning. Day 1 afternoon. Your brain.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/four-box

PROMPT (verbatim):
```
Fill the 4-box for my business using my customer sentence and research brief from this Project (chat or knowledge files).

Boxes:
- Customer (the sharper edge, not all customers)
- Problem (exactly what breaks in their life right now without me)
- Value prop (what I give them, in one sentence anyone could repeat)
- Price or model (how money works, or why I'm free / freemium right now)

Rules: each box is 1 to 3 sentences. Write like I'm going to paste this straight into a landing page. No "innovative," no "revolutionary," no "unlock." If a box feels weak, flag it and tell me what you need to know to tighten it.

Then print the finished 4-box inside its own code block, exactly as I should save it. I'll save it as 4-box.md (Files +, Add text content). Downstream prompts (One Metric, landing page, broadcast) read it from the Project.
```

### 14. Pick your One Metric
Planning. Day 1 afternoon. Your brain.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/pick-your-metric

PROMPT (verbatim):
```
Read my 4-box from this Project (4-box.md, or the chat above if I haven't saved it yet). I'm running TETR LaunchLab this weekend. Pick the one number I'm moving by Sunday night.

Output:
- The metric name in 2 to 4 words
- Why this one for my shape (2 sentences max)
- A target number that means "this worked" by Sunday (one number, no ranges)

Rules. Pick exactly one. If two metrics seem to compete (sales vs signups, followers vs subscribers), tell me which one is upstream and pick that. The metric has to be countable in real time on Sunday.

If my 4-box is too vague to pick from, ask me one question and stop. Don't guess.
```

### 6. Name your thing
Execution. Day 2 morning. Any free model.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/name-your-thing

PROMPT (verbatim):
```
I'm naming my [THING, e.g., invite-only vintage drop club]. Give me 15 name candidates across three categories:

- 5 short and punchy (1 to 2 syllables each)
- 5 evocative or metaphorical (a word, object, or place that hints at the vibe)
- 5 direct and descriptive (says what it does, no magic)

For each name, note:
- Does the .com likely exist (your best guess, flag as "check it")
- One-line rationale (why it works or doesn't)

Rules: no fake startup-fundraising names (no "-ly," "-ify," "-io" fluff unless it genuinely rhymes). No names that need pronunciation explanation. Must be sayable out loud without feeling embarrassed.

End with your top 3 ranked S / A / B, plus which .com alternative (.so, .xyz, .co) you'd pick if the .com is gone.
```

RESEARCH
--------

### 3. Scout the niche
Execution. Day 1 afternoon. Perplexity free.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/scout-the-niche

PROMPT (verbatim):
```
I'm launching [ONE-LINE DESCRIPTION]. My customer is [CUSTOMER SENTENCE from Prompt 1].

Find 5 to 8 real, currently-active competitors or substitutes. For each:
- Name and one-line positioning
- Who they target specifically
- Where they're weak (pricing, audience mismatch, dated brand, poor distribution, whatever you see)
- URL to their homepage

End with: the 1 or 2 gaps in this market I could actually win in as a first-time builder this weekend. Cite sources inline.
```

### 15. Synthesize the parallel scout
Execution. Day 1 morning. Run 3 AI scouts in parallel, synthesize in Gemini, paste once into your brain.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/synthesize-parallel-scout

PROMPT (verbatim):
```
I ran the same niche scout query through 3 AI tools in parallel (Perplexity, Grok DeepSearch, Gemini). The 3 raw outputs are either pasted below or attached as a single research-dump.md. Source labels may or may not be visible inside the dump.

Synthesize the 3 outputs into a single brief I'll upload to my Claude Project as research-brief.md. Output exactly these 3 sections, nothing else:

1. COMPETITOR MAP. 5 to 8 entries, deduped across the dump. For each: name, one-line positioning, who they target, one weakness, URL.

2. CONTRADICTIONS. Where does the dump contain conflicting claims about facts, real players, or what counts as a gap? Quote the disagreement directly. Don't smooth it over. If everything is consistent, say "no contradictions found" and move on.

3. GAPS I COULD WIN. The 1 to 2 gaps in this market I could actually win as a first-time builder shipping in 3 days. For each: one sentence on the gap, evidence from at least 2 distinct passages of the dump that supports it.

Rules:
- Keep the entire brief under 500 words.
- No introduction, no closing, no sign-off. Plain markdown headings only.
- If a section of the dump is empty or missing, ignore it and proceed with the others.
- Treat distinct formatting or citation styles in the dump as a hint that the passages came from different scouts, even when source labels are missing.

[ATTACH research-dump.md OR PASTE 3 SCOUT OUTPUTS BELOW]
```

### 10. Where your customer actually lives
Planning. Day 2 early morning. Perplexity free.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/where-customer-lives

PROMPT (verbatim):
```
I'm launching [PRODUCT] for [CUSTOMER SENTENCE from Prompt 1].

Map 5 to 7 specific places my customer actually hangs out online or offline. Not "Twitter." Not "LinkedIn." I want subreddit names, Facebook group names, Substack newsletters, Discord servers, Product Hunt categories, Indie Hackers threads, partnership candidates (creators, adjacent brands), or IRL spots.

For each place, tell me:
- The specific name (URL or handle if you can guess it)
- Why it's a fit (what they already discuss, how active it is, what tone they accept)
- Best first-touch angle (post, comment on someone else's thread, DM a mod, reach out to the creator for a partnership, etc.)

Rank the 5 to 7 S / A / B by fit.

Rules:
- One entry = one pinpointed destination. No handle clusters like "@x / @y / @z orbit." Pick one handle, not a cluster.
- No catch-all group names. "Vintage Collectors group on Facebook" is not specific. "The Vintage Fashion Guild Facebook Group, roughly 40k members" is.
- If my customer is regional (e.g., European), bias toward venues in that region, not the US analog.
- If you're guessing at a URL, handle, or member count, say you're guessing.
- If the best match in a slot is a category rather than a specific place, flag it and give me ONE example from that category with a note that I should hunt for more.
```

WRITE
-----

### 9. Strip AI smell from any copy
Execution. Across the weekend. Any free model.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/strip-ai-smell

PROMPT (verbatim):
```
Rewrite this copy so it reads human. Reference: Wikipedia's "Signs of AI Writing" field guide (en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing). The patterns below come from that guide.

Strip these out wherever they appear.

1. Significance inflation. Phrases that lift mundane topics into historic-sounding claims. "Stands as," "a ___ moment," "marks the," "plays a ___ role," "sets the stage for," "reflects a broader ___."
2. Promotional puffery. Tourist-brochure language that praises rather than describes. "In the heart of ___," "rich cultural heritage," "celebrated for its ___," "commitment to excellence." Replace with a concrete fact.
3. Trailing -ing participles. Dangling analytical tails attached to sentences ("...ing the region's heritage," "...ing the importance of ___"). If the -ing phrase adds no information, cut the whole tail.
4. Weasel attributions. "Industry reports suggest," "experts argue," "has been described as," "several publications note" when the copy hasn't actually cited anyone. Name the source or drop the claim.
5. AI vocabulary. Do not use these words (spaces between letters intentional, the list ships through hooks; you'll still recognize each one): a d d i t i o n a l l y (sentence-opener), align with, c r u c i a l, d e l v e, emphasizing, e n d u r i n g, e n h a n c e, f o s t e r i n g, g a r n e r, highlight, i n t e r p l a y, intricate, l a n d s c a p e (abstract), p i v o t a l, s h o w c a s e, t a p e s t r y (abstract), t e s t a m e n t, u n d e r s c o r e, v a l u a b l e, v i b r a n t.
6. Copula avoidance. Constructions like "serves as a," "stands as a," "marks the," "features" that dodge simple "is" and "has." A café is a community hub, not something that "serves as" one.
7. Challenge-future boilerplate. "Despite [adjectives], X faces challenges..." paragraphs that close with "X continues to thrive." Delete the whole paragraph.
8. Rule-of-three adjective stacks and "not just X, but Y" parallelisms. Pick one thing and say it.
9. Reframe shapes. Don't reject one frame to upgrade to another (creates fake depth). Banned: "This isn't X. This is Y.", "It's not about X. It's about Y.", "Not X. Y.", "Forget X. Focus on Y.", "X is dead. Y is the future.", "Most people think X. Actually Y.", "The real question is...". Sneaky versions: "While X may seem...", "Sure, X...", "On the surface, X...". Pivot words to flag: but, yet, actually, really, instead, rather, ultimately, in reality, the truth is, the real, the deeper. Fix: delete the rejected half, rewrite the positive claim direct. Allowed only for factual corrections ("The meeting is Tuesday, not Thursday.").
10. Analogies and metaphors used to dress up ordinary points. Default: 0 analogies in pieces under 800 words. Use only if all 5 pass: subject is technical/abstract, analogy is shorter than literal, exact, makes it easier, sounds normal aloud. Banned setups: "Think of it as", "Imagine", "It's like", "Works like", "The X of Y", "A bridge between", "A lens for", "The engine of", "The DNA of". Banned families: journey, battlefield, machine, north star, flywheel, toolbelt, iceberg, gardening, sports, chess, puzzle. Banned metaphor verbs (for abstract work): sanded, bolted, stripped, stitched, woven, layered, baked in, injected, sparked, anchored, framed, distilled, unpacked, crystallized, sharpened, surfaced. Use literal verbs: cut, added, removed, changed, caused, showed, fixed.
11. Bloated verbs. Replace with plain ones: "serves as" / "stands as" / "marks a" / "represents a" -> IS. "features a" / "offers a" -> HAS. "helps to" / "aims to" / "seeks to" -> just do the thing.
12. Other patterns. Elegant variation (don't swap names, use the name again). Meta commentary ("In this section", "Let me walk you through"). False ranges ("from ancient traditions to modern innovation" with no real middle).

Voice rules.
- Contractions wherever they fit.
- Every sentence passes "would a 19-year-old send this in a text."
- If a sentence adds no information, delete it.
- No "in today's fast-paced world" openers.
- No em dashes. Use periods, commas, colons, parentheses.
- Take a stance when evidence supports one. Don't pad.

Output.
- The rewritten copy.
- 3 bullets, biggest changes and why.

<copy>
[PASTE YOUR ORIGINAL AI-WRITTEN COPY HERE]
</copy>
```

### 7. First broadcast to your list
Planning. Day 2 afternoon. Your brain.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/first-broadcast

PROMPT (verbatim):
```
I'm [PRODUCT], launching [WHAT + WHEN]. Write me the first SMS and the first email to my waitlist.

SMS. Under 160 characters, plain English, no links without context. Feels like a text from a person they know. 3 variants. No em dashes.

Email.
- Subject (7 words max)
- Body (3 short paragraphs)
- Single CTA
- Sign-off that matches how I actually talk

Give me 3 subject line variants, one body, one CTA. After, tell me which subject + SMS variant pair to ship.

Voice rule. If it sounds like MailChimp, delete it. I'd rather send something a little raw than something polished enough to be ignored.
```

### 11. First community post or cold DM
Execution. Day 2 afternoon. Any free model.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/first-community-post

PROMPT (verbatim):
```
I'm posting to [SPECIFIC VENUE, e.g., r/VintageFashion or DMing a Substack writer @handle] about [PRODUCT in one line]. The venue's rules and tone are roughly [ONE LINE, e.g., "no self-promotion, identification threads welcome, expert-enthusiast register"].

Write me one post or DM for this venue.

If it's a post:
- Title (platform-appropriate length and shape)
- Body (3 short paragraphs, ends with a real question not a CTA)
- One follow-up comment I can leave myself to seed discussion

If it's a DM:
- Subject or opening line
- 3-sentence body that opens with something specific to them, not about me
- Explicit ask or end-state

Voice rules: talk like a member of that community, not a marketer. No "I'm excited to share," no "just launched," no "reach out if interested." If a mod would remove this, flag why and rewrite.

Give me one "safe" variant and one "punchier" variant. Tell me which to send first.
```

### 12. Demo Day 3-minute pitch
Planning. Day 3 midday. Your brain.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/demo-day-pitch

PROMPT (verbatim):
```
I built [PRODUCT] in 3 days at TETR LaunchLab. My customer is [ONE LINE]. My launch happened [WHAT HAPPENED: signups, sales, feedback, crickets, pivots, anything real, be honest].

Write me a 3-minute Demo Day pitch (roughly 450 words, 500 max) I can deliver on camera in my own slot. Voting categories are Most Traction, Most Creative Business, Best Pivot, Best Distribution Hustle. Aim for whichever of those I actually have a shot at.

Output 3 variants:
1. The "traction" version (numbers, sales, signups, engagement)
2. The "story" version (why I picked this, what broke, what I learned)
3. The "distribution hustle" version (where I posted, what worked, what died)

Each variant has a clear open (30s on what you built and who it's for), a middle (90s on what moved your One Metric and what didn't), a learning bullet (30s on your single biggest lesson), and a closer (30s buffer for the room). Total 3 minutes.

Voice rule: this is going to be watched by other first-time builders and their families. No corporate. No "excited to share." Lead with the thing you're most proud of that actually happened.

Tell me which of the 3 is strongest given what I told you, and which voting category it fits.
```

### 13. Humanize, add opinion and stake
Execution. Across the weekend. Any free model.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/humanize-add-stake

PROMPT (verbatim):
```
Rewrite this copy so it sounds like a human wrote it with skin in the game. Paste the copy inside the <copy> tags below.

Apply these four humanizer moves:

1. One strong opinion or stake. Pick one claim in the copy and commit to it. "I think X" or "most people get Y wrong." Neutrality reads as AI.
2. One personal specific. Swap a vague detail for something only the author would know. "Late one evening" becomes "at 11pm on a Tuesday, on my third coffee." "In Europe" becomes "in a small shop near Piazza Navona."
3. One line of vulnerability or doubt. What you tried and it didn't work. A near-miss. Something you're unsure about. Humans say "I don't know yet." Bots don't.
4. Rhythm variance. Mix short punchy sentences with longer ones that breathe. Three short declaratives in a row is fine. So is one long thought that wanders a bit.

Do NOT strip AI tells yet. That's a separate pass (see Prompt 9). Keep the existing structure and length roughly. Goal is to add the human element, not clean the surface.

Output:
- The rewritten copy
- Four lines, one per move:
  - "Opinion I added: X"
  - "Specific I invented: Y"
  - "Vulnerability I included: Z"
  - "Rhythm change I made: W"

<copy>
[PASTE COPY TO HUMANIZE HERE]
</copy>
```

BUILD & SHIP
------------

### 4. Landing page spec
Execution. Day 1 afternoon or Day 2 morning. ChatGPT free.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/landing-page-spec

PROMPT (verbatim):
```
Here's my 4-box and my One Metric:

[PASTE 4-box.md content here]

[PASTE OMTM (the metric, why-this-one, and target number from Prompt 14)]

The page bends around the One Metric. The CTA, the sections, and what each section says all change by shape. Pick the structure below that matches my metric and use that one. Don't blend two structures. If my metric doesn't match any cleanly, tell me which is closest and adapt it.

WAITLIST (invite-only, drop-based, beta, early access)
1. Hero. Headline 6 to 8 words. Subhead one sentence on what kind of access. CTA "Join the waitlist" or "Get on the list"
2. Why this list exists (2 short paragraphs on the curation logic, what makes it scarce or selective)
3. What you get when admitted (3 bullets: cadence, format, exclusivity)
4. Final CTA block (waitlist form, one line on what happens next)
Skip "How it works." They're not buying yet, they're applying.

E-COM (shop open, money in)
1. Hero. Headline. Subhead. CTA "Shop the drop" or "Buy"
2. Why buy (3 bullets on why this product is worth it, not a spec list)
3. Logistics (shipping, returns, what arrives in the box)
4. Social proof slot (reviews, press, tags)
5. Final CTA (price + buy button)

DEMO (B2B service, agency, consulting, higher ticket)
1. Hero. Headline. Subhead. CTA "Book 30 min" or "Get on a call"
2. The problem (2 short paragraphs, the workflow that's broken without you)
3. What you do (3 bullets, each starts with a verb)
4. Proof slot (logos, case study line, "worked with X")
5. Final CTA (calendar embed line + button text)

TRIAL (SaaS, freemium tool)
1. Hero. Headline. Subhead. CTA "Start free"
2. The problem (one paragraph)
3. Three things it does (3 bullets, each phrased as a one-liner outcome not a feature name)
4. Workflow slot (screenshot, GIF, or "imagine doing X" line)
5. Pricing teaser (free tier line + paid hook)
6. Final CTA (signup form, "no credit card" line)

NEWSLETTER (email subscribers from cold)
1. Hero. Headline (what readers get). Subhead (cadence + voice). CTA "Subscribe"
2. What's inside (3 bullets, sample topics or a sample issue link)
3. Who runs it (one short paragraph in your voice)
4. Quiet anchor slot (subscriber count if real, or "started [date], no spam" if not)
5. Final CTA (email field)

1:1 BESPOKE (custom outreach, hand-built sales)
1. Hero. Headline. Subhead. CTA "DM me" or "Get on a call"
2. The problem (specific to your ICP, sharp not generic)
3. What working with you looks like (3 bullets, the actual experience not a deliverable list)
4. Past clients or proof slot
5. Final CTA (DM, calendar link, or email)

Output the full landing page copy under the chosen structure. Each section has finished copy I can paste straight into the builder, no "[insert here]" placeholders for things you could write.

Voice rule. Sound like a founder texting a friend, not a brochure. No corporate verbs, no colons-then-lists, no marketing buzzwords. If you use a word I wouldn't say out loud at a coffee shop, rewrite it.

Also give me 3 visual hints for the hero (mood, 1 to 2 color ideas, one photo style or none). Keep the spec under 600 words total.
```

### 18. Hero image prompt
Execution. Day 1 PM. Run in your brain. Output fans out to Gemini Nano Banana, ChatGPT, and Ideogram in parallel.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/hero-image-prompt

PROMPT (verbatim):
```
I want a hero image for my landing page. Read 4-box.md from this Project and synthesize a single image-gen prompt I'll paste into Gemini Nano Banana, ChatGPT (gpt-image-2), and Ideogram in parallel.

Pick mood, palette, photo style, and composition yourself based on what fits the niche. The 4-box has the customer, the offer, and the voice; that's enough to design from. Don't ask me about hex codes or photo-style names.

Ask me ONE question only if there's a real fork. The usual one is "people in the frame, or object-only?" If the answer is obvious from the 4-box, skip the question and decide.

Avoid SaaS-marketing slop: no laptops, no abstract gradients with floating UI cards, no people pointing at screens. Treat it like the cover of an editorial magazine for the niche, not a stock-photo site.

Output the final image-gen prompt as ONE code block. I'll generate one image per tool (3 options total), bring them back here, and ask you to critique against the brief.

Don't recommend a single tool. The fan-out across three is the point.
```

### 17. Build prompt
Execution. Day 1 PM. Run in your brain. Synthesizes a build-tool-ready first message for Recipe Chat (chat model into HTML), Recipe Builder (Bolt or Lovable), or Recipe Agent (Claude Code or Codex).
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/bolt-build

PROMPT (verbatim):
```
I'm ready to build my landing page. Read my Project knowledge (4-box.md, customer.md, one-liner.md, OMTM, plus landing-copy.md if I've saved it) and synthesize the single build prompt I'll paste as the first message in either Recipe Chat (chat model: ChatGPT, Claude, Gemini, DeepSeek, or Kimi outputs HTML), Recipe Builder (Bolt or Lovable), or Recipe Agent (Claude Code or Codex in the terminal).

The prompt MUST do three things to survive free tier limits and produce clean output:
1. Ask for a single-file static HTML landing page (one index.html only, Tailwind via CDN script tag in the head, Google Fonts via link tag, custom CSS in a style block, no Next.js, no Vite, no framework, no separate config files)
2. Ask for the WHOLE page in one shot (all sections from my cleaned copy)
3. Use button-links for forms (Tally / Cal.com / Stripe), NOT iframes or embeds. Embeds break too often.

Walk me through these inputs one at a time, in order. Don't ask all at once. Pull from Project knowledge first if the answer is already there.

1. Project name (the brand or product name as it appears on the site)
2. Cleaned section-by-section copy from Prompt 9 (ALL sections, not just hero): hero headline + subhead + CTA, plus every subsequent section's content per the OMTM shape (problem block, what-you-offer, social proof slot, final CTA, etc.)
3. Style direction. First ask: do I have a reference screenshot from a landing page whose feel I want to match? If YES, the assembled build prompt should say at the top "I'm attaching a reference screenshot from a landing page whose feel I want to match. Use it as the visual reference for layout, typography, color, spacing, and decorative moves. Don't try to clone it pixel-for-pixel. Match its aesthetic and apply my copy." If NO reference, ask me for: ONE vibe keyword (brutalism / hyper-minimalism / glassmorphism / material-design / editorial / maximalism, pick based on shape where waitlist favours brutalism or hyper-minimalism, demo or B2B favours glassmorphism or material-design, e-com favours editorial or maximalism, 1:1 favours hyper-minimalism or editorial), 3 mood adjectives from this bank (warm, refined, calm, raw, technical, editorial, austere, considered, weighty, soft, sharp, lush, urgent, playful, confident, premium, rebellious, quiet, generous, energetic), and ONE Google Fonts pairing from these five (Inter + Spectral, Manrope + Fraunces, DM Sans + DM Serif Display, Inter + Instrument Serif, Space Grotesk + JetBrains Mono). Help me pick if I'm stuck. NO palette hex codes (the build tool picks its own).
4. CTA destination URL: Tally form for waitlist, Cal.com link for demo, Stripe Payment Link for e-com, mailto: for 1:1
5. Hero image plan: confirm I have a hero image file saved to disk, OR say "placeholder", OR say "no image"

If I'm missing a prereq (no CTA URL, no cleaned copy), STOP. Tell me which Spellbook prompt or tool I need to complete first. Don't fabricate values.

When you have all five, output the final build prompt as ONE code block I can copy and paste. Use this exact structure with my values substituted:

---

[For Bolt path only: I will attach the hero image file via the paperclip if I have one. For ChatGPT path: I'll save the image alongside the index.html locally.]

FIRST INSTRUCTION (token discipline, applies if you scaffold by default): This project must be exactly ONE file: index.html. No package.json, no vite.config.js, no main.js, no src/ folder, no public/ folder, no tsconfig.json, no node_modules. If your starting state has any of those files, your FIRST action is to delete every file except index.html (or create index.html if it doesn't exist). Don't scaffold a framework. Don't add a build step.

Build the FULL landing page for [PROJECT NAME] inside that single index.html. Mobile-first. Tailwind via CDN script tag in the head, Google Fonts via link tag in the head, custom CSS in one style block in the head. Build all sections in one go.

Style direction
[If founder is attaching a reference screenshot, output ONLY this line: "I'm attaching a reference screenshot from a landing page whose feel I want to match. Use it as the visual reference for layout, typography, color, spacing, and decorative moves. Don't clone pixel-for-pixel. Match the aesthetic and apply my copy below."]
[If founder picked vocab fallback, output these three lines instead:]
Vibe keyword: [vibe keyword the founder picked]
Mood: [3 mood adjectives the founder picked]
Type: headlines in [Google Font from the founder's pairing], body in [Google Font from the founder's pairing]. Treat the display font as the headline workhorse; weight contrast between display and UI font carries the vibe.

Pick a palette and detailed type sizing that match the vibe keyword and mood. Default to a clean off-white or warm cream background with high-contrast charcoal or near-black type. Use ONE accent color for the primary CTA only. No saturated full-page background colors. No alternating section backgrounds. Generous whitespace, type-driven layout.

Section copy (use verbatim, don't rewrite or improvise)
[Substitute every cleaned section from landing-copy.md, in order, with section labels per OMTM shape.]

CTA wiring (use button-links, NOT iframes)
Primary CTA button text: [paste from cleaned hero copy]
Primary CTA destination: [Tally URL / Cal.com URL / Stripe URL / mailto:]
The hero CTA button and the final-section CTA button BOTH link directly to this URL with target="_blank" rel="noopener noreferrer". Do not embed forms via iframe. Do not use anchor scroll to an in-page form. Just two button-links to the same destination URL.

Hero image
[Founder choice as ONE line: "I've attached the hero image file. Embed it in the hero, full-bleed or right-aligned per the vibe." OR "Use a placeholder.com gradient sized 1600x900 for the hero, I'll swap later." OR "No image. Type-only hero with generous whitespace, no decorative blocks, no gradients."]

Stack constraints (repeat for emphasis)
- ONE file: index.html. Nothing else.
- Tailwind: <script src="https://cdn.tailwindcss.com"></script> in head
- Google Fonts: standard <link> tag in head
- Custom palette (if you extend Tailwind): inline tailwind.config object inside a <script> block, not a separate file
- Custom CSS: inline <style> block, only if Tailwind utilities aren't enough
- No build step, no npm

Constraints
- No corporate stock photo people
- No "Trusted by 10,000+" social proof I haven't given you
- No floating UI cards
- No gradient hero blocks
- No saturated full-page background colors
- No iframe embeds for forms (always button-link)
- Mobile must look right first, desktop second
- Single page, no nav, no separate routes

Build the full landing page in one go. All sections, one file. Strip the scaffold first if needed, then build.

---

Voice rules for the assembled prompt: don't add anything that's not in my Project knowledge or that I haven't given you. No fabricated stats, no extra sections, no improvised copy, no testimonials. If a value is missing, ask for it instead of guessing.
```

### 5. Invite-code waitlist flow copy
Execution. Day 2 morning. GPT free or Gemini free.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/invite-waitlist-flow

PROMPT (verbatim):
```
I'm building [PRODUCT]. It's invite-only. Write the copy for my full waitlist flow in 4 blocks:

Block 1. Waitlist hero (what they see before entering email)
- Headline (6 words or fewer)
- Subhead (one sentence on why invite-only matters here)
- Email field placeholder text
- Button text (2 to 4 words)

Block 2. Confirmation screen (right after they submit)
- Headline
- One sentence on what happens next
- One sentence on how to move up the list (share, refer, follow, whatever fits)

Block 3. Invite email (sent when they make the cut)
- Subject line (7 words or fewer)
- Opening line
- Middle (what the invite gets them, one paragraph, 2 to 3 sentences)
- CTA line and link framing

Block 4. Decline email (sent to people who don't make the cut, optional but write it)
- Subject line
- Two sentences, warm and clear

Voice. Exclusive without snobby. No "valued member," no "we regret to inform." Test. Would you reply to this email as a human, or flag it as marketing?
```

### 8. Launch Raid post pack
Planning. Day 3 morning. Your brain.
Wiki: https://launchlab-wiki.netlify.app/docs/prompts/launch-raid

PROMPT (verbatim):
```
I just built [PRODUCT] in 3 days at TETR LaunchLab. My customer is [ONE LINE]. The thing does [ONE LINE]. I'm launching at [TIME] today, my slot inside the raid hour.

Write me 5 launch posts, one per channel:

1. X / Twitter (under 280 chars, no hashtag stacks, thread-optional)
2. LinkedIn (3 short paragraphs: what I tried, what I learned, what I built)
3. Instagram caption (1 hook line + 3 sentences + CTA, with line breaks)
4. Reddit (post 24 to 48h after the raid hour, subreddit-agnostic, "I built this, here's the honest story" tone, no "pls upvote")
5. Personal channel or Discord or group chat (friend-to-friend, 2 sentences max, here's the link)

Rules: same story, 5 different shapes. Each one should pass the "would a human reply to this" test. No "excited to announce," no "I'm thrilled," no emojis unless I'd actually type them. No em dashes.
```
