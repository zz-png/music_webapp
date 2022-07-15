import React, {memo} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import propTypes from 'prop-types';
import PlaylistItem from './playlist-item';
import {MusicListWrapper, MusicListHeader, MusicListMain} from './style';
import {ClearOutlined, CloseOutlined} from '@ant-design/icons';
import LyricContent from './lyric-content';

function MusicList(props) {
  // props
  const {showPlaylist, closePlaylist, playlist, isPlaying, songIndex} = props;
  const currentSong = playlist && playlist[songIndex]

  return (
    <MusicListWrapper style={{ visibility: showPlaylist ? 'visible' : 'hidden' }}>
      <MusicListHeader>
        <div className="header-left">
          <h3 className="header-title">播放列表({playlist.length})</h3>
          <div>
            <a href="#" className="header-icon">
              <ClearOutlined />
              <span>清除播放列表</span>
            </a>
          </div>
        </div>
        <div className="header-right">
          <p className="song-name">{currentSong && currentSong.name}</p>
          <div className="close-playlist" onClick={closePlaylist}>
            <CloseOutlined />
          </div>
        </div>
      </MusicListHeader>
      <MusicListMain>
        <div className="main-playlist">
          {playlist &&
            playlist.map((item, index) => {
              return (
                <PlaylistItem
                  key={item.id}
                  isActive={songIndex === index? 'active' : ''}
                  songName={item.name}
                  singer={item.ar[0].name}
                  duration={item.dt}
                  songId={item.id}
                />
              );
            })}
        </div>
        <div className="main-line"></div>
        <LyricContent />
      </MusicListMain>
    </MusicListWrapper>
  );
}

MusicList.propTypes = {
  showPlaylist: propTypes.bool.isRequired,
};

export default memo(MusicList);
