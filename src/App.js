import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SubHeading,
  Text,
} from './components/basics'
import useWindowDimensions from './hooks/useWindowDimensions.js'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState({});
  const [validMovie, setValidMovie] = useState(false);
  const [nominations, setNominations] = useState(JSON.parse(localStorage.getItem('asyncNominations') || "[]"))

  useEffect(() => {
    async function fetchEvents() {
      fetch('https://www.omdbapi.com/?apikey=4c504ffd&t='+searchTerm)
        .then(response => response.json())
        .then(data => {
          if (!data.Error) {
            setMovie(data)
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

  function toggleNomination(e) {
    if (nominations.some(m => m.imdbID === movie.imdbID)) {
      setNominations(nominations.filter(nomination => nomination.imdbID !== movie.imdbID))
    } else if (nominations.length < 5) {
      setNominations(nominations.concat([movie]))
    }
  }

  function removeNomination(e) {
    setNominations(nominations.filter(nomination => nomination.imdbID !== e.target.id))
  }

  const { height, width } = useWindowDimensions();

  return (
    <Flex>
      <Box outside width="50%">
        <Input placeholder="Search for movie..." type="text" id="movie" name="movie" onKeyDown={ enterSearchTerm } />
        {searchTerm && validMovie &&
          <>
            <Button
              color={ nominations.some(m => m.imdbID === movie.imdbID) ? "darkGreen" : (nominations.length >= 5 ? "red" : "gold") }
              onClick={ toggleNomination }
            >
              { nominations.some(m => m.imdbID === movie.imdbID) ? "Nominated" : (nominations.length >= 5 ? "At max nominations" : "Nominate") }
            </Button>
            <Text title>{movie.Title}</Text>
            <Text>{movie.Year}</Text>
            <Text>{"Genres: " + movie.Genre}</Text>
            <Text>{"Directed by " + movie.Director}</Text>
            {width >= 1024 &&
              <>
                <Text>{"Starring " + movie.Actors}</Text>
                {movie.Poster !== "N/A" &&
                  <Box style={{ textAlign: "center" }}>
                    <Image src={movie.Poster} alt={"poster of " + movie.Title} />
                  </Box>
                }
              </>
            }
          </>
        }

        {/* error messages */}
        {!searchTerm &&
          <Text>Uh oh! It looks like you haven't searched for a movie yet.</Text>
        }
        {!validMovie && searchTerm &&
          <Text>Hm, I couldn't find a related movie, try another search term?</Text>
        }
      </Box>

      <Box outside nominations width="29%" style={{ textAlign: "center" }}>
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
