/* ============================================================
 *  婚礼请帖 · 信息配置文件（唯一需要修改的文件）
 *  把下面引号里的信息换成你们的真实信息即可，
 *  网页（index.html）和所有海报图片会同时更新。
 * ============================================================ */

const WEDDING = {

  /* ---- 新人姓名 ---- */
  groom: "赵晨光",            // 新郎姓名
  bride: "武晓冉",            // 新娘姓名

  /* ---- 婚礼日期时间 ---- */
  dateISO: "2026-10-01T11:58:00+08:00",  // 婚礼典礼开始时间（倒计时以此为准）
  dateLine: "2026年10月1日",              // 公历日期
  weekday: "星期四",                       // 星期
  lunarLine: "农历八月廿一",               // 农历日期
  timeLine: "11:58",                       // 典礼开始时刻（具体时间待定，暂用此占位）

  /* ---- 邀请语（每行一句，可自行增删） ---- */
  inviteLines: [
    "见字如面，展信舒颜。",
    "我们相识于人间烟火，相守于岁月平常。",
    "从一次回眸到朝朝暮暮，感谢岁月把我们安排在一起。",
    "如今，我们决定把余生郑重地交给彼此。",
    "兹定于十月一日国庆佳节，为爱设宴。",
    "恭请拨冗莅临，见证我们的幸福时刻。",
  ],

  /* ---- 婚礼流程时间线（可增删条目） ---- */
  timeline: [
    { time: "10:58", title: "宾客入席", note: "静候良辰 · 签到留影" },
    { time: "11:58", title: "典礼开始", note: "交换誓约 · 交换信物" },
    { time: "12:38", title: "喜宴开席", note: "共举金樽 · 同贺新禧" },
    { time: "14:18", title: "礼成谢客", note: "铭记相聚 · 感恩相伴" },
  ],

  /* ---- 婚礼地点（10月1日正席） ---- */
  hotel:   "金沙嘉和酒店",   // 酒店名称
  hall:    "九楼 · 奥斯卡厅", // 正席厅名
  address: "怀仁市",         // 城市/详细地址

  /* ---- 9月30日羊杂席（前一天暖场宴） ---- */
  preBanquet: {
    date: "2026年9月30日",        // 日期
    weekday: "星期三",            // 星期
    time: "中午",                 // 时间
    title: "羊杂席",              // 席名
    hall: "二楼东厅 · 嘉福厅",    // 厅名（同一家酒店）
  },

  /* ---- 地图导航链接 ---- */
  mapAmap:  "https://uri.amap.com/search?keyword=怀仁市金沙嘉和酒店&src=wedding", // 高德地图
  mapTencent: "https://map.qq.com/search/怀仁市金沙嘉和酒店",                     // 腾讯地图

  /* ---- 照片故事（H5「我们的故事」板块，10张精修全收录） ----
     src 对应 photos-web 文件夹里的文件；wide=true 表示横幅照片；
     想改文案直接改引号里的字，想换照片就换 src 的文件名。 */
  story: [
    { src: "photos-web/h5-01.jpg", chapter: "壹", title: "十里红妆", note: "凤冠霞帔，佳偶天成", pos: "42% 26%", wide: true },
    { src: "photos-web/h5-02.jpg", chapter: "贰", title: "小惊喜", note: "蒙住眼睛的这一刻，往后全是惊喜", pos: "50% 18%" },
    { src: "photos-web/h5-03.jpg", chapter: "叁", title: "牵手", note: "牵着你的手，走过春夏秋冬", pos: "50% 24%", wide: true },
    { src: "photos-web/h5-04.jpg", chapter: "肆", title: "花开", note: "漫山花开，只等你来", pos: "50% 10%" },
    { src: "photos-web/h5-05.jpg", chapter: "伍", title: "初吻", note: "草坪上的风，都是甜的", pos: "50% 16%" },
    { src: "photos-web/h5-06.jpg", chapter: "陆", title: "纯白", note: "一生一次，一纱一世", pos: "50% 22%", wide: true },
    { src: "photos-web/h5-07.jpg", chapter: "柒", title: "回眸", note: "这一眼，便是一生", pos: "50% 26%" },
    { src: "photos-web/h5-08.jpg", chapter: "捌", title: "掀纱", note: "为你掀起头纱的那一刻", pos: "50% 18%" },
    { src: "photos-web/h5-09.jpg", chapter: "玖", title: "同框", note: "如一幅旧画，我们终于同框", pos: "50% 16%" },
    { src: "photos-web/h5-10.jpg", chapter: "拾", title: "余生", note: "往后余生，请多指教", pos: "50% 20%" },
  ],
};
