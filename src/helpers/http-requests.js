import request from 'request';
import Query from '../model/Query';

function retrieveArticles(query, page, cb) {
  if (!(query instanceof Query)) throw new Error();

  const options = {
    method: 'GET',
    url: 'https://cryptic-meadow-51342.herokuapp.com/api/articles',
    qs: {
      query: query.query, region: query.region, category: query.category, page: page.toString(),
    },
    headers:
            {
              'cache-control': 'no-cache',
            },
  };

  request(options, (error, response, body) => {
    if (error || response.status) {
      throw new Error(error);
    }
    console.log(response);
    body = JSON.parse(body);
    body = JSON.parse(body);

    cb(body.articles);
  });
}

export { retrieveArticles };
