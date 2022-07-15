import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { SETTLE_SINGER_LIMIT } from '../../redux/constants'
import { getSettleSingerAsync } from '../../redux/action'
import { SettleSingerWrapper } from './style'
import SingerCover from '@/components/singer-cover'

export default memo(function SettleSinger() {

  //组件挂载时发送网络请求获取榜单数据
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSettleSingerAsync(SETTLE_SINGER_LIMIT))     
  }, [dispatch])

  //网络请求成功后，取出保存在redux中的热推数据
  const {singer} = useSelector(state => ({singer: state.recommend.settleSinger}), shallowEqual)
  // console.log(singer);

  return (
    <SettleSingerWrapper>
      <div className="header">
        <div className="settle-singer">入驻歌手</div>
        {/* href="/discover/artist/signed/" */}
        <a href="#" className="show-all">查看全部&gt;</a>
      </div>
      <div className="singer-container">
        {/* click ---> jump to "/user/home?id=198554" */}
        {singer && singer.map(item => {
          return <SingerCover key={item.id} info={item} />
        })}
      </div>
    </SettleSingerWrapper>
  )
})
