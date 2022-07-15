import React, {memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {ToplistWrapper} from './style'
import RecConHeader from '@/components/rec-content-header' 
import {UP_TOPLIST_ID, NEW_TOPLIST_ID, ORIGIN_TOPLIST_ID} from '../../redux/constants'
import {getToplistAsync} from '../../redux/action'
import ToplistCon from '@/components/toplist'

export default memo(function Toplist(props) {

  //组件挂载时发送网络请求获取榜单数据
  const dispatch = useDispatch()

  useEffect(() => {
    [UP_TOPLIST_ID, NEW_TOPLIST_ID, ORIGIN_TOPLIST_ID].forEach(val => {
      dispatch(getToplistAsync(val))     
    })
  }, [dispatch])

  //网络请求成功后，取出保存在redux中的榜单数据
  const {up_toplist, new_toplist, origin_toplist} = useSelector(state => ({
    up_toplist: state.recommend.toplist_up,
    new_toplist: state.recommend.toplist_new,
    origin_toplist: state.recommend.toplist_origin
  }), shallowEqual)
  // console.log(origin_toplist);

  //useRef保存轮播图节点，获取prev(), next()方法
  // const bannerRef = useRef()

  return (
    <ToplistWrapper>
      <RecConHeader title="榜单"></RecConHeader>
      <div className="toplist-content">
        {up_toplist && <ToplistCon index={0} info={up_toplist} {...props}></ToplistCon>}
        {new_toplist && <ToplistCon index={1} info={new_toplist} {...props}></ToplistCon>}
        {origin_toplist && <ToplistCon index={2} info={origin_toplist} {...props}></ToplistCon>}
      </div>
    </ToplistWrapper>
  )
})