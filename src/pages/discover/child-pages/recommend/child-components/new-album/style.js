import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 20px;

  .new-album-content {
    position: relative;
    height: 184px;
    margin: 20px 0;
    padding: 26px 25px 15px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;

    .inside-wrapper {
      .album {
        display: flex !important;
        justify-content: space-between;
      }
    }

    .control {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-120%);
      margin: auto;
      background-position-y: -76px;
      cursor: pointer;
    }

    .left-arrow {
      left: 5px;
      background-position-x: -261px;
    }

    .right-arrow {
      right: 5px;
      background-position-x: -294px;
    }

  }

`
