import { Button, DotLoading } from "antd-mobile";
import useTimesOfRender from "../../useTimesOfRender";
import { isLogin, loading, login, logout } from "../prepareDemo1.model";
import Profile from "./Profile";
import Time from "./Time";

function Header() {
  useTimesOfRender("Header");
  return (
    <div>
      <p>Header</p>
      <Time />
      <div className="mt-6">
        {isLogin.value ? (
          <Button color="danger" onClick={() => logout()}>
            退出登录
          </Button>
        ) : (
          <Button
            color="primary"
            disabled={loading.value}
            onClick={() => login()}
          >
            登录
          </Button>
        )}
        <div>{loading.value && <DotLoading />}</div>
        {isLogin.value && <Profile />}
      </div>
    </div>
  );
}

export default Header;
