import express from 'express';

const users = [
  { name: 'John', email: 'john@mail.com' },
  { name: 'Carl', email: 'carl@mail.com' },
  { name: 'Pepe', email: 'pepe@mail.com' },
  { name: 'Sara', email: 'sara@mail.com' },
  { name: 'Paola', email: 'paola@mail.com' },
];

export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  return res.status(200).json({ ok: true, data: users });
});

userRouter.get('/:name', (req, res) => {
  const { name } = req.params;

  const user = users.find((user) => user.name === name);

  if (!user) return res.status(500).send({ ok: false, err: 'User not exists' });

  return res.status(200).json({ ok: true, data: user });
});
