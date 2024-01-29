const express = require('express'); // expressの読み込み
const send = require('send');
const PORT = process.env.PORT || 3000; // PORT番号の指定（別になくてもいいけどあると、このコードつかいまわせる）

const app = express(); // expressを使う準備

app.use(express.static('app'))

const router = express.Router();

router
  .get('/', (_, res) => {
    // get method で実行する内容の記述
    res.send('hello express'); //hello express という文字列を返してあげる
  })
  .post('/', express.json(), async (req, res) => {
    // console.log(`POSTリクエストを受け取りました:${JSON.stringify(req.body)}`);
    // console.log(`inputの中身は:${req.body.input}です`);
    // res.send(req.body);

    const sendData = req.body.input;
    const result = await addRowRes(sendData);
    res.send(result);
  })

app
  .use('/api/v1', router)
  .listen(PORT, () => {
    // サーバーを立ち上げた後にサーバー側でやりたいこと
    console.log('server started'); //サーバーを実行しているターミナルのコンソールにserver started の文字列を表示する
  })

const addRowRes = async (sendData) => {

  const body = [{
    "input": sendData
  }]
  const res = await fetch('https://api.steinhq.com/v1/storages/64bb203bd27cdd09f00a6f86/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  console.log(data);
  return data
}