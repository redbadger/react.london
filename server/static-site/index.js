import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { minify } from 'html-minifier';
import Preview from '../../app/components/Preview/Preview';
import fs from 'fs';

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

export function compilePreview(state) {
  const markup = renderToStaticMarkup(<Preview {...state} />);
  const body = wrapBody(markup);
  return {
    path: 'index.html',
    body,
  };
}

function getStyles() {
  const body = fs.readFileSync('./dist/main.css', 'utf8');
  return {
    path: 'main.css',
    body,
  };
}

export function compileSite(state) {
  const preview = compilePreview(state);
  const styles = getStyles();
  return [preview, styles];
}
