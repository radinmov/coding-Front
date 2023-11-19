import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Homepage from './getData';
const routes = [
  {
    path : "/",
    element :<Homepage/>,
  },
  // {
  //   path : "",
  //   element :,
  // },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter(routes)


root.render(
  <RouterProvider router={myRouter} />
  );
  
