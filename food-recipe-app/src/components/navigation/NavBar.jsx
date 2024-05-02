import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import FavouritesPage from "../../pages/FavouritesPage";
import Layout from "./Layout";
import ErrorPage from "../../pages/ErrorPage";
import { useEffect, useState } from "react";
import fetchAllRecipes from "../../api/fetchAllRecipes";

const API_KEY = "72c169bc-f17d-4bf1-90f0-bcd73db6a45e";

export default function NavBar() {
  const [searchWords, setSearchWords] = useState("");
  const [recipes, setRecipes] = useState([]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      component: <HomePage recipes={recipes} searchWords={searchWords} />,
    },
    { name: "Favourites", path: "/favourites", component: <FavouritesPage /> },
    { name: "Error", path: "/*", component: <ErrorPage /> },
  ];

  useEffect(() => {
    fetchAllRecipes(searchWords, API_KEY).then((data) => {
      setRecipes(data.data.recipes);
    });
  }, [searchWords]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout setSearchWords={setSearchWords} />}>
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
