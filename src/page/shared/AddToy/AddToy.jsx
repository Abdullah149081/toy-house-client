import { useState } from "react";

const AddToy = () => {
  const toyCategories = ["Teddy bear", "Dinosaur", "Unicorn"];
  const [selectCategory, setSelectCategory] = useState(toyCategories[0]);

  const handleCategorySelect = (event) => {
    setSelectCategory(event.target.value);
  };

  return (
    <div className="toy-container">
      <div className="bg-[#ff8c9a] bg-opacity-20 mt-12 py-4 px-2 lg:px-28 lg:py-16 rounded-lg">
        <h1 className="text-center text-4xl text-[#374151] text-shadow font-bold ">Add New Toy</h1>
        <form className="mt-12">
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-sans text-gray-700 font-semibold">Photo URL Toy</span>
            </label>
            <input type="url" placeholder="Picture URL of the toy" name="photo" className="input input-bordered w-full" required />
          </div>
          <div className="grid lg:grid-cols-2 gap-4 mt-4 ">
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
              <input type="text" placeholder="Seller name" name="sellerName" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Seller email</span>
              </label>
              <input type="email" placeholder="Seller email" name="email" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Category</span>
              </label>
              <select name="categoryName" className="input input-bordered" value={selectCategory} onChange={handleCategorySelect}>
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
              <input type="email" placeholder="Price" name="price" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Rating</span>
              </label>
              <input type="email" placeholder="Rating" name="rating" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Available quantity</span>
              </label>
              <input type="email" placeholder="Available quantity" name="quantity" className="input input-bordered w-full rounded-lg" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-sans text-gray-700 font-semibold">Rating</span>
              </label>
              <input type="email" placeholder="Rating" name="rating" className="input input-bordered w-full rounded-lg" />
            </div>
            {/*  */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-sans text-gray-700 font-semibold">Details</span>
            </label>
            <textarea className="input input-bordered w-full rounded-lg h-40" name="detail" />
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
