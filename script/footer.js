const footer = document.getElementById('footer');
if( footer != null) {
    footer.innerHTML = `
  <div class="footer_container">
    <!-- フッター左側 -->
    <div class="footer_left">企業・規約
      <div class="footer_title"><a href="#">運営会社</a></div>
      <div class="footer_title"><a href="#">利用規約</a></div>
      <div class="footer_title"><a href="#">プライバシーポリシー</a></div>
      <div class="footer_title"><a href="#">その他規約など</a></div>
    </div>
    <!-- フッター左側ここまで -->
    <!-- フッター中央 -->
    <div class="footer_center">サービス
      <div class="footer_title"><a href="#">iPhone, iPad 版</a></div>
      <div class="footer_title"><a href="#">Android 版</a></div>
      <div class="footer_title"><a href="#">開発者向け API</a></div>
      <div class="footer_title"><a href="#">購買行動分析ツール</a></div>
    </div>
    <!-- フッター中央ここまで -->
    <!-- フッター右側 -->
    <div class="footer_right">利用方法
      <div class=""><a href="#">使い方</a></div>
      <div class=""><a href="#">よくある質問</a></div>
      <div class=""><a href="#">お問い合わせ</a></div>
      <div class=""><a href="#">ご意見・ご感想</a></div>
    </div>
    <!-- フッター右側ここまで -->
  </div>`
}