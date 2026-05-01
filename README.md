# Personal Consulting Website

A clean, minimal single-page consulting website built with Vite + React + TypeScript + Tailwind CSS. Deployable for free on Vercel or Cloudflare Pages.

---

## Quick start

### Prerequisites
- Node.js 18+
- npm 9+

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

### Type check (no build)

```bash
npm run typecheck
```

---

## Deploy for free

### Option A — Vercel (recommended, zero config)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Vercel auto-detects Vite — click **Deploy**
5. Done. Custom domain available on free plan.

### Option B — Cloudflare Pages

1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → Create application → Pages → Connect to Git
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Click **Save and Deploy**

### Option C — Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

---

## Where to edit content

**All site content lives in one file:**

```
src/content/siteContent.ts
```

This includes:
- Your name, title, tagline
- Hero headline and subheadline
- Services (What I do)
- Project cards (Selected work)
- My edge pillars
- Process steps
- Contact details (email, LinkedIn)

**Do not touch the component files** (`src/components/`) unless you want to change layout or structure.

---

## How to add screenshots

### Step 1 — Add your image files

Place screenshots in:

```
src/assets/screenshots/
```

Supported formats: `.png`, `.jpg`, `.webp`

### Step 2 — Import and reference in siteContent.ts

At the top of `src/content/siteContent.ts`:

```ts
import dashboardImg from '../assets/screenshots/dashboard.png'
import qsToolImg from '../assets/screenshots/qs-tool.png'
```

### Step 3 — Assign to the project

Find the project in the `work.projects` array and set the `screenshot` field:

```ts
{
  id: "p1",
  name: "Civil Programme Control Dashboard",
  // ...
  screenshot: dashboardImg,   // ← was null
  screenshotAlt: "Civil programme control dashboard",
}
```

The card will automatically display the image at the correct aspect ratio.

---

## Folder structure

```
consulting-site/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── screenshots/       ← Add your project screenshots here
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── Work.tsx
│   │   ├── MyEdge.tsx
│   │   ├── HowIWork.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Portal.tsx         ← Version-choice landing screen
│   │   └── VersionSwitcher.tsx
│   ├── content/
│   │   ├── siteContent.ts     ← ALL editable content lives here
│   │   └── sharedContent.ts   ← Name, contact, meta (shared across versions)
│   ├── services/
│   │   └── votes.ts           ← Global vote service (localStorage + Cloudflare)
│   ├── versions/
│   │   └── V2Fun.tsx          ← Expressive version
│   ├── App.tsx                ← V1 editorial version
│   ├── Site.tsx               ← Root: Portal / V1 / V2 switcher
│   ├── main.tsx
│   └── index.css
├── workers/
│   └── votes/
│       ├── index.ts           ← Cloudflare Worker source
│       └── wrangler.toml      ← Worker config (KV namespace binding)
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Customisation notes

### Colours
Defined in `tailwind.config.js`:
- `ink` — main text (`#0f0f0f`)
- `paper` — background (`#f5f3ee`)
- `accent` — burnt orange (`#c8532a`)
- `stone` — secondary text (`#8a8278`)

### Fonts
Loaded via Google Fonts in `index.html`:
- **Playfair Display** — headings (display serif)
- **DM Sans** — body text (humanist sans)
- **JetBrains Mono** — labels, metadata, code

To change fonts, update `index.html` (Google Fonts link) and `tailwind.config.js` (fontFamily config).

### Sections
All sections are in `src/components/`. They are assembled in `src/App.tsx`. To reorder sections, change the order in `App.tsx`.

---

## Adding a new project card

In `src/content/siteContent.ts`, add to the `work.projects` array:

```ts
{
  id: "p5",                              // must be unique
  name: "Your Project Name",
  category: "Category · Type",
  problem: "What problem did this solve?",
  outcome: "What was the measurable result?",
  tech: ["Tech1", "Tech2", "Tech3"],
  screenshot: null,                      // or imported image
  screenshotAlt: "Description for accessibility",
},
```

---

## Performance

