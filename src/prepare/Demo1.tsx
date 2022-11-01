import useTimesOfRender from "../useTimesOfRender";
import Brand from "./components/Brand";
import Header from "./components/Header";

function Demo1() {
  useTimesOfRender("Demo1");
  return (
    <div>
      <p>Demo1</p>
      <Header />
      {/* <Brand /> */}
      <div className=" text-3xl text-center">
        <div>THANKS</div>
        <div>THANK GOD</div>
      </div>
    </div>
  );
}

export default Demo1;
