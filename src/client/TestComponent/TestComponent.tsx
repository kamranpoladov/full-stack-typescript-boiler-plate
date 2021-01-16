import { useEffect, useState } from 'react';
import { getTest, Test } from '../../types';

const TestComponent = () => {
  const [test, setTest] = useState<Test>();

  useEffect(() => {
    (async () => {
      const test = await getTest(undefined);
      setTest(test);
    })();
  }, []);

  if (!test) return null;

  return <div>{`field1: ${test.field1}, field2: ${test.field2}`}</div>;
};

export default TestComponent;
