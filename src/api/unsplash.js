import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID au2s5_q6xnpTZeExXEaHe8egIP8BiIBnMxCvU0_YLNQ",
  },
});
