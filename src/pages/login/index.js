import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cerita from "@/components/Cerita/Cerita";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Link from "next/link";
import useLoginUser from "@/store/loginStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

const index = () => {
  const responseAPI = useLoginUser((state) => state.responseAPI);
  const login = useLoginUser((state) => state.login);
  const loading = useLoginUser((state) => state.loading);
  const role = useLoginUser((state) => state.role);

  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (role === "admin") {
      //save the auth token and redirect
      // localStorage.setItem("token", res.data.accessToken);
      push("/homePageAdmin");
      // alert("login Successfully");
    } else if (role === "user") {
      //save the auth token and redirect
      // localStorage.setItem("token", res.data.accessToken);
      push("/homePage");

      //  toast.success("login Successfully")
    }
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
    // console.log(res.data.role);
    // navigate("/home")
  };

  if (loading) {
    return (
      <>
        <p>LOADING....</p>
      </>
    );
  }

  return (
    <>
      <Navbar href="/login" />
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 mb-3">
            <h1 className="fw-bold">Daftar Sekarang</h1>
            <p className="mt-5 ">
              Mari bergabung bersama Kerabat AGROS Indonesia lainnya.
            </p>
          </div>

          <div className="col-lg-6 mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-bold"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="col-lg-6 mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="col-lg-12 mb-3 mt-3">
            <a
              className="btn btn-success w-50 text-start fw-bold fs-4"
              onClick={handleOnSubmit}
            >
              {" "}
              Masuk Sekarang
            </a>
            <p className="mt-3 ">
              Belum Memiliki Akun ?{" "}
              <Link
                href="/register"
                style={{ textDecoration: "none", color: "#459467" }}
              >
                Dafrar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Cerita className="p text-start" className1="cerita-title2" />

      <Footer />
    </>
  );
};

export default index;
