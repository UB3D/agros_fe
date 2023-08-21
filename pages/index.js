import Navbar from "@/components/Navbar/Navbar";
import Head from "@/components/HomePageHead/Head";
import Body from "@/components/HomePageBody/Body";
import Cerita from "@/components/Cerita/Cerita";
import Mitra from "@/components/Mitra/Mitra";
import Footer from "@/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Navbar href="/login" />
      <Head />
      <Body />
      <Cerita className="p text-start" className1="cerita-title" />
      <Mitra />
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <Link className="btn btn-success" href="/register">
            Bergabung Sekarang
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
