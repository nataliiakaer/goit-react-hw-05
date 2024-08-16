import css from "./Loader.module.css";

import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <section className={css.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </section>
  );
};

export default Loader;