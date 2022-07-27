import axios from "axios";

const characterApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default characterApi;
