import axios from "axios"

const server = "https://asiafix-pro.com/api"
const local = "http://127.0.0.1:8000/api"
const renderhost = "https://back-asia-fixing.onrender.com"

export default axios.create({
    baseURL: `${server}`,
  });