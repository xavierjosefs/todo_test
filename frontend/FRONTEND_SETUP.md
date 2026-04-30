# Frontend Setup

## Current Stack

- React 19
- Vite 8
- Tailwind CSS 3
- ESLint 10

## Current File Map

```text
frontend/
  public/
    favicon.svg
  src/
    api/
      todoApi.js
    components/
      ConfirmModal.jsx
      EmptyState.jsx
      Header.jsx
      StatsCard.jsx
      TodoCard.jsx
      TodoForm.jsx
      TodoList.jsx
    App.jsx
    index.css
    jsx.d.ts
    main.tsx
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
```

## API Endpoints Used

- `GET /api/todos`
- `GET /api/todos/:id`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `PATCH /api/todos/:id/toggle`
- `DELETE /api/todos/:id`

## UI Notes

- `App.jsx` coordinates loading, CRUD actions, and modal state.
- `TodoForm.jsx` handles create/edit validation.
- `ConfirmModal.jsx` replaces the native browser confirm for deletes.
- `TodoList.jsx` and `TodoCard.jsx` render the task collection.
