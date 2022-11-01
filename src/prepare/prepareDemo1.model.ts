import { batch, computed, effect, signal } from "@preact/signals-react";
import dayjs from "dayjs";

function getDemo1Time() {
  return dayjs().format("HH:mm:ss");
}

let nowStr = signal(getDemo1Time());

setInterval(() => {
  nowStr.value = getDemo1Time();
}, 1000);

const userDto = {
  name: "xxx",
  token: "fffff",
  // ...
};
const schoolListDto = [
  {
    name: "余杭一中",
    id: 1,
  },
  {
    name: "余杭二中",
    id: 2,
  },
];

export const user = signal<null | typeof userDto>(null);

export const schoolList = signal<[] | typeof schoolListDto>([]);

export const loading = signal(false);

export const isLogin = computed(() => {
  return !!user.value;
});

export function login() {
  loading.value = true;
  setTimeout(() => {
    batch(() => {
      user.value = userDto;
      loading.value = false;
    });
  }, 1000);
}

export function logout() {
  user.value = null;
}
function reportSchoolList(now: string) {
  console.log("上报学校列表时间日志：", now);
}
/**
 * 自动收集依赖，执行副作用。
 */
effect(() => {
  console.log(user.value);
  // peek方法获取到值，不会依赖更新
  reportSchoolList(nowStr.peek());
  if (user.value) {
    schoolList.value = schoolListDto;
  } else {
    schoolList.value = [];
  }
});

export { nowStr };

// 优点：
// 不需要redux(rematch)一堆模板语法。name reducer effects...。
// 不需要被React函数组件奴役，比如一些闭包引发的问题。
// 不需要被react的use-callback use-effect等hooks奴役(deps:[xxx,xxx,fn,ref,xx]，这call 那call)，因为这些设计是反开发工学的。
// Provider写法，会导致各种context嵌套。
// 可以抽象通用逻辑，写成class形式，封装继承等。
// react仅仅承担component tree， state tree分离。
