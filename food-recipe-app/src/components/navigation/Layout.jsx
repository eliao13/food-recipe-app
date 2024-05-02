import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Layout({ setSearchWords }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Favourites", path: "/favourites" },
  ];

  return (
    <div className="layout">
      <nav className="nav-bar flex items-center justify-between">
        <h2>FoodRecipe</h2>
        <SearchBar setSearchWords={setSearchWords} />
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
