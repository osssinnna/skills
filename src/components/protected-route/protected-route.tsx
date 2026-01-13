import type { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import {
  selectIsAuthenticated,
  selectIsAuthChecked,
} from '../../services/currentUserSlice/selectors';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean; // true для страниц регистрации/логина
  children: ReactElement;
  loginPath?: string; // путь для редиректа неавторизованных (по умолчанию '/login')
  defaultRedirectPath?: string; // путь для редиректа после авторизации (по умолчанию '/')
  LoadingComponent?: ReactElement; // компонент загрузки
};

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  onlyUnAuth = false,
  children,
  loginPath = '/login',
  defaultRedirectPath = '/',
  LoadingComponent
}) => {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAuthChecked = useSelector(selectIsAuthChecked);

  // Логика для страниц регистрации/логина (доступны только неавторизованным)
  if (onlyUnAuth) {
    if (isAuthenticated) {
      // Авторизованный пользователь - редирект на сохраненную страницу
      const from = location.state?.from?.pathname || defaultRedirectPath;
      return <Navigate to={from} replace />;
    }
    return children;
  }

  // Логика для защищенных страниц (требуют авторизации)
  if (!isAuthChecked) {
    return LoadingComponent || <div>Загрузка...</div>;
  }

  if (!isAuthenticated) {
    // Неавторизованный пользователь - редирект на регистрацию с сохранением пути
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  return children;
};
