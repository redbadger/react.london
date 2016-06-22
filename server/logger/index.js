/* eslint-disable no-console */

function error(x) {
  console.error('error:', x);
}

function warn(x) {
  console.warn('warn:', x);
}

function info(x) {
  console.log('info:', x);
}

function trace(x) {
  console.trace('trace:', x);
}

export default { error, warn, info, trace };
