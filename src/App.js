import React, { Suspense } from 'react';
import { compose } from 'recompose';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Loader from './common/components/Loader/Loader';
import PopularMovies from './components/PopularMovies/PopularMovies.view';
import Home from './components/Home/Home.view';
import Movie from './components/Movie/Movie.view';
import Login from 'Login/Login.view';
import PopularActors from './components/PopularActors/PopularActors.view';
import PrivateRoute from 'common/routes/Private.route';
import ScrollToTop from 'common/components/Navigator/SrollTop';

function App () {
  const path = window.location.pathname || '';

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <ScrollToTop />
        <Switch>
          <Route exact path={path} component={Home}/>
          <Route exact path={`${path}/login`} component={Login}/>
          <Route exact path={`${path}/movies`} component={PopularMovies}/>
          <Route exact path={`${path}/actors`} component={PopularActors}/>
          <Switch>
            <Route path={`${path}/movies/:movieId`}>
              <Movie/>
            </Route>
          </Switch>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default compose()(App);
