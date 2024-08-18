import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <div className={css.message}>Not Found Page</div>
      <Link to="/" className={css.backLink}>
        Back to the page Home
      </Link>
    </>
  );
};

export default NotFoundPage;
