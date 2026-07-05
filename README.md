# TPEO Website

Marketing site for Texas Product Engineering Organization, built with React and Material UI.

## Getting started

**Requirements:** Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000). The page reloads when you save changes.

### Other commands

```bash
npm run build   # Production build (output in /build)
npm test        # Run tests
```

## Project structure

```
src/
├── App.js              # Routes
├── components/         # Shared UI (Header, Footer, FAQ, etc.)
├── pages/              # One folder per route
│   ├── about/          # /
│   ├── newFellow/      # /new-fellow
│   ├── team/           # /team
│   ├── clients/        # /clients
│   ├── sponsors/       # /sponsors
│   ├── join/           # /join
│   └── contact/        # /contact
├── styles/             # Shared layout tokens (pageLayout.js)
├── assets/             # Images and icons
└── themes/             # MUI theme
```

| Route | File |
|-------|------|
| `/` | `pages/about/AboutPage.js` |
| `/new-fellow` | `pages/newFellow/NewFellowPage.js` |
| `/team` | `pages/team/TeamPage.js` |
| `/clients` | `pages/clients/ClientPage.js` |
| `/sponsors` | `pages/sponsors/SponsorsPage.js` |
| `/join` | `pages/join/JoinTPEOPage.js` |
| `/contact` | `pages/contact/ContactUs.js` |

Every page uses the shared `Header` and `Footer`. Page files import from `../../components/`, `../../styles/`, and `../../assets/`.
