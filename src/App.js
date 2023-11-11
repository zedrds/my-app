// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import "./App.css";
import Home from "./views/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./views/RootLayout";
import About from "./views/Maids";
import Header from "./component/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
  
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
