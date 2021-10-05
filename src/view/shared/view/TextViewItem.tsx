import React from "react";
import PropTypes from "prop-types";

function TextViewItem(props) {
  const { value } = props;
  return (
    <input
      type='text'
      readOnly
      className='form-control-plaintext'
      value={value}
    />
  );
}

TextViewItem.propTypes = {
  value: PropTypes.any,
};

export default TextViewItem;
