// 节流
export function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this);
        timer = null;
      }, delay);
    }
  };
}
