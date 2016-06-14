import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { minify } from 'html-minifier';
import Preview from '../../app/components/Preview/Preview';

function getComponent(pageName, state) {
  switch (pageName) {
    case 'Preview':
      return <Preview {...state} />;
    default:
      throw new Error(`static-site compilation: Unknown page '${pageName}'`);
  }
}

export function compilePage(pageName, state) {
  const component = getComponent(pageName, state);
  const markup = renderToStaticMarkup(component);
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

export function compileSite(state) {
  compilePage('Preview', state);
}
