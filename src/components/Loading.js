// @flow 
import React from 'react';
import loading from'../images/loading.gif'
const styles = {
  loading:{
    width:'50%',
  },
  img:{
    margin: "50px auto",
    width: "100%"
  }
}
export const Loading = () => {
  return (
      <div style={styles.loading}><img style={styles.img} src={loading} alt="loading"/></div>
  );
};