import React from 'react';
import styles from './Movie.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

Movie.propTypes = {
  movie: PropTypes.object,
  onUpdate: PropTypes.func,
};

Movie.defaultProps = {
  movie: {
    id: null,
    name: '',
    viName: ''
  },
  onUpdate: null
}

function Movie(props) {
  const { movie, onUpdate } = props;

  return (
    <div className={styles.item} key={movie.id}>
      <div>
        <p className={styles.name}>{movie.name}</p>
        <p className={styles.viName}>{movie.viName}</p>
      </div>
      <div className={styles.icon} onClick={() => onUpdate(movie)}>
        <FontAwesomeIcon icon={faEdit} size='sm' color='#777' />
      </div>
    </div>
  );
}

export default Movie;