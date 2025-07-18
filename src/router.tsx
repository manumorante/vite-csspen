import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from '@/pages/Home'
import Pen from '@/pages/Pen'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: '/:penId', Component: Pen },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
