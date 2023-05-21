import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PageTitle from "../../../PageTitle/PageTitle";
import { AuthContext } from "../../../providers/AuthProviders";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/toyProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toyNameBySearch/${searchValue}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetch(`http://localhost:5000/toyNameBySearch/${searchValue}`)
        .then((res) => res.json())
        .then((data) => setAllToys(data));
    }
  };

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
        <input onKeyDown={handleEnter} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered rounded-r-none w-full max-w-xs" />
        <button onClick={handleSearch} type="button" className="btn rounded-l-none btn-outline btn-info">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table text-center -z-0   table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>

          {!loading && (
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
          )}
        </table>
        {loading && (
          <div className="flex justify-center mt-4 items-center">
            <progress className="progress w-56 " />;
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToy;
