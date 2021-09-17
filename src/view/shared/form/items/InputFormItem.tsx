import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import FormErrors from "../FormErrors";

export function InputFormItem(props) {
  const {
    label,
    name,
    type,
    placeholder,
    required,
    disabeld,
    externalErrorMessage,
  } = props;
  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage
  );

  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        ref={register}
        onChange={(event) => {
          props.onChange && props.onChange(event.target.value);
        }}
        className={`form-control ${errorMessage ? "is-invalid" : ""}`}
        disabled={disabeld}
        placeholder={placeholder}
      />
      <div className='invalid-feedback'>{errorMessage}</div>
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
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  onChange: PropTypes.any,
};

export default InputFormItem;
