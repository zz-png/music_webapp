import React, {memo} from 'react'
import {HeaderWrapper, HeaderLeft, HeaderRight} from './style'
import {headerLinks} from '@/common/local-data'
import {Link, NavLink} from 'react-router-dom'

import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

export default memo(function AppHeader() {

  const handleHeaderLinks = (linkObj, index) => {
    if(index < 3){
      return (
        <NavLink key={linkObj.title} to={linkObj.link} className="header-item" activeClassName="active-link">
          <em>{linkObj.title}</em>
          <i className="triangle"></i>
        </NavLink>
      )
    } else{
      return (
        <a key={linkObj.title} href={linkObj.link} className="header-item">{linkObj.title}</a>
      )
    }
  }


  return (
    <HeaderWrapper>
      <div className="content w1100">
        <HeaderLeft>
          <h1>
            <Link to="/discover" className="logo sprite_01">网易云音乐</Link>
          </h1>
          <div className="header-links">
            {
              headerLinks.map((linkObj, index) => {
                return handleHeaderLinks(linkObj, index);
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search-wrapper">
            <Input 
              className="search"
              placeholder="音乐/视频/电台/用户" 
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="creator-center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="red-line"></div>
    </HeaderWrapper>
  )
})