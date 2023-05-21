import React from "react";

const Client = () => {
  return (
    <div className="toy-container">
      <div className="flex justify-center mb-2 ">
        <figure className="border rounded-full p-4">
          <img className="animate-pulse" src="https://i.ibb.co/s2J1Hf5/seperator.png" alt="" />
        </figure>
      </div>
      <h2 className="text-center text-4xl font-bold">Our Client Say’s</h2>
      <div className="grid lg:grid-cols-3 mt-8 gap-10 " data-aos="fade-zoom-in">
        <div className="card w-full border border-dotted  border-gray-500 bg-slate-100 bg-opacity-25 ">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/D5sPvvm/testimonial-3-140x140.png" alt="" className="rounded-xl" />
          </figure>
          <div className="inline-flex items-center justify-center w-full mt-6">
            <div className="absolute px-4 -translate-x-1/2 left-1/2 mt-4">
              <svg aria-hidden="true" className="w-8 h-8 text-[#ff8c9a]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <p>I recently had the pleasure of shopping on the Toy House website, and I must say it was an absolute delight! From the moment I landed on the homepage..</p>
            <h2 className="card-title">MARKO WESTIN</h2>
          </div>
        </div>
        <div className="card w-full border border-dotted  border-gray-500 bg-slate-100 bg-opacity-25 ">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/Qmx08sK/testimonial-2-140x140.png" alt="" className="rounded-xl" />
          </figure>
          <div className="inline-flex items-center justify-center w-full mt-6">
            <div className="absolute px-4 -translate-x-1/2 left-1/2 mt-4">
              <svg aria-hidden="true" className="w-8 h-8 text-[#ff8c9a]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <p>I would like to take a moment to share my wonderful experience shopping on the Toy House website. From the extensive selection to the top-notch service, I was thoroughly impressed.</p>
            <h2 className="card-title">Nat Reynolds</h2>
          </div>
        </div>
        <div className="card w-full border border-dotted  border-gray-500 bg-slate-100 bg-opacity-25 ">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/xLL7JLD/testimonial-1-140x140.png" alt="" className="rounded-xl" />
          </figure>
          <div className="inline-flex items-center justify-center w-full mt-6">
            <div className="absolute px-4 -translate-x-1/2 left-1/2 mt-4">
              <svg aria-hidden="true" className="w-8 h-8 text-[#ff8c9a]" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <p>
              My name is Morgan Maxwell, and I had an absolutely fantastic shopping experience on the Animals Toy website. From the moment I entered the site, I was immersed in a world of wonder and
              joy.
            </p>
            <h2 className="card-title">Morgan Maxwell</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
