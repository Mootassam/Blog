import React from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import TextAreaItem from "src/view/shared/form/items/TextAreaItem";

const OnSubmit = () => {
  alert("submited worked");
};

function ContactForm() {
  return (
    <form onSubmit={OnSubmit}>
      <div className='card-header'>
        <h4>Default Validation</h4>
      </div>
      <div className='card-body'>
        <InputFormItem label={"Name"} name={"name"} placeholder={"Name"} />
        <InputFormItem name={"email"} label={"Email"} placeholder={"Email"} />
        <InputFormItem
          name={"subject"}
          label={"Subject"}
          placeholder={"Subject"}
        />
        <TextAreaItem
          label={"Message"}
          name={"message"}
          placeholder={"Message"}
        />
      </div>
      <div className='card-footer text-right'>
        <button className='btn btn-primary'>Submit</button>
      </div>
    </form>
  );
}
export default ContactForm;
