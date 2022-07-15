import styled from 'styled-components'

export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 552px;
  height: 28px;
  padding-left: 30px;
  margin-top: 2px;
  cursor: pointer;

  &.active,
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);

    .song-name,
    .singer,
    .duration {
      color: #fff;
    }
  }

  .song-name {
    width: 246px;
    height: 28px;
    line-height: 28px;
    color: #ccc;
  }

  .control {
    display: flex;
    width: 108px;
    padding-left: 10px;

    .icon {
      height: 16px;
      margin-left: 10px;
      background: url(${require('@/assets/img/playlist.png')});
      text-indent: -9999px;
      opacity: 0;
    }

    .icon-add {
      width: 16px;
      background-position: -24px 0;

      &:hover {
        background-position: -24px -20px;
      }
    }

    .icon-download {
      width: 14px;
      background-position: -57px -50px;

      &:hover {
        background-position: -80px -50px;
      }      
    }

    .icon-delete {
      width: 13px;
      background-position: -51px 0;

      &:hover {
        background-position: -51px -20px;
      }      
    }
  }

  &:hover {
    .icon-add,
    .icon-download,
    .icon-delete {
      opacity: 1;
    }
  }

  .singer {
    width: 80px;
    padding-left: 10px;
    color: #9b9b9b;
  }

  .duration {
    width: 45px;
    padding-left: 10px;
    margin-left: 10px;
    color: #666;
  }

`
