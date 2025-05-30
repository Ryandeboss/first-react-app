import React, { useMemo, useState } from 'react';

function heavyCalculation(n) {
  console.log('Running heavy calc...');
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i * n;
  }
  return total;
}

function Card2() {
  const [num, setNum] = useState(5);

  const result = useMemo(() => heavyCalculation(num), [num]);

  return (
    <div className="card">
      <h3>useMemo Example</h3>
      <p>Result: {result}</p>
      <button onClick={() => setNum(num + 1)}>Recalculate</button>
    </div>
  );
}

export default Card2;
