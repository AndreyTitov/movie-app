/**
 * @file
 * Contains search bar element.
 */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { inject } from 'mobx-react';
import {
  SearchBarInput,
  SearchBarInputWrapper,
  FindedMoviesListWrapper,
  FindedMovie,
  FindedMoviesContainer,
  SearchBarIconWrapper,
  SearchIcon,
} from './SearchBarElement.style';

const SearchBarElement = (props) => {
  const { moviesStore, getRef, ...rest } = props; // excluded getRef prop. DO NOT DELETE!!!

  const ref = useRef();

  const [findedMovies, setFindedMovies] = useState([]);

  const [showResults, setShowResults] = useState(false);

  /**
   * Show search bar input.
   */
  const [showSearchBar, setShowSearchBar] = useState(false);

  /**
   * Ref to input.
   * @param {object} ref.
   * Ref data.
   */
  const inputRef = (ref) => {
    if (props.getRef) {
      props.getRef(ref);
    }
  };

  /**
   * Find movie.
   */
  const findMovie = async (e) => {
    try {
      const { value } = e.target;
      const data = value && await moviesStore.searchMovie(1, false, value);
      value ? setShowResults(true) : setShowResults(false);
      value && setFindedMovies(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  const renderFindedMovies = () => {
    return (
      <FindedMoviesContainer>
        {showResults && (
          <FindedMoviesListWrapper>
            {findedMovies.map((movie) => (
              <FindedMovie key={movie.id}>
                <Link onClick={() => setShowResults(false)} to={`/movies/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </FindedMovie>
            ))}
          </FindedMoviesListWrapper>
        )}
      </FindedMoviesContainer>
    )
  };

  const onBlur = () => {
    // setShowResults(false);
  };

  /**
   * Toggle search bar input.
   */
  const toggleSearchBarHandler = () => {
    setShowSearchBar(!showSearchBar);
    setFindedMovies([]);
    const { current } = ref;
    current.value = '';
  };

  return (
    <SearchBarInputWrapper {...rest}>
      <SearchBarInput
        innerRef={inputRef}
        {...rest}
        onChange={(e) => findMovie(e)}
        onBlur={onBlur}
        showSearchBar={showSearchBar}
        ref={ref}
      />
      {renderFindedMovies()}
      <SearchBarIconWrapper onClick={() => toggleSearchBarHandler()}>
        <SearchIcon showSearchBar={showSearchBar} />
      </SearchBarIconWrapper>
    </SearchBarInputWrapper>
  )
};

export default compose(inject('moviesStore'))(SearchBarElement);
