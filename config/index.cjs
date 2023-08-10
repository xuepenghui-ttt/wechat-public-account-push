/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx80fe485ce242134e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '47d451b0f6560b1be1200f5cb0b4d3bf',

  PROVINCE: '山西',
  CITY: '太原',
  USERS: [
    {
      // 想要发送的人的名字
      name: 'Dear taotao babay!',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGDwU6aPAAOzmtkuB3DyZgRnrd-o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DjxDRDbTiO9BWahdUls8uPtcsWyAimHFDb0mg-kHHKc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-19',
      horoscopeDateType: '明日',
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-02-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '2Nm_ScInWj7jqR06WWwGBA309tLTfYZmrjjUg_W42iM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGDwU6YFF8xt2RCPx1oVI-4f328s',
    }
  ],

}

module.exports = USER_CONFIG
