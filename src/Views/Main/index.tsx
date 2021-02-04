import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import Images from './Images';
import Containers from './Containers';

interface Props {
  projectId: string;
}
const Index = ({ projectId }: Props) => {
  return (
    <>
      <Tabs defaultActiveKey="Containers" >
        <Tab eventKey={'Images'} title="Images" key="1">
          <TabContainer>
            <Images />
          </TabContainer>
        </Tab>
        <Tab eventKey="Containers" title="Containers" key="2">
          <TabContainer>
            <Containers />
          </TabContainer>        </Tab>
        <Tab eventKey="Networks" title="Networks" key="3">
          --- Networks ---
        </Tab>
      </Tabs>
    </>
  );
};

export default Index;
