import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);
const routes = [
  {
    path: "/playlist",
    component: () => import("views/playlist"),
  },
  {
    path: "/user",
    component: () => import("views/user"),
  },
  {
    path: "/song",
    component: () => import("views/song"),
  },
  {
    path: "/album",
    component: () => import("views/album"),
  },
  {
    path: "/artist",
    component: () => import("views/artist"),
  },
  {
    path: "/login",
    component: () => import("views/login"),
  },
  {
    path: "/author",
    component: () => import("views/author"),
  },
  {
    path: "/discover",
    alias: "/",
    component: () => import("views/discover"),
    children: [
      {
        path: "",
        component: () => import("views/discover/recommend"),
      },
      {
        path: "toplist",
        component: () => import("views/discover/toplist"),
      },
      {
        path: "playlist",
        component: () => import("views/discover/songMenu"),
      },
      {
        path: "djradio",
        component: () => import("views/discover/radio"),
        children: [
          {
            path: "",
            component: () => import("views/discover/radio/home"),
          },
          {
            path: "category",
            component: () => import("views/discover/radio/category"),
          },
          {
            path: "recommend",
            component: () => import("views/discover/radio/recommend"),
          },
          {
            path: "rank",
            component: () => import("views/discover/radio/rank"),
          },
        ],
      },
      {
        path: "artist",
        component: () => import("views/discover/singer"),
        children: [
          {
            path: "",
            component: () => import("views/discover/singer/home"),
          },
          {
            path: "cat",
            component: () => import("views/discover/singer/catSinger"),
          },
          {
            path: "signed",
            component: () => import("views/discover/singer/hotSinger"),
          },
        ],
      },
      {
        path: "album",
        component: () => import("views/discover/newDisc"),
      },
    ],
  },

  {
    path: "/my",
    component: () => import("views/my"),
  },
  {
    path: "/friend",
    component: () => import("views/friend"),
  },
  {
    path: "/download",
    component: () => import("views/download"),
  },
  {
    path: "/store",
    component: () => import("views/store"),
  },
  {
    path: "/musician",
    component: () => import("views/musician"),
  },
  {
    path: "/adSong",
    component: () => import("views/adSong"),
  },
];

const router = new vueRouter({
  routes,
});

export default router;