Production build output:
- CSS: ~19 kB (gzip: ~5 kB)
- JS: ~167 kB (gzip: ~53 kB) — React included
- No external runtime dependencies beyond React

Lighthouse scores on the built site are typically 95+ across all categories.

---

## Global vote counter (Cloudflare Workers + KV)

The portal lets visitors vote for V1 (Considered) or V2 (Expressive). Votes are stored in two places:

| Location | What it stores | Scope |
|---|---|---|
| **Browser `localStorage`** | Which side this visitor voted for (prevents double-voting) + local tally fallback | Per-device |
| **Cloudflare KV** | Two keys: `v1` and `v2`, each holding a running integer count | Global — shared across all visitors |

Cloudflare KV is a globally-distributed key-value store — no database or server required. The Worker reads and increments these two keys on every vote. It's free within Cloudflare's generous free tier (100k reads/day, 1k writes/day).

### Without deploying the Worker (default)

The site works out of the box using localStorage only. Each visitor sees their own local tally. To enable global counts, follow the steps below.

### Deploy the Worker (enables global vote counts)

This deploys the vote API only. It does not publish the website UI.

**Prerequisites:** [Cloudflare account](https://dash.cloudflare.com/sign-up) (free) + Wrangler CLI

```bash
npm install -g wrangler
wrangler login
```

**Step 1 — Create the KV namespace**

```bash
cd workers/votes
wrangler kv namespace create VOTES
```

Wrangler will print something like:
```
✅ Created namespace "VOTES" with id "abc123def456..."
```

Copy that `id`.

**Step 2 — Paste the ID into `wrangler.toml`**

Open `workers/votes/wrangler.toml` and replace the placeholder:

```toml
[[kv_namespaces]]
binding = "VOTES"
id = "abc123def456..."    ← paste your actual ID here
```

**Step 3 — Deploy the Worker**

```bash
wrangler deploy
```

Wrangler will give you a Worker URL like:
```
https://shem-votes.<your-subdomain>.workers.dev
```

Opening that URL in a browser should return JSON such as:

```json
{"v1":0,"v2":0}
```

That means the Worker is live. It is not the website.

**Step 4 — Connect the frontend**

Create a `.env.local` file in the project root:

```
VITE_VOTES_API=https://shem-votes.<your-subdomain>.workers.dev
```

Rebuild and redeploy the site. The Portal will now show real-time global vote counts.

### Deploy the frontend website

The React site is a separate deployment from the Worker. Deploy the frontend after you have the Worker URL.

**Local preview**

```bash
yarn dev
```

or:

```bash
yarn build
yarn preview
```

**Cloudflare Pages**

1. Push the repo to GitHub.
2. In Cloudflare Pages, create a new project and connect the repo.
3. Use build command `yarn build`.
4. Use output directory `dist`.
5. Add an environment variable named `VITE_VOTES_API` with your deployed Worker URL.
6. Deploy the site.

**Vercel / Netlify**

Use the same `VITE_VOTES_API` environment variable in the hosting dashboard before deploying. The frontend reads this at build time.

### What lives where

| Thing | Deploy command | Result |
|---|---|---|
| **Vote API** | `wrangler deploy` from `workers/votes` | Deploys the Worker URL that returns vote JSON |
| **Website UI** | `yarn build` + host on Pages/Vercel/Netlify | Deploys the actual portfolio site |

You need both if you want the live site to show shared vote counts.

### How it works

```
Browser (Portal.tsx)
  └── votes.ts: castVote("v1")
        ├── localStorage: mark this device as voted
        └── POST https://<worker-url>  { side: "v1" }
              └── Cloudflare Worker
                    ├── reads VOTES.get("v1")   →  KV store
                    ├── increments by 1
                    ├── writes VOTES.put("v1", newCount)
                    └── returns { v1: 42, v2: 17 }  →  displayed in Portal
```

### Viewing vote counts

From the Wrangler CLI:

```bash
wrangler kv key get --namespace-id=<your-id> v1
wrangler kv key get --namespace-id=<your-id> v2
```

Or via the Cloudflare dashboard: **Workers & Pages → KV → VOTES**.
