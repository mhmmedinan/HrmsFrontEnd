import { useField,Field } from 'formik'
import { Label } from "semantic-ui-react";
import React from 'react'

export default function HrmsTextInput({...props}) {

    const[field,meta] = useField(props)
    return (
        <div>
      <Field {...field} {...props} >
      </Field>
      {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
           ):null}
    </div>
    )
}
