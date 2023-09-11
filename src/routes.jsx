import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import MovieSearch from "./pages/MovieSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies/:id", element: <MovieDetails /> },
      { path: "search/movie", element: <MovieSearch /> },
    ],
  },
]);

export default router;
