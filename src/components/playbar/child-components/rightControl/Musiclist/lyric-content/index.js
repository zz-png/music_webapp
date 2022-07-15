import React, {memo, useEffect, useRef} from 'react'
import {nanoid} from 'nanoid'
import {shallowEqual, useSelector} from 'react-redux'

import { LyricContentWrapper } from './style'
import {scrollLyric} from '@/utils/scroll-lyric'

export default memo(function LyricContent() {

  const { songIndex, lyriclist, lyricIndex } = useSelector(state => ({
    songIndex: state.player.songIndex,
    lyriclist: state.player.lyriclist,
    lyricIndex: state.player.lyricIndex,
  }), shallowEqual)

  const lyric = lyriclist && lyriclist[songIndex]

  const lyricRef = useRef()
  useEffect(() => {
    if (lyricIndex >= 0 && lyricIndex < 4) {
      lyricRef.current.scrollTop = 0
      return
    }
    // 直接设置scrollTop也可以实现滚动效果，但是没有过渡动画不太好看
    // lyricRef.current.scrollTop = (lyricIndex - 3) * 32
    scrollLyric(lyricRef.current, (lyricIndex - 3) * 32, 300)
  }, [lyricIndex])

  return (
    <LyricContentWrapper ref={lyricRef}>
      <div className="lyric-content">
        {lyric && lyric.map((item, index) => {
          return (
            <div key={nanoid()} className={'lyric-item' + (lyricIndex === index ? ' active' : '')}>
              {item.content}
            </div>
          )
        })}
      </div>
    </LyricContentWrapper>
  )
})
