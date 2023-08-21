// import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = (props) => {
  return (
    <nav className="navbar shadow" style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid ms-3">
        <a className="navbar-brand mt-3 " href="#">
          <Image
            src="/asset/images/logo.png"
            alt="Logo"
            width={167}
            height={34}
            className="d-inline-block align-text-top nav-logo mb-4"
          />
        </a>
        <div className="row">
          <div className="col nav-right  mt-2">
            <Link href="/Login" className="nav-text mx-2 ">
              TENTANG
            </Link>
            <a href={props.href} className="nav-text mx-2">
              PROFILE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
