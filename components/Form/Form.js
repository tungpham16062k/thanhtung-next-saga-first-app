import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../../actions/movie';
Form.propTypes = {
  movie: PropTypes.object,
};

Form.defaultProps = {
  movie: {
    id: null,
    name: '',
    viName: ''
  },
}

function Form(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const [movieData, setMovieData] = useState(props.movie || null);
  const [nameField, setNameField] = useState(movie?.name || '');
  const [viNameField, setViNameField] = useState(movie?.viName || '');

  useEffect(() => {
    setNameField(movie?.name);
    setViNameField(movie?.viName);
    setMovieData({ ...movie });
  }, [movie])

  const handleUpdateMovie = () => {
    const formData = {
      id: movie.id,
      name: nameField,
      viName: viNameField
    }
    dispatch(updateMovie(formData));

    setNameField('');
    setViNameField('');
    setMovieData(null);
  }
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Cập nhật phim</h2>
      <p style={{ margin: 0 }}>{movieData?.name}</p>
      <div className={styles.formGroup}>
        <span className={styles.formLabel}>Tên tiếng anh</span>
        <input disabled={movieData?.name && movieData?.viName ? false : true} spellCheck={false} name='name' onChange={(e) => setNameField(e.target.value)} value={nameField} className={styles.formControl} type='text' />
      </div>
      <div className={styles.formGroup}>
        <span className={styles.formLabel}>Tên tiếng việt</span>
        <input disabled={movieData?.name && movieData?.viName ? false : true} spellCheck={false} name='viName' value={viNameField} onChange={(e) => setViNameField(e.target.value)} className={styles.formControl} type='text' />
      </div>
      <button disabled={nameField && viNameField ? false : true} className={styles.button} onClick={handleUpdateMovie}>Cập nhật</button>
    </div>
  );
}

export default Form;