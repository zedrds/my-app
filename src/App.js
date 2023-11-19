import "./App.css";
import Home from "./views/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Maids from "./views/Maids";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import RootLayout from "./views/RootLayout";
import Book from "./views/Book";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="maids" element={<Maids />} />
      <Route path="book" element={<Book />} />
      </Route>
    </Route>
  )
);
// <Route path="/signup" element={<SignUp />} />
// <Route index element={<SignUp/>} />
function App() {
  return <RouterProvider router={router} />;
}

export default App;
