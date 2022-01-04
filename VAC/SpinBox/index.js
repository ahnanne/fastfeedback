import { useState } from 'react';
import SpinBoxView from './view/SpinBoxView';

const SpinBox = () => {
  const [value, setValue] = useState(0);

  // JSX를 추상화한 props object
  const props = {
    value,
    onDecrease: () => setValue(value - 1),
    onIncrease: () => setValue(value + 1)
  };

  // JSX를 VAC로 교체
  return <SpinBoxView {...props} />;
};

export default SpinBox;
