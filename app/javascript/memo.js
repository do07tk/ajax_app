const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post(){
  const submit = document.getElementById('submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    // フォームに入力された値を取得できるオブジェクト
    const formData = new FormData(form);
    // JavaScriptを用いてサーバーとHTTP通信を行うときに利用するオブジェクト
    const XHR = new XMLHttpRequest();
    // openでリクエストと内容を指定、responseTypeでデータ形式の指定、sendでリクエストを送信。
      // 第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalse
    XHR.open('POST',"/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.status.Text}`);
      };
      const list = document.getElementById('list');
      const formText = document.getElementById('content');
      list.inserAdjacentHTML('afterend', buildHTML(XHR));
      form.text.value = "";
    };
  });
};

window.addEventListener('load',post);