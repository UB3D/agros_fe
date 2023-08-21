/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cerita from "@/components/Cerita/Cerita";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Link from "next/link";
// import useRegisterUser from "@/store/useRegisterUser";
// import { useState } from "react";
import { useRouter } from "next/router";
import useStore from "@/store/store";
import { useEffect, useState } from "react";
// import bcrypt from "bcrypt";

const index = () => {
  const users = useStore((state) => state.users);
  const fetchUsersById = useStore((state) => state.fetchUsersById);
  const loading = useStore((state) => state.loading);
  const editUser = useStore((state) => state.editUser);

  console.log(users);
  // const pw = bcrypt.hashSync(users.password);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kota, setKota] = useState("");
  const role = users.role;
  const password = users.password;

  const id = users.id;
  const router = useRouter();

  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // console.log(token);
  // const decode = typeof window !== "undefined" ? jwtDecode(token) : null;
  // console.log(decode);
  // // console.log(decode.userId);
  // const userId = typeof window !== "undefined" ? decode.userId : null;
  useEffect(() => {
    fetchUsersById();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    editUser({ id, name, email, password, kota, role });

    setName("");
    setEmail("");
    setKota("");
    router.reload();
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
            <h1 className="fw-bold">Perbarui Profil</h1>
            <p className="mt-5 ">Nama Lengkap Kerabat </p>
          </div>
          <div className="col-lg-6 mb-3">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Nama Lengkap Kerabat
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={users.name}
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
              defaultValue={users.kota}
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
              defaultValue={users.email}
              id="exampleInputPassword1"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="col-lg-12 mb-3 mt-3">
            <a
              onClick={handleOnSubmit}
              className="btn btn-success w-50 text-start fw-bold fs-4"
            >
              {" "}
              Edit Profile
            </a>
          </div>
        </div>
      </div>
      <Cerita className="p text-start" className1="cerita-title2" />

      <Footer />
    </>
  );
};

export default index;
