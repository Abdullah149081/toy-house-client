const Footer = () => {
  return (
    <div className="bg-[#e8f6f7] lg:bg-[url('./assets/footer.png')]  bg-no-repeat">
      <div className="toy-container ">
        <div className="px-10 lg:px-0 flex flex-col lg:flex-row justify-between gap-6  ">
          <div className="text-[#ff8c9a] ">
            <h2 className="text-2xl mb-4 font-bold">Logo</h2>
            <h2 className="text-4xl font-bold text-[#9363B5]">Toy House</h2>
          </div>
          <div className="text-[#ff8c9a] ">
            <h2 className="text-2xl mb-4 font-bold">INFORMATION</h2>
            <ul className="space-y-3 toy-footer font-semibold ">
              <li>About us</li>
              <li>Information</li>
              <li>FAQs</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="text-[#ff8c9a] ">
            <h2 className="text-2xl mb-4 font-bold">ACCOUNT</h2>
            <ul className="space-y-3 toy-footer font-semibold">
              <li>My Account</li>
              <li>Specials</li>
              <li>Order History</li>
              <li>NewsLetter</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-[#ff8c9a]">
            <h2 className="text-2xl mb-4 font-bold">FOLLOW</h2>
            <ul className="space-y-3 toy-footer font-semibold">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        <div className="mt-11 px-10 lg:px-0 ">
          <p className="text-left text-[#ff8c9a] font-bold">
            Powered By <span className="text-[#9363B5]">ToyHouse</span> &copy; 2023{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
