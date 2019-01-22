const {ages, places} = require('./places');

const questions = [
    {
        number: 1,
        type: 'choice',
        required: true,
        title: '您的性别',
        answers: [
            {
                text: '男',
                value: 1,
            },
            {
                text: '女',
                value: 2
            }
        ]
    },
    {
        number: 2,
        type: 'selector',
        required: true,
        title: "您的年龄段：",
        answers: ages,
    },
    {
        number: 3,
        required: true,
        type: 'placepicker',
        title: "您所在的城市",
        places: places,
    },
    {
        number: 4,
        type: 'choice',
        required: true,
        title: '是否已经就业',
        answers: [
            {
                text: '是',
                value: 1,
            },
            {
                text: '否',
                value: 2
            }
        ]
    },
    {
        number: 5,
        type: 'input',
        required: true,
        title: '那你的职业是什么呢？',
        follow: {
            number: 4,
            value: 1,
        }
    },
    {
        number: 6,
        type: 'choice',
        required: true,
        title: '是否已经就业',
        answers: [
            {
                text: '小学毕业及以下',
                value: 1,
            },
            {
                text: '初中',
                value: 2
            },
            {
                text: '高中',
                value: 3
            },
            {
                text: '中专',
                value: 4
            },
            {
                text: '大专',
                value: 5
            },
            {
                text: '技校',
                value: 6
            },
            {
                text: '本科及以上',
                value: 7
            }
        ]
    },
    {
        number: 7,
        type: 'choice',
        required: true,
        title: '您的感情状况',
        answers: [
            {
                text: '从未谈过恋爱',
                value: 1,
            },
            {
                text: '有喜欢的对象',
                value: 2
            },
            {
                text: '正在恋爱中',
                value: 3
            },
            {
                text: '目前已分手',
                value: 4
            },
            {
                text: '已婚',
                value: 5
            },
        ]
    },
    {
        number: 8,
        type: 'choice',
        required: true,
        title: '是否有过网恋',
        answers: [
            {
                text: '是',
                value: 1,
            },
            {
                text: '否',
                value: 2
            }
        ]
    }, 
    {
        number: 9,
        type: 'choice',
        required: true,
        title: '最长一段恋情持续了多久',
        answers: [
            {
                text: '半个月',
                value: 1,
            },
            {
                text: '一个月',
                value: 2
            },
            {
                text: '3个月',
                value: 3
            },
            {
                text: '6个月',
                value: 4
            },
            {
                text: '一年以上',
                value: 5
            },
        ]
    },
    {
        number: 10,
        type: 'multiselector',
        required: true,
        multi: true,
        title: '您的恋爱对象来自于',
        otherValue: 6,
        options: [
            {
                text: '网络',
                value: 1,
            },
            {
                text: '学校',
                value: 2,
            },
            {
                text: '工作',
                value: 3,
            },
            {
                text: '朋友介绍',
                value: 4,
            },
            {
                text: '父母介绍',
                value: 5,
            },
            {
                text: '其他',
                value: 6,
            },
        ]
    },
    {
        number: 11,
        type: 'choice',
        required: true,
        title: '觉得自己现实生活是怎样性格的人？',
        answers: [
            {
                text: '外冷内热',
                value: 1,
            },
            {
                text: '外冷内冷',
                value: 2
            },
            {
                text: '外热内冷',
                value: 3
            },
            {
                text: '外热内热',
                value: 4
            },
        ]
    },
    {
        number: 12,
        type: 'choice',
        required: true,
        title: '您在班级内（或曾读书时）的成绩如何？',
        answers: [
            {
                text: '上游',
                value: 1,
            },
            {
                text: '中游',
                value: 2
            },
            {
                text: '下游',
                value: 3
            },
        ]
    },
    {
        number: 13,
        type: 'multiselector',
        required: true,
        multi: true,
        title: '您在班上(或曾经在班上)是否有担当过什么职位',
        otherValue: 6,
        options: [
            {
                text: '普通学生',
                value: 1,
            },
            {
                text: '小组长',
                value: 2,
            },
            {
                text: '课代表/委员',
                value: 3,
            },
            {
                text: '班长',
                value: 4,
            },
            {
                text: '学生会',
                value: 5,
            },
            {
                text: '其他',
                value: 6,
            },
        ]
    },
    {
        number: 14,
        type: 'choice',
        required: true,
        title: '您现实生活中有多少知心好友（可以说真心话的那种）',
        answers: [
            {
                text: '几乎没有',
                value: 1,
            },
            {
                text: '1-2人',
                value: 2
            },
            {
                text: '3-5人',
                value: 3
            },
            {
                text: '5-10人',
                value: 4
            },
            {
                text: '10人以上',
                value: 5
            },
        ]
    },
    {
        number: 15,
        type: 'choice',
        required: true,
        title: '平时在网络生活中你有多少知心网友（可以说心事的）',
        answers: [
            {
                text: '几乎没有',
                value: 1,
            },
            {
                text: '1-2人',
                value: 2
            },
            {
                text: '3-5人',
                value: 3
            },
            {
                text: '5-10人',
                value: 4
            },
            {
                text: '10人以上',
                value: 5
            },
        ]
    },
    {
        number: 16,
        type: 'choice',
        required: true,
        title: '您和唔哩星球认识的朋友面基过吗？',
        answers: [
            {
                text: '是',
                value: 1,
            },
            {
                text: '否',
                value: 2
            },
        ]
    }, 
    {
        number: 17,
        type: 'input',
        required: true,
        title: '如果有过是和几个人呢？',
        follow: {
            number: 16,
            value: 1,
        }
    },
    {
        number: 18,
        type: 'choice',
        required: true,
        title: '你在朋友里属于哪种类型',
        answers: [
            {
                text: '组织者',
                value: 1,
            },
            {
                text: '参与者',
                value: 2
            },
            {
                text: '旁观者',
                value: 3
            },
            {
                text: '冷漠者',
                value: 4
            },
        ]
    },
    {
        number: 19,
        type: 'choice',
        required: true,
        title: '您的家庭状况',
        answers: [
            {
                text: '正常',
                value: 1,
            },
            {
                text: '离异',
                value: 2
            },
        ]
    },
    {
        number: 20,
        type: 'multiselector',
        required: true,
        multi: 3,
        title: '你在网上花时间比较多的是那种类型app',
        otherValue: 9,
        options: [
            {
                text: '社交',
                value: 1,
            },
            {
                text: '游戏',
                value: 2,
            },
            {
                text: '论坛资讯',
                value: 3,
            },
            {
                text: '拍照P图',
                value: 4,
            },
            {
                text: '视频',
                value: 5,
            },
            {
                text: '电商购物',
                value: 6,
            },
            {
                text: '音乐',
                value: 7,
            },
            {
                text: '小说',
                value: 8,
            },
            {
                text: '其他',
                value: 9,
            },
        ]
    },
    {
        number: 21,
        type: 'input',
        required: true,
        title: '这三种类型app的名字它们分别是',
    },
    {
        number: 22,
        type: 'choice',
        required: true,
        title: '您是哪里知道唔哩星球的',
        otherValue: 11,
        answers: [
            {
                text: '朋友推荐',
                value: 1,
            },
            {
                text: '应用商店',
                value: 2
            },
            {
                text: 'QQ空间',
                value: 3
            },
            {
                text: '兴趣部落',
                value: 4
            },
            {
                text: '贴吧',
                value: 5
            },
            {
                text: '抖音',
                value: 6
            },
            {
                text: '今日头条',
                value: 7
            },
            {
                text: 'Bilibili',
                value: 8
            },
            {
                text: '微博',
                value: 9
            },
            {
                text: '微信',
                value: 10
            },
            {
                text: '其他',
                value: 11
            },
        ]
    },
    {
        number: 23,
        type: 'multiselector',
        required: true,
        multi: 3,
        title: '您使用唔哩星球或其他app的场合通常是',
        otherValue: 7,
        options: [
            {
                text: '早餐起床前',
                value: 1,
            },
            {
                text: '在公交地铁上',
                value: 2,
            },
            {
                text: '工作学习时间',
                value: 3,
            },
            {
                text: '休闲放松时',
                value: 4,
            },
            {
                text: '吃饭时',
                value: 5,
            },
            {
                text: '晚上睡觉前',
                value: 6,
            },
            {
                text: '其他',
                value: 7,
            },
        ]
    },
    {
        number: 24,
        type: 'choice',
        required: true,
        title: '你玩唔哩星球的初衷是什么',
        otherValue: 5,
        answers: [
            {
                text: '网恋处CP',
                value: 1,
            },
            {
                text: '找志同道合的朋友',
                value: 2
            },
            {
                text: '觉得唔哩星球的游戏好玩',
                value: 3
            },
            {
                text: '勾搭妹纸/汉子约会奔现',
                value: 4
            },
            {
                text: '其他理由',
                value: 5
            },
        ]
    },
    {
        number: 25,
        type: 'choice',
        required: true,
        title: '您使用唔哩星球经常互动的(如聊天送礼物评论点赞)好友数量大约为',
        answers: [
            {
                text: '2个以下',
                value: 1,
            },
            {
                text: '2-5个',
                value: 2
            },
            {
                text: '5-10个',
                value: 3
            },
            {
                text: '10-20个/汉子约会奔现',
                value: 4
            },
            {
                text: '20个以上',
                value: 5
            },
        ]
    },
    {
        number: 26,
        type: 'multiselector',
        required: true,
        multi: 3,
        title: '您在唔哩星球中使用停留时间长的功能是什么',
        options: [
            {
                text: '星际偶遇',
                value: 1,
            },
            {
                text: '家族',
                value: 2,
            },
            {
                text: '涂鸦拍卖',
                value: 3,
            },
            {
                text: '故事和酒',
                value: 4,
            },
            {
                text: '斯卡布罗集市',
                value: 5,
            },
            {
                text: '音波星球',
                value: 6,
            },
            {
                text: '假面舞会',
                value: 7,
            },
            {
                text: '红包房间',
                value: 8,
            },
        ]
    },
    {
        number: 27,
        required: true,
        type: 'multiselector',
        multi: 3,
        title: '您和好友互动多的是',
        options: [
            {
                text: '好友打字语音聊天',
                value: 1,
            },
            {
                text: '家族内群聊天',
                value: 2,
            },
            {
                text: '故事与酒互动',
                value: 3,
            },
            {
                text: '涂鸦拍卖玩涂鸦',
                value: 4,
            },
            {
                text: '参加假面舞会',
                value: 5,
            },
            {
                text: '斯卡布罗集市发布悬赏或者卖技能',
                value: 6,
            },
            {
                text: '音波星球连麦',
                value: 7,
            },
            {
                text: '红包房间收发红包',
                value: 8,
            },
        ] 
    },
    {
        number: 28,
        type: 'choice',
        required: true,
        title: '你会选择加入家族吗？',
        answers: [
            {
                text: '会',
                value: 1,
            },
            {
                text: '不会',
                value: 2
            },
        ]
    },
    {
        number: 29,
        type: 'input',
        required: true,
        title: '加入家族的理由或者不加入的理由呢？',
    },
    {
        number: 30,
        type: 'input',
        required: true,
        title: '您近三个月下载并且还保留使用的社交软件是什么？',
    },
    {
        number: 31,
        type: 'multiselector',
        multi: 3,
        required: true,
        title: '您会因为什么选择使用一新的社交应用',
        options: [
            {
                text: '新鲜感',
                value: 1,
            },
            {
                text: '最近比较热门各大排行榜推荐使用',
                value: 2,
            },
            {
                text: '新功能比较吸引人',
                value: 3,
            },
            {
                text: '品牌效应',
                value: 4,
            },
            {
                text: '界面设计美观吸引了我',
                value: 5,
            },
            {
                text: '使用起来容易上手，操作体验好',
                value: 6,
            },
            {
                text: '周围朋友、同学或同事都在使用',
                value: 7,
            },
        ]
    },
    {
        number: 32,
        type: 'choice',
        required: true,
        title: '您认为朋友对你的重要性',
        answers: [
            {
                text: '很重要，没有朋友我会死的',
                value: 1,
            },
            {
                text: '一般 有朋友但是希望还能遇到更多朋友',
                value: 2
            },
            {
                text: '无所谓 朋友不用多，有一两个就好',
                value: 3
            },
            {
                text: '不需要 我一个人也能过得很好',
                value: 4
            }, 
        ]
    },
    {
        number: 33,
        type: 'choice',
        required: true,
        title: '你网上交友会优先考虑什么？',
        otherValue: 8,
        answers: [
            {
                text: '异性优先',
                value: 1,
            },
            {
                text: '年龄吻合优先',
                value: 2
            },
            {
                text: '地理位置优先',
                value: 3
            },
            {
                text: '兴趣爱好优先',
                value: 4
            },
            {
                text: '颜值优先',
                value: 5
            },
            {
                text: '声音好听优先',
                value: 6
            },
            {
                text: '性格优先',
                value: 7
            },
            {
                text: '其他',
                value: 8
            },
        ]
    },
    {
        number: 34,
        type: 'choice',
        required: true,
        title: '你会因为什么而跟别人交朋友',
        answers: [
            {
                text: 'TA的性格',
                value: 1,
            },
            {
                text: 'TA的外貌',
                value: 2
            },
            {
                text: 'TA的声音',
                value: 3
            },
            {
                text: 'TA的特长',
                value: 4
            },
            {
                text: 'TA的谈吐',
                value: 5
            },
            {
                text: 'TA的教育背景',
                value: 6
            },
            {
                text: 'TA的财富',
                value: 7
            },
            {
                text: 'TA的兴趣爱好',
                value: 8
            },
        ]
    },
    {
        number: 35,
        type: 'input',
        required: true,
        title: '那您会怎么给别人推荐唔哩星球呢？',
        textarea: true,
    },
    {
        number: 36,
        type: 'choice',
        required: true,
        title: '您觉得唔哩星球对你来说是款重要的APP吗？',
        answers: [
            {
                text: '是的 很重要的一款APP，不会卸载',
                value: 1,
            },
            {
                text: '还不是，但有望成为我重要的一款APP，还没卸载',
                value: 2
            },
            {
                text: '不是，最多想起来才打开看看 可卸可不卸',
                value: 3
            },
            {
                text: '不是 已经卸载',
                value: 4
            },
        ]
    },
    {
        number: 37,
        type: 'input',
        required: true,
        title: '留下你的唔哩ID&nbsp;&nbsp;让我们面基探讨吧！'
    }
]

module.exports = questions;