import React from 'react';
import loading from '../images/loading.gif';

const styles = {
  loading: {
    width: '50%',
    margin: 'auto',
  },
  img: {
    margin: '50px auto',
    width: '100%',
  },
};
export const Loading = () => (
  <div style={styles.loading}><img style={styles.img} src={loading} alt="loading" /></div>
);
