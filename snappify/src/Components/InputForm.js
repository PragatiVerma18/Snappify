import React from "react";

const InputForm = (props) => {
  return (
    <>
      <form onSubmit={props.getScrnsht}>
        <input type="text" name="link" placeholder="Enter your url here..." />
        <button> Submit</button>
      </form>
    </>
  );
};

export default InputForm;
