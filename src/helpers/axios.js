import axios from "axios";
// base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://api.the-odds-api.com/v4/sports",
});

export default instance;
