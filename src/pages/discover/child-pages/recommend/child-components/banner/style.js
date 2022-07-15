import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background-image: url('${props => props.bgImage}');
  background-position: center center;
  background-size: 6000px;
  width: 100%;
  height: 270px;

  .banner {
    position: relative;
    display: flex;
    height: 100%;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  img {
    width: 100%;
  }
`

// export const BannerRight = styled.a.attrs({
//   href: 'https://music.163.com/#/download',
//   target: '_blank',
// })`
//   width: 250px;
//   background: url(${require('@/assets/img/download.png')});
// `
export const BannerRight = styled.div`
  position:relative;
  width: 250px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')}) 0 -10px;

  .download {
    position: absolute;
    left: 19px;
    top: 173px;
    display: block;
    width: 215px;
    height: 56px;
    border-radius: 1px;

    &:hover {
      background: url(${require('@/assets/img/download.png')}) 0 -286px;
    }
  }

  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    margin: 10px 0;
    text-align: center;
    color: #8d8d8d;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(1) {
      left: -68px;
      background-position: 0 -360px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`