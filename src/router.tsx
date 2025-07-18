import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'

import App from '@/App'

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
        Component: App,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
