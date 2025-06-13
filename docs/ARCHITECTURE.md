# Gana App — Architecture

> **Philosophical Reflection**
> This application structure embodies a separation of concerns, where each component in the stack has a distinct, specialized role—much like organs in a living body, or nodes in a distributed network. The app’s architecture is not just technical, but a statement about modularity, maintainability, and the power of abstraction in software engineering.
>
> This build repeats the evolutionary process—beginning with the **cell** (backend server), growing **organs** (database, APIs), evolving the **nervous system** (Redux, routing), and ultimately giving it a **face and personality** (React UI).

---

## Context

- This application is for Dry Cleaning, Laundry, Ironing services on demand or traditional home pick-up and delivery business.
– Codebase have Node ≥ 18, React ≥ 19 using Vite + Shadcn/ui.

| Layer      | Technology             | Purpose                           |
| ---------- | ---------------------- | --------------------------------- |
| Backend    | Node.js · Express      | Server & REST API                 |
| Database   | MongoDB · Mongoose     | Persistent data storage (ODM)     |
| Front‑end  | React 19 · Vite        | Single‑Page Application UI        |
| State      | **Redux Toolkit**      | Client‑side state management      |
| Routing    | React Router           | Page navigation                   |
| Dev Tools  | Nodemon · Concurrently | Hot‑reload & parallel dev servers |
| Middleware | Auth, Validation       | JWT, Zod/Joi, Centralised errors  |
| Comms      | Axios / Fetch          | HTTP bridges (front → back)       |

---

## Annotated Folder‑by‑Folder Architecture

```text
gana-app/                                # 🌳 Project root
│
├── backend/                             # 🧩 "Cell" – raw API logic
│   ├── config/                          # ⚙️  Configuration
│   │   └── db.js                        #     🔗 Connect & export MongoDB instance
│   │
│   ├── controllers/                     # 🧠 Pure functions: req → business → res
│   │   └── user.controller.js           #     📄 User CRUD handlers
│   │
│   ├── middleware/                      # 🪝 Express plumbing (auth, errors)
│   │   ├── auth.middleware.js           #     🔐 JWT/Role validation
│   │   └── error.middleware.js          #     ⚠️  Error catcher
│   │
│   ├── models/                          # 🧬 Mongoose schemas (data DNA)
│   │   └── user.model.js                #     🙍‍♂️ User schema
│   │
│   ├── routes/                          # 🌐 URL surface area
│   │   └── user.routes.js               #     🛣️  /api/user endpoints
│   │
│   ├── validation/                      # 🛡️  Input guards (Joi/Zod)
│   │   └── user.validation.js           #     ✅ User payload schema
│   │
│   └── server.js                        # 🚀 Bootloader: Express + Mongo connect
│
├── frontend/                            # 🧑‍💻 "Face & nervous system" – interactive, perceptive
│   ├── public/                          # 👁️  Public‑facing assets (the senses)
│   │   └── (static files)               #     e.g., favicon, robots, images
│   │
│   └── src/                             # 🧠 Core application code
│       ├── core/                        # 🧠 Central nervous system
│       │   ├── store.js                 #     🧠 Redux store (centralised brain)
│       │   ├── api.js                   #     🔌 Global API client (communication nerve)
│       │   └── hooks.js                 #     🪝 Custom global hooks
│       │
│       ├── lib/                         # 🧰 Shared utilities & libraries (cells & proteins)
│       │   ├── validation.js            #     ✅ Validation helpers
│       │   └── format.js                #     🧾 Data formatting utilities
│       │
│       ├── features/                    # 🏗️  Specialised domains (organs & organ systems)
│       │   ├── auth/                    #     🔐 Auth domain
│       │   │   ├── components/          #         🧩 Reusable auth components (cells)
│       │   │   │   └── LoginForm.jsx    #             Login form UI
│       │   │   ├── authSlice.js         #         🧠 Redux slice (local logic)
│       │   │   └── authService.js       #         🌐 HTTP calls (domain signals)
│       │   │
│       │   └── user/                    #     🙍‍♂️ User domain
│       │       ├── components/          #         🧩 User components
│       │       │   └── ProfileCard.jsx  #             Profile card UI
│       │       ├── userSlice.js         #         🧠 Redux slice
│       │       └── userService.js       #         🌐 HTTP calls
│       │
│       ├── ui/                          # 🎨 Pure UI elements (appearance & expressions)
│       │   ├── components/              #     ⚛️  General components (atoms & molecules)
│       │   │   ├── Button.jsx           #         Button primitive
│       │   │   └── Modal.jsx            #         Modal primitive
│       │   ├── layouts/                 #     🏛️  Structural layouts (skeleton & muscles)
│       │   │   ├── MainLayout.jsx       #         Main site layout
│       │   │   └── AuthLayout.jsx       #         Auth‑specific layout
│       │   └── styles/                  #     🩹 Design system (skin & appearance)
│       │       ├── global.css           #         Global styles
│       │       └── theme.js             #         Theme tokens / Tailwind config
│       │
│       ├── pages/                       # 📄 Full pages (expressions & interactions)
│       │   ├── Home.jsx                 #     Home page
│       │   ├── Register.jsx             #     Register page
│       │   └── Login.jsx                #     Login page
│       │
│       ├── routes/                      # 🗺️  Routing configuration (navigation pathways)
│       │   └── AppRoutes.jsx            #     Route map
│       │
│       ├── App.jsx                      # 🚪 Application root component
│       └── main.jsx                     # 🏁 Vite render root (life origin)
│
├── .env                                 # 🧬 Environment configuration (DNA)
└── package.json                         # ⚡ Scripts & dependencies (energy metabolism)
```

