import React from "react";
import Rainbow from '../HOC/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        dolorum illo fugit, harum rem qui corporis, suscipit laboriosam enim
        beatae sint incidunt repudiandae dolorem laudantium quidem! Sapiente
        sunt nemo molestiae?
      </p>
    </div>
  );
};

export default Rainbow(About);
