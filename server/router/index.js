import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../../client/components/routes';

function wrapHTML(html) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>React London</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="main.css">
  </head>
  <body>
    <main id="main">
      ${html}
    </main>
    <script src="/static/editor.js"></script>
  </body>
</html>
    `;
}

const router = (req, res) => {
  match({ routes, location: req.url }, (error, _, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (renderProps) {
      const html = renderToString(<RouterContext {...renderProps} />);
      const body = wrapHTML(html);
      return res.status(200).send(body);
    }
    res.status(404).send('Not found');
  });
};

export default router;
