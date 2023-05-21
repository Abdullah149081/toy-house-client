import { Helmet } from "react-helmet";
import PageTitle from "../../../PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toy House | Home</title>
      </Helmet>
      <Banner />
      <Gallery />
      <ShopCategory />
      <Client />
    </div>
  );
};

export default Home;
