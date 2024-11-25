import connectDB from "../db";
import User from "../models/User";

connectDB();

export default defineEventHandler(async () => {
  try {
    const user = await User.find();
    return {
      code: 200,
      message: "请求成功",
      data: user,
    };
  } catch {
    return {
      code: 100001,
      message: "数据请求失败",
      data: {},
    };
  }
});
