// ページが読み込まれたときに保存されたデータをロード
// let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

// document.getElementById("Registration_button").onclick = function() {
  
// 	let get_name = document.getElementById("get_name").value;
// 	let get_email = document.getElementById("get_email").value;
// 	let get_password = document.getElementById("get_password").value;
// 	let get_re_password = document.getElementById("get_re_password").value;

//   let userData = {
// 	  name: get_name,
// 	  email: get_email,
// 	  password: get_password
//   };

//   savedData.push(userData);

//   // 保存されたデータをローカルストレージに保存
//   localStorage.setItem('savedData', JSON.stringify(savedData));

//   // バリデーション関連
// 	var flag = 0;
// 	if(get_name.length == 0){flag = 1;}
// 	if(get_email.length == 0){ flag = 1; }
// 	if(get_password.length == 0){ flag = 1; }

// 	if(flag == 1){ alert('必須項目が未記入の箇所があります'); }
// 	else{
// 		var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
// 		if(regexp.test(get_email) != true){ alert('メールアドレスが形式に沿っていません'); }
		
// 		var regexp = /^([a-zA-Z0-9]{8,})$/;
// 		if( regexp.test(get_password) != true ){ alert('パスワードが半角英数8文字以上になっていません'); }
// 		if( get_password != get_re_password ){ alert('パスワードが再入力時と違っています'); }
// 	}

// };

// function form_get(){
//   let storedData = localStorage.getItem("userData");
//   if (storedData) {
//     storedData = JSON.parse(storedData);
//     document.getElementById("get_name").value = storedData.name;
//     document.getElementById("get_email").value = storedData.email;
//   }
// 	// document.getElementById("get_name").value = localStorage.getItem("name");
// 	// document.getElementById("get_email").value = localStorage.getItem("email");
// 	// document.getElementById("get_password").value = localStorage.getItem("password");
// 	// document.getElementById("get_re_password").value = localStorage.getItem("re_password");
// }

// // データの読み込み
// function load() {
// 	let save_userdata = "";
// 	if(!localStorage.getItem("name")) {
// 		save_userdata = "アカウント＆リスト";
// 	} else {
// 		save_userdata = localStorage.getItem("name");
// 	}

// 	document.getElementById("set_name").innerHTML = save_userdata;
// }

//signup.js
let savedData = JSON.parse(localStorage.getItem('savedData')) || [];

document.getElementById("Registration_button").onclick = function() {
  let get_name = document.getElementById("get_name").value;
  let get_email = document.getElementById("get_email").value;
  let get_password = document.getElementById("get_password").value;
  let get_re_password = document.getElementById("get_re_password").value;

  // バリデーション関連
  var flag = 0;
  if(get_name.length == 0 || get_email.length == 0 || get_password.length == 0){
    flag = 1;
  }

  if(flag == 1){ 
    alert('必須項目が未記入の箇所があります'); 
  } else {
    var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if(!regexp.test(get_email)){
      alert('メールアドレスが形式に沿っていません'); 
    } else {
      var regexp = /^([a-zA-Z0-9]{8,})$/;
      if(!regexp.test(get_password)){
        alert('パスワードが半角英数8文字以上になっていません'); 
      } else if(get_password != get_re_password) {
        alert('パスワードが再入力時と違っています'); 
      } else {
        let userData = {
          name: get_name,
          email: get_email,
          password: get_password
        };

        savedData.push(userData);
        localStorage.setItem('savedData', JSON.stringify(savedData));

        // 登録が成功したらログインページに遷移
        //window.location.href = 'login.html';
				window.location.href = '../my-page.html';
      }
    }
  }
};

function form_get(){
  let storedData = localStorage.getItem("userData");
  if (storedData) {
    storedData = JSON.parse(storedData);
    document.getElementById("get_name").value = storedData.name;
    document.getElementById("get_email").value = storedData.email;
  }
}