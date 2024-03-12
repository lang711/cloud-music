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

// 获取音乐播放url
export const getPlayUrl = (id) => {
  return request(`/song/url?id=${id}`);
};

// 下载音乐
export const downloadMusic = (url, fileName) => {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = function () {
    var aTag = document.createElement("a");
    aTag.href = URL.createObjectURL(xhr.response);
    aTag.download = fileName;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  xhr.open("GET", url);
  xhr.send();
};

// 热门歌手
export const getHotSinger = (page = 0, limit) => {
  return request(`/top/artists?offset=${page * limit}&limit=${limit}`);
};

// 歌手分类列表
export const getCatSinger = (type, area, initial, limit) => {
  return request(
    `/artist/list?type=${type}&area=${area}&initial=${initial}&limit=${limit}`
  );
};

// 推荐节目
export const getRecommendProgram = () => {
  return request("/program/recommend");
};

// 电台分类
export const getRadioCat = () => {
  return request("/dj/catelist");
};

// 节目榜
export const getProgramRank = (limit = 10) => {
  return request(`/dj/program/toplist?limit=${limit}`);
};

// 优秀新电台
export const getNewRadio = (type) => {
  return request(`/dj/recommend/type?type=${type}`);
};

// 热门电台排行榜
export const getHotRadio = (id, limit, page) => {
  return request(
    `/dj/radio/hot?cateId=${id}&limit=${limit}&offset=${(page - 1) * limit}`
  );
};

// 热门电台
export const getRiseRadio = (limit, page) => {
  return request(
    `/dj/toplist?type=new&limit=${limit}&offset=${(page - 1) * limit}`
  );
};
