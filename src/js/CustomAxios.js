import axios from 'axios'; // 액시오스

const CustomAxios = axios.create({
  baseURL: "http://58.124.240.242:9876/"
});

export default axios;