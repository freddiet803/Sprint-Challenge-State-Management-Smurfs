import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, postSmurf } from '../actions';
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
    setCreateSmurf({ ...createSmurf, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const createnewSmurf = e => {
    e.preventDefault();
    console.log(createSmurf);
    props.postSmurf(createSmurf);
    setCreateSmurf({ name: '', age: null, height: '', id: null });

    setTimeout(() => {
      props.getSmurfs();
    }, 3000);
  };

  const getSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };
  return (
    <>
      <div>
        <form onSubmit={createnewSmurf}>
          <label>
            Name:{' '}
            <input
              type='text'
              name='name'
              value={createSmurf.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:{' '}
            <input
              type='text'
              name='age'
              value={createSmurf.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Height:{' '}
            <input
              type='text'
              name='height'
              value={createSmurf.height}
              onChange={handleChange}
            />
          </label>
          <label>
            Id:{' '}
            <input
              type='text'
              name='id'
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

export default connect(mapStateToProps, { getSmurfs, postSmurf })(Smurfs);
