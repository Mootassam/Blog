import React, { useState } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import TextAreaItem from "src/view/shared/form/items/TextAreaItem";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import yupFormSchemas from "../../../modules/shared/yup/yupFormSchemas";
const schema = yup.object().shape({
  name: yupFormSchemas.string("name", { required: true, min: 5 }),
  email: yupFormSchemas.string("email", { required: true, min: 5 }),
  subject: yupFormSchemas.string("subject", { required: true, min: 5 }),
  message: yupFormSchemas.string("message", { required: true, min: 5 }),
});
function ContactForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      name: record.name,
      email: record.email,
      subject: record.subject,
      message: record.message,
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });
  const OnSubmit = (values) => {
    props.onSubmit(values);
  };
  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)}>
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
            required={true}
          />
          <TextAreaItem
            name={"message"}
            label={"Message"}
            placeholder={"Message"}
          />
        </div>

        <div className='card-footer text-right'>
          <button
            className='btn btn-info'
            onClick={form.handleSubmit(OnSubmit)}>
            Submit
          </button>
          &nbsp;
          <button
            className='btn btn-primary'
            onClick={onReset}
            disabled={props.saveLoading}>
            Renitiliser
          </button>
          &nbsp;
          <button
            className='btn btn-secondary'
            onClick={() => props.onCancel()}
            disabled={props.saveLoading}>
            Cancel
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
export default ContactForm;
