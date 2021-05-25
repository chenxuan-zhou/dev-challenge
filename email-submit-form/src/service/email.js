import axios from "axios";

const http = axios.create({
  baseURL: "https://email-backend-2021.herokuapp.com/api/email",
  headers: {
    "Content-type": "application/json"
  }
});

class EmailService {
  subscribe(data) {
    return http.post("/", data)
  };

  getAll() {
    return http.get("/")
  };
};

export default new EmailService();