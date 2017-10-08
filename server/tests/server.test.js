const expect = require('expect');
const request = require('supertest');

const { app } = require('../server.js');
const { Post } = require('../models/post.js');

beforeEach(done => {
  Post.remove({}).then(() => done());
});

describe('POST /posts', () => {
  it('should create a new post', done => {
    let videoId = 'cziv-WGRLcE';
    let userId = 'rahrang';
    let text = 'Test post text';

    request(app)
      .post('/posts')
      .send({ videoId, userId, text })
      .expect(200)
      .expect(res => {
        expect(res.body.videoId).toBe(videoId);
        expect(res.body.userId).toBe(userId);
        expect(res.body.text).toBe(text);
        expect(res.body.isPublic).toBe(true);
        expect(res.body.isQuestion).toBe(true);
        expect(res.body.isResolved).toBe(false);
        expect(res.body.responseId).toBe(null);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Post.find()
          .then(posts => {
            expect(posts.length).toBe(1);
            expect(posts[0].text).toBe(text);
            done();
          })
          .catch(err => done(err));
      });
  });

  it('should not create new post with invalid body data', done => {
    request(app)
      .post('/posts')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      });

    Post.find()
      .then(posts => {
        expect(posts.length).toBe(0);
        done();
      })
      .catch(err => done(err));
  });
});
