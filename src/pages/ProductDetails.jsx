import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Phone } from "../Data/Phone";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const phone = Phone.find((item) => item.id === Number(id));
  return (
    <div style={{backgroundColor:'bleached'}}>
      <button onClick={() => navigate(-1)}
        style={{padding:'10px', borderRadius:'25px',cursor:'pointer',background:'red', border:'none', margin:'10px', color:'white'}}>←</button>
      <div
        style={{
          height: "100vh",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <img src={phone.image} alt="" />
        <h2
          style={{
            padding: "20px 40px ",
            fontSize: "3rem",
            fontFamily: "sans-serif",
          }}
        >
          Product Details
        </h2>
        <p>This is the product description</p>
        <h3>{phone.name}</h3>
        <h4>Price{phone.price}</h4>
        <p>desc:</p>npm
      </div>
    </div>
  );
};

export default ProductDetails;
