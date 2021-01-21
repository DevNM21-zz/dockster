import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

interface Props {
  gridSize: number;
  required: boolean;
  label: string;
  name: string;
  error: string;
  onChange: any;
  onBlur: any;
  value: any;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input = (props: Props): JSX.Element => {
  const inputProps = { ...props };
  delete inputProps.gridSize;
  delete inputProps.label;
  delete inputProps.error;
  return (
    <Col md={props.gridSize || 12}>
      <FormGroup>
        <Form.Label>
          {props.required ? (
            <>
              <span className="text-danger"> * </span>{' '}
            </>
          ) : (
            ''
          )}
          {props.label}
        </Form.Label>
        <Form.Control {...inputProps} />
        <span className="text-danger"> {props.error} </span>{' '}
      </FormGroup>
    </Col>
  );
};

export default Input;
