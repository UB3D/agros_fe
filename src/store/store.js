import axios from "axios";
import { create } from "zustand";
import jwtDecode from "jwt-decode";

const useStore = create((set) => ({
  users: [],
  usersId: null,
  loading: true,
  error: null,
  responseApi: null,
  fetchUsers: async () => {
    try {
      // hit and catch data from API
      const response = await axios.get("http://localhost:5000/users");

      set({ users: await response.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
  fetchUsersById: async () => {
    const token = jwtDecode(localStorage.getItem("token"));
    const id = token.userId;
    console.log("id =" + id);
    try {
      // hit and catch data from API
      const response = await axios.get("http://localhost:5000/users/" + id);
      console.log(response);
      set({ users: await response.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
  editUser: async (input) => {
    try {
      // hit and catch data from API
      const response = await axios.put("http://localhost:5000/users", input, {
        "Content-Type": "application/json",
      });

      set({ users: await response.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
  deleteUser: async (id) => {
    try {
      // hit and catch data from API
      const response = await axios.delete("http://localhost:5000/users/" + id);
      set({ users: await response.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default useStore;
