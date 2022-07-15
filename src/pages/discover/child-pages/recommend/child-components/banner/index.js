import React, {memo, useEffect, useState, useRef, useCallback} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getTopBannerAsync} from '../../redux/action'
import {Carousel} from 'antd'
import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from './style'

export default memo(function Banner() {

  //在组件自身状态中，保存轮播图索引
  const [currentIndex, setCurrentIndex] = useState(0)

  //组件挂载时发送网络请求获取轮播图数据
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAsync())
  }, [dispatch])

  //网络请求成功后，取出保存在redux中的banner数据
  const {banners} = useSelector(state => ({banners: state.recommend.topBanner}), shallowEqual)

  //refhook保存走马灯节点，以拿到其中的切换轮播图方法prev(),next()
  const carouselRef = useRef()

  //模糊背景的Url
  const bgImage = banners && banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  //轮播图切换时，通过更改自身的状态currentIndex(也就是索引值)来修改模糊背景(bannerWrapper中的baImage属性)
  // const changeBlurImage = (from, to) => {
  //   setCurrentIndex(to);
  // }

  //使用useCallback优化上面的代码
  const changeBlurImage = useCallback((from, to) => {
    setCurrentIndex(to);
  }, [])

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="w980 banner">
        <BannerLeft>
          <Carousel autoplay effect="fade" ref={carouselRef} beforeChange={changeBlurImage}>
            {
              banners && banners.map(obj => {
                return (
                  <div key={obj.imageUrl}>
                    {/* href="song?id=xxxx" */}
                    <a href="#"><img src={obj.imageUrl} alt={obj.typeTitle}></img></a>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a className="download" href="https://music.163.com/#/download" target="_blank"></a>
          <p className="bottom">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button className="btn" onClick={() => carouselRef.current.prev()}></button>
          <button className="btn" onClick={() => carouselRef.current.next()}></button>
        </BannerControl>

      </div>
    </BannerWrapper>
  )
})
