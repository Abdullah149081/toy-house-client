import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const AddToy = () => {
  const toyCategories = ["Teddy bear", "Dinosaur", "Unicorn"];
  const [selectCategory, setSelectCategory] = useState(toyCategories[0]);
  const { user } = useContext(AuthContext);

  const handleAddToToy = (e) => {
    e.preventDefault();

    const form = e.target;

    const toyPicture = form.photo.value;
    const toyName = form.toyName.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;

    const toyAdd = { toyPicture, toyName, name, email, price, rating, category, quantity, detail };
    console.log(toyAdd);
  };

  const handleCategorySelect = (e) => {
    setSelectCategory(e.target.value);
  };

  return (
    <div className="toy-container min-h-screen">
      <div className="lg:w-4/5 lg:mx-auto  bg-[#ff8c9a] bg-opacity-20  px-6 lg:px-28 py-16 rounded-lg">
        <h1 className="text-center text-4xl text-[#374151] text-shadow font-bold ">Add New Toy</h1>
        <form onSubmit={handleAddToToy} className="mt-4">
          <div className="grid lg:grid-cols-2 gap-4 mt-4 ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Photo URL Toy</span>
              </label>
              <input type="url" placeholder="Picture URL of the toy" name="photo" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Toy Name</span>
              </label>
              <input type="text" placeholder="Toy name" name="toyName" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">seller name</span>
              </label>
              <input type="text" placeholder="Seller name" defaultValue={user?.displayName} name="name" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Seller email</span>
              </label>
              <input type="email" placeholder="Seller email" value={user?.email} name="email" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Category</span>
              </label>
              <select name="category" className="input input-bordered" value={selectCategory} onChange={handleCategorySelect}>
                {toyCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Price</span>
              </label>
              <input type="text" placeholder="Price" name="price" className="input input-bordered w-full rounded-lg" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Available quantity</span>
              </label>
              <input type="text" placeholder="Available quantity" name="quantity" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Rating</span>
              </label>
              <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full rounded-lg" />
            </div>
            {/*  */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-sans text-gray-700 font-semibold">Details</span>
            </label>
            <textarea className="input input-bordered w-full rounded-lg h-20" name="detail" />
          </div>

          <div className="flex justify-center mt-4">
            <button className="btn  btn-toy w-1/4 " type="submit">
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
