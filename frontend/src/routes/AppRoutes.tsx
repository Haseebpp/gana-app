import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import App from '@/App'
import Home from '@/pages/Home'
import Orders from '@/pages/Orders'
import OrderDetail from '@/pages/OrderDetail'

const router = createBrowserRouter([
  {
    path: '/',            // ROOT
    element: <App />,     // layout with <Outlet />
    children: [
      { index: true, element: <Home /> },         // “/”
      {
        path: 'orders',                           // “/orders”
        element: <Orders />,                      // page with its own Outlet
        children: [
          { path: ':id', element: <OrderDetail /> }, // “/orders/123”
        ],
      },
      // add more sections here…
    ],
  },
])

export default function AppRoutes() {
  return <RouterProvider router={router} />
}
