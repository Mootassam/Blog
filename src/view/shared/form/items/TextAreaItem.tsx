import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import FormErrors from "../FormErrors";

export function TextAreaItem(props) {
  const { className, label, name, placeholder, required } = props;
  const {
    register,
    errors,
    formState: { isSubmitted, touched },
  } = useFormContext();
  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted
  );
  return (
    <div className={className}>
      <label>{label}</label>
      <textarea
        name={name}
        ref={register}
        id={name}
        placeholder={placeholder}
        className={`form-control ${errorMessage ? "is-invalid" : ""}`}
      />
      <div className='invalid-feedback'>{errorMessage}</div>
    </div>
  );
}
TextAreaItem.defaultpropTypes = {
  required: false,
};
TextAreaItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextAreaItem;
