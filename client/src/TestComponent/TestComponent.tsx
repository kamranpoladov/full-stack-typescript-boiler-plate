import './TestComponent.scss';

import React, { useEffect, useState } from 'react';
import { getTest, Test } from 'types';

const TestComponent = () => {
  const [test, setTest] = useState<Test>();

  useEffect(() => {
    (async () => {
      const test = await getTest(undefined);
      setTest(test);
    })();
  })
  return <div styleName="b">{test?.field1}</div>;
};

export default TestComponent;
