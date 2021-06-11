import { useState } from "react";
import React from 'react'

export default function App() {
  const [value, setValue] = useState(Math.random());
  return (
    <div className="App">
      <button onClick={() => setValue(Math.random())}>{value}</button>
    </div>
  );
}
