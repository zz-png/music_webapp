import Discover from '@/pages/discover'
import My from '@/pages/my'
import Friend from '@/pages/friend'

import Recommend from '@/pages/discover/child-pages/recommend'
import Ranking from '@/pages/discover/child-pages/ranking'
import Playlist from '@/pages/discover/child-pages/playlist'
import Radio from '@/pages/discover/child-pages/radio'
import Singer from '@/pages/discover/child-pages/singer'
import Album from '@/pages/discover/child-pages/album'

import {Redirect} from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking,
      },
      {
        path: '/discover/playlist',
        component: Playlist,
      },
      {
        path: '/discover/radio',
        component: Radio,
      },
      {
        path: '/discover/singer',
        component: Singer,
      },
      {
        path: '/discover/album',
        component: Album,
      },
    ]
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/friend',
    component: Friend
  }

];

export default routes;