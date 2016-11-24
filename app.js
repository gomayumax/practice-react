'use strict';

import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom'
import PostContainer from './containers/PostContainer';

render(
  <PostContainer />,
  document.getElementById('post')
);
