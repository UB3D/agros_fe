/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar/Navbar";
import Head from "@/components/HomePageHead/Head";
import Body from "@/components/HomePageBody/Body";
import Mitra from "@/components/Mitra/Mitra";
import Footer from "@/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import useStore from "@/store/store";
import { useEffect } from "react";

export default function index() {
  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const loading = useStore((state) => state.loading);

  // const token = localStorage.getItem("token");
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  console.log(token);
  useEffect(() => {
    fetchUsers();
    // fetchAirlines({ jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbG5hbWUiOiJmYWhtaSBoYWRpIiwiZW1haWwiOiJmYWhtaUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQ5MTEzMzMsImV4cCI6MTY4NDk5NzczM30.S_bx55aLzjdT4yfwDUHMUrglUbs08wg2Np1O95T03gA' })
  }, []);

  if (loading) {
    return (
      <p className="d-flex align-items-center justify-content-center ">
        Loading....
      </p>
    );
  }
  return (
    <>
      <Navbar href="/profile" />
      <Head />
      <Body />
      <Mitra />
      <div className="container">
        <div className="row align-items-center mx-auto ">
          {users.map((item, index) => (
            <div className="col mb-3 mx-auto" key={index}>
              <div
                className="card mx-auto"
                style={{ width: "15rem", borderRadius: "10px" }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-4">{item.name}</h5>
                  <span
                    className="card-text px-2 text-white"
                    style={{
                      backgroundColor: "#459467",
                      width: "100%",
                      paddingTop: "2px",
                      paddingBottom: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    {item.kota}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
