import { useState } from 'react';

export default function InputForm() {
  function handleFormSubmit(e) {
    e.preventDefault();

    //Guard clause to catch empty todos
    if (!value.length) return;
  }

  const [value, setValue] = useState('');

  return (
    <form className="input__form" onSubmit={handleFormSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}
