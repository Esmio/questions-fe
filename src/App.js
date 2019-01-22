import React from 'react';
import {useState} from 'react';

import {ages, places} from './data/places';

import Selector from './components/Selector';
import Choice from './components/Choice';
import PlacePicker from './components/PlacePicker';
import Input from './components/Input';
import MultiSelector from './components/MultiSelector';

function App() {
  const [ items, setItems ] = useState({});
  // 单选题
  const onChange = (number) => (value) => (e) => {
    items[number] = items[number] || {};
    items[number]['value'] = value;
    if(number === 4 && value === 2 && items[5]) delete items[5];
    if(number === 16 && value === 2 && items[17]) delete items[17];
    setItems({
      ...items,
    })
  }
  // 多选题
  const handleMultiSelectorChange = (number, multi) => (value) => (e) => {
    items[number] = items[number] || {};
    items[number]['value'] = items[number]['value'] || [];
    const existIndex = items[number]['value'].indexOf(value);
    if(existIndex > -1) items[number]['value'].splice(existIndex, 1);
    else if(typeof multi === 'number' && items[number]['value'].length < multi) items[number]['value'].push(value);
    else if(typeof multi === 'boolean') items[number]['value'].push(value);
    setItems({
      ...items,
    })
  }
  // 单选题选择其他
  const handleOtherValueChange = (number) => (e) => {
    items[number] = items[number] || {};
    items[number]['other'] = e.target.value;
    setItems({
      ...items,
    })
  }
  // 下拉选择 
  const handleSelectorChange = (number) => (e) => {
    console.log('selector-change: ', number, e.target.value);
    items[number] = items[number] || {};
    const value = parseInt(e.target.value);
    if(value === 0) delete items[number];
    else items[number]['value'] = value;
    setItems({
      ...items,
    })
  }
  // 选择省市
  const handlePlacePickerChange = (number) => (place) => {
    items[number] = place;
    setItems({
      ...items,
    })
  }
  // 输入文本
  const handleInputChange = (number) => (e) => {
    items[number] = items[number] || {};
    items[number]['value'] = e.target.value.trim();
    setItems({
      ...items,
    })
  }
  // 提交问券
  const submit = () => {
    console.log('items', items);
  }
  return (
    <div 
      style={{
        width: '100vw',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: 'auto',
        WebkitOverflowScroll: 'touch',
      }}
    >
      <div
        style={{
          fontSize: '.32rem',
          color: '#19a8ee',
          fontWeight: 'bolder',
          height: '.6rem',
          paddingTop: '.1rem',
          paddingBottom: '.1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        唔哩星球玩家调研
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '.24rem',
            color: '#666',
            borderBottom: '.01rem solid #f2f2f2',
            padding: '.1rem 0',
            textAlign: 'left',
            width: 'calc(100vw - .6rem)'
          }}
        >
          感谢您的参与，请认真填写喔
        </div>
        <div
          style={{
            fontSize: '.28rem',
            boxSizing: 'border-box',
          }}
        >
          <Choice
            required={true}
            number={1}
            title="您的性别"
            answers={[
              {
                text: '男',
                value: 1,
              },
              {
                text: '女',
                value: 2
              }
            ]}
            onChange={onChange}
            valueObj={items[1]}
          />
          <Selector 
            required={true}
            number={2}
            title="您的年龄段："
            answers={ages}
            onChange={handleSelectorChange}
          />
          <PlacePicker
            required={true}
            number={3}
            title="您所在的城市"
            places={places}
            onChange={handlePlacePickerChange}
            valueObj={items[3]}
          />
          <Choice
            required={true}
            number={4}
            title="是否已经就业"
            answers={[
              {
                text: '是',
                value: 1,
              },
              {
                text: '否',
                value: 2
              }
            ]}
            onChange={onChange}
            valueObj={items[4]}
          />
          {
            items[4] && items[4]['value'] === 1 ?
            <Input 
              required={true}
              number={5}
              title="那你的职业是什么呢？"
              onChange={handleInputChange}
              valueObj={items[5]}
            /> : ''
          }
          <Choice
            required={true}
            number={6}
            title="是否已经就业"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[6]}
          />
          <Choice
            required={true}
            number={7}
            title="您的感情状况"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[7]}
          />
          <Choice
            required={true}
            number={8}
            title="是否有过网恋"
            answers={[
              {
                text: '是',
                value: 1,
              },
              {
                text: '否',
                value: 2
              }
            ]}
            onChange={onChange}
            valueObj={items[8]}
          />
          <Choice
            required={true}
            number={9}
            title="最长一段恋情持续了多久"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[9]}
          />
          <MultiSelector
            required={true}
            multi={true}
            number={10}
            title="您的恋爱对象来自于"
            options={[
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
            ]}
            otherValue={6}
            valueObj={items[10]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={11}
            title="觉得自己现实生活是怎样性格的人？"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[11]}
          />
          <Choice
            required={true}
            number={12}
            title="您在班级内（或曾读书时）的成绩如何？"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[12]}
          />
          <MultiSelector
            required={true}
            multi={true}
            number={13}
            title="您在班上(或曾经在班上)是否有担当过什么职位"
            options={[
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
            ]}
            otherValue={6}
            valueObj={items[13]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={14}
            title="您现实生活中有多少知心好友（可以说真心话的那种）"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[14]}
          />
          <Choice
            required={true}
            number={15}
            title="平时在网络生活中你有多少知心网友（可以说心事的）"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[15]}
          />
          <Choice
            required={true}
            number={16}
            title="您和唔哩星球认识的朋友面基过吗？"
            answers={[
              {
                text: '是',
                value: 1,
              },
              {
                text: '否',
                value: 2
              },
            ]}
            onChange={onChange}
            valueObj={items[16]}
          />
          {
            items[16] && items[16]['value'] === 1 ?
            <Input 
              required={true}
              number={17}
              title="如果有过是和几个人呢？"
              onChange={handleInputChange}
              valueObj={items[17]}
            /> : ''
          }
          <Choice
            required={true}
            number={18}
            title="你在朋友里属于哪种类型"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[18]}
          />
          <Choice
            required={true}
            number={19}
            title="您的家庭状况"
            answers={[
              {
                text: '正常',
                value: 1,
              },
              {
                text: '离异',
                value: 2
              },
            ]}
            onChange={onChange}
            valueObj={items[19]}
          />
          <MultiSelector
            required={true}
            multi={3}
            number={20}
            title="你在网上花时间比较多的是那种类型app"
            options={[
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
            ]}
            otherValue={9}
            valueObj={items[20]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Input 
            required={true}
            number={21}
            title="这三种类型app的名字它们分别是"
            onChange={handleInputChange}
            valueObj={items[21]}
          /> 
          <Choice
            required={true}
            number={22}
            title="您是哪里知道唔哩星球的"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[22]}
            otherValue={11}
            handleOtherValueChange={handleOtherValueChange}
          />
          <MultiSelector
            required={true}
            multi={3}
            number={23}
            title="您使用唔哩星球或其他app的场合通常是"
            options={[
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
            ]}
            valueObj={items[23]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={24}
            title="你玩唔哩星球的初衷是什么"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[24]}
            otherValue={5}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={25}
            title="您使用唔哩星球经常互动的(如聊天送礼物评论点赞)好友数量大约为"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[25]}
          />
          <MultiSelector
            required={true}
            multi={3}
            number={26}
            title="您在唔哩星球中使用停留时间长的功能是什么"
            options={[
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
            ]}
            valueObj={items[26]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <MultiSelector
            required={true}
            multi={3}
            number={27}
            title="您和好友互动多的是"
            options={[
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
            ]}
            valueObj={items[27]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={28}
            title="你会选择加入家族吗？"
            answers={[
              {
                text: '会',
                value: 1,
              },
              {
                text: '不会',
                value: 2
              },
            ]}
            onChange={onChange}
            valueObj={items[28]}
          />
          <Input 
            required={true}
            number={29}
            title="加入家族的理由或者不加入的理由呢？"
            onChange={handleInputChange}
            valueObj={items[29]}
          />
          <Input 
            required={true}
            number={30}
            title="您近三个月下载并且还保留使用的社交软件是什么？"
            onChange={handleInputChange}
            valueObj={items[30]}
          />
          <MultiSelector
            required={true}
            multi={3}
            number={31}
            title="您会因为什么选择使用一新的社交应用"
            options={[
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
            ]}
            valueObj={items[31]}
            onChange={handleMultiSelectorChange}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={32}
            title="您认为朋友对你的重要性"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[32]}
          />
          <Choice
            required={true}
            number={33}
            title="你网上交友会优先考虑什么？"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[33]}
            otherValue={8}
            handleOtherValueChange={handleOtherValueChange}
          />
          <Choice
            required={true}
            number={34}
            title="你会因为什么而跟别人交朋友"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[34]}
          />
          <Input 
            required={true}
            number={35}
            title="那您会怎么给别人推荐唔哩星球呢？"
            onChange={handleInputChange}
            valueObj={items[35]}
            textarea={true}
          />
          <Choice
            required={true}
            number={36}
            title="您觉得唔哩星球对你来说是款重要的APP吗？"
            answers={[
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
            ]}
            onChange={onChange}
            valueObj={items[36]}
          />
          <Input 
            required={true}
            number={37}
            title="留下你的唔哩ID&nbsp;&nbsp;让我们面基探讨吧！"
            onChange={handleInputChange}
            valueObj={items[37]}
          />
        </div>
        <div
          style={{
            height: '1.6rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '2rem',
              height: '.6rem',
              fontSize: '.28rem',
              fontWeight: 'bolder',
              color: '#fff',
              backgroundColor: '#19a8ee',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '.1rem'
            }}
            onClick={submit}
          >
            提交问券
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
