import { Result } from "antd-mobile";
import { SmileOutline } from "antd-mobile-icons";

function GoodDemo() {
  return (
    <div>
      <Result
        icon={<SmileOutline />}
        status="success"
        title="分享个好东西"
        description="也许是"
      />
    </div>
  );
}

export default GoodDemo;
