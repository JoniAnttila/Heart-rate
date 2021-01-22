import './App.css';
import {useState} from 'react';


function App() {
  const [age, setAge] = useState(null)
  const [hrl, setHrl] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    const upper = ((220-age)*0.85).toFixed(0);
    const lower = ((220-age)*0.65).toFixed(0);
    setHrl(lower + "-" + upper);
  }


  return (
    <div className="container">
      <h3 class="pt-4">Heart rate limits calculator</h3>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label class="pt-3">Age</label>
        <input class="form-control" type="number" value={age} onChange={e => setAge(e.target.value)}></input>
      </div>
      <div class="form-group">
        <label>Heart rate limits</label>
        <output  class="form-control">{hrl}</output>
      </div>
      <button class="btn btn-primary">Calculate</button>
    </form>
    </div>
  );
}

export default App;
