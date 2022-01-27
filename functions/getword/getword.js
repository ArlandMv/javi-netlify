/* const movieQuote = require("popular-movie-quotes");

const mq = movieQuote.getSomeRandom(1);
console.log(mq);

const mqString = `Random movie quote: ${mq[0].quote}
movie: ${mq[0].movie}
year: ${mq[0].year}
`;

async function getWord() {
  return Promise.resolve(mqString);
}
exports.handler = async function (event, context) {
  try {
    const body = await getWord();
    return { statusCode: 200, body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}
 */