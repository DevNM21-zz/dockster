import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import Sidebar from './Sidebar';
import styled from "styled-components";

// const Main = styled.section`
//
// `
interface Props {
  children: ReactChild | ReactFragment | ReactPortal | null;
}

const Index = (props: Props): JSX.Element => {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
};

export default Index;
