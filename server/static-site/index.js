import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { minify } from 'html-minifier';
import Preview from '../../app/components/Preview/Preview';

function wrapBody(markup) {
  const body = `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${markup}
    </body>
  </html>`;
  return minify(body, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  });
}

const userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 ' +
'(KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';

export function compilePreview(state) {
  const args = { radiumConfig: { userAgent } };
  const markup = renderToStaticMarkup(<Preview {...state} {...args} />);
  const body = wrapBody(markup);
  return {
    path: 'index.html',
    body,
  };
}
