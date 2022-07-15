import React, {memo} from 'react'

import {RecContent, RecommendLeft, RecommendRight} from './style'
import Banner from './child-components/banner'
import HotRecommend from './child-components/hot-recommend'
import NewAlbum from './child-components/new-album'
import Toplist from './child-components/toplist'
import UserLogin from './child-components/user-login'
import SettleSinger from './child-components/settle-singer'
import HotDjradio from './child-components/hot-djradio'
 
export default memo(function Recommend() {

  return (
    <div>
      <Banner></Banner>
      <RecContent className="w980">

        <RecommendLeft>
          {/* 热门推荐 */}
          <HotRecommend></HotRecommend>
          {/* 新碟上架 */}
          <NewAlbum></NewAlbum>
          {/* 榜单 */}
          <Toplist></Toplist>
        </RecommendLeft>

        <RecommendRight>
          {/* 用户登录 */}
          <UserLogin></UserLogin>
          {/* 入驻歌手 */}
          <SettleSinger></SettleSinger>
          {/* 热门主播 */}
          <HotDjradio></HotDjradio>
        </RecommendRight>

      </RecContent>

    </div>
  )
})
