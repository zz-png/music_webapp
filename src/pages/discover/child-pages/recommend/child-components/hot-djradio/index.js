import React, { memo } from 'react'
import {getSizeImage} from '@/utils/format-data'
import { hotDjradio } from '@/common/local-data.js'
import { HotDjradioWrapper } from './style'

export default memo(function HotDjradio() {
  return (
    <HotDjradioWrapper>
      <div className="header">
        <h3 className="settle-singer">热门主播</h3>
      </div>
      <ul className="djradio-container">
        {hotDjradio.map(item => {
          return (
            <li key={item.picUrl} className="content">
              <div className="image-wrapper">
                {/* href="/user/home?id=xxxx" */}
                <a href="#"><img src={getSizeImage(item.picUrl, 40)} alt="" /></a>
              </div>
              <div className="info">
                <p className="djradio-name">
                  {/* href="/user/home?id=xxxx" */}
                  <a href="#">{item.name}</a>
                </p>
                <p className="djradio-detail text-nowrap">{item.position}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </HotDjradioWrapper>
  )
})
