import React from 'react';
import { connect } from 'react-redux'
import img from '../../loading_spinner.gif'

let Loader = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>Loading...</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Loader = connect(
  mapStateToProps,
  null
)(Loader)


export default Loader;


