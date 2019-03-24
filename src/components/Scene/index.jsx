// @flow
import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import type { StateType } from '../../types';


type ScenePropsType = {
  gifUrl: string,
  children?: React$Node
};


const Scene = ({ gifUrl, children }: ScenePropsType): React$Node => (
  <div className={styles.root}>
    <img
      src={gifUrl}
      className={styles.image}
      alt="gif"
    />
    <div className={styles.contentArea}>
      {children}
    </div>
  </div>
);

Scene.defaultProps = {
  children: '',
};


function mapStateToProps({ api }: StateType): ScenePropsType {
  if (api.data == null) {
    return { gifUrl: '' };
  }
  return { gifUrl: api.data.gif_url };
}

const connectedScene = connect(mapStateToProps)(Scene);


export default connectedScene;
export { connectedScene as Scene };
