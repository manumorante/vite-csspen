import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'

import Pen from '@/Pen'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/heart" replace />,
      },
      {
        path: '/:penId',
        Component: Pen,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
