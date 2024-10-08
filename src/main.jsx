import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import CommonFeed from './components/CommonFeed.jsx'
import { UserContextProvider } from "./UserContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/feed",
    element: <CommonFeed />,
  },
  // {
  //   path: '*',
  //   element: <NotFoundPage />
  // }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
