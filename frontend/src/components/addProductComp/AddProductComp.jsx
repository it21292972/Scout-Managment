import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './addProductComp.scss';

const AddProduct = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity , setProductQuantity] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = [];
    if (!productId) {
      emptyFields.push("productId");
    }
    if (!productName) {
      emptyFields.push("productName");
    }
    if (!productPrice) {
      emptyFields.push("productPrice");
    }
    if (!productQuantity) {
      emptyFields.push("productQuantity");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      return;
    }

    // Validation: Check if productQuantity and productPrice are not negative values
    if (productQuantity < 0) {
      toast.error("Product Quantity must not be negative");
      return;
    }
    if (productPrice < 0) {
      toast.error("Product Price must not be negative");
      return;
    }

    const product = {productId, productName,  productPrice, productQuantity};
    const response = await fetch("/product/add", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      if (response.status === 500) {
        Swal.fire("Error!", "This Product ID already exists!", "error");
      } else {
        setError(json.err);
      }
    } else {
      setProductId("");
      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      Swal.fire("Done!", "Product added Successfully!", "success");
      navigate("/");
    }
  };

  return (
    <div>
      <form className="addProduct" onSubmit={handleSubmit}>
        <label>Product ID :</label>
        <input
          type="text"
          placeholder="Enter Product ID"
          onChange={(e) => setProductId(e.target.value)}
          value={productId}
        />
        {emptyFields.includes("productId") && (
          <div className="error">*Please enter product Id</div>
        )}

        <label>Product Name :</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        {emptyFields.includes("productName") && (
          <div className="error">*Please enter product name</div>
        )}

        <label>Product Purchase Price (Rs) :</label>
        <input
          type="text"
          placeholder="Enter Product Purchase Price"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        {emptyFields.includes("productPrice") && (
          <div className="error">*Please enter Product Purchase Price</div>
        )}

        <label>Product Quantity :</label>
        <input
          type="number"
          placeholder="Enter Product Quantity"
         
          onChange={(e) => setProductQuantity(e.target.value)}
          value={productQuantity}
        />
        {emptyFields.includes("productQuantity") && (
          <div className="error">*Please enter Product Quantity</div>
        )}
  
        <button>Add Product</button>
        {error && <p className="error">{error}</p>}
      </form>
      <ToastContainer /> {/* Add this line to render the toast container */}
    </div>
    );
  };
  
  export default AddProduct;
  