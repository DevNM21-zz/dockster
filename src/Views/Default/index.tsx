import React from 'react';
import { IRootState } from '../../store';
import { connect, ConnectedProps } from 'react-redux';
import AddProjectInfo from './AddProjectInfo';
import { useParams } from 'react-router-dom';
import Main from '../Main';
import { Redirect } from 'react-router-dom';

const mapStateToProps = ({ projects }: IRootState) => ({ projects });
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Index: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { projectId }: { projectId: string } = useParams();
  if (projectId) return <Main projectId={projectId} />;
  if (props.projects.projects.length > 0) return <Redirect to={`/${props.projects.projects[0]._id}`} />;
  else return <AddProjectInfo />;
};

export default connector(Index);
