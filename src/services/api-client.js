import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "ae5852a27bdabb9c78906eb55d39e874",
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getMovies = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  };
}
export default APIClient;
