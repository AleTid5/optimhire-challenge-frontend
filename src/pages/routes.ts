import Login from "./login";
import Cryptocurrencies from "./cryptocurrencies";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/cryptocurrencies",
    component: Cryptocurrencies,
  },
];

export default routes;
