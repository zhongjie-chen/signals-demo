import useTimesOfRender from "../../useTimesOfRender";
import { nowStr } from "../prepareDemo1.model";
/**
 * 1.子组件使用signal，父组件不会重新渲染。
 * 2.直接用signal表示，使用的组件也不会重新渲染。
 * 3.signal可以在任何地方使用，组件内外，class Fn组件以及hooks。
 * 4.Provider会重新渲染父组件
 */
function Time() {
  useTimesOfRender("Time");
  return (
    <div>
      time:<span>{nowStr as any}</span>
    </div>
  );
}

export default Time;
