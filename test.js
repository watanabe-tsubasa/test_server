const testFunc = async () => {
  // <server_url>はserver.jsが実行されているURLに書き換え
  // const res = await fetch('https://special-space-pancake-7447r9vqjqxfgr7-3000.app.github.dev/', {
  //   method: 'GET'
  // });
  // const res = await fetch('https://special-space-pancake-7447r9vqjqxfgr7-3000.app.github.dev/', {
  //   method: 'POST',
  //   body: 'POSTしています'
  // });
  const body = [{
    "input": "test"
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
}

testFunc();