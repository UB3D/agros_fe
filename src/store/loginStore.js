import axios from "axios";
import { create } from "zustand";
import { useRouter } from "next/router";

const useLoginUser = create((set) => ({
  responseAPI: null,
  accessToken: "",
  role: "",
  loading: false,
  error: null,
  login: async (input) => {
    set({ loading: true });
    try {
      const res = await axios.post("http://localhost:5000/login", input, {
        "Content-Type": "application/json",
        // withCredentials: true,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
      // const { push } = useRouter();

      // if (res.data.role === "admin") {
      //   //save the auth token and redirect
      //   localStorage.setItem("token", res.data.accessToken);
      //   {
      //     push;
      //   }
      //   alert("login Successfully");
      // } else if (res.data.role === "user") {
      //   //save the auth token and redirect
      //   localStorage.setItem("token", res.data.accessToken);
      //   {
      //     push2;
      //   }
      //   //  toast.success("login Successfully")
      // }
      // if (res.data.role == "admin") {
      //   // push("/homePageAdmin");
      //   {
      //     pushs;
      //   }
      // } else {
      //   {
      //     pushs2;
      //   }
      // }
      set({ role: await res.data.role });
      set({ responseAPI: await res.data });
      set({ loading: false });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useLoginUser;
