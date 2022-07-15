import styled from "styled-components";

export const HotDjradioWrapper = styled.div`
  margin-top: 30px;

  .header {
    height: 24px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;

    .settle-singer {
      height: 100%;
      font-size: 12px;
      font-weight: bold;
      color: #333;
    }
  }

  .djradio-container {
    margin: 20px 0 0 20px;

    .content {
      display: flex;
      height: 50px;

      .image-wrapper {
        margin-right: 10px;
      }

      .info {
        .djradio-name {
          position: relative;
          height: 21px;

          a {
            color: #000;
          }


          &::after {
            position: absolute;
            top: 2px;
            content: '';
            width: 11px;
            height: 13px;
            background: url(${require('@/assets/img/sprite_icon2.png')});
            background-position: 0 1px;
          }
        }

        .djradio-detail {
          width: 160px;
          color: #666;
        }
      }
    }
  }
`