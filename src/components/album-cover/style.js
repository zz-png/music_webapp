import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width + 'px'};
  font-size: 12px;

  .album-image {
    position: relative;
    .cover {
      background-position: 0 ${props => props.bgp};
    }
  }

  .album-name {
    margin-top: 5px;
    color: #000;
  }

  .artist {
    color: #666;
  }
`