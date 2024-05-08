import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Layout({ setSearchWords }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Favourites", path: "/favourites" },
  ];

  return (
    <div className="layout pt-16 px-8 flex flex-col gap-16">
      <nav className="nav-bar">
        <Link href="/">
          <h2>FoodRecipe</h2>
        </Link>
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
