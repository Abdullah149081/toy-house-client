import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MdOutgoingMail, MdProductionQuantityLimits } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const productDetail = useLoaderData();
  const { toyPicture, toyName, name, email, price, rating, quantity, detail } = productDetail;
  return (
    <div className="toy-container">
      <div className="hero min-h-screen rounded-xl">
        <div className="hero-content flex-col lg:flex-row lg:gap-20">
          <img src={toyPicture} className=" w-full lg:max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#ff8c9a]">{toyName}</h1>
            <p className="card-title">Seller Name: {name}</p>
            <p className="card-title">
              <MdOutgoingMail /> {email}
            </p>
            <p className="card-title">$ {price}</p>
            <div className="inline-flex items-center gap-4 justify-center">
              <Rating readOnly style={{ maxWidth: 100 }} value={rating} />
              <span className="bg-blue-100 text-[#9363b5] text-base font-semibold  px-2.5 py-0.5 rounded  ">{rating}</span>
              {/* <span className="card-title mt-1">{rating}</span> */}
            </div>
            <p className="card-title">
              Quantity <MdProductionQuantityLimits />
              {quantity}
            </p>

            <p className="py-6">
              <span className="card-title">Details</span> {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
