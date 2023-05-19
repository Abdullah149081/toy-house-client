const Banner = () => {
  return (
    <div className="bg-[url('./assets/banner1.png')] lg:bg-[url('./assets/banner.png')] bg-cover lg:bg-contain w-full bg-no-repeat">
      <div className="lg:w-4/5 2xl:w-[69%] 2xl:h-[700px] lg:h-[500px] h-[300px] mx-auto  flex  items-center ">
        <div className="space-y-4 lg:space-y-8 px-4 py-10 text-center lg:text-left">
          <h2 className="text-base lg:text-4xl text-[#FF8C9A] font-bold ">Big Discount</h2>
          <h2 className="text-lg lg:text-6xl  font-bold ">Special Kids Offer</h2>
          <p className="hidden text-2xl lg:block text-zinc-700 font-medium">Flat 10% Off On Order Above $29.99</p>
          <button type="button" className="btn btn-toy">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
