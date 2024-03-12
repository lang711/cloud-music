/**
 * 节流
 * @param {*} fn 回调函数
 * @param {*} delay 延迟
 * @returns {Function} 返回一个函数
 */
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
/**
 * 获取随机数
 * @param {*} start 随机范围开始
 * @param {*} end 随机范围结束
 * @param {*} count 随机数量
 * @returns {Array} 返回一个随机数数组
 */
export function randomNums(start = 0, end, count = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  } else if (arguments.length === 2) {
    count = end;
    end = start;
    start = 0;
  }
  const nums = [];
  while (nums.length !== count) {
    let rnd = Math.floor(Math.random() * (end - start + 1) + start);
    nums.includes(rnd) || nums.push(rnd);
  }
  return nums.length === 1 ? nums[0] : nums;
}
