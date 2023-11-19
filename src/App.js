import "./App.css";
import Home from "./views/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./views/About";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SignIn />}>
      {/* <Route index element={<SignIn/>} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
