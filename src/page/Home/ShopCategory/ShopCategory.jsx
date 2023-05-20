import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const ShopCategory = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("Teddy bear");

  useEffect(() => {
    fetch(`http://localhost:5000/toyProducts/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [activeTab]);

  const handleSelectTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="toy-container">
      <h2 className="text-4xl text-center font-bold mb-6">Shop by category</h2>
      <div className="tabs flex justify-center">
        <button onClick={() => handleSelectTab("Teddy bear")} className="tab tab-lg tab-lifted tab-active font-bold " type="button">
          Teddy bear
        </button>
        <button onClick={() => handleSelectTab("Dinosaur")} className="tab tab-lg tab-lifted" type="button">
          Dinosaur
        </button>
        <button onClick={() => handleSelectTab("Unicorn")} className="tab tab-lg tab-lifted" type="button">
          Unicorn
        </button>
      </div>
      <div className="grid lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product._id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default ShopCategory;
