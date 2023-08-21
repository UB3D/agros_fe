import React from "react";
import Image from "next/image";
// import Link from "next/link";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const Head = () => {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-12 mx-auto mt-5">
          <Image
            src="/asset/images/agros_bg.png"
            alt="Logo"
            width={1088}
            height={236}
            className="img-fluid head-img mt-3"
          />
          <div className="head-text">
            <h1 className="head-title">Selamat datang, Kerabat!</h1>
            <p className="head-p">
              Kami hadir dengan membawakan solusi terbaik untuk kebutuhan
              logistik Anda. Melayani dengan sepenuh hati untuk kenyaman Anda
              dan keamanan barang sampai pada tujuan. Silakan melakukan
              pendaftaran untuk dapat menikmati layanan kami.
            </p>
            <div className="d-flex mt-3">
              <a className="btn btn-primary mx-2">
                {" "}
                <span>MASUK</span>
              </a>
              <a className="btn btn-dark mx-2">DAFTAR</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
