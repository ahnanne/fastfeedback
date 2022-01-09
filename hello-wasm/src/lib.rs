use wasm_bindgen::prelude::*;
// use 키워드 - 라이브러리(crate)로부터 코드를 불러옴.
// 즉 위 코드에서는 wasm_bindgen::prelude 모듈 내의 모든 것을 불러오게 됨.

// Rust에서 자바스크립트의 외부함수 호출하기
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
// #[] 안에 있는 것은 "attribute"라고 하며, 다음에 오는 구문을 수정함.
// 위의 경우 그 '다음에 오는 구문'은 extern이며,
// extern은 Rust에게 외부에서 정의된 함수를 호출할 것임을 알림.

// the pub keyword makes items public

// 여기의 속성은 "wasm-bindgen knows how to find these functions"를 의미함.
// alert 함수는 자바스크립트에 의해 제공되는 것.

// 자바스크립트가 호출할 수 있는 Rust 함수 작성하기
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
// 이번엔 fn 구문이 수정됨.
// Rust 함수가 자바스크립트에 의해 호출될 수 있도록 함. => extern과 반대 기능
// 즉 우리가 외부에 제공하는 함수가 됨.

// 이 함수의 이름은 greet으로, 위의 extern 블록에서 요구한 alert 함수를 호출함.
// 문자열을 연결하는 format! 매크로를 전달함.
// format 매크로 첫 번째 인자: 서식 문자열, 두 번째 인자: 변수
// 서식 문자열의 {} 안에 변수를 담게 된다.