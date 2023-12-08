const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
  <div class="header_container">
    <!-- ヘッダー左側 -->
    <div class="header_left">
      <div class="header_title"><a href="index.html">MY HOME</a></div>
    </div>
    <!-- ヘッダー左側ここまで -->
    <!-- ヘッダー右側 -->
    <div class="header_right">
      <div class="contact_button"><a href="contact.html">お問い合わせ</a></div>
      <div class="signup_botton"><a href="signup.html">新規登録</a></div>
      <div class="header_login_button"><a href="login.html">ログイン</a></div>
      <div class="logout_botton"><a href="#">ログアウト</a></div>
    </div>
    <!-- ヘッダー右側ここまで -->
  </div>`
}