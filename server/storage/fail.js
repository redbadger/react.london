//
// A backend for the storage module that always fails.
// For use in tests.
//

import { setBackend } from '.';

function fail() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

export function useFailStore() {
  setBackend({ put: fail, get: fail });
}
