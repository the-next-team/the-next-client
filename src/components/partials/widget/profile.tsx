import React from "react";
import { Link } from "react-router-dom";

// import images
import ProfileImage from "../../../assets/images/users/user-1.jpg";
import Icon from "../../icons/Icon";

const Profile = () => {
  return (
    <div className="px-6 py-10 rounded-lg bg-white dark:bg-slate-800 justify-between flex flex-col text-center items-center relative z-[1]">
      <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 h-[150px] w-full z-[-1] rounded-t-lg" />
      <div className="">
        <div className="flex-none mb-6">
          <div className="h-[140px] w-[140px] ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
            <img
              src={ProfileImage}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
            <Link
              to="#"
              className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center top-[100px]"
            >
              <Icon icon="heroicons:pencil-square" />
            </Link>
          </div>
        </div>
        <div className="flex-1 mb-6">
          <div className="mb-1 text-2xl font-medium text-slate-900 dark:text-slate-200">
            홍길동
          </div>
          <div className="mb-2 text-sm font-medium text-slate-900 dark:text-slate-200">
            리테일금융본부 / 본부장
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            2024-03-12(화) 12:15:35 로그인
          </div>
        </div>
      </div>
      <div className="text-base text-slate-900 dark:text-slate-300">
        2024-03-12(화) 13:10 기준
      </div>
    </div>
  );
};

export default Profile;
