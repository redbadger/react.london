import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home page');
});

router.get('/conference', (req, res) => {
  res.send('Conference page');
});

export default router;
