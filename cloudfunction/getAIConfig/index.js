// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }); // 使用当前云环境
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const config = await db
    .collection('global_config')
    .where({ CONFIG_NAME: 'OPENAI' })
    .get();

  return { API_KEY: config.data[0].API_KEY, API_URL: config.data[0].API_URL };
};
