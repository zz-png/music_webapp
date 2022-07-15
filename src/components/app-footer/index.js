import React, {memo, Fragment} from 'react'
import {FooterWrapper, FooterLeft, FooterRight} from './style'
import {footerLinks, footerImages} from '@/common/local-data.js'

export default memo(function AppFooter() {

  const showCopyLinks = item => {
    return (
      <Fragment key={item.title}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        <span className="line">|</span>
      </Fragment>
    )
  }

  const showImages = item => {
    return (
      <li key={item.title} className="item">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className={"logo-" + item.title}></a>
        <span className={item.title}></span>
      </li>
    )
  }

  return (
    <FooterWrapper>
      <div className="footer-content w980">
        <FooterLeft>
          <p className="copy">{footerLinks.map(obj => showCopyLinks(obj))}</p>
          <p className="footer-company">
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank" rel="noopener noreferrer">浙网文[2021] 1186-054号</a>
          </p>
          <p className="footer-manage-system">
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站 </a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noopener noreferrer"><span className="police-logo"></span><span>浙公网安备 33010902002564号</span></a>
          </p>
          <p className="footer-religion">
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          </p>
        </FooterLeft>
        <FooterRight>{footerImages.map(obj => showImages(obj))}</FooterRight>
      </div>
    </FooterWrapper>
  )
})
