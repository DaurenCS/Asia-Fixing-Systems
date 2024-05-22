import axios from "axios"

const local = "http://127.0.0.1:8000"
const renderhost = "https://back-asia-fixing.onrender.com"

export default axios.create({
    baseURL: `${renderhost}`,
  });