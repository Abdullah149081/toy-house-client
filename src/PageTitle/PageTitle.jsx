
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Toy House | ${title}`}</title>
    </Helmet>
  );
};

export default PageTitle;
