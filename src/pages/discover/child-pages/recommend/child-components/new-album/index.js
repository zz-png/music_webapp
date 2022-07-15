import React, {memo, useEffect, useRef} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getNewAlbumAsync} from '../../redux/action'
import {nanoid} from 'nanoid'

import {NewAlbumWrapper} from './style'
import RecConHeader from '@/components/rec-content-header' 
import {Carousel} from 'antd'
import AlbumCover from '@/components/album-cover'

export default memo(function NewAlbum() {

  //组件挂载时发送网络请求获取热门推荐数据
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAsync())
  }, [dispatch])

  //网络请求成功后，取出保存在redux中的热推数据
  const {newAlbum} = useSelector(state => ({newAlbum: state.recommend.newAlbum}), shallowEqual)
  // console.log(newAlbum);

  //useRef保存轮播图节点，获取prev(), next()方法
  const bannerRef = useRef()

  return (
    <NewAlbumWrapper>
      <RecConHeader title="新碟上架"></RecConHeader>
      <div className="new-album-content">
        <div className="inside-wrapper">
          <Carousel dots={false} ref={bannerRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={nanoid()} className="album">
                    {
                      newAlbum && newAlbum.slice(item * 5, (item + 1) * 5).map(obj => {
                        return (
                          <AlbumCover key={obj.id} info={obj} size={100} width={118} bgp="-570px">{obj.item}</AlbumCover>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="sprite_02 control left-arrow" onClick={() => {bannerRef.current.prev()}}></button>
        <button className="sprite_02 control right-arrow" onClick={() => {bannerRef.current.next()}}></button>
      </div>
    </NewAlbumWrapper>
  )
})