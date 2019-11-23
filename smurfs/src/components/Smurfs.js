import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { Smurf } from './Smurf';

const Smurfs = props => {
  const [createSmurf, setCreateSmurf] = useState({
    name: '',
    age: null,
    height: '',
    id: null
  });

  const handleChange = e => {
    e.preventDefault();
    setCreateSmurf({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const createnewSmurf = e => {
    e.preventDefault();
  };

  const getSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };
  return (
    <>
      <div>
        <form onSubmit={createSmurf}>
          <label>
            Name:{' '}
            <input
              type='text'
              name='smurfname'
              value={createSmurf.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:{' '}
            <input
              type='text'
              name='smurfage'
              value={createSmurf.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Height:{' '}
            <input
              type='text'
              name='smurfheight'
              value={createSmurf.height}
              onChange={handleChange}
            />
          </label>
          <label>
            Id:{' '}
            <input
              type='text'
              name='smurfid'
              value={createSmurf.id}
              onChange={handleChange}
            />
          </label>

          <button type='submit'>Create Smurf</button>
          <button onClick={getSmurfs}>Get Smurfs</button>
        </form>
        {props.error && <div>{props.error}</div>}
        {props.isLoading ? (
          <>
            <div>Loading Smurfs...</div>
          </>
        ) : (
          <>
            {props.smurf.map(smurf => {
              return <Smurf key={smurf.id} smurf={smurf} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurf: state.smurf,
    newSmurf: state.newSmurf
  };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
