import styled from 'styled-components'

export const MidWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  width: 670px;

  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
    overflow: hidden;
    margin: 6px 15px 0 0;
    background-position: 0 -80px
  }

  .play-detail {
    .song-info {
      width: 100%;
      height: 28px;
      overflow: hidden;
      text-shadow: 0 1px 0 #171717;
      line-height: 28px;
      .song-name {
        color: #e8e8e8;
        margin: 0 10px 0 5px;
      }
      .singer-name {
        color: #9b9b9b;
      }
    }

    .ant-slider {
      width: 466px;
      height: 9px;

      margin-top: -2px;
      z-index: 100;

      .ant-slider-rail,
      .ant-slider-track,
      .ant-slider-step {
        height: 9px;
      }

      .ant-slider-rail {
        background: url(${require('@/assets/img/progress_bar.png')}) -27px 0;
      }

      .ant-slider-track {
        background: url(${require('@/assets/img/progress_bar.png')});
        background-position: -27px -66px;
      }

      .ant-slider-handle {
        width: 20px;
        height: 22px;
        margin-top: -7px;
        border: 0;
        background: url(${require('@/assets/img/sprite_icon.png')});
        background-position: 0 -250px;
      }
    }
  }

  .song-time {
    line-height: 68px;
    color: #a1a1a1;
    margin: 0 30px 0 9px;

    .total-time {
      color: #797979;
    }
  }
`