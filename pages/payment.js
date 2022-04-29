import { useState } from 'react';

export default function Payment() {
  // const [cardNumber, setCardNumber] = useState('');

  return (
    <>
      <label htmlFor="cardnumber1">카드 번호</label>
      <input
        type="text"
        id="cardnumber1"
        name="cardnumber"
        onChange={(e) => {
          console.log('cardnumber1', e.target.value);
        }}
        autoComplete="cc-number"
        maxLength={4}
      />
      <input
        type="text"
        id="cardnumber2"
        name="cardnumber"
        onChange={(e) => {
          console.log('cardnumber2', e.target.value);
        }}
        autoComplete="cc-number"
        maxLength={4}
      />
      <input
        type="text"
        id="cardnumber3"
        name="cardnumber"
        onChange={(e) => {
          console.log('cardnumber3', e.target.value);
        }}
        autoComplete="cc-number"
        maxLength={4}
      />
      <input
        type="text"
        // id="cardnumber4"
        // name="cardnumber"
        onChange={(e) => {
          console.log('cardnumber4', e.target.value);
        }}
        // autoComplete="cc-number"
        maxLength={4}
      />
    </>
  );
}
