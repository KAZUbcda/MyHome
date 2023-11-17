var array = new Array();
array[''] = new Array({cd:"0", label:"カテゴリを先に選択してください"});
// 銀行・カード連携
array["0"] = new Array(
  {cd:"1", label:"お悩みに近い内容を選択してください"},
  {cd:"2", label:"連携設定"},
  {cd:"3", label:"データ取得"},
  {cd:"4", label:"連携解除/更新停止"},
  {cd:"5", label:"セキュリティ"},
  {cd:"7", label:"銀行・カードごと"},
  {cd:"8", label:"その他の設定"}
);
// 残高・口座の管理
array["1"] = [
  {cd:"1", label:"お悩みに近い内容を選択してください"},
  {cd:"2", label:"残高"},
  {cd:"3", label:"口座設定"}
];
// 家計簿の記録・設定
array["2"] = [
  {cd:"1", label:"お悩みに近い内容を選択してください"},
  {cd:"2", label:"記録"},
  {cd:"3", label:"レシート撮影"},
  {cd:"4", label:"基本設定"},
  {cd:"5", label:"カスタマイズ"},
  {cd:"6", label:"ファイルの入出力"}
];
// 家計簿の分析
array["3"] = [
  {cd:"1", label:"お悩みに近い内容を選択してください"},
  {cd:"2", label:"分析"},
  {cd:"3", label:"予算"},
  {cd:"4", label:"ホーム"}
];
// アカウントの管理
array["4"] = [
  {cd:"1", label:"お悩みに近い内容を選択してください"},
  {cd:"2", label:"退会・リセット"},
  {cd:"3", label:"ログイン"},
  {cd:"4", label:"会員登録"},
  {cd:"5", label:"その他"}
];
// その他
array["5"] = [
  {cd:"1", label:"お悩みに近い内容を選択してください"},
  {cd:"2", label:"不具合"},
  {cd:"3", label:"他社サービス連携"},
  {cd:"4", label:"その他"}
];

document.getElementById('category').onchange = function(){
  sub_category = document.getElementById("sub_category");
  sub_category.options.length = 0
  var changedCategory = category.value;
  for (let i = 0; i < array[changedCategory].length; i++) {
    var op = document.createElement("option");
    value = array[changedCategory][i]
    op.value = value.cd;
    op.text = value.label;
    sub_category.appendChild(op);
  }
}