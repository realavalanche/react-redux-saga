import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  let newsAction = "NEWS_RECEIVED";
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => {
      if (response.status !== 200) {
        newsAction = "NEWS_ERROR";
      }
      return response.json();
    },
      error => {
        newsAction = "NEWS_ERROR";
        return new Error(error);
      });

  yield put({ type: newsAction, json: json.articles ? json.articles : [json] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
