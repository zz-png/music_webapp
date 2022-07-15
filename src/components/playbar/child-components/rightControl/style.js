import styled from 'styled-components'

export const RightWrapper = styled.div`
  display: flex;
  position: relative;
  top: 4px;
  margin-left: -30px;

  .left {
    display: flex;
    align-items: center;
    margin-right: 6px;

    .l-control {
      display: block;
      width: 25px;
      height: 25px;
      margin-left: 2px;
      text-align: center;
      font-size: 17px;
      color: #9f9f9f;

      &:hover {
        color: #fff;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -238px;

    .r-control {
      width: 25px;
      height: 25px;
      margin-right: 2px;
    }

    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      /* 1随机,2单曲循环,默认0顺序播放 */
      background-position: ${props => {
        switch (props.playSequence) {
          case 1:
            return '-66px -248px;'
          case 2:
            return '-66px -344px;'
          default:
            return '-3px -344px;'
        }
      }};

      &:hover {
        background-position: ${props => {
          switch (props.playSequence) {
            case 1:
              return '-93px -248px;'
            case 2:
              return '-93px -344px;'
            default:
              return '-33px -344px;'
          }
        }};
      }
    }

    .playlist {
      width: 59px;
      padding-left: 18px;
      text-align: center;
      line-height: 26px;
      color: #666;
      background-position: -42px -68px;

      &:hover {
        text-decoration: none;
        background-position: -42px -98px;
      }
    }
  }

  /* 进入 */
  .playlist-enter {
    opacity: 0;
    transform: scale(0.6);
  }

  .playlist-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  /* 离开 */
  .playlist-exit {
    opacity: 1;
    transform: scale(1);
  }

  .playlist-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 300ms, transform 300ms;
  }

  .top-volume {
    position: absolute;
    top: -117px;
    left: 69px;
    width: 32px;
    height: 113px;
    overflow: hidden;
    padding: 10px;
    background-position: 0 -503px;
    z-index: 100;

    /* ant design Slider style change */
    .ant-slider-vertical {
      margin: 0;
      .ant-slider-rail {
        background-color: transparent;
      }

      .ant-slider-track {
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat
          0 9999px;
        background-position: -40px bottom;
      }

      .ant-slider-handle {
        border: 0;
        background: url(${require('@/assets/img/sprite_icon.png')});
        background-position: -42px -250px;
      }
    }
  }
`