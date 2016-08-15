process.env.NODE_ENV = 'test';
process.env.COMMUNITY_URL = 'https://community-url.example.com';
process.env.CONFERENCE_URL = 'https://conference-url.example.com';

// Mock fetch
global.fetch = () => { throw new Error('fetch called in tests'); };

const chai = require('chai');

chai.use(require('dirty-chai')); // Function form for terminating assertions
global.expect = chai.expect;     // Register test tools globally
