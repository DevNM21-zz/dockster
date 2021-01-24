import React, { useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
`;

const Index = (): JSX.Element => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    ipcRenderer.invoke('getAllProjects', {}).then((projects: any) => {
      setProjects(projects);
    });
  }, []);
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

export default Index;
