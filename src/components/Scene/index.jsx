// @flow
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import type { StateType } from '../../types';

type ScenePropsType = {
  gifUrl: string
};

const Scene = ({ gifUrl }: ScenePropsType): React$Node => (
  <div>
    <img
      src={gifUrl}
      className={styles.image}
      alt="gif"
    />
  </div>
);

function mapStateToProps({ api }: StateType): ScenePropsType {
  if (api.data == null) {
    return { gifUrl: '' };
  }
  return { gifUrl: api.data.gif_url };
}

const connectedScene = connect(mapStateToProps)(Scene);

export { connectedScene as Scene };
