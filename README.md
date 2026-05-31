# LoreLens

> A mobile-first AI cultural lens that turns the world around you into context.

LoreLens is a camera-based cultural interpretation app. Point your phone at an object, building, street detail, artifact, or landmark, and LoreLens uses Gemini to explain what it is, why it matters, and how to understand it across cultures.

Instead of giving a plain label, LoreLens tries to produce a small piece of cultural insight: the name, the essence, a cross-cultural analogy, the deeper philosophy, and one thing to look for next.

## What it does

- Captures or uploads an image
- Lets the user crop the important region before analysis
- Sends the image to a server-side Gemini endpoint
- Uses optional location context for landmark-aware interpretation
- Returns a structured explanation with cultural and historical context
- Saves discoveries into local history
- Shows discovered places on a map
- Generates text-to-speech audio for explanations
- Creates a daily recap of the user's discoveries
- Supports multiple interface languages

## Core idea

Most travel and museum apps answer: "What is this?"

LoreLens tries to answer a better question:

> "Why should I care about this?"

It is designed for moments when a user sees something unfamiliar in the real world and wants an explanation that is fast, visual, contextual, and emotionally memorable.

## Features

### AI visual deciphering

LoreLens analyzes an image and returns a structured result:

- `title` — the likely name of the object or place
- `essence` — a short explanation of what it is
- `mirrorInsight` — a cross-cultural analogy
- `philosophy` — the deeper historical or cultural logic
- `quickAction` — a suggestion for what to observe next

### Location-aware interpretation

When location permission is available, LoreLens can pass latitude and longitude to the backend so Gemini can use map grounding for nearby landmarks.

If location is unavailable, the app falls back gracefully and still analyzes the image.

### Camera-first mobile experience

The app is built around a phone-like scanning flow:

- camera viewfinder
- image capture
- crop confirmation
- analysis overlay
- result drawer
- history and map views

The camera is turned off when not needed to reduce battery drain and device heat.

### Personal discovery history

Each analyzed item can be saved with:

- title and explanation
- thumbnail
- timestamp
- optional location

This turns a walk through a city into a personal cultural memory trail.

### Daily recap

LoreLens can summarize the user's discoveries into a reflective daily card with:

- travel-journal style summary
- cultural resonance score
- mood
- tags
- user archetype
- philosophical take

### Multilingual support

The app supports responses and UI settings for:

- English
- Simplified Chinese
- Japanese
- Spanish
- French
- Russian
- Arabic

## Tech stack

- React
- TypeScript
- Vite
- Express
- Gemini API via `@google/genai`
- Leaflet and marker clustering
- Zustand
- i18next
- Tailwind CSS
- Vite PWA tooling

## Project structure

```text
LoreLens/
├── App.tsx                  # Main app flow and camera lifecycle
├── server.ts                # Express server and AI/API routes
├── services/
│   └── geminiService.ts     # Client-side calls to backend AI endpoints
├── components/              # UI views and reusable interface components
├── store/                   # Zustand settings and history stores
├── types.ts                 # Shared TypeScript types
└── package.json             # Scripts and dependencies
```

## Getting started

### Prerequisites

- Node.js
- A Gemini API key

### Installation

```bash
npm install
```

Create a local environment file and add your API key:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

The server also supports:

```bash
API_KEY=your_gemini_api_key_here
```

Optional:

```bash
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

### Run locally

```bash
npm run dev
```

The app runs through the Express/Vite server at:

```text
http://localhost:3000
```

### Build

```bash
npm run build
```

### Start production build

```bash
npm start
```

## API routes

The app uses a small Express backend to keep API keys off the client.

- `POST /api/gemini/decipher` — analyzes an image and returns cultural context
- `POST /api/gemini/speech` — generates audio from text
- `POST /api/gemini/recap` — generates a daily discovery recap
- `GET /api/nominatim/reverse` — reverse geocoding proxy
- `GET /api/unsplash` — image search proxy
- `POST /api/unsplash/download` — Unsplash download tracking proxy

## Environment variables

| Name | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Gemini API key |
| `API_KEY` | Alternative Gemini API key name |
| `UNSPLASH_ACCESS_KEY` | Optional Unsplash API key |

## Current status

LoreLens is an early prototype built from an AI Studio app and expanded into a full-stack React + Express project.

The current version focuses on:

- visual cultural interpretation
- location-aware context
- mobile-first scanning
- personal discovery history
- multilingual output

## Roadmap

- [ ] Improve landmark confidence and source display
- [ ] Add shareable discovery cards
- [ ] Add richer map timeline playback
- [ ] Add offline-first history export
- [ ] Improve onboarding and permission flow
- [ ] Add tests for API routes and parsing logic
- [ ] Add deployment documentation

## License

This project currently does not specify a license.
