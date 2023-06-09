import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Dashboard } from './screens/Dashboard.tsx';
import { Settings } from './screens/Settings.tsx';
import { CounterView } from './screens/CounterView.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: Dashboard,
        index: true
      },
      {
        path: 'settings',
        Component: Settings
      },
      {
        path: 'counters/:counterId',
        Component: CounterView
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
