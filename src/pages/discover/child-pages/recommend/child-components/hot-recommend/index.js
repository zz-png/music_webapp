import React, {memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getHotRecAsync} from '../../redux/action'

import {HotRecommendWrapper} from './style'
import RecConHeader from '@/components/rec-content-header' 
import {HOT_RECOMMEND_LIMIT} from '../../redux/constants'
import SongCover from '@/components/song-cover'

export default memo(function HotRecommend() {

  //组件挂载时发送网络请求获取热门推荐数据
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecAsync(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  //网络请求成功后，取出保存在redux中的热推数据
  const {hotRec} = useSelector(state => ({hotRec: state.recommend.hotRecommend}), shallowEqual)
  // console.log(hotRec);
  

  return (
    <HotRecommendWrapper>
      <RecConHeader title="热门推荐" keyWords={['华语', '流行', '摇滚', '民谣', '电子']}></RecConHeader>
      <div className="hot-rec-content">
        {hotRec && 
          hotRec.map(obj => {
            return (
              <SongCover info={obj} key={obj.id}>{obj.name}</SongCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
