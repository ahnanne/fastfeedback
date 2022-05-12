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
        maxLength={4}
      />
    </>
  );
}
