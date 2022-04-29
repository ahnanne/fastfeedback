import { useState } from 'react';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <>
      <label htmlFor="cardnumber1">카드 번호</label>
      <input type="text" id="cardnumber1" name="cardnumber" value={cardNumber} onChange={(e) => {
        console.log(e.target.value);
        setCardNumber(e.target.value);
      }} autoComplete="cc-number" maxLength={4} />
      <input type="text" id="cardnumber2" name="cardnumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} autoComplete="cc-number" />
      <input type="text" id="cardnumber3" name="cardnumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} autoComplete="cc-number" />
      <input type="text" id="cardnumber4" name="cardnumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} autoComplete="cc-number" />
    </>
  );
}
