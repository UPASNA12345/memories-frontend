import axios from 'axios';

const API = axios.create({baseUrl: 'http://localhost:5000'})
// const url = 'http://localhost:5000/posts';

API.interceptors.request.use((req)=> {
  if(localStorage.getItem('profile')){
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
})

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPosts) => API.post('/posts', newPosts);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