---

## Git Guidelines

| Guideline                           | Rationale                                                                               |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| **One repo, two scaffolds**         | Keep front‑ and back‑end together so cross‑cutting changes stay atomic.                 |
| **Write small, purposeful commits** | Every commit should **compile, test, and tell a story**.                                |
| **Follow Conventional Commits**     | Prefix with `chore:`, `feat:`, `fix:`, `docs:` … for automatic changelogs & clarity.    |
| **Branch model: GitHub Flow**       | `main` + short‑lived *feature* branches unless the team needs the heavier **Git Flow**. |

---

### Commit Plan

#### 1 · Bootstrap & First Push

`chore: initialise repo with .gitignore`

#### 2 · Backend Scaffold

`backend-scaffold: Express server & DB connector`

#### 3 · Frontend Scaffold

`frontend-scaffold: set up Vite + Shadcn/ui`
`frontend-scaffold: install redux toolkit, react router, axios`

#### 4 · Dev‑Experience Integration

`chore(root): add concurrent dev script`

#### 6 · Frontend Scaffold

`frontend-scaffold: Wire the Redux provider and the react router`

### 7 · Incremental **Backend Auth** Commits

| Commit Scope (📂 path)                   | 🍃 Granularity | **Why / What (task)**                                                                     | Conventional‑Commit Message             |
| ---------------------------------------- | -------------- | ----------------------------------------------------------------------------------------- | --------------------------------------- |
| `backend/models/user.model.js`           | Single file    | Canonical **User** schema — email, password hash, roles, timestamps.                      | `feat(user): add user mongoose schema`  |
| `backend/controllers/user.controller.js` | Pair           | Registration & login logic — hash password, issue JWT, return safe profile.               | `feat(user): user registration handler` |
| `backend/routes/user.routes.js`          | Small set      | Map REST: `POST /register`, `POST /login`, `GET /me` with validation.                     | `feat(user): wire routes → controller`  |
| `backend/middleware/auth.middleware.js`  | Chunk          | **JWT guard** — parse header, verify token, attach `req.user`; groundwork for RBAC.       | `feat(auth): add JWT guard middleware`  |
| `backend/middleware/error.middleware.js` | Cross‑cutting  | Centralised error handler → JSON `{status, message, stack}` (stack hidden in production). | `refactor: centralise error handling`   |

---

### 6 · Incremental **Frontend Auth** Commits

*(“Animating the face & nervous system”)*

| Commit Scope (📂 path)                                                          | 🍃 Granularity | **Why / What (task)**                                                                                                                        | Conventional‑Commit Message                |
| ------------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `frontend/src/core/api.js`                                                      | Single file    | Pre‑configured Axios client ⇒ inject `VITE_API_URL`, add `Authorization: Bearer <jwt>`, global error interceptor.                            | `feat(core): bootstrap Axios client`       |
| `frontend/src/features/auth/authSlice.js`                                       | Single         | Redux Toolkit slice **auth** — holds `user`, `token`, `status`; reducers for `loginSuccess`, `logout`, `refreshToken`.                       | `feat(auth): create auth slice`            |
| `frontend/src/features/auth/authService.js`                                     | Pair           | Wrap `/login`, `/register`, `/me` endpoints; persist tokens in `localStorage`; auto‑rehydrate on boot.                                       | `feat(auth): add auth service helpers`     |
| `frontend/src/features/auth/components/`<br>`LoginForm.jsx`, `RegisterForm.jsx` | Two atoms      | Shadcn‑styled, zod‑validated forms; dispatch thunks; show inline errors.                                                                     | `feat(auth): scaffold login & register UI` |
| `frontend/src/routes/AppRoutes.jsx`                                             | Small set      | Add `<AuthGuard>` HOC; protect private routes (`/dashboard`, `/orders`); redirect unauthenticated → `/login` while preserving intended path. | `feat(router): implement auth guard`       |
| `frontend/src/ui/components/NavBar.jsx`                                         | Single         | Show login/signup when *anonymous*; avatar + “Logout” dropdown when *authenticated*.                                                         | `feat(ui): auth‑aware navigation bar`      |
| `frontend/src/core/store.js`                                                    | Modified       | Inject `authSlice`; enable `redux‑persist` for durable sessions.                                                                             | `chore(store): add auth persistence`       |
| `frontend/src/pages/`<br>`Login.jsx`, `Register.jsx`                            | Two pages      | Thin wrappers with layout + forms; set titles; navigate on success.                                                                          | `feat(pages): auth pages MVC`              |
| `frontend/src/App.jsx` + `main.jsx`                                             | Few lines      | Wrap root with `<Provider>` & `<BrowserRouter>`; eagerly dispatch `hydrate()` action to sync token on first paint.                           | `refactor(app): wire redux + router root`  |
| `frontend/src/lib/testing/`                                                     | Test suite     | React Testing Library: (1) renders login page, (2) rejects bad creds, (3) accepts good creds & routes to dashboard.                          | `test(auth): end‑to‑end login flow`        |
| `docs/ARCHITECTURE.md`                                                          | Doc update     | Add auth‑flow diagram; note XSS / CSRF caveats; outline future MFA.                                                                          | `docs: add frontend auth flow`             |

---

### Rolling Development Plan Cycle

```
feature/<area>/<ticket>   →   pull request   →   code review
hotfix/<issue>            →   quick patch    →   tag vX.Y.Z
release/<version>         →   prepare notes  →   tag & deploy
```

> *Architecture begins where abstractions meet purpose.*
> In code—as in cities—clarity of intention is the seed of maintainability.
