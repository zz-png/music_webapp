import styled from 'styled-components'

export const ToplistWrapper = styled.div`
  width: 230px;

  .ranking-header {
    display: flex;
    height: 120px;
    padding: 20px 0 0 20px;

    .image-wrapper {
      position: relative;
      height: 80px;

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .tit {
      width: 116px;
      margin: 6px 0 0 12px;

      div h3 {
        font-weight: bold;
      }

      .btn {
        display: flex;
        margin-top: 10px;
        .play,
        .favourite {
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }

        .play {
          background-position: -267px -205px;

          &:hover {
            background-position: -267px -235px;
          }
        }

        .favourite {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .ranking-list {
    .list-item {
      display: flex;
      height: 32px;
      line-height: 32px;

      .number {
        width: 30px;
        margin-left: 15px;
        font-size: 16px;
        text-align: center;
      }

      .song-name {
        width: 185px;
        padding-left: 5px;
        color: #000;
        font-size: 12px;
      }

      &:hover .song-name {
        width: 96px;
      }

      &:hover .operation {
        visibility: visible;
        width: 93px;
      }

      .operation {
        display: flex;
        align-items: center;
        visibility: hidden;
        width: 0;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;

          &:hover {
            background-position: -22px -700px;
          }
        }

        .favourite {
          background-position: -297px -268px;

          &:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
  }

  .ranking-footer {
    height: 33px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .show-all {
      color: #000;
      margin-right: 30px;
    }
  }
`
