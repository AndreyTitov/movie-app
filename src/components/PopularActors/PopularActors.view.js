/**
 * @file
 * Contains Popular actors component.
 */

import React, { useEffect, useState } from 'react';
import { PopularActorsContainer } from './PopularActors.style';
import MainLayout from 'common/layouts/Main.layout';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';

const PopularActors = (props) => {

  const { actorsStore } = props;

  /**
   * Popular actors.
   */
  const [popularActors, setPopularActors] = useState([]);

  /**
   * Get popular actors.
   */
  useEffect(() => {
    const data = actorsStore.setPopularActors();
    console.log(data);
  }, [actorsStore]);

  return (
    <MainLayout>
      <PopularActorsContainer>
        <h3>Popular actors</h3>
      </PopularActorsContainer>
    </MainLayout>
  )
};

export default compose(
  inject(
    'actorsStore',
  )
)(PopularActors);
