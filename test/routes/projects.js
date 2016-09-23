/* eslint-env mocha */

'use strict';

let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
let ejs = require('ejs');
let read = require('fs').readFileSync;
let join = require('path').join;
let proxyquire = require('proxyquire');

chai.use(chaiHttp);

let app;
let data;
let path;
let renderedView;

let sessionMock = {
  username: 'foo',
  password: 'bar',
  teamName: 'baz'
};

let sqliteStub = () => class SqliteStub {
  constructor () { this.foo = 'bar'; }
};

describe('projects', function () {
  describe('get request', function () {
    it('should render projects view with no projects when session.projects is null', function () {
      data = {title: 'Projects', projects: []};
      path = join(__dirname, '../../views/partials/projects.ejs');
      renderedView = ejs.compile(read(path, 'utf8'), {filename: path})(data);
      app = proxyquire('../../app', {
        'express-session': () => (req, res, next) => {
          req.session = sessionMock;
          next();
        },
        'connect-sqlite3': sqliteStub
      });
      // app = require('../../app');
      chai.request(app)
        .get('/projects')
        .end((err, res) => {
          if (err) {
            throw (err);
          }
          expect(res).to.have.status(200);
          expect(res).to.have.property('text');
          expect(res.text).to.equal(renderedView);
        });
    });
    it('should render projects view with projects when session.projects is not null', function () {
      data = {title: 'Projects', projects: [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}]};
      path = join(__dirname, '../../views/partials/projects.ejs');
      renderedView = ejs.compile(read(path, 'utf8'), {filename: path})(data);
     // app = require('../../app');
      app = proxyquire('../../app', {
        'express-session': () => (req, res, next) => {
          req.session = sessionMock;
          next();
        },
        'connect-sqlite3': sqliteStub
      });
      app.use((req, res, next) => {
        req.session.projects = [{id: 1, name: 'Project 1'}, {id: 2, name: 'Project 2'}];
        next();
      });
      chai.request(app)
        .get('/projects')
        .end((err, res) => {
          if (err) {
            throw (err);
          }
          expect(res).to.have.status(200);
          expect(res).to.have.property('text');
          expect(res.text).to.equal(renderedView);
        });
    });
  });
});
