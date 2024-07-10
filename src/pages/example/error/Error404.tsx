import { Link } from "react-router-dom";

import ErrorImage from "../../../assets/images/all-img/404-2.svg";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center dark:bg-slate-900">
      <img src={ErrorImage} alt="" />
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="mb-4 text-slate-900">Page not found</h4>
        <div className="mb-10 text-base font-normal dark:text-white">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <Link
          to="/"
          className="block text-center btn btn-dark dark:bg-slate-800"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default Error404;
