import React, {memo} from 'react'
import propTypes from 'prop-types'

import {RecConHeaderWrapper, RecConHeaderLeft, RecConHeaderRight} from './style'

const RecConHeader =  function RecConHeader(props) {
  
  const {title, keyWords, keywordsClick} = props

  return (
    <RecConHeaderWrapper>
      <RecConHeaderLeft>
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keyWords.map((item, index) => {
            return (
              <li key={item}>
                <a href="/" >{item}</a>
                {index === keyWords.length - 1 ? null : <span className="line">|</span>}
              </li>
            )
          })}
        </ul>

      </RecConHeaderLeft>

      <RecConHeaderRight>
        <span>更多</span>  
        <i className="icon"></i>

      </RecConHeaderRight>
    </RecConHeaderWrapper>
  )

}

RecConHeader.propTypes = {
  title: propTypes.string.isRequired,
  keyWords: propTypes.array,
  keywordsClick: propTypes.func,
}

RecConHeader.defaultProps = {
  keyWords: []
}

export default memo(RecConHeader)