import React from "react";
import PropTypes from "prop-types";

export function TextAreaItem(props) {
  const { label, name, placeholder, required } = props;
  return (
    <div className='form-group mb-0'>
      <label>{label}</label>
      <textarea
        className='form-control'
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}
TextAreaItem.defaultpropTypes = {
  required: false,
};
TextAreaItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextAreaItem;
