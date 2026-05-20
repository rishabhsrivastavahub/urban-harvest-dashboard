# Urban Harvest Dashboard

A responsive admin dashboard for the fictional food delivery platform **Urban Harvest**.

## Features

- Login screen with email, password, and remember-me support
- Sidebar navigation and top header layout
- Dashboard overview with user profile card and KPI cards for:
  - Total Orders
  - Revenue
  - Active Users
  - Pending Deliveries
- Recent orders table with status tags
- Product management page with:
  - Product cards
  - Add product functionality
  - Search and status filtering
  - Availability tags for product stock
- Redux state management and mock data only
- Responsive layout for desktop and mobile

## Folder structure

- `src/app/store.js` — Redux store setup
- `src/features/` — Redux slices for auth and products
- `src/components/` — Reusable UI components
- `src/pages/` — Application pages: Login, Dashboard, Products
- `src/layouts/` — Dashboard layout wrapper
- `src/data/mockData.js` — Dummy data used across the app
- `src/App.jsx` — Routes and authentication guard
- `src/main.jsx` — React app bootstrap

## Getting started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the displayed local URL in your browser.

### Build for production

```bash
npm run build
```

## Notes

- The app uses React, React Router, Redux Toolkit, and React Icons.
- Currency values are displayed with the Indian rupee symbol (₹).
- The current README does not include deployment details; add repository and demo links if available.

## Deployment

Deployed link- https://urban-harvest-dashboard-ten.vercel.app/

## License

This project is provided for assignment and demo purposes.
