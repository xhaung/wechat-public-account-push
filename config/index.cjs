/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx840bfc0011d4f97b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4b531f2b3c1e58d5434bc06d23d8378b',

  PROVINCE: '四川',
  CITY: '绵阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Ray',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojfKd58PkrR6rtNZr6j6YjufzQSA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'q8p5g_Ay8XsPuRzIIfi19-asKyZNTUG-nDq0uFxvEhU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '宝贝', year: '1996', date: '08-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '相遇', year: '2022', date: '03-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-02' },
        // 相遇
        { keyword: 'meet_day', date: '2022-03-19' },
        // easter
        { keyword: 'easter_day', date: '2023-04-09' },
        // Chinese new year
        { keyword: 'cnew_year_day', date: '2023-01-22' },
        // Going back home
        { keyword: 'home_day', date: '2023-04-28' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ojfKd59wmC2uXfwFCCbXs8sv3sxI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'q8p5g_Ay8XsPuRzIIfi19-asKyZNTUG-nDq0uFxvEhU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '宝贝', year: '1996', date: '08-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
          // type: '节日', name: '相遇', year: '2022', date: '03-19',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-02' },
        // 相遇
        { keyword: 'meet_day', date: '2022-03-19' },
        // easter
        { keyword: 'easter_day', date: '2023-04-09' },
        // Chinese new year
        { keyword: 'cnew_year_day', date: '2023-01-22' },
        // Going back home
        { keyword: 'home_day', date: '2023-04-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

