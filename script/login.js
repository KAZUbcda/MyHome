// サンプルのユーザーデータ（実際のアプリではサーバーサイドで安全に管理する必要があります）
// const usersData = [
//   { email: 'user1@example.com', password: 'password1' },
//   { email: 'user2@example.com', password: 'password2' },
// ];

// function login() {
//   // const emailInput = document.getElementById('email');
//   const emailInput = document.getElementById('get_email');
//   // const passwordInput = document.getElementById('password');
//   const passwordInput = document.getElementById('get_password');
//   const resultDiv = document.getElementById('result');

//   const enteredEmail = emailInput.value;
//   const enteredPassword = passwordInput.value;

//   // ユーザーデータを検索
//   const user = usersData.find(u => u.email === enteredEmail && u.password === enteredPassword);

//   if (user) {
//     // resultDiv.innerHTML = `<p>ログイン成功！</p>`;
//     // window.location.href = 'mypage.html';
//     window.location.href = '../index.html';
//   } else {
//     resultDiv.innerHTML = `<p style="color: red;">メールアドレスまたはパスワードが正しくありません。</p>`;
//     // ログイン失敗時の処理
//   }
// }

//login.js
const savedData = JSON.parse(localStorage.getItem('savedData')) || [];

function login() {
  const emailInput = document.getElementById('get_email');
  const passwordInput = document.getElementById('get_password');
  const resultDiv = document.getElementById('result');

  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  // ユーザーデータを検索
  const user = savedData.find(u => u.email === enteredEmail && u.password === enteredPassword);

  if (user) {
    // ログイン成功時の処理（例: マイページへの遷移）
    //マイページが完成するまでトップページに遷移
    // window.location.href = 'mypage.html';
    window.location.href = '../index.html';
  } else {
    resultDiv.innerHTML = `<p style="color: red;">メールアドレスまたはパスワードが正しくありません。</p>`;
    // ログイン失敗時の処理
  }
}