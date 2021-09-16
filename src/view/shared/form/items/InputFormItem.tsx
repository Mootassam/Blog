import React from "react";
import PropTypes from "prop-types";

export function InputFormItem(props) {
  const { label, name, type, placeholder, required, disabeld } = props;
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        className='form-control'
        disabled={disabeld}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

InputFormItem.defaultProps = {
  type: "text",
  required: false,
};
InputFormItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputFormItem;
