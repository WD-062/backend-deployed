import User from '../models/User.js';
import Duck from '../models/Ducks.js';

export const getUsers = async (req, res) => {
  try {
    // SELECT * FROM users;
    const users = await User.findAll({ include: Duck });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      body: { firstName, lastName, email }
    } = req;

    if (!firstName || !lastName || !email)
      return res.status(400).json({ error: 'firstName, lastName, and email are required' });

    // INSERT INTO users (firstName, lastName, email) VALUES ($1, $2, $3);
    const user = await User.create(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    // const id = req.params.id
    // const {id} = req.params;
    const {
      params: { id }
    } = req;

    const user = await User.findByPk(id, { include: User });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      body: { firstName, lastName, email },
      params: { id }
    } = req;

    if (!firstName || !lastName || !email)
      return res.status(400).json({ error: 'firstName, lastName, and email are required' });

    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    await user.update(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;

    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    await user.destroy();

    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
