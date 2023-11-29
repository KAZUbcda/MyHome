const header = document.getElementById('header');
if( header != null) {
    header.innerHTML = `
  <div class="header_container">
    <!-- ヘッダー左側 -->
    <div class="header_left">
      <div class="header_title"><a href="../index.html">MY HOME</a></div>
    </div>
    <!-- ヘッダー左側ここまで -->
    <!-- ヘッダー右側 -->
    <div class="header_right">
      <a href="contact.html"><div class="contact_button">お問い合わせ</div></a>
      <a href="signup.html"><div class="signup_botton">新規登録</div></a>
      <a href="login.html"><div class="header_login_button">ログイン</div></a>
      <a href="#"><div class="logout_botton">ログアウト</div></a>
    </div>
    <!-- ヘッダー右側ここまで -->
  </div>`
}