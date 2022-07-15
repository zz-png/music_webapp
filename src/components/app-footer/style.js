import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 173px;
  border: 1px solid #d3d3d3;
  background-color: #f2f2f2;

  .footer-content {
    display: flex;
    justify-content: space-between;
  }

`

export const FooterLeft = styled.div`
  width: 520px;
  padding-top: 15px;
  line-height: 24px;

  .copy a {
    color: #999;
  }

  .line {
    margin: 0 4px 0 4px;

    &:last-of-type {
      display: inline-block;
      text-indent: -9999px;
    }
  }

  .footer-company {
    color: #666;
    span:first-child {
      margin-right: 14px;
    }
  }

  .footer-manage-system {
    color: #666;
    line-height: 28px;

    .police-logo {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url(${require('@/assets/img/police.png')}) no-repeat;
      background-size: cover;
      vertical-align: -2px;
    }
  }

  .footer-religion {
    color: #666;
  }

`

export const FooterRight = styled.ul`
  display: flex;
  width: 420px;
  margin-top: 33px;
  padding: 0 5px;
  justify-content: space-between;

  .item {
    /* display: flex;
    flex-direction: column; */

    a {
      display: block;
      width: 50px;
      height: 45px;
      background: url(${require('@/assets/img/sprite_footer_02.png')}) no-repeat;
      background-size: 104px 444px;
    }

    .logo-amped {
      background-position: -60px 1px;
    }

    .logo-auth {
      background-position: -60px -99.5px;
    }

    .logo-musician {
      background-position: 0 1px;
    }

    .logo-reward {
      background-position: 0 -99px;
    }

    .logo-cash {
      background-position: -60px -49px;
    }

    span {
      display: inline-block;
      width: 52px;
      height: 14px;
      margin: 5px -1px 0;
      background: url(${require('@/assets/img/sprite_footer_01.png')}) no-repeat;
      background-size: 169.5px 109.5px;
    }

    .amped {
      background-position: 0 -20px;
    }

    .auth {
      background-position: 0px -100px;
    }

    .musician {
      background-position: 0 0;
    }

    .reward {
      background-position: 0 -60px;
    }

    .cash {
      background-position: 0 -80px;
    }
  }

`

