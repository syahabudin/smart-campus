import React from "react";
import Image from "../../img/natural.jpg";
import "./card.css";

function Card() {
  return (
    <div>
      <div className="container">
        <div className="padding">
          <div className="font">
            <div className="top">
              <h6>Universitas Nahdlatul Ulama</h6>
              <h6>Nusa Tenggara Barat</h6>
              <p>Jl. Pendidikan No. 06 Mataram - 8315</p>
              <p> Website : www.unu-ntb.ac.id Email :unu.ntb@gmail.com</p>
              <img src={Image} alt="" className="img" />
            </div>
            <div className="bottom">
              <p>Syahabudin Shibazz</p>
              <p className="nim">Nim : 5550777</p>
              <p className="prodi">Prodi : Hubungan Internasional</p>
              <div className="barcode">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
