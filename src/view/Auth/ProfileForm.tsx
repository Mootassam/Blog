import React from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextAreaItem from "../shared/form/items/TextAreaItem";
import yupFormSchemas from "../../modules/shared/yup/yupFormSchemas";

const schema = yup.object().shape({
  role: yupFormSchemas.string("role", { required: true }),
  first_name: yupFormSchemas.string("first_name", { required: true }),
  last_name: yupFormSchemas.string("last_name", { required: true }),
  email: yupFormSchemas.string("email", { required: true }),
  object: yupFormSchemas.string("object", { required: true }),
});
function ProfileForm() {
  const onSumbit = () => {
    alert("Validation Success");
  };
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {},
  });
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSumbit)}>
        <div className='card-body'>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-12 col-12"}
              label={"Role"}
              name={"role"}
              placeholder={"Role"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"First Name"}
              name={"first_name"}
              placeholder={"Name"}
            />

            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"last Name"}
              name={"last_name"}
              placeholder={"last_name"}
            />
          </div>
          <div className='row'>
            <InputFormItem
              className={"form-group col-md-7 col-12"}
              label={"Email"}
              name={"email"}
              placeholder={"Email"}
            />

            <InputFormItem
              className={"form-group col-md-5 col-12"}
              label={"Phone"}
              name={"phone"}
              placeholder={"Phone"}
            />
          </div>

          <div className='row'>
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Linkedin"}
              name={"linkedin"}
              placeholder={"Linkedin"}
            />
            <InputFormItem
              className={"form-group col-md-6 col-12"}
              label={"Github"}
              name={"github"}
              placeholder={"Github"}
            />
          </div>

          <div className='row'>
            <InputFormItem
              className={"form-group col-md-12 col-12"}
              label={"Web Site"}
              name={"site"}
              placeholder={"Web Site"}
            />
          </div>
          <div className='row'>
            <TextAreaItem
              className={"form-group col-12"}
              name={"object"}
              label={"Object"}
              placeholder={"Some Detaill"}
            />
          </div>
        </div>
        <div className='card-footer text-right'>
          <button className='btn btn-primary'>Save Changes</button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ProfileForm;
