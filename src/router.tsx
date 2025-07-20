import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const PenPage = lazy(() => import('./pages/PenPage'))

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: '/:penId', Component: PenPage },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
