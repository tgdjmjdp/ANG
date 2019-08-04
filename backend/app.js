const express = require('express');

const app = express();

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );

  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "123",
      title: "first title",
      content: "sadaadaadssadssdsad"
    },
    {
      id: "12313",
      title: "second title",
      content: "sadaadaadssadssdsad"
    }
  ];
  res.status(200).json({
    message: "post fetched completely",
    posts: posts
  });


});

module.exports = app;
