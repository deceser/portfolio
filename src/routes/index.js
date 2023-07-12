import Home from "../pages/home";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
