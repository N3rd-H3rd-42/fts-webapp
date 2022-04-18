import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  return res.render('home');
});

app.get('/next', (req, res) => {
  return res.render('secondpage');
});

app.listen(PORT, () => console.log(`webapp running ${PORT}`));
