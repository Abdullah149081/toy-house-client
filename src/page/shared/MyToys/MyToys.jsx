import { useContext, useEffect, useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../../../PageTitle/PageTitle";
import { AuthContext } from "../../../providers/AuthProviders";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [asc, setAsc] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://toy-marketplace-server-omega.vercel.app/toyProductsByEmail?email=${user?.email}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [asc, user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9363b5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-omega.vercel.app/toyProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
              setTimeout(() => {
                const remaining = myToys.filter((myToy) => myToy._id !== id);
                setMyToys(remaining);
              }, 1000);
            }
          });
      }
    });
  };

  return (
    <div className="toy-container min-h-screen ">
      <PageTitle title="My Toys" />
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center -z-0 w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Sl No</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Toy Name</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Sub-category</th>
              <th className="text-base bg-sky-200 bg-opacity-20 capitalize">
                <span className="inline-flex gap-4">
                  Price
                  <button onClick={() => setAsc(!asc)} type="button">
                    {asc ? <BiDownArrowAlt className="w-5 h-5" /> : <BiUpArrowAlt className="w-5 h-5" />}
                  </button>
                </span>
              </th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Available quantity</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Rating</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Action</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Details</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((toy, idx) => (
              <tr className="font-semibold" key={toy._id}>
                <th>{idx + 1}</th>
                <td>{toy.toyName}</td>
                <td>{toy.category}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <span className="bg-blue-100 text-[#9363b5] text-base font-semibold  px-2.5 py-0.5 rounded  "> {toy.rating}</span>
                </td>
                <td className="">
                  <Link className="btn btn-toy mr-4" to={`/update/${toy._id}`}>
                    <FiEdit />
                  </Link>
                  <button onClick={() => handleDelete(toy._id)} className="btn btn-toy" type="button">
                    <FiTrash2 />
                  </button>
                </td>
                <td>
                  <Link to={`/view-details/${toy._id}`}>
                    <button type="button" className="btn btn-toy ">
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

export default MyToys;
