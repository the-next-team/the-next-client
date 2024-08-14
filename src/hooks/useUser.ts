import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserService } from "../api/services/userService";
import { storageKey } from "../constants";
import { UserState, userState } from "../states/user/userAtom";

function useUser() {
  const navigate = useNavigate();
  const [user, _setUser] = useRecoilState(userState);

  const fetch = async () => {
    try {
      const response = await UserService.fetchInfo();
      setUser(response.data);
    } catch (error) {}
  };

  const setUser = (data: UserState) => {
    localStorage.setItem(storageKey.user, JSON.stringify(data));
    _setUser(data);
  };

  const logout = () => {
    localStorage.clear();
    _setUser(null);
    navigate("/login", {
      replace: true,
    });
  };

  return {
    user,
    setUser,
    fetchUser: fetch,
    logout,
  };
}

export default useUser;
