import React from 'react';
import { connect } from 'react-redux'

// const imgStyle = {
//   hight: 'auto',
//   width: '80%',
//   border: '4px solid RebeccaPurple ',
//   borderRadius: '5%'
// };
const articleStyle = {
  width: '50%',
  margin: '80px auto',
  fontFamily: 'sans-serif',
  fontSize: '12px',
  color: 'olive'
}
const messageStyle = {
  width: '27%',
  margin: '80px auto',
  fontFamily: 'sans-serif',
  fontSize: '25px',
  color: 'blue'
}

let NewsItem = ({ article }) => (
  article && article.status !== "error" && article.name !== "Error" ?
    <div style={articleStyle}>
      <h1>{article.name}</h1>
      {/* <img style={imgStyle} src={article.urlToImage} alt="" /> */}
      <h2>{article.description}</h2>
      <a href={article.url} target="_blank">READ MORE</a>
    </div> :
    <div style={!article ? messageStyle : { ...messageStyle, color: 'red ' }}>
      {!article ?
        <div>Please click the button to load news</div> : <div>{article.message}</div>
      }
    </div>
);

const mapStateToProps = (state) => ({
  article: state.news,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


