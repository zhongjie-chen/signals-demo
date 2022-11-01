import { useEffect, useRef } from "react";

function useTimesOfRender(componentName = "") {
  const countRef = useRef(1);
  useEffect(() => {
    countRef.current++;
  });
  console.log(`${componentName}组件渲染了：`, countRef.current, "次");
}

export default useTimesOfRender;
