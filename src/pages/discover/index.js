import React, {memo} from 'react'
import {RecommendWrapper, CategoryList} from './style'

import { discoverLinks} from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default memo(function Discover(props) {

  // console.log(props);
  const {route} = props

  return (
    <RecommendWrapper>
      <div className="top">
        <CategoryList className="w1100">
          {discoverLinks.map((item) => {
            return (
              <li key={item.title} className="item">
                <NavLink to={item.link} activeClassName="menu-active">
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </CategoryList>
      </div>
      {renderRoutes(route.routes)}
    </RecommendWrapper>

  )
})