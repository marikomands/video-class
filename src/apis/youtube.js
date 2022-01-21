import axios from "axios";

const KEY = "AIzaSyB2RLLCyts8EmIy0Lz6NOLlFdlzn3OcqeU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
