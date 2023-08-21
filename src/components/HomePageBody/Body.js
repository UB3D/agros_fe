import Image from "next/image";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const Body = () => {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-md-12 text">
          <h1>Mengenal AGROS Indonesia Lebih Dekat</h1>
          <p>
            Agros adalah sistem terpadu satu pintu—one stop service yang
            berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan
            mitra terlatih, efisiensi dan transparansi sistem transportasi,
            kemudahan akses untuk layanan pemeliharaan hingga fitur transaksi.{" "}
          </p>
          <h3>Layanan AGROS Indonesia</h3>
        </div>
        <div className="row card-row mt-3 mb-5">
          <div className="col-sm-12 col-md-12ss cards mt-4">
            <div
              className="card"
              style={{ width: "18rem", borderRadius: "10px" }}
            >
              <Image
                src="/asset/images/1.png"
                alt="Logo"
                width={300}
                height={120}
                className="card-img-top"
                style={{ borderRadius: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Agros Shipper</h5>
                <p
                  className="card-text"
                  style={{ width: "250px", fontSize: "12px" }}
                >
                  Agros adalah sistem terpadu satu pintu—one stop service yang
                  berfokus pada pelayanan jasa logistik muatan berat. Agros
                  menawarkan mitra terlatih, efisiensi dan
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 cards mt-4">
            <div
              className="card"
              style={{ width: "18rem", borderRadius: "10px" }}
            >
              <Image
                src="/asset/images/1.png"
                alt="Logo"
                width={300}
                height={120}
                className="card-img-top"
                style={{ borderRadius: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Agros Shipper</h5>
                <p
                  className="card-text"
                  style={{ width: "250px", fontSize: "12px" }}
                >
                  Agros adalah sistem terpadu satu pintu—one stop service yang
                  berfokus pada pelayanan jasa logistik muatan berat. Agros
                  menawarkan mitra terlatih, efisiensi dan
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 cards mt-4">
            <div
              className="card"
              style={{ width: "18rem", borderRadius: "10px" }}
            >
              <Image
                src="/asset/images/1.png"
                alt="Logo"
                width={300}
                height={120}
                className="card-img-top"
                style={{ borderRadius: "10px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Agros Shipper</h5>
                <p
                  className="card-text"
                  style={{ width: "250px", fontSize: "12px" }}
                >
                  Agros adalah sistem terpadu satu pintu—one stop service yang
                  berfokus pada pelayanan jasa logistik muatan berat. Agros
                  menawarkan mitra terlatih, efisiensi dan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
