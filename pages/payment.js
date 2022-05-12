import { useState } from 'react';

export default function Payment() {
  // const [cardNumber, setCardNumber] = useState('');

  return (
    <>
      <label htmlFor="cardnumber">카드 번호</label>
      <input
        style={{ border: '1px solid grey' }}
        type="text"
        id="cardnumber"
        name="cardNumber"
        onChange={(e) => {
          console.log('cardnumber', e.target.value);
        }}
        autoComplete="cc-number"
      />

<label htmlFor="expdate">유효 기간</label>
      <input
        style={{ border: '1px solid grey' }}
        type="text"
        id="expdate"
        name="expdate"
        onChange={(e) => {
          console.log('expdate', e.target.value);
        }}
        autoComplete="cc-exp"
      />
    </>
  );
}
