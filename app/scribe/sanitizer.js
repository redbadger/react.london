import HTMLJanitor from 'html-janitor';

// This plugin adds the ability to sanitize content when it is pasted into
// the scribe, adhering to a whitelist of allowed tags and attributes.

const allowMarkers = {
  tags: {
    p: {},
    b: {},
    i: {},
    u: {},
    ol: {},
    ul: {},
    li: {},
    blockquote: {},
    a: {
      href: true,
      target: true,
    },
    em: { class: 'scribe-marker' },
    br: {},
  },
};

export default function scribeSanitizer(scribe) {
  const janitor = new HTMLJanitor(allowMarkers);
  scribe.registerHTMLFormatter(
    'sanitize',
    janitor.clean.bind(janitor)
  );
}
