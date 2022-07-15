import styled from 'styled-components'

export const LyricContentWrapper = styled.div`
  position: absolute;
  right: 4px;
  width: 423px;
  height: 100%;
  overflow-x: auto;
  padding: 12px 22px 7px;

  .lyric-content {
    position: absolute;
    top: 5px;
    left: 0;
    width: 415px;
    text-align: center;
  }

  /* 滚动条 */
  ::-webkit-scrollbar {
    width: 6px; /*滚动条的宽度*/
    height: 6px; /*滚动条的高度*/
  }
  ::-webkit-scrollbar-thumb:vertical {
    /*垂直滚动条的样式*/
    background-color: #989898;
    border: 1px solid #505252;
    border-radius: 4px;
  }

  .lyric-item {
    height: auto !important;
    line-height: 32px;
    color: #989898;
    transition: color 0.7s linear;

    &.active {
      /* top: 12px; */
      color: #fff !important;
    }
  }
`
