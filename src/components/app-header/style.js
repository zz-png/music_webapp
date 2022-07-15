import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }

  .red-line {
    height: 5px;
    background-color: #c20b0b;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .header-links {
    display: flex;
    color: #ccc;
    font-size: 14px;

    .header-item {
      height: 70px;
      padding: 0 19px;
      line-height: 70px;
      color: #ccc;
      
      &:hover {
        text-decoration: none;
        background-color: #000;
        color: #fff;
      }

      &:last-of-type {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 20px;
          right: -20px;
          width: 28px;
          height: 19px;
          background: url(${require('@/assets/img/sprite_01.png')}) -192px 0;
        }
      }
      
    }

    .active-link {
      position: relative;
      background-color: #000;
      color: #fff;
      .triangle {
        position: absolute;
        width: 12px;
        height: 6px;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        background: url('${require('@/assets/img/sprite_01.png')}') -226px 0;
      }
    }

  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search-wrapper {

    input {
      font-size: 12px;
    }

    .search {
      width: 160px;
      height: 34px;
      border-radius: 16px;

      &:hover {
        border: none;
      }
    } 
  }


  .creator-center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      border-color: #fff;
      color: #fff;
    }
  }
`