import React, { Fragment } from 'react';
import './App.css';

import CreateTeam from './components/createTeam'
import EditTeam from './components/EditTeam'
import ListAllTeams from './components/ListAllTeams'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <CreateTeam />
        <ListAllTeams />
      </div>
    </Fragment>
  );
}

export default App;
