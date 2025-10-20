<!--
Repository: fullStackOpen_Exercise-
Purpose: Short, actionable guidance for AI coding agents working in this workspace.
Do not overwrite this file automatically; prefer merging when updating.
-->

# Copilot / AI assistant instructions

Be concise. Focus on small, local changes unless the user asks for larger refactors. This workspace contains multiple small React + Vite sample projects (exercise folders named like `1.6_unicafe_step_1`, `1.7_unicafe_step_2`, `1.9_unicafe_step_4`, `1.10_unicaf_estep_5`, `unicafe_step_3`).

Key facts an AI should know:

- Each exercise is a standalone Vite React app. The canonical build/dev commands are in each folder's `package.json` under scripts: `dev` (vite), `build` (vite build), `preview` (vite preview), `lint` (eslint).
- The sample apps are small and component-driven. Typical entrypoints:
  - `src/main.jsx` mounts the app.
  - `src/App.jsx` contains the main UI for the exercise (look here first when asked to change behavior or UI).
- Styling is minimal and local: look for files like `Login.css` in the same `src` directories.
- ESLint is configured; prefer small lint-friendly changes. Run `npm run lint` in the target exercise folder when validating edits.

Conventions and patterns to follow:

- Keep changes inside the exercise folder the user is working in (do not modify other exercises unless requested).
- Prefer small component edits and preservations of each file's existing style (e.g., functional components, simple hooks like useState).
- Use existing naming and case (files use .jsx and named default exports like `export default APP`).
- Tests are not present; don't add heavy infra. If adding a small test, place it next to related component and mention it.

Developer workflows (what to run and where):

- To start the dev server for exercise `1.10_unicaf_estep_5` (example):
  - Open a terminal at `1.10_unicaf_estep_5` and run `npm install` once, then `npm run dev` to start Vite dev server.
- To build: `npm run build` in the exercise folder.
- To lint: `npm run lint` in the exercise folder.

Files to inspect first when answering feature/bug requests:

- `package.json` — shows scripts and dependencies.
- `vite.config.js` — small Vite config; usually uses `@vitejs/plugin-react`.
- `src/App.jsx` — main exercise logic and UI.
- `src/main.jsx` — app bootstrap.
- `README.md` in each exercise — may include notes or instructions.

Integration points and external deps:

- Dependencies are minimal: `react`, `react-dom`. Dev dependencies include `vite` and `@vitejs/plugin-react`.
- No backend or network calls are present in these exercises.

When merging edits or creating new files:

- Keep edits localized to a single exercise folder unless the user asks for workspace-wide changes.
- Preserve file-level module type (`type: module` is set in the examples). Use ES modules and default exports to match existing code.
- If adding commands to `package.json`, prefer the same script style used across exercises.

If you can't find a target file or command, ask one clarifying question: which exercise folder should I work in? Provide the relative path.

Examples to reference in edits:

- Entry and script examples: `1.10_unicaf_estep_5/package.json`.
- App example: `1.10_unicaf_estep_5/src/App.jsx` and `src/main.jsx`.

Keep the response short and include file paths when suggesting edits.
