import { Link, Outlet } from "react-router-dom";
import Home from "../pages/HomePage";
import Favourites from "../pages/FavouritesPage";

export default function Layout() {
  const navItems = [
    { name: "Home", path: "/", component: <Home /> },
    { name: "Favourites", path: "/favourites", component: <Favourites /> },
  ];
  return (
    <div>
      <nav>
        <ul>
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
