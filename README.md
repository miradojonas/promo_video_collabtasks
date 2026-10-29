# 🎬 CollaB Tasks — Promotional Video

**A promotional motion design video showcasing CollaB Tasks, a collaborative task and project management application.**

Built with [Remotion](https://www.remotion.dev/), React, and TypeScript, this project aims to present the main concepts of CollaB Tasks through animated scenes, visual transitions, sound effects, and French voice-over narration.

---

## 📌 About the Project

**CollaB Tasks Promo Video** is a video production project designed to introduce CollaB Tasks, a collaborative application for organizing projects, managing tasks, and working together as a team.

The video follows a visual narrative that progresses from the challenges of task management to a more organized and collaborative workflow.

The project uses a scene-based architecture, allowing each part of the video to be developed and maintained independently.

### 🎯 Objectives

- Present the purpose and value of CollaB Tasks.
- Illustrate common project and task management challenges.
- Showcase an organized task management workflow.
- Highlight collaboration and team productivity.
- Create a clear, engaging, and professional promotional video.
- Synchronize animations with sound effects and French voice-over narration.

---

## 🎞️ Video Overview

| Property | Description |
|---|---|
| Project | CollaB Tasks Promotional Video |
| Category | Motion Design / Product Promotion |
| Framework | Remotion |
| UI Library | React |
| Language | TypeScript |
| Duration | 54 seconds |
| Resolution | 1920 × 1080 (Full HD) |
| Frame Rate | 30 FPS |
| Composition ID | `CollabTaskPromo` |
| Voice-over | French |
| Output Format | MP4 |

The video is organized into six scenes:

1. **Introduction** — Establishes the context and introduces the subject.
2. **The Problem** — Illustrates the challenges of task and project management.
3. **Dashboard** — Introduces a centralized view of project information.
4. **Kanban Workflow** — Illustrates task organization and progress tracking.
5. **Collaboration** — Highlights teamwork and collaborative interactions.
6. **Outro** — Concludes the presentation.

The exact visual content and timing of each scene are defined in the source code.

---

## ✨ Features

### 🎨 Animated Scenes

- Scene-based video composition.
- Animated UI elements and transitions.
- Structured visual storytelling.
- Consistent visual identity throughout the video.

### 🔊 Audio Integration

- French voice-over narration.
- Sound effects synchronized with selected visual actions.
- Audio timing managed within the Remotion composition.
- Volume adjustments for voice-over and sound effects.

The current implementation integrates the available voice-over and sound-effect assets. Continuous background music is a separate enhancement and should only be considered complete once an appropriate music track has been added and verified.

### 🧩 Modular Architecture

The project separates the main video composition from its individual scenes, making it easier to maintain animations, adjust timing, and improve the audiovisual experience.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Remotion](https://www.remotion.dev/) | Programmatic video creation and rendering |
| [React](https://react.dev/) | Component-based scene composition |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and maintainable code |
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| npm | Dependency management |

Remotion makes it possible to build video compositions using familiar web development technologies and render them programmatically.

---

## 📂 Project Structure

```text
promo-video/
├── public/
│   └── audio/
│       ├── voiceover-fr.mp3
│       ├── transition-soft.mp3
│       ├── whoosh-fast.mp3
│       ├── pop.mp3
│       └── impact-cine.mp3
├── src/
│   ├── CollabTaskPromo.tsx
│   ├── Root.tsx
│   ├── index.ts
│   ├── Scene*.tsx
│   └── aifl/
│       └── Main.tsx
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> **Note:** This is a simplified overview. The exact files and directory structure may vary as the project evolves. Check the repository for the current list of scene components and assets.

### Important Files

| File | Responsibility |
|---|---|
| `src/CollabTaskPromo.tsx` | Main composition, scene sequencing, and audio integration |
| `src/Root.tsx` | Registers Remotion compositions |
| `src/index.ts` | Entry point for Remotion |
| `src/Scene*.tsx` | Individual scene components |
| `public/audio/` | Voice-over and sound-effect assets |
| `package.json` | Dependencies and project scripts |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

A compatible version of Node.js must be used for the installed Remotion dependencies.

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd promo-video
```

Replace `<YOUR_REPOSITORY_URL>` with the actual URL of your GitHub repository.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Remotion Studio

```bash
npm run dev
```

This command opens Remotion Studio, where you can preview the composition, inspect the scenes, and review the animation timeline.

The main composition is:

```text
CollabTaskPromo
```

### 4. Render the Video

```bash
npm run render
```

The output location and filename depend on the render script configured in `package.json`.

To render explicitly to an MP4 file, use:

```bash
npx remotion render src/index.ts CollabTaskPromo out/CollabTaskPromo.mp4
```

Ensure that the output directory exists and that the destination filename does not overwrite a video you want to keep.

### 5. Export a Still Frame

To export a still frame using the configured script:

```bash
npm run still
```

The exact frame and output path depend on the script defined in `package.json`.

---

## 🔊 Audio Assets

Audio resources are stored in:

```text
public/audio/
```

The project currently includes:

| Asset | Purpose |
|---|---|
| `voiceover-fr.mp3` | French narration |
| `transition-soft.mp3` | Subtle transition effect |
| `whoosh-fast.mp3` | Motion and transition effect |
| `pop.mp3` | Short UI interaction effect |
| `impact-cine.mp3` | Emphasis for the final scene |

The exact placement, volume, and duration of each sound are managed by the video composition.

When modifying audio timing, verify that the sound matches the corresponding visual action and does not interfere with the narration.

---

## 🧪 Development and Validation

Before rendering a final version, run the available checks.

### TypeScript Validation

```bash
npx tsc --noEmit
```

This checks TypeScript without generating compiled output.

### Linting

Check the scripts available in `package.json`:

```bash
npm run
```

If a linting tool is configured, run the corresponding script.

### Rendering Validation

Before rendering the complete video:

1. Confirm that `CollabTaskPromo` is registered correctly.
2. Verify that every referenced audio file exists.
3. Check scene timing and transitions.
4. Preview the composition in Remotion Studio.
5. Render a test version if needed.
6. Inspect the generated video and listen to the audio.
7. Render the final MP4 only after the checks succeed.

Successful compilation alone does not guarantee correct visual rendering or audio synchronization.

---

## 📐 Video Timeline

The composition is designed around six consecutive scenes.

| Scene | Start Frame | End Frame | Approximate Duration |
|---|---:|---:|---:|
| Introduction | 0 | 150 | 5 seconds |
| Problem | 150 | 360 | 7 seconds |
| Dashboard | 360 | 630 | 9 seconds |
| Kanban | 630 | 1020 | 13 seconds |
| Collaboration | 1020 | 1410 | 13 seconds |
| Outro | 1410 | 1620 | 7 seconds |
| **Total** | **0** | **1620** | **54 seconds** |

Frame ranges represent the intended scene sequence. Verify the current implementation if any timing changes are made.

---

## 🚧 Current Status

The project has an established Remotion composition, six scenes, French voice-over integration, and synchronized sound effects.

The remaining production work depends on validating the complete audiovisual result.

| Area | Status |
|---|---|
| Main composition | Implemented |
| Six-scene structure | Implemented |
| French voice-over integration | Implemented |
| Sound-effect integration | Implemented |
| TypeScript validation | Previously passed |
| Full audiovisual review | Requires final verification |
| Continuous background music | Not yet confirmed |
| Final corrected MP4 render | Requires completion and verification |

This status should be updated whenever a new version is rendered and validated.

---

## 🔮 Possible Improvements

Future enhancements may include:

- Adding suitable background music.
- Refining transitions between scenes.
- Improving sound mixing and audio fades.
- Fine-tuning voice-over synchronization.
- Optimizing render performance.
- Creating alternative versions for social media.
- Producing different aspect ratios for different platforms.

These are potential improvements rather than claims about features already completed.

---

## 📦 Output and Generated Files

Rendered videos should be stored in the configured output directory, typically:

```text
out/
```

For example:

```text
out/CollabTaskPromo.mp4
```

Generated MP4 files can be large. Avoid committing rendered videos to Git unless they are intentionally part of the repository.

For a public repository, consider using Git LFS or a dedicated video hosting platform if the rendered video must be distributed alongside the source code.

---

## 👨‍💻 Development Notes

- Keep the scene components modular.
- Preserve the existing composition architecture.
- Reuse existing assets whenever possible.
- Verify audio paths after moving or renaming assets.
- Test changes before rendering the full video.
- Keep generated outputs separate from source files.
- Update this README when the composition, audio assets, or production workflow changes.

---

## 📄 License

The license for this project has not yet been specified.

Before distributing the source code or rendered video publicly, confirm the licensing terms for the project and all third-party audio or visual assets.

---

**Built with Remotion, React, and TypeScript.**