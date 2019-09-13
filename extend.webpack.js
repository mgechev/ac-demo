const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: '201941863',
      period: {
        startDate: new Date('2019-9-1'),
        endDate: new Date()
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};

