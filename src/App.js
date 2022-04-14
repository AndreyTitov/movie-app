import React, { Suspense } from 'react';
import { compose } from 'recompose';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Loader from './common/components/Loader/Loader';

import PopularMovies from './components/PopularMovies/PopularMovies.view';
import Home from './components/Home/Home.view';
import Movie from './components/Movie/Movie.view';

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/movies'} component={PopularMovies}/>
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
