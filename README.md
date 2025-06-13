## App Architecture
```
gana-app/                                # 🌳 Project root
│
├── backend/                             # 🧩 "Cell" – raw API logic
│   ├── config/                          # ⚙️ Configuration
│   │   └── db.js                        #     🔗 Connect & export MongoDB instance
│   │
│   ├── controllers/                     # 🧠 Pure functions: req → business → res
│   │   └── user.controller.js           #     📄 User CRUD handlers
│   │
│   ├── middleware/                      # 🪝 Express plumbing (auth, errors)
│   │   ├── auth.middleware.js           #     🔐 JWT/Role validation
│   │   └── error.middleware.js          #     ⚠️ Error catcher
│   │
│   ├── models/                          # 🧬 Mongoose schemas (data DNA)
│   │   └── user.model.js                #     🙍‍♂️ User schema
│   │
│   ├── routes/                          # 🌐 URL surface area
│   │   └── user.routes.js               #     🛣️ /api/user endpoints
│   │
│   ├── validation/                      # 🛡️ Input guards (Joi/Zod)
│   │   └── user.validation.js           #     ✅ User payload schema
│   │
│   └── server.js                        # 🚀 Bootloader: Express + Mongo connect
│
├── frontend/                            # 🧑‍💻 "Face & nervous system" – interactive, perceptive
│   ├── public/                          # 👁️ Public‑facing assets (the senses)
│   │   └── (static files)               #     e.g., favicon, robots, images
│   │
│   └── src/                             # 🧠 Core application code
│       ├── core/                        # 🧠 Central nervous system
│       │   ├── store.js                 #     🧠 Redux store (centralized brain)
│       │   ├── api.js                   #     🔌 Global API client (communication nerve)
│       │   └── hooks.js                 #     🪝 Custom global hooks
│       │
│       ├── lib/                         # 🧰 Shared utilities & libraries (cells & proteins)
│       │   ├── validation.js            #     ✅ Validation helpers
│       │   └── format.js                #     🧾 Data formatting utilities
│       │
│       ├── features/                    # 🏗️ Specialized domains (organs & organ systems)
│       │   ├── auth/                    #     🔐 Auth domain
│       │   │   ├── components/          #         🧩 Reusable auth components (cells)
│       │   │   │   └── LoginForm.jsx    #             Login form UI
│       │   │   ├── authSlice.js         #         🧠 Redux slice (localized logic)
│       │   │   └── authService.js       #         🌐 HTTP calls (domain signals)
│       │   │
│       │   └── user/                    #     🙍‍♂️ User domain
│       │       ├── components/          #         🧩 User components
│       │       │   └── ProfileCard.jsx  #             Profile card UI
│       │       ├── userSlice.js         #         🧠 Redux slice
│       │       └── userService.js       #         🌐 HTTP calls
│       │
│       ├── ui/                          # 🎨 Pure UI elements (appearance & expressions)
│       │   ├── components/              #     ⚛️ General components (atoms & molecules)
│       │   │   ├── Button.jsx           #         Button primitive
│       │   │   └── Modal.jsx            #         Modal primitive
│       │   ├── layouts/                 #     🏛️ Structural layouts (skeleton & muscles)
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
│       ├── routes/                      # 🗺️ Routing configuration (navigation pathways)
│       │   └── AppRoutes.jsx            #     Route map
│       │
│       ├── App.jsx                      # 🚪 Application root component
│       └── main.jsx                     # 🏁 Vite render root (life origin)
│
├── .env                                 # 🧬 Environment configuration (DNA)
└── package.json                         # ⚡ Scripts & dependencies (energy metabolism)
```
