import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID QvwgMU4u3wgibdmXJxP07deSe2hIe_s8oS73WHOyOjk",
  },
});
