import React from "react";

const InputForm = (props) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body mb-4 p-4">
          <h3 className="display-4 text-center">
            <i className="fas fa-camera"></i> ScreenShot App
          </h3>
          <p className="lead text-center">Capture Screenshot from URL</p>
          <form onSubmit={props.getScrnsht}>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Enter URL here..."
                name="link"
              />
            </div>
            <button className="btn btn-primary btn-lg btn-block search-btn">
              Capture
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputForm;
