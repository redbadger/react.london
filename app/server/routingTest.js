// import express from 'express';
// import request from 'supertest';
// import superagent from 'superagent';
//
import { routingSetup } from './routingSetup';
// import { build as passportMock } from './passportMock';
//
// describe('GET /protected-resource authorized', function () {
//   let app = {};
//   let agent = superagent;
//
//   beforeEach(function (done) {
//     let blah = passportMock(express(), { passAuthentication: true,	userId: 1 });
//
//     app = routingSetup(blah.app, blah.passport);
//
//     // app.get('/mock/login', () => {
//     //   return { isAuthenticated: true };
//     // });
//
//     request(app)
//       .get('/mock/login')
//       .end(function (err, result) {
//         if (!err) {
//           console.log(JSON.stringify(result.headers));
//           done();
//         } else {
//           done(err);
//         }
//       });
//   });
//
//   it('should allow access to /', function (done) {
//     var req = request(app).get('/');
//     req.set('isAuthenticated', true);
//
// 		req.expect(200, done);
//   });
// });


var express = require('express');
var passport = require('passport');
var request = require('supertest');

describe('app', function() {
 describe('GET /', function() {
   it('should return 403 when no user is logged in', function(done) {

     let app = express();

     app.use(passport.initialize());
     app.use(passport.session());

     app.use(function(req, res, next) {
       req.isAuthenticated = function() {
         return true;
       };
       req.user = {};
       next();
     });

     app = routingSetup(app);

     request(app)
       .get('/')
       .expect(200)
       .end(done);
   });
   it('should return 200 when user is logged in', function(done) {

     var app = express();
     app.use(passport.initialize());
     app.use(passport.session());
     app.use(function(req, res, next) {
       req.isAuthenticated = function() {
         return true;
       };
       req.user = {};
       next();
     });
     app.get('/', function(req, res){
       if (!req.user || !req.isAuthenticated()){
         return res.send(403);
       }
       res.send(200);
     });

     request(app)
       .get('/')
       .expect(200)
       .end(done);

   });
 });
});
