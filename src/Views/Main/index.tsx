import React from 'react';

interface Props {
	projectId: string;
}
const Index = ({ projectId }: Props) => {
	return (
		<>
			<h1>Hi {projectId}</h1>
		</>
	);
};

export default Index;