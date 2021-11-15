import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Inputs from './components/Inputs';
import View from './components/View';

function App() {
  // Declare new state variable(s), which we'll call "name", "age", "hobbies"
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [hobbies, setHobbies] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, hobbies);

    if(!name || !age || !hobbies) {
        alert('Please add a name, age, and hobby/hobbies.')
        return
    }

    // addInfo({ name, age, hobbies })

    setName('')
    setAge('')
    setHobbies('')
}

  return (
    <div className="App">
      <Inputs clickSubmit={onSubmit}/>
      <View name={name} age={age} hobbies={hobbies}/>
    </div>
  );
}

export default App;