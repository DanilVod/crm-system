import React from 'react';
import { ROUTES } from '@/routes';
import { displayRouteMenu, RenderRoutes } from '@/helpers/routeHelpers';

export const Navigator = () => {
  return (
    <div>
      <div className="routes">{displayRouteMenu(ROUTES)}</div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
};
