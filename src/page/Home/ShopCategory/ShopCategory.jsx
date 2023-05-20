import { useEffect, useState } from "react";
import PageTitle from "../../../PageTitle/PageTitle";
import Product from "../Product/Product";

const ShopCategory = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("Teddy bear");

  useEffect(() => {
    fetch(`http://localhost:5000/toyProductsByCategory/${activeTab}`)
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
      <h2 className="text-3xl text-center rounded-t-lg py-2 text-white font-bold mx-auto w-[346px] bg-[#9363b5]">Shop by category</h2>
      <div className="tabs flex justify-center">
        <button onClick={() => handleSelectTab("Teddy bear")} className={`tab tab-lg tab-lifted  font-bold ${activeTab === "Teddy bear" && "tab-active text-info"}`} type="button">
          Teddy bear
        </button>
        <button onClick={() => handleSelectTab("Dinosaur")} className={`tab tab-lg tab-lifted  font-bold ${activeTab === "Dinosaur" && "tab-active text-info"}`} type="button">
          Dinosaur
        </button>
        <button onClick={() => handleSelectTab("Unicorn")} className={`tab tab-lg tab-lifted  font-bold ${activeTab === "Unicorn" && "tab-active text-info"}`} type="button">
          Unicorn
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-6  mt-6">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
