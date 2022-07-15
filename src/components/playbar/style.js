import styled from 'styled-components'

export const PlayerbarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  align-items: center;

  .content {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 47px;
  }

`
