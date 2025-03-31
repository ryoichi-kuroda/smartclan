$(function () {
  /*=================================================
  固定ボタン
  ===================================================*/
  const topLink = document.getElementById("top");
  let scrollValue;

  //画面をスクロールするたびにイベントを発生させる
  window.addEventListener("scroll", () => {
    scrollValue = document.scrollingElement.scrollTop;

    //スクロール量が300を超えるかどうかでボタンの表示・非表示を切り替える
    if (scrollValue >= 300) {
      topLink.style.display = "inline"; //ボタンを表示
    } else if (scrollValue < 300) {
      topLink.style.display = "none"; //ボタンを非表示
    }
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  //href属性の「#」で始まるリンクを全て取得
  const links = document.querySelectorAll('a[href^="#"]');
  //取得したリンクを1つずつ処理を実行する
  links.forEach((link) => {
    //リンクをクリックしたら処理を実行する
    link.addEventListener('click', (e) => {
      //リンクイベントをキャンセルする
      e.preventDefault();
      //クリックしたリンクのhref属性を取得
      const href = link.getAttribute('href');
      //目的のセクションを取得
      const targetSection = document.querySelector(href);
      //画面の上からセクションのtop位置までの垂直方向の距離
      const sectionTop = targetSection.getBoundingClientRect().top;
      //現在位置を取得
      const currentPos = window.scrollY;
      //ヘッダーの高さ
      const gap = 84;
      //現在位置から目的のsectionまでのスクロール量
      const target = sectionTop + currentPos - gap;
      //特定の位置までスクロールさせる
      window.scrollTo({
        top: target, //目的の位置のY座標を指定
        behavior: 'smooth', //スクロールの動きを指定
      });
    });
  });



  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".fadein").each(function () {
      // fadeinクラスに対して順に処理を行う
      // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


      // スクロールした距離
      let scroll = $(window).scrollTop();
      // 現在のスクロール位置を取得する。
      // scrollTop()：要素のスクロール位置を取得

      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;

      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面内にきたタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });


});

document.addEventListener("DOMContentLoaded", function () {
  const otherInput = document.getElementById("also");
  const radios = document.querySelectorAll("input[name='contact-method']");

  radios.forEach(radio => {
      radio.addEventListener("change", function () {
          otherInput.disabled = this.value !== "other";
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const yearSelect = document.getElementById("bday-year");
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1950; i--) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
  }
});


/*=================================================
お申し込みフォーム
===================================================*/
// document.getElementById('meeting-method').addEventListener('change', function () {
//   const postalCodeInput = document.getElementById('postal-code');
//   if (this.value === 'in-person') {
//     postalCodeInput.disabled = false;
//     postalCodeInput.style.backgroundColor = '';
//   } else {
//     postalCodeInput.disabled = true;
//     postalCodeInput.style.backgroundColor = '#d3d3d3';
//   }
// });

// function setMinDateForMeetingDates() {
//   const today = new Date();
//   const nextWeek = new Date(today);
//   nextWeek.setDate(today.getDate() + 7);

//   const year = nextWeek.getFullYear();
//   const month = String(nextWeek.getMonth() + 1).padStart(2, '0');
//   const day = String(nextWeek.getDate()).padStart(2, '0');

//   const minDate = `${year}-${month}-${day}`;

//   document.getElementById('meeting-date-1').setAttribute('min', minDate);
//   document.getElementById('meeting-date-2').setAttribute('min', minDate);
//   document.getElementById('meeting-date-3').setAttribute('min', minDate);
// }

// // ページが読み込まれたときにmin日付を設定
// window.onload = setMinDateForMeetingDates;

// // フォームの入力チェック
// const formInputs = document.querySelectorAll('#insurance-form input, #insurance-form select');
// formInputs.forEach(input => {
//   input.addEventListener('input', toggleSubmitButton);
// });

// function toggleSubmitButton() {
//   const allFilled = Array.from(formInputs).every(input => {
//     return input.value !== '' && !(input.disabled && input.value === '');
//   });
//   document.getElementById('submit-button').disabled = !allFilled;
// }

// document.getElementById('insurance-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // フォームのデフォルトの送信を防ぐ

//   // フォームのデータを取得
//   const name = document.getElementById('name').value;
//   const furigana = document.getElementById('furigana').value;
//   const contactMethod = document.getElementById('contact-method').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const sexType = document.getElementById('sex-type').value;

//   // 生年月日を取得
//   const bdayYear = document.getElementById('bday-year').value;
//   const bdayMonth = document.getElementById('bday-month').value;
//   const bdayDay = document.getElementById('bday-day').value;
  
  // その他を選んだときだけ入力欄を有効化
  document.querySelectorAll('input[name="contact-method"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const otherInput = document.getElementById('also');
        otherInput.disabled = radio.value !== "その他";
    });
});

//   // 新しく追加した項目を取得
//   const occupation = document.getElementById('occupation').value; // 都道府県
//   const annualIncome = document.getElementById('annual-income').value; // 世帯年収

//   // 簡単なバリデーション
//   // if (name && furigana && meetingMethod && email && phone && consultationTopic &&
//   //   meetingDate1 && meetingTime1 &&
//   //   meetingDate2 && meetingTime2 &&
//   //   meetingDate3 && meetingTime3 &&
//   //   (meetingMethod !== 'in-person' || postalCode) &&
//   //   occupation && // ご職業
//   //   annualIncome && // 世帯年収
//   //   insuranceStatus && // 保険加入状況
//   //   additionalRequests) { // その他ご要望
//   //   document.getElementById('response').innerText = `${name}さん、申し込みありがとうございます！`;
//   //   // ここで遷移先のURLにリダイレクト
//   //   window.location.href = 'https://www.google.co.jp/webhp?tab=kw'; // 遷移先のURLを指定
//   // } else {
//   //   document.getElementById('response').innerText = 'すべてのフィールドを入力してください。';
//   // }

//   // フォームをリセット
//   document.getElementById('insurance-form').reset();

// });