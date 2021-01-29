import React from 'react';
import { IRootState } from '../../store';
import { connect, ConnectedProps } from 'react-redux';
import AddProjectInfo from './AddProjectInfo';

const mapStateToProps = ({ projects }: IRootState) => ({ projects });
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Index: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  return <>{props.projects.projects.length > 0 ? <div>Projects detected</div> : <AddProjectInfo />}</>;
};

export default connector(Index);
