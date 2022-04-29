import { useState } from 'react';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <>
      <label htmlFor="card-number">카드 번호</label>
      <input type="text" id="card-number" name="card-number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
    </>
  );
}
