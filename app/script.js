document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('#postText');
  let button = document.querySelector('#postButton');

  // <server_url> は書き換えてください
  button.addEventListener('click', async () => {
    const body = {
      input: input.value
    };
    const res = await fetch('https://special-space-pancake-7447r9vqjqxfgr7-3000.app.github.dev/api/v1', {
      method: 'POST', // POSTで送ります
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) // body の要素に文字列を追加
    });
    const data = await res.text();
    console.log(`from server: ${data}`); // serverからの応答だということを保証
  });
});