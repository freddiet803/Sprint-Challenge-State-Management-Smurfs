import React from 'react';

export const Smurf = props => {
  return (
    <>
      <div>Name: {props.smurf.name}</div>
      <div> Age: {props.smurf.age}</div>
      <div>Height: {props.smurf.height}</div>
      <div>Id: {props.smurf.id}</div>
    </>
  );
};
