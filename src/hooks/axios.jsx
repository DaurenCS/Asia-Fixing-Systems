import axios from "axios"

const server = "http://86.107.45.160:8000"
const local = "http://127.0.0.1:8000"
const renderhost = "https://back-asia-fixing.onrender.com"

export default axios.create({
    baseURL: `${local}`,
  });