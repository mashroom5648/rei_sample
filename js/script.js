// アコーディオン全体を変数に代入
const accordionWrap = document.querySelector('.js_accordion');
// アコーディオンのヘッダー部分を変数に代入
const accordionHead = document.querySelector('.js_accordion_head');
// アコーディオンのヘッダーテキスト部分を変数に代入
const accordionHeadText = document.querySelector('.js_accordion_head_text')
// アコーディオンの矢印を変数に代入
const accordionArrow = document.querySelector('.js_accordion_arrow');

// アコーディオンのヘッダー部分を「クリック」したら以下を実行
accordionHead.addEventListener('click', () => {
    if (accordionWrap.classList.contains('is_active') && accordionArrow.classList.contains('is_active')) {
        /* 条件文　＝＞　もし、アコーディオン全体の要素のクラスに「is_active」があり、
        なおかつ、アコーディオンの矢印の要素に「is_active」があれば実行。 */

        accordionWrap.classList.remove('is_active');
        accordionArrow.classList.remove('is_active');
        accordionHeadText.innerText = "Is Close";
    } else {
        /* 条件に当てはまっていなければ実行 */

        accordionWrap.classList.add('is_active');
        accordionArrow.classList.add('is_active');
        accordionHeadText.innerText = "Is Open";
    }
});