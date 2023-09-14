import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getMovies = (config) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };

  getSingleMovie = (id) => {
    return axiosInstance.get(this.endpoint + "/" + id).then((res) => res.data);
  };
}
export default APIClient;
