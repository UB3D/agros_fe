import Image from "next/image";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const Cerita = (props) => {
  return (
    <div className="container">
      <h1 className={props.className1}>Cerita Kerabat AGROS</h1>
      <div className="row w-75 mx-auto">
        <div className="col-md-6 w1">
          <Image
            src="/asset/images/s3.png"
            alt="Logo"
            width={384}
            height={369}
            className="mx-auto s3"
          />
        </div>
        <div className="col-md-6 w2">
          <p style={{ width: "573px" }} className={props.className}>
            Terinspirasi dari arah mata angin yang membawa pada satu destinasi,
            Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga
            bisa menjadi penghubung para stakeholders dalam aktivitas muatan
            berat, mulai dari shipper, transporter, driver, mitra pemeliharan,
            seller dan buyer intermoda yang menjangkau seluruh penjuru
            Nusantara.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cerita;
