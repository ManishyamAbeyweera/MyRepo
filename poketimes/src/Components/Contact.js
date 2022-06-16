import React from "react";

const Contact = (props) => {
    setTimeout(()=>{
        props.history.push('/')
    },2000)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        dolorum illo fugit, harum rem qui corporis, suscipit laboriosam enim
        beatae sint incidunt repudiandae dolorem laudantium quidem! Sapiente
        sunt nemo molestiae?
      </p>
    </div>
  );
};

export default Contact;
