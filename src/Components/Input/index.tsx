import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import styled, { keyframes } from 'styled-components';

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

const blink = keyframes`
  0% {
    caret-color: red;
  }
  20% {
    caret-color: orange;
  }
  40% {
    caret-color: yellow;
  }
  60% {
    caret-color: green;
  }
  80% {
    caret-color: blue;
  }
  100% {
    caret-color: purple;
  }
`;

const StyledInput = styled(Form.Control)`
  animation: ${blink} 2s linear infinite;
`;

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
        <StyledInput {...inputProps} />
        <span className="text-danger"> {props.error} </span>{' '}
      </FormGroup>
    </Col>
  );
};

export default Input;
