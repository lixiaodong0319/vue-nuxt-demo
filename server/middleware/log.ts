export default defineEventHandler((event) => {
  console.log("请求地址: " + getRequestURL(event));
});
