import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: " url(/asset/images/foot.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "100px",
        // margin: "0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 d-flex mt-4" style={{ width: "130px" }}>
            {" "}
            <Image
              src="/asset/images/logo2.png"
              alt="Logo"
              width={100}
              height={20}
              style={{ objectFit: "contain" }}
              className="d-inline-block align-text-top nav-logo mb-4"
            />
          </div>
          <div
            className="bg-white mx-3 col-lg-4 mt-1"
            style={{ width: "200px", height: "1.5px" }}
          ></div>{" "}
          <div className=" col-lg-4  ">
            <p className="text-white" style={{ fontSize: "12px" }}>
              PT ANTAR GLOBAL PROSPERO © 2021. All rights reserved.
            </p>
          </div>
          <div className="d-flex col-lg-4">
            <p className="text-white mx-2" style={{ fontSize: "10px" }}>
              SYARAT & KETENTUAN{" "}
            </p>
            <p className="text-white mx-2" style={{ fontSize: "10px" }}>
              KEBIJAKAN PRIVASI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
