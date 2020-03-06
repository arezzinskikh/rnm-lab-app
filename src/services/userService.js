import axios from "axios";

export default {
  getAll: async () => {
    let users = await axios.get(`http://localhost:5000/api/users`);
    return users.data || [];
  }
};
