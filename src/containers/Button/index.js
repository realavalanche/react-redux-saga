import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions'

let styles = {
  height: '50px',
  display: 'block',
  margin: '25px auto',
  fontSize: '25px'
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={styles}
        onClick={this.props.getNews}
      >Click to see News</button>
    );
  }

};

const mapDispatchToProps = {
  getNews: getNews,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
