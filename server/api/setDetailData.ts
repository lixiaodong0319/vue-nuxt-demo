import connectDB from "../db";
import Detail from "../models/Detail";

connectDB();

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // 读取请求体
  try {
    const newDetail = new Detail(body); // 创建新的 Detail 实例
    await newDetail.save(); // 保存到数据库
    return {
      code: 200,
      message: "数据保存成功",
      data: newDetail,
    };
  } catch {
    return {
      code: 100001,
      message: "数据保存失败",
      data: {},
    };
  }
});
