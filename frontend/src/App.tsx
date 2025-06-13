import { NavLink, Outlet } from 'react-router'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ----- Top-level navigation ----- */}
      <header className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <nav className="flex gap-6">
          {/* NavLink auto-adds “active” class when the route matches */}
          <NavLink to="/" end className="hover:text-teal-300">
            Home
          </NavLink>
          <NavLink to="/orders" className="hover:text-teal-300">
            Orders
          </NavLink>
        </nav>
      </header>

      {/* ----- Routed content ----- */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet /> {/* children routes render here */}
      </main>

      {/* ----- (Optional) global footer ----- */}
      <footer className="bg-gray-900 text-gray-400 text-center py-2 text-sm">
        © {new Date().getFullYear()} Gana Laundry
      </footer>
    </div>
  )
}
