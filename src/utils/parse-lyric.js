/* 
    "[00:00.000] 作词 : 张震岳\n
    [00:01.000] 作曲 : 张震岳\n
    [00:08.620]我怕我没有机会\n
    [00:12.440]跟你说一声再见\n
    [00:16.310]因为也许就再也见不到你\n"
*/
// \[ \. \]为转义
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyrics) {
  if(!lyrics) return
  const lineStrings = lyrics.split('\n')
  const lyricArr = []
  for (const line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line)
      if(!result) continue
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3] * 1
      // 当前歌曲播放的总时长(毫秒)
      const totalTime = time1 + time2 + time3
      const content = line.replace(parseExp, '').trim()
      // content为空不要添加到数组中
      content && lyricArr.push({totalTime, content})
    }
  }
  return lyricArr
}