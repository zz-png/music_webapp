export function getCount(count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`
}

// format music duration(ms) to 'mm:ss'
export function formatTime(time) {
  // total seconds
  let totalTime = Math.floor(time / 1000)

  let minute = Math.floor(totalTime / 60)
  let second = totalTime % 60

  if(minute < 10){
    minute = '0' + minute
  }
  if(second < 10){
    second = '0' + second
  }

  return minute + ':' + second
}

export function getAudioSrc(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}