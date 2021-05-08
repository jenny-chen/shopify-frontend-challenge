import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import upArrow from './imgs/up-arrow.png';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from './components/basics';
import useWindowWidth from './hooks/useWindowWidth.js';

function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState(JSON.parse(localStorage.getItem('asyncNominations') || "[]"))
  const [searchTerm, setSearchTerm] = useState("");
  const [showNominations, setShowNominations] = useState(false);
  const [validMovie, setValidMovie] = useState(false);

  const tabletWidth = 1024;
  const { width } = useWindowWidth();

  useEffect(() => {
    async function fetchEvents() {
      fetch('https://www.omdbapi.com/?apikey=4c504ffd&s='+searchTerm)
        .then(response => response.json())
        .then(data => {
          if (!data.Error) {
            setMovies(data.Search.slice(0,5))
            setValidMovie(true)
          } else {
            setValidMovie(false)
          }
        });
    }

    // support asynchronous access to localStorage for caching
    async function asyncSetItem(key, value) {
        await null;
        return localStorage.setItem(key, value);
    }
    asyncSetItem('asyncNominations', JSON.stringify(nominations))

    fetchEvents();
  }, [searchTerm, nominations])


  function enterSearchTerm(e) {
    if (e.keyCode === 13) {
      setSearchTerm(e.target.value)
    }
  }

  function toggleNomination(e, currMovie) {
    if (nominations.some(m => m.imdbID === currMovie.imdbID)) {
      setNominations(nominations.filter(nomination => nomination.imdbID !== currMovie.imdbID))
    } else if (nominations.length < 5) {
      setNominations(nominations.concat([currMovie]))
    }
  }

  function removeNomination(e) {
    setNominations(nominations.filter(nomination => nomination.imdbID !== e.target.id))
  }

  function toggleShowNomination(e) {
    setShowNominations(!showNominations);
  }

  return (
    <Flex>
      {/* section for searching movies */}
      <Box
        outside
        search
        width="50%"
      >
        <Input placeholder="Search for movie..." type="text" id="movie" name="movie" onKeyDown={ enterSearchTerm } />
        {movies.map((currMovie, i) => {
          if (currMovie.Response === "False") {
            return
          }
          return (  
            <Box movie>
              <Button
                color={ nominations.some(m => m.imdbID === currMovie.imdbID) ? "darkGreen" : (nominations.length >= 5 ? "red" : "gold") }
                disabled={ !nominations.some(m => m.imdbID === currMovie.imdbID ) && nominations.length >= 5 }
                onClick={ (e) => toggleNomination(e, currMovie) }
              >
                { nominations.some(m => m.imdbID === currMovie.imdbID) ? "NOMINATED" : (nominations.length >= 5 ? (width >= tabletWidth ? "MAX NOMINATIONS" : "AT MAX") : "NOMINATE") }
              </Button>
              <Text title>{currMovie.Title}</Text>
              <Text>{currMovie.Year}</Text>
            </Box>
          )
        })}

        {/* error messages */}
        {!searchTerm &&
          <Text>Uh oh! It looks like you haven't searched for a movie yet.</Text>
        }
        {!validMovie && searchTerm &&
          <Text>Hm, I couldn't find a related movie, try another search term?</Text>
        }
      </Box>

      {/* section for showing nominations */}
      <Box
        outside
        nominations
        notShowing={showNominations}
        width="29%"
        style={{ textAlign: "center" }}
      >
        <Box toggleNom>
          <Button toggleNom onClick={ toggleShowNomination} color="paleYellow">
            <Image src={upArrow} rotated={!showNominations} width="50px" height="50px" />
          </Button>
        </Box>
        <Heading>NOMINATIONS</Heading>
        {nominations.concat(Array(5-nominations.length).fill({})).map((m, i) => {
          if (m.imdbID) {
            return (
              <Box nominated>
                <Text onClick={ removeNomination } key={m.imdbID} id={m.imdbID} nominated>{m.Title}</Text>
              </Box>
            )
          } else {
            return (
              <Box nominated empty>
                <Text key={i} empty>&#x200b;</Text>
              </Box>
            )
          }
        })}
        {nominations.length === 5 &&
          <Text color="green">Finished nominating 5 films!</Text>}
        {nominations.length !== 5 &&
          <Text color="red">{"You still have " + (5-nominations.length) + " films to nominate!"}</Text>}
      </Box>
    </Flex>
  );
}

export default App;
