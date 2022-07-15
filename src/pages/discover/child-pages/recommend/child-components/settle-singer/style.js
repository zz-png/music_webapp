import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top: 15px;

  .header {
    display: flex;
    justify-content: space-between;
    height: 24px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;

    .settle-singer {
      font-weight: bold;
      color: #333;
    }
    .show-all {
      color: #666;
    }
  }

  .singer-container {
    /* 解决外边距塌陷 */
    overflow: hidden;
    margin: 6px 0 14px 20px;
  }
`
