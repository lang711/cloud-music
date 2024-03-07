import { request } from "./request";

// 搜索建议
export const getSearchAdvice = (keyword) => {
  return request(`/search/suggest?keywords=${keyword}`);
};

// 轮播图banner
export const getBanner = () => {
  return request("/banner");
};

// 热门歌单推荐
export const getHotPlaylist = () => {
  return request(`/personalized?limit=8`);
};

// 热门歌单分类
export const getHotCategory = () => {
  return request("/playlist/hot");
};

// 新碟上架
export const getNewAlbum = () => {
  return request("/album/newest");
};

// 所有榜单
export const getAllRank = () => {
  return request("/toplist");
};

// 歌单详情
export const getPlaylistDetail = (id) => {
  return request(`/playlist/detail?id=${id}`);
};

// 热门歌手
export const getHotSinger = () => {
  return request("/top/artists");
};

// 热门主播
export const getHotAnchor = () => {
  return request("/dj/toplist/popular");
};

// 歌单分类
export const getPlaylistCat = () => {
  return request("/playlist/catlist");
};

// 歌单
export const getPlaylist = (cat = "all", offset = 0, order, limit) => {
  return request(
    `/top/playlist?cat=${cat}&limit=${limit}&offset=${
      offset && 35 * (offset - 1)
    }&order=${order}`
  );
};

// 全部新碟
export const getAllAlbum = (area, offset = 0, limit) => {
  return request(
    `/album/new?area=${area}&limit=${limit}&offset=${
      offset && 35 * (offset - 1)
    }`
  );
};
