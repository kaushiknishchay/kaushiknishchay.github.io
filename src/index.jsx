import React from 'react';
import { render } from 'react-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';


const MainApp = Loadable({
  loader: () => import(/* webpackChunkName: "MainApp" */ './App'),
  loading: Loading,
});

render(<MainApp />, document.getElementById('app'));
