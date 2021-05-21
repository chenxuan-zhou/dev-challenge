import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/api/email",
  headers: {
    "Content-type": "application/json"
  }
});

class EmailService {
  subscribe(data) {
    return http.post("/", data)
  }
};

export default new EmailService();