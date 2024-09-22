import React, {useState} from "react";
import '../styles/App.css';


const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFlames = () => {
    if (!name1 || !name2) {
      setResult('Please Enter valid input');
      return;
    }

    // Function to remove common characters
    const removeCommonCharacters = (str1, str2) => {
      let arr1 = str1.split('');
      let arr2 = str2.split('');

      arr1.forEach((char) => {
        if (arr2.includes(char)) {
          arr2.splice(arr2.indexOf(char), 1);
          arr1.splice(arr1.indexOf(char), 1);
        }
      });

      return [arr1.join(''), arr2.join('')];
    };

    const [remainingName1, remainingName2] = removeCommonCharacters(name1, name2);

    // Calculate the sum of the lengths
    const totalLength = remainingName1.length + remainingName2.length;

    // Determine relationship based on modulus 6
    const relationshipIndex = totalLength % 6;

    const relationshipStatus = {
      1: 'Friends',
      2: 'Love',
      3: 'Affection',
      4: 'Marriage',
      5: 'Enemy',
      0: 'Siblings',
    };

    setResult(relationshipStatus[relationshipIndex]);
  };

  const clearFields = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return(
    <>
        <input
        type="text"
        data-testid="input1"
        value={name1}
        name="name1"
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        type="text"
        data-testid="input2"
        value={name2}
        name="name2"
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button data-testid="calculate_relationship" onClick={calculateFlames}>
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={clearFields}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
            </>
  )
}


export default App;
