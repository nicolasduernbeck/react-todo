import { useState } from 'react';

export default function InputForm() {
  const [value, setValue] = useState('');

  return (
    <form className="input__form">
      <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}
