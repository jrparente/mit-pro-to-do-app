import { useState } from "react";

function Form({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new to-do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Form;
