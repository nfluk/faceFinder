import React from 'react';
import './imageLinkForm.css';

function ImageLinkForm() {
  return (
    <div>
      <p className="f3">
        This cool app will detect faces in your pictures. Go for it and see what
        it can do!
      </p>
      <div className="center">
        <div className="center pa4 br3 shadow-5 form">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow dib ph3 center f4 link pv2 white bg-light-purple">
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
