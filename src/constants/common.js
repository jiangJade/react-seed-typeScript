// sessionStorage保存当前登录用户信息
export const CURRENT_USER_INFO = 'CURRENT_USER_INFO';

export const OPEN_NEW_PAGE_PARAMS = 'OPEN_NEW_PAGE_PARAMS';

export const PERMISSION = 'PERMISSION';

export const MENU_REFRESH_EVENT = {
    MENU_REFRESH: 'MENU_REFRESH'
};

export const TRAFFICGRADE = {
    1: '一级',
    2: '二级',
    3: '三级',
    4: '四级'
};

// 用户登录后根据权限查看界面
export const CURRENT_USER_ROULS = {
    120001: '超级管理员',
    120002: '/equipmentCctv',
    120003: '/trafficCctv',
    120004: '/curingCalendar',
    120005: '养护班组',
    120006: '系统管理员'
};

// 公共的api前缀
export const PROXY_API = '/api';

// 返回当前菜单页
export const CURRENT_MENU_RETURN = 'CURRENT_MENU_RETURN';

// 返回编辑页
export const CURRENT_MENU_EDITE = 'CURRENT_MENU_EDITE';

// 区段开始桩号
export const EARE_START_NUMBER = [
    {name: 'DK01', value: 1},
    {name: 'DK02', value: 2},
    {name: 'DK03', value: 3},
    {name: 'DK04', value: 4},
    {name: 'DK05', value: 5}
];

// 区段结束桩号
export const EARE_END_NUMBER = [
    {name: 'DK05', value: 1},
    {name: 'DK04', value: 2},
    {name: 'DK03', value: 3},
    {name: 'DK02', value: 4},
    {name: 'DK01', value: 5}
];

export const HANDLE_TYPE = {
    115001: '忽略',
    115002: '纳入养护',
    115003: '立即处理'
};

// 分页条数组
export const PAGE_SIZE_OPTIONS = ['10', '20', '30'];

// 默认分页条数
export const PAGE_SIZE = parseInt(PAGE_SIZE_OPTIONS[0], 10);

// 时间格式

// 时间格式
export const YEAR_MONTH = 'YYYY-MM';

// 日期格式
export const DATE_FORMAT = 'YYYY-MM-DD';

export const formatTimeReg = new RegExp('/', 'g');

// 日期+时间格式
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const TIME_FORMAT = {
    day: 'YYYY-MM-DD',
    week: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    year: 'YYYY'
};

// echarts 地图省份名称
export const PROVINCES = [
    '北京',
    '天津',
    '上海',
    '重庆',
    '河北',
    '河南',
    '云南',
    '辽宁',
    '黑龙江',
    '湖南',
    '安徽',
    '山东',
    '新疆',
    '江苏',
    '浙江',
    '江西',
    '湖北',
    '广西',
    '甘肃',
    '山西',
    '内蒙古',
    '陕西',
    '吉林',
    '福建',
    '贵州',
    '广东',
    '青海',
    '西藏',
    '四川',
    '宁夏',
    '海南',
    '台湾',
    '香港',
    '澳门',
    '南海诸岛'
];

// 分数排序 [降序，升序]
export const SCORE_SORTS = {
    FRAUD: [1, 2],
    RISK: [3, 4]
};

// 时间节点分类
export const TIME_NODE = [
    {name: '天', value: 1},
    {name: '周', value: 2},
    {name: '月', value: 3},
    {name: '季度', value: 4},
    {name: '半年', value: 5},
    {name: '年', value: 6}
];

export const SOURCE_EVENTS = [
    {name: '设备监控', value: 1},
    {name: '交通监控', value: 2},
    {name: '其他', value: 3}
];

export const REPORT_STATUS = {
    '118001': '已生成',
    '118002': '未生成'
};

// 事件类型
export const EVENT_TYPES = [
    {name: '全部', value: 1},
    {name: '交通事故', value: 2},
    {name: '设备故障', value: 3},
    {name: '通信故障', value: 4},
    {name: '违法停车', value: 5},
    {name: '异物占道', value: 6}
];

// 新增处置事件类型
export const ADD_EVENT_TYPES = {
    '识别事件': 1,
    '通知处置人员': 2,
    '处置中': 3,
    '通知医院': 4,
    '转为应急事件': 5,
    '现场反馈': 6,
    '确认事件': 7,
    '处置人员到达': 8,
    '通知交警': 9,
    '纳入养护': 10,
    '事件定级': 11,
    '处置完毕': 12
};

// 班组
export const TEAM_NAME = [
    {name: '全部', value: 1},
    {name: '甲班组', value: 2},
    {name: '乙班组', value: 3},
    {name: '丙班组', value: 4},
    {name: '丁班组', value: 5}
];

// 报警类型
export const WARING_TYPE = [
    {name: '全部', value: 1},
    {name: '交通事故', value: 2},
    {name: '违法停车', value: 3},
    {name: '异常占道', value: 4},
    {name: '拥堵预警', value: 5}
];

// 任务状态
export const TASK_STATE = [
    {name: '全部', value: 1},
    {name: '待确认', value: 2},
    {name: '待处置', value: 3},
    {name: '处置中', value: 4},
    {name: '处置完成', value: 5}
];

// 设备监控首页 能量统计
export const ENERGY_TOTAL_TYPE = [
    {name: '系统', value: '1'},
    {name: '年', value: '5'},
    {name: '月', value: '12'},
    {name: '日', value: '30'}
];

// 交通监控首页 流量统计
export const YEAR_MONTH_DATA = [
    {name: '年', value: '1'},
    {name: '月', value: '2'},
    {name: '日', value: '3'}
];

// 交通事故类型
export const initEventType = {
    13: '交通事故',
    14: '违法停车',
    15: '异常占道',
    16: '拥堵预警',
    17: '火灾',
    18: '水灾'
};

// 是否拖车
export const yesOrNo = [
    {name: '否', value: '0'},
    {name: '是', value: '1'}
];

// 事故等级
export const accidentGrade = [
    {name: '轻微事故', value: '1'},
    {name: '一般事故', value: '2'},
    {name: '重大事故', value: '3'},
    {name: '特大事故', value: '4'}
];

// 车道类型
export const laneType = [
    { label: '左车道', value: '1' },
    { label: '中车道', value: '2' },
    { label: '右车道', value: '3', disabled: false }
];