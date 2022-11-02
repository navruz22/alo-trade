import io from "socket.io-client";
const baseURL =
  process.env.REACT_APP_API_SOCKET_ENDPOINT || "http://localhost:8080";

const socket = io(baseURL);
const token = JSON.parse(localStorage.getItem("_grecaptcha"));
socket.auth = { token };

export default socket;
