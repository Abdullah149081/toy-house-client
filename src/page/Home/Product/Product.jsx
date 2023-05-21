import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Product = ({ product }) => {
  const { toyPicture, toyName, price, rating, _id } = product;
  const { user } = useContext(AuthContext);

  const handleNotify = () => {
    if (!user) {
      toast("You have to log in first to view details", {
        duration: 1000,
      });
    }
  };

  return (
    <div data-aos="fade-zoom-in">
      <div className="card w-full h-full  bg-[#f6f7f9] shadow-xl">
        <figure className="border">
          <img src={toyPicture} alt="Shoes" className="border-0  w-[268px] h-[268px]" />
        </figure>
        <div className="card-body py-3  rounded-b-xl items-center text-center bg-[#ff8c9a] bg-opacity-40">
          <h2 className="card-title text-lg font-bold">{toyName}</h2>
          <h2 className="card-title">${price}</h2>
          <div className="inline-flex items-center gap-4 justify-center">
            <Rating readOnly style={{ maxWidth: 100 }} value={rating} />
            <span className="bg-blue-100 text-[#9363b5] text-base font-semibold  px-2.5 py-0.5 rounded  ">{rating}</span>
          </div>
          <div className="card-actions mt-4 ">
            <Link to={`/view-details/${_id}`}>
              <button onClick={handleNotify} type="button" className="btn btn-toy ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
