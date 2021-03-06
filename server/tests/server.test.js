const expect=require('expect');
const request=require('supertest');
const {ObjectId} =require('mongodb');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');
var sample="5a82414b02a66e2460bc4b2a";
const todos=[{
  _id: new ObjectId(),
  text:'AAA'},{
    _id: new ObjectId(),
    text:'BBB'},{
      _id: new ObjectId(),
      text:'CCC'}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);

  }).then(()=>done());
});
describe('POST /todos',()=>{
  it('should create a new todo',(done)=>{
    var text='TestTest';
    request(app).post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
    expect(res.body.text).toBe(text);
  })
  .end((err,res)=>{
    if(err){
      return done(err);
    }
    Todo.find().then((todos)=>{
      expect(todos.length).toBe(4);
      expect(todos[0].text).toBe('AAA');
      done();
    }).catch((e)=>done(e));
  });
  });

  it('should not create todo with invalid data',(done)=>{
    request(app).post('/todos')
    .send()
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(3);
        done();
      }).catch((e)=>done(e));
    });

  });
});
describe('GET /todos',()=>{
  it('should add all todos',(done)=>{
    request(app).get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(3);
    })
    .end(done);
  });
});

describe('GET /todos/:id',()=>{
  it('Should return todo doc',(done)=>{
      request(app).get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(todos[0].text);
      }).end(done);
  });
  it('should return a 404 if todo not found',(done)=>{
    request(app).get(`/todos/${sample}`)
    .expect(404)
    .end(done);
  });

  it('should return a 404 if id is invalid',(done)=>{
    request(app).get(`/todos/123`)
    .expect(404)
    .end(done);
  });
});
