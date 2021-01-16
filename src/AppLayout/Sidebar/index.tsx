import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
`;

const Index = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <ProSidebar width={'270px'} >
          <SidebarHeader>
            Dockster
          </SidebarHeader>
          <Menu iconShape="square">
            <SubMenu title="Projects">
              <MenuItem>Untitled Project</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </Wrapper>
    </>
  );
};

export default Index;
