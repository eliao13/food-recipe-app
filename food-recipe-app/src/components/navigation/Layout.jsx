import { Link, Outlet } from "react-router-dom";
import Home from "../../pages/HomePage";
import Favourites from "../../pages/FavouritesPage";
import SearchBar from "./SearchBar";

export default function Layout() {
  const navItems = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "Favourites", path: "/favourites", component: <Favourites /> },
  ];
  return (
    <div className="layout">
      <nav className="nav-bar flex items-center justify-between">
        <h1>FoodRecipe</h1>
        <SearchBar />
        <ul className="flex gap-4">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
