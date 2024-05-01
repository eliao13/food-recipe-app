import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/HomePage";
import Favourites from "../../pages/FavouritesPage";
import Layout from "./Layout";
import ErrorPage from "../../pages/ErrorPage";

export default function NavBar() {
  const navItems = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "Favourites", path: "/favourites", component: <Favourites /> },
    { name: "Error", path: "/*", component: <ErrorPage /> },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navItems.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.component} />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}
