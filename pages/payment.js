import { useState } from 'react';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <>
      <label htmlFor="cardnumber">카드 번호</label>
      <input type="text" id="cardnumber" name="cardnumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
    </>
  );
}
