/* eslint-disable react-hooks/rules-of-hooks */
// "use Client";
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
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function index() {
  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const deleteUser = useStore((state) => state.deleteUser);
  const loading = useStore((state) => state.loading);

  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  console.log(token);
  useEffect(() => {
    fetchUsers();
    // fetchAirlines({ jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbG5hbWUiOiJmYWhtaSBoYWRpIiwiZW1haWwiOiJmYWhtaUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQ5MTEzMzMsImV4cCI6MTY4NDk5NzczM30.S_bx55aLzjdT4yfwDUHMUrglUbs08wg2Np1O95T03gA' })
  }, []);
  const deleteHire = async (id, e) => {
    deleteUser(id, e).then((response) => {
      // console.log(response);
      router.reload();
    });
  };

  const submitDelete = (id, e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteHire(id, e),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };
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
                <a
                  type="submit"
                  onClick={(e) => submitDelete(item.id, e)}
                  className="x"
                >
                  <Image
                    src="/asset/images/x.png"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="img-fluid head-img mt-3"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
