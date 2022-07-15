import produce from 'immer'

import {CHANGE_PLAYLIST, CHANGE_SONG_INDEX, CHANGE_FIRST_LOAD, CHANGE_PLAY_SEQUENCE,
  CHANGE_FORCE_PLAY, CHANGE_LYRIC_LIST, CHANGE_LYRIC_INDEX,
} from './constants'

const initState = {
  playlist: [
    {
      "name": "再见",
      "id": 185726,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 6453,
              "name": "张震岳",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000009585997",
      "fee": 8,
      "v": 54,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 18881,
          "name": "再见",
          "picUrl": "https://p1.music.126.net/P1LUZnbCGK13toE1-22idA==/109951165621404244.jpg",
          "tns": [],
          "pic_str": "109951165621404244",
          "pic": 109951165621404240
      },
      "dt": 183847,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 7356125,
          "vd": -45931,
          "sr": 44100
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 4413693,
          "vd": -43402,
          "sr": 44100
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 2942476,
          "vd": -41735,
          "sr": 44100
      },
      "sq": {
          "br": 999791,
          "fid": 0,
          "size": 22976137,
          "vd": -45983,
          "sr": 44100
      },
      "hr": null,
      "a": null,
      "cd": "1",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8704,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 54,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "awardTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 684010,
      "mv": 10929986,
      "publishTime": 1120147200000
    }    
  ],
  songIndex: 0,
  firstLoad: true,
  // 0顺序播放，1随机播放，2单曲循环
  playSequence: 0,  
  // 添加forcePlay状态的原因是为了实现切歌时是否直接播放
  // 点击上一首或下一首：若当前播放状态为暂停，切歌之后也不要播放
  // 点击播放按钮：强制播放（不管当前歌曲是否暂停）
  forcePlay: -1,  
  lyriclist: [
    [{
      content: "作词 : 张震岳",
      totalTime: 0
    }, 
    {
      content: "作曲 : 张震岳",
      totalTime: 1000
    }, 
    {
      content: "我怕我没有机会",
      totalTime: 8620
    }, 
    {
      content: "跟你说一声再见",
      totalTime: 12440
    }, 
    {
      content: "因为也许就再也见不到你",
      totalTime: 16310
    }, 
    {
      content: "明天我要离开",
      totalTime: 24240
    }, 
    {
      content: "熟悉的地方和你",
      totalTime: 27920
    }, 
    {
      content: "要分离",
      totalTime: 31860
    }, 
    {
      content: "我眼泪就掉下去",
      totalTime: 34080
    }, 
    {
      content: "我会牢牢记住你的脸",
      totalTime: 39630
    }, 
    {
      content: "我会珍惜你给的思念",
      totalTime: 43440
    }, 
    {
      content: "这些日子在我心中永远都不会抹去",
      totalTime: 47290
    },
    {
      content: "我不能答应你",
      totalTime: 55110
    }, 
    {
      content: "我是否会再回来",
      totalTime: 58910
    }, 
    {
      content: "不回头",
      totalTime: 62740
    }, 
    {
      content: "不回头地走下去",
      totalTime: 65409
    }, 
    {
      content: "我怕我没有机会",
      totalTime: 78409
    }, 
    {
      content: "跟你说一声再见",
      totalTime: 82060
    }, 
    {
      content: "因为也许就再也见不到你",
      totalTime: 86080
    }, 
    {
      content: "明天我要离开",
      totalTime: 93730
    }, 
    {
      content: "熟悉的地方和你",
      totalTime: 97599
    }, 
    {
      content: "要分离",
      totalTime: 101500
    }, 
    {
      content: "我眼泪就掉下去",
      totalTime: 103890
    }, 
    {
      content: "我会牢牢记住你的脸",
      totalTime: 109310
    }, 
    {
      content: "我会珍惜你给的思念",
      totalTime: 113099
    }, 
    {
      content: "这些日子在我心中永远都不会抹去",
      totalTime: 117000
    }, 
    {
      content: "我不能答应你",
      totalTime: 124739
    }, 
    {
      content: "我是否会再回来",
      totalTime: 128569
    }, 
    {
      content: "不回头",
      totalTime: 132469
    }, 
    {
      content: "不回头地走下去",
      totalTime: 135030
    }, 
    {
      content: "我会牢牢记住你的脸",
      totalTime: 140319
    }, 
    {
      content: "我会珍惜你给的思念",
      totalTime: 144030
    }, 
    {
      content: "这些日子在我心中永远都不会抹去",
      totalTime: 147939
    }, 
    {
      content: "我不能答应你",
      totalTime: 155699
    }, 
    {
      content: "我是否会再回来",
      totalTime: 159560
    }, 
    {
      content: "不回头",
      totalTime: 163430
    }, 
    {
      content: "不回头地走下去",
      totalTime: 166099
    }, 
    {
      content: "不回头",
      totalTime: 171349
    }, 
    {
      content: "不回头地走下去",
      totalTime: 173680
    }]
    ],
  lyricIndex: 0,
}

export default produce((draft = initState, action) => {
  const {type, data} = action
  switch(type) {
    case CHANGE_PLAYLIST:
      draft.playlist.push(data)
      break
    case CHANGE_SONG_INDEX:
      draft.songIndex = data
      break
    case CHANGE_FIRST_LOAD:
      draft.firstLoad = data
      break
    case CHANGE_PLAY_SEQUENCE:
      draft.playSequence = data
      break
    case CHANGE_FORCE_PLAY:
      draft.forcePlay = data
      break
    case CHANGE_LYRIC_LIST:
      draft.lyriclist.push(data)
      break
    case CHANGE_LYRIC_INDEX:
      draft.lyricIndex = data
      break
    default:
      return draft
  }
})