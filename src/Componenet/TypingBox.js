import React, { useState } from 'react';

const TextAreaComponent = () => {
  // Create a state variable to manage the textarea's value
  const [textValue, setTextValue] = useState('');

  // Create a function to handle changes in the textarea
  const handleTextAreaChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <label>Text Area:</label>
      <textarea
        value={textValue}
        onChange={handleTextAreaChange}
        placeholder="The quick brown fox jumps over the lazy dog. This sentence contains all the letters of the alphabet, making it a pangram. Pangrams are often used to test fonts, keyboards, and typewriters. Typing exercises like these can help improve your typing speed and accuracy. It's essential to develop good typing skills in today's digital age, as typing is a fundamental skill for various tasks, from writing emails to coding and data entry."
      />
      <p>You typed: {textValue}</p>
    </div>
  );
};

export default TextAreaComponent;
