import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BootstrapForm from 'react-bootstrap/Form';
import Input from '../../../Components/Input';
import {Button} from "react-bootstrap";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().min(3, 'Must at least 3 characters or more').required('Required'),
      description: Yup.string().trim(),
    }),

    onSubmit: (values) => {
      console.log('Project created', values);
    },
  });
  return (
    <>
      <BootstrapForm onSubmit={formik.handleSubmit}>
        <Input
          gridSize={12}
          required={true}
          label={'Project Name'}
          name={'Name'}
          error={formik.errors.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          type={'text'}
        />
        <Input
          gridSize={12}
          required={false}
          label={'Project Description'}
          name={'Description'}
          error={formik.errors.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          type={'text'}
        />
        <Button type={'submit'}>Create Project</Button>
      </BootstrapForm>
    </>
  );
};

export default Form;
