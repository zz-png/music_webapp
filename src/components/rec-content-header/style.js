import styled from 'styled-components'

export const RecConHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  line-height: 33px;
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat center;
  background-position: -225px -156px;
  
`

export const RecConHeaderLeft = styled.div`
  display: flex;
  .hot-title {
    display: flex;
    margin-bottom: 5px;
    font-size: 20px;
    a {
      color: #333333;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .keywords {
    display: flex;
    margin-left: 20px;
    color: #ccc;
    line-height: 35px;
    .line {
        margin: 0 10px;
    }
    
  }
`

export const RecConHeaderRight = styled.div`
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: url('${require('@/assets/img/sprite_02.png')}') no-repeat center;
    background-position: 0 -240px;
  }
`