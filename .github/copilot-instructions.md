# Copilot Instructions for js_homework

## Project Overview
This repository contains JavaScript homework assignments organized by lessons. Each lesson folder (e.g., `lesson_02`, `lesson_11`) contains HTML files for tasks and a `script/` subfolder for corresponding JS solutions. The project is structured for educational purposes, focusing on small, self-contained tasks.

## Directory Structure
- `lesson_XX/` — Each lesson with its own tasks and scripts
  - `index.html` — Main entry for the lesson
  - `task_X.html` — Individual task pages
  - `script/task_X.js` — JavaScript solution for each task
- `css/` — Shared styles
- `image/` — Images for tasks (where relevant)

## Coding Patterns
- Each JS file solves a specific task described in comments at the top of the file.
- Use clear variable names and keep code readable for students.
- Prefer vanilla JS; avoid frameworks unless explicitly required by the task.
- Solutions often use arrays, loops, and basic DOM manipulation (e.g., `document.write`, `alert`).
- Tasks may require generating random data, aggregating results, or sorting arrays.

## Developer Workflow
- No build system or package manager is used; all code runs directly in the browser.
- To test a solution, open the corresponding HTML file in a browser. Scripts are linked via `<script>` tags.
- Debug using browser DevTools (console, breakpoints).
- No automated tests; manual verification is expected.

## Conventions
- All code is in Ukrainian or English, matching the task description.
- Each task script is independent; avoid cross-file dependencies.
- Use strict mode (`'use strict'`) at the top of JS files.
- For random data generation, use helper functions within the same file.
- Output results using `document.write` or `console.log` for clarity.

## Examples
- See `lesson_11/script/task_2.js` for a multi-step array processing task.
- See `lesson_05/script/task_1.js` for basic DOM and array operations.

## Integration Points
- No external dependencies or APIs are used.
- Images and CSS are referenced relative to the lesson folder.

---

For new tasks, follow the established structure: create a new HTML file and a matching JS file in the appropriate lesson folder. Keep solutions simple and focused on the task requirements.
