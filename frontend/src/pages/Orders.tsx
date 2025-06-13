// Orders.jsx
import { Link, Outlet } from 'react-router'

export default function Orders() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      {/* Nested route link for demo */}
      <Link
        to="123"
        className="text-teal-600 underline hover:text-teal-800"
      >
        View order #123
      </Link>

      {/* Render OrderDetail below when URL is /orders/:id */}
      <Outlet />
    </>
  )
}
