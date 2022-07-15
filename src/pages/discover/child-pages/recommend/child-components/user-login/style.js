import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  height: 126px;

  .profile-info {
    background-position: 0 0;
    height: 100%;

    .login-detail {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
    }

    .login-btn {
      display: block;
      width: 100px;
      height: 31px;
      margin: 0 auto;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
      cursor: pointer;

      &:hover {
        background-position: -110px -195px;
      }
    }
  }
`
