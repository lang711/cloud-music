import { request } from "./request";

// 搜索建议
export const getSearchAdvice = (keyword) => {
  return request(`/search/suggest?keywords=${keyword}`);
};

// 轮播图banner
export const getBanner = () => {
  return request("/banner");
};
