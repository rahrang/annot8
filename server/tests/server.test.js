const expect = require('expect');
const request = require('supertest');

const { app } = require('../server.js');
const { Post } = require('../models/post.js');


const posts = [
  {
    videoId: "1IGS0-QF86U",
    userId: "rahrang",
    text: "My name is Rahul. I need help with Math."
  },
  {
    videoId: "1IGS0-QF86U",
    userId: "yaanhsiung",
    text: "My name is Ya-An. I can help with Math."
  }
];

beforeEach(done => {
  Post.remove({}).then(() => {
    return Post.insertMany(posts);
  }).then(() => done())
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

        Post.find({text})
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
        expect(posts.length).toBe(2);
        done();
      })
      .catch(err => done(err));
  });
});

describe('GET /posts', () => {
  it('should get all posts', (done) => {
    request(app)
      .get('/posts')
      .expect(200)
      .expect((res) => {
        expect(res.body.posts.length).toBe(2);
      })
      .end(done);
  })
})
