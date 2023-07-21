import { Outlet, Navigate } from 'react-router-dom';
import { AppContext } from '../contexts/App.context';
import { useContext } from "react"

export const ProtectedRoutes = () => {

    const { token } = useContext(AppContext);

  return !!token ? <Outlet /> : <Navigate to={'/login'} />;
}
