/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cerita from "@/components/Cerita/Cerita";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Link from "next/link";
import useRegisterUser from "@/store/useRegisterUser";
import { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const register = useRegisterUser((state) => state.register);
  const loading = useRegisterUser((state) => state.loading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kota, setKota] = useState("");
  const [role, setRole] = useState("");

  const { push } = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    register({ name, email, password, kota, role });

    setEmail("");
    setName("");
    setPassword("");
    setKota("");
    setRole("");
    push("/login");
  };

  if (loading) {
    return (
      <>
        <p>LOADING.....</p>
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
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Nama Lengkap Kerabat
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="col-lg-6 mb-3">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Asal Kota
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setKota(e.target.value)}
            ></input>
          </div>
          <div className="col-lg-6 mb-3">
            <label for="exampleInputPassword1" className="form-label fw-bold">
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
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="col-lg-12 mb-3 ">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Role
            </label>
            <input
              type="text"
              className="form-control w-50"
              id="exampleInputPassword1 "
              placeholder="contoh: admin/user"
              onChange={(e) => setRole(e.target.value)}
            ></input>
          </div>
          <div className="col-lg-12 mb-3 mt-3">
            <a
              onClick={handleOnSubmit}
              className="btn btn-success w-50 text-start fw-bold fs-4"
            >
              {" "}
              Gabung Sekarang
            </a>
            <p className="mt-3 ">
              Sudah Memiliki Akun ?{" "}
              <Link
                href="/login"
                style={{ textDecoration: "none", color: "#459467" }}
              >
                Masuk Sekarang
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
