import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import React, { FC } from 'react';
import { selectAuth } from './reactogram/func/store/profile/selectors';

interface IPublicRoute {
  restricted?: boolean;
  children?: JSX.Element;
}
export const PublickRoute: FC<IPublicRoute> = ({
  restricted = true,
  children,
}) => {
  const isAuth = useSelector(selectAuth);

  if (isAuth && restricted) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};
