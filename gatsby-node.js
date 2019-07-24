const fs = require('fs');

// make sure the data directory exists
exports.onPreBootstrap = ({reporter}, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// query for data and create pages
exports.createPages = async ({actions, graphql, reporter}, options) => {
  const basePath = options.basePath || '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/index.js')
  });
};
