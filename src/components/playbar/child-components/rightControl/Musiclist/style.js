import styled from 'styled-components'

export const MusicListWrapper = styled.div`
  position: absolute;
  left: -425%;
  bottom: 50px;
  width: 986px;
  height: 301px;
  border-radius: 7px;
`
export const MusicListHeader = styled.div`
  display: flex;
  height: 40px;
  background: url(${require('@/assets/img/playlist_bg.png')});
  background-position: 0 0;

  .header-left {
    width: 553px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    padding: 0 10px 0 15px;

    .header-title {
      padding-left: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #e2e2e2;
    }

    .header-icon {
      padding: 5px;
      line-height: 33px;
      color: #ccc;
      span {
        margin-left: 5px;
      }
      
      &:hover {
        color: #fff;
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    width: 432px;
    color: #fff;
    text-align: center;

    .song-name {
      width: 346px;
      margin-left: 40px;
      line-height: 40px;
      font-size: 14px;
    }

    .close-playlist {
      width: 30px;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      cursor: pointer;
    }
  }
`

export const MusicListMain = styled.div`
  position: absolute;
  left: 0;
  top: 40px;
  display: flex;
  width: 100%;
  height: 261px;
  background: url(${require('@/assets/img/playlist_bg.png')});
  background-position: -1014px 0;
  background-repeat: repeat-y;

  .main-playlist {
    position: absolute;
    top: 0;
    left: 0;
    width: 561px;
    height: 261px;
    padding-left: 2px;
    overflow: auto;
    z-index: 10;

    /* 滚动条 */
    ::-webkit-scrollbar {
      width: 6px; /*垂直滚动条的宽度*/
      /* height: 6px; 水平滚动条的高度 */
    }

    ::-webkit-scrollbar-thumb:vertical {
      /*垂直滚动条的样式*/
      background-color: #444646;
      border: 1px solid #505252;
      border-radius: 5px;
    }

  }

  .main-line {
    position: absolute;
    left: 555px;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: .5;
  }

`