import React, { useState } from 'react';
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    // console.log(amount, 'str')
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount))
  }

  return (
    <>
      <section>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button>Submit</button>
        </form>

        <article>
          {text.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
