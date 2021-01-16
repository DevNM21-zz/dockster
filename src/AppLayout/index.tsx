import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import Sidebar from './Sidebar';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = styled.section`
  margin-left: 270px;
`;
interface Props {
  children: ReactChild | ReactFragment | ReactPortal | null;
}

const Index = (props: Props): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Main>
        {props.children}
      </Main>
    </>
  );
};

export default Index;
