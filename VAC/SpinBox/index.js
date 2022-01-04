import { useState } from 'react';
/** https://www.npmjs.com/package/react-vac  */
import { VAC } from 'react-vac';

// import SpinBoxView from './view/SpinBoxView';

const SpinBox = () => {
  const [value, setValue] = useState(0);

  // JSX를 추상화한 props object
  const props = {
    value,
    onDecrease: () => setValue(value - 1),
    onIncrease: () => setValue(value + 1)
  };

  // JSX를 VAC로 교체
  // return <SpinBoxView {...props} />;

  // VAC 개발 전이라면
  // 다음과 같이 VAC Debugger를 활용하여 props object 테스트 가능
  return <VAC name="DummyView" data={props} />;
};

export default SpinBox;
