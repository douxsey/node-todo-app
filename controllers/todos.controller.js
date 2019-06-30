import Todo from "../db/model/Todo";


export function getTodos(req, res) {
  Todo.find({})
    .then(todos => {
      console.log('we find:', todos);
      return res.send(todos)
    })
}

export function createTodo(req, res) {
  let {title, done} = req.body
  Todo.create({
    title,
    done
  })
  .then(todo => {
    return res.send({success: true, data: todo})
  })
  .catch(error => {
    console.error(error);
    return res.status(406).send({message: 'there is an error'})
  })
}

export function getOneTodo(req, res) {
  let id = req.params.id;
  let body = req.body;
  console.log("getting todo with id ", id)
  let todo = DATA.find(todo => todo.id == id)
  return res.send({
    data: todo
  })
}