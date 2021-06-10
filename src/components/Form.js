import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsetter, setNewsetter] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  } 

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsetter(event.target.checked);
  }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit" >Submit</button>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsetter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
