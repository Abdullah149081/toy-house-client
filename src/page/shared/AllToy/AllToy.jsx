import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../../../PageTitle/PageTitle";
import { AuthContext } from "../../../providers/AuthProviders";

const AllToy = () => {
  const allToys = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleNotify = () => {
    if (!user) {
      toast("You have to log in first to view details", {
        duration: 1000,
      });
    }
  };

  return (
    <div className="toy-container">
      <PageTitle title="All Toys" />
      <h2 className="text-center text-4xl font-bold my-6">All Toys</h2>
      <div className="flex justify-center my-8">
        <input type="text" placeholder="Type here" className="input input-bordered rounded-r-none w-full max-w-xs" />
        <button type="button" className="btn rounded-l-none btn-outline btn-info">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-center -z-0   table-compact w-full">
          <thead>
            <tr>
              <th>Sl No:</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy, idx) => (
              <tr key={allToy?._id}>
                <th>{idx + 1}</th>
                <td className="font-semibold text-base">{allToy?.name}</td>
                <td className="font-semibold text-base">{allToy.toyName}</td>
                <td className="font-semibold text-base">{allToy.category}</td>
                <td className="font-semibold text-base">${allToy.price}</td>
                <td className="font-semibold text-base">{allToy.quantity}</td>
                <td>
                  <Link to={`/view-details/${allToy._id}`}>
                    <button onClick={handleNotify} type="button" className="btn btn-toy ">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
