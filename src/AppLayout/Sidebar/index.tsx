import React, { useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IRootState } from '../../store/index'

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
`;

const Index = ({ projects }: { projects: IProject[] }): JSX.Element => {
  return (
    <>
      <Wrapper>
        <ProSidebar width={'270px'}>
          <SidebarHeader>Dockster</SidebarHeader>
          <Menu iconShape="square">
            <SubMenu title="Projects">
              {projects.length > 0 && projects.map((project) => <MenuItem>{project.name}</MenuItem>)}
            </SubMenu>
          </Menu>
        </ProSidebar>
      </Wrapper>
    </>
  );
};

const mapStateToProps = ({ projects }: IRootState) => ({ projects })

export default connect(mapStateToProps)(Index);
