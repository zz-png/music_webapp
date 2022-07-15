import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'

import {formatTime, getAudioSrc} from '@/utils/format-data'

import {DownloadOutlined, DeleteOutlined, FolderAddOutlined} from '@ant-design/icons'
import {PlaylistItemWrapper} from './style'


function PlaylistItem(props) {

  // props
  const {isActive, songName, singer, duration, songId} = props

  return (
    <PlaylistItemWrapper className={isActive}>
      <div className="song-name">{songName}</div>
      <div className="control">
        <i className="icon icon-add" title="收藏">收藏</i>
        <i className="icon icon-download" title="下载">下载</i>
        <i className="icon icon-delete" title="删除">删除</i>
      </div>
      <div className="singer text-nowrap">{singer}</div>
      <div className="duration">{formatTime(duration)}</div>
    </PlaylistItemWrapper>
  )
}

PlaylistItem.propTypes = {
  songName: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  duration: propTypes.any.isRequired,
  isActive: propTypes.string
}

export default memo(PlaylistItem)