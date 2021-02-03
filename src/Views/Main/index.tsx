import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';

interface Props {
  projectId: string;
}
const Index = ({ projectId }: Props) => {
  return (
    <>
      <Tabs defaultActiveKey="2">
        <Tab eventKey={'Images'} title="Images" key="1">
          <TabContainer>Hi</TabContainer>
        </Tab>
        <Tab eventKey="Containers"  title="Containers" key="2">
          --- Containers ---
        </Tab>
        <Tab eventKey="Networks" title="Networks" key="3">
          --- Networks ---
        </Tab>
      </Tabs>
    </>
  );
};

export default Index;
