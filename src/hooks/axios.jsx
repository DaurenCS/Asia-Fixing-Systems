import axios from "axios"

const local = "http://86.107.45.160:8000"
const renderhost = "https://back-asia-fixing.onrender.com"

export default axios.create({
    baseURL: `${local}`,
  });