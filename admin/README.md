# Admin Panel (React + Tailwind)

This `admin/` folder is a production-ready scaffold for a React + TailwindCSS admin panel. It provides reusable components and example pages (Dashboard, Users, Login).

Quick start

1. From the `admin/` folder install dependencies:

```powershell
cd admin; npm install
```

2. Run dev server:

```powershell
npm run dev
```

Environment

- By default the API base url is `REACT_APP_API_URL`. Create a `.env` file in the `admin/` folder and set:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

If you want to use a proxy instead, set `proxy` in `package.json` to your backend host.

Files of interest

- `src/components/ui` - Button, Input, Modal, Table, Card
- `src/components` - Navbar, Sidebar
- `src/layouts/AdminLayout.jsx` - Layout with Sidebar + Navbar
- `src/pages` - Dashboard, Users, Login
- `src/services/api.js` - Axios instance
- `src/context/AuthContext.jsx` - Simple auth provider

Tailwind config

- `tailwind.config.cjs` contains colors and scan paths.

Color theme suggestions

- Primary: `#0076ff` (blue)
- Accent: `#7c3aed` (purple)
- Success: `#10b981` (green)
- Danger: `#ef4444` (red)

Best practices

- Keep UI primitives (Button, Input, Modal) small and composable.
- Table accepts column definitions and renderers so business logic stays in pages.
- Use context for global state like Auth, Theme.
- Keep API calls in `services/` and use hooks for data fetching when needed.
- Keep layout components separate from pages.

Next steps

- Add form validation (e.g. `react-hook-form` + `yup`).
- Add tests for components.
- Add i18n and accessibility checks.

