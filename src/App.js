import React, { Suspense } from 'react';
import { compose } from 'recompose';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Loader from './common/components/Loader/Loader';
import PopularMovies from './components/PopularMovies/PopularMovies.view';
import Home from './components/Home/Home.view';
import Movie from './components/Movie/Movie.view';
import Login from 'Login/Login.view';
import PopularActors from './components/PopularActors/PopularActors.view';
import PrivateRoute from 'common/routes/Private.route';
import ScrollToTop from 'common/components/Navigator/SrollTop';

function App () {
  // const path = window.location.href || '';

  return (
    <HashRouter>
      <Suspense fallback={<Loader/>}>
        <ScrollToTop />
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={`/login`} component={Login}/>
          <Route exact path={`/movies`} component={PopularMovies}/>
          <Route exact path={`/actors`} component={PopularActors}/>
          <Switch>
            <Route path={`/movies/:movieId`}>
              <Movie/>
            </Route>
          </Switch>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default compose()(App);
