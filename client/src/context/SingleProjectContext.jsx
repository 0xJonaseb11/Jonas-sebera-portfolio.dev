import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../../../../peace-ishimwe.dev/client/src/data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(singleProjectDataJson);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
