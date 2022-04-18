import express from 'express';

const app = express();

const testing = 'pre commit';

app.listen(3000, () => console.log('webapp running'));
