process.env.NODE_ENV = 'test';

// Mock fetch
global.fetch = () => { throw new Error('fetch called in tests'); };

const chai = require('chai');
chai.use(require('dirty-chai')); // Function form for terminating assertions
global.expect = chai.expect;     // Register test tools globally
