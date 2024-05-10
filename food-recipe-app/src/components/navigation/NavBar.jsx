import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import FavouritesPage from "../../pages/FavouritesPage";
import Layout from "./Layout";
import ErrorPage from "../../pages/ErrorPage";
import { useEffect, useState } from "react";
import fetchAllRecipes from "../../api/fetchAllRecipes";
import RecipePage from "../../pages/RecipePage";

export default function NavBar() {
  const [searchWords, setSearchWords] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
      component: (
        <HomePage
          recipes={recipes}
          searchWords={searchWords}
          loading={loading}
        />
      ),
    },
    { name: "Favourites", path: "/favourites", component: <FavouritesPage /> },
    { name: "Recipe", path: "/recipe-item/:id", component: <RecipePage /> },
    { name: "Error", path: "/*", component: <ErrorPage /> },
  ];

  useEffect(() => {
    setLoading(true);
    fetchAllRecipes(searchWords).then((data) => {
      setRecipes(data.data.recipes);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
