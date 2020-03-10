import axios from "axios";

export default {
  getAll: async () => {
    let users = await axios.get(`http://localhost:5000/api/user`);
    return users.data.data || [];
  },
  getById: async (id) => {
    let users = await axios.get(`http://localhost:5000/api/user/` + id);
    return users.data.data || [];
  }
};
