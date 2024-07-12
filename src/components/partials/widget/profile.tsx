import { Link } from "react-router-dom";
import ProfileImage from "../../../assets/images/users/user-1.jpg";
import { Icon } from "@iconify/react";

const Profile = () => {
  return (
    <div className="px-4 py-6 rounded-md bg-white justify-between flex flex-col items-center relative z-[1]">
      <div className="bg-slate-900 absolute left-0 top-0 h-2/5 w-full z-[-1] rounded-t-md" />
      <div className="relative w-24 h-24 mb-2 rounded-full ring-2 ring-slate-100">
        <img
          src={ProfileImage}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
        <Link
          to="#"
          className="absolute bottom-1 -right-1 p-1.5 rounded-full shadow-md bg-slate-50 text-slate-600"
        >
          <Icon icon="heroicons:pencil-square" width={16} />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-1 font-medium text-slate-900">홍길동</div>
        <div className="mb-2 text-sm text-slate-900">
          리테일금융본부 / 본부장
        </div>
        <div className="text-xs text-slate-600">
          2024-03-12(화) 12:15:35 로그인
        </div>
        <div className="text-xs text-slate-600">2024-03-12(화) 13:10 기준</div>
      </div>
    </div>
  );
};

export default Profile;
