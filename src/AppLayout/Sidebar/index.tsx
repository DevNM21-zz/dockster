import React, { useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { IRootState } from '../../store/index';
import { ipcRenderer } from 'electron';
import { setProjects } from '../../store/projects/actions';

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
`;

const mapStateToProps = ({ projects }: IRootState) => ({ projects });
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Index: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    ipcRenderer.invoke('getAllProjects', {}).then((projects: IProject[]) => {
      dispatch(setProjects(projects));
    });
  }, []);
  return (
    <>
      <Wrapper>
        <ProSidebar width={'270px'}>
          <SidebarHeader>Dockster</SidebarHeader>
          <Menu iconShape="square">
            <SubMenu title="Projects">
              {props.projects.projects.length > 0 &&
                props.projects.projects.map((project) => <MenuItem  ><span onClick={() => console.log(project.name)} >{project.name}</span></MenuItem>)}
            </SubMenu>
          </Menu>
        </ProSidebar>
      </Wrapper>
    </>
  );
};

export default connect(mapStateToProps)(Index);
