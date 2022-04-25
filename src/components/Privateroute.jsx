import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export const ProtectRoute = ({ children }) => {
	const { isAuth } = useContext(AuthContext);

	if (!isAuth) {
		return <Navigate to='/login' replace={true} />;
	}
	return children;
};