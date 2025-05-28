import express from 'express';
import { getAllDucks, createDuck, getDuckById, updateDuck, deleteDuck } from './controllers/ducks.js';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './controllers/users.js';
// side effect of connecting to database
// import './db/index.js';
import './db/associations.js';

const app = express();
const port = 3000;

//incoming request will have a JSON body
app.use(express.json());

app.get('/', (req, res) => res.send('Hello world!'));

app.route('/users').get(getUsers).post(createUser);

app.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

app.route('/ducks').get(getAllDucks).post(createDuck);

app.route('/ducks/:id').get(getDuckById).put(updateDuck).delete(deleteDuck);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
