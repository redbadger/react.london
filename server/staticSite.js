import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import AWS from 'aws-sdk';
import { minify } from 'html-minifier';

import Preview from '../app/components/Preview/Preview';

const generateStaticSite = (properties, headers) => {
  let markup = renderToStaticMarkup(<Preview
    radiumConfig={{ userAgent: headers['user-agent'] }}
    text={properties}
  />);

  markup = `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${markup}
    </body>
  </html>`;

  const site = (minify(markup, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  }));

  return site;
};

const shipToAws = (bucketName, site) => {
  AWS.config.update({
    region: 'eu-west-1',
  });

  const s3 = new AWS.S3();

  s3.putObject({
    Bucket: bucketName,
    Key: 'index.html',
    ACL: 'public-read',
    Body: site,
    ContentType: 'text/html',
  }, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};

export const createSite = (body, headers, bucketName) => {
  const site = generateStaticSite(body, headers);
  shipToAws(bucketName, site);
  return site;
};
