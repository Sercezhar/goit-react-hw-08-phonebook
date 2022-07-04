import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}
