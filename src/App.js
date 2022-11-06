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
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Suspense fallback={<Loader/>}>
        <ScrollToTop />
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/login'} component={Login}/>
          <Route exact path={'/movies'} component={PopularMovies}/>
          <Route exact path={'/actors'} component={PopularActors}/>
          <Switch>
            <Route path={'/movies/:movieId'}>
              <Movie/>
            </Route>
          </Switch>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default compose()(App);