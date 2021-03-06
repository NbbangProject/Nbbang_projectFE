import axios from "axios";

const api = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

const apiform = axios.create({
  headers: {
    "Content-Type": "multipart/form-data"
  },
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("jwtToken");

  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});

// 이미지 Api 따로 만들어서
// "content-type": "multipart/form-data"

export const apis = {
  // post"
  loadposts: () => api.get("/api/postList"),
  loadpost: (id) => api.get(`/api/detail/${id}`),

  addpost: (post) => api.post("/api/write", post),
  // edit: (id, contents) => api.put(`api/articles/${id}`, contents),

  delpost: (id) => api.delete(`/api/post/${id}`),

  // comment
  loadcomments: (id) => api.get(`/api/detail/${id}`),
  createComment: (comment) =>
    api.post(`/api/detail/${comment.postId}`, { ...comment }),
  delComment: (id) => api.delete(`/api/comment/${id}`),
  // editComment: (id, coId, content) =>
  // 	api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // user
  login: (id, pw) =>
    api.post("/api/login", { userEmail: id, userPassword: pw }),
  // login: (userEmail, userPassword) =>
  //   api.post("/api/login", {
  //     userEmail: userEmail,
  //     passPassword: userPassword,
  //   }
  //   ),
  signup: (nick, email, pwd, passwordChek, regGu, regDetail, ProfImage) =>
    api.post("/api/signup", {
      userNickname: nick,
      userEmail: email,
      userPassword: pwd,
      confirmPassword: passwordChek,
      regionGu: regGu,
      regionDetail: regDetail,
      userProfileImage: ProfImage,
    }),

  logout: () => api.post("/"),
  // userInfo: () => api.get(`/myinfo`),
  // userPassword: (pw) => api.post(`/myinfo`, pw),
  // userNewPassword: (pw) => api.put(`/myinfo`, pw),

  userInfo: () => api.get(`/api/userData`),
};
