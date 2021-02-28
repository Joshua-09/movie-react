import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

export const Details = (props) => (
    <div>
    <img src={`https://image.tmdb.org/t/p/w500${props.image}`}></img>
    <h6>Overview: {props.overview}</h6>
    <h6>Popularity: {props.popularity}</h6>
    </div>
)