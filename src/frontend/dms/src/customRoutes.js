import React from 'react';
import { Route } from 'react-router-dom';
import ActivitiesPage from './semapps/activitypub/ActivitiesPage';

export default [
  <Route exact path="/:resource/:id/inbox" component={ActivitiesPage} />,
];