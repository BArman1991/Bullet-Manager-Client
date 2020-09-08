import React, { Fragment, useState } from 'react';

const CreateTeam = () => {
    const [team_name, setName] = useState("");
    const onSubmitName = async (e) => {
        e.preventDefault();
        try {
            const body = {team_name};
            const response = await fetch("http://localhost:5000/Team", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/"; // Refresh to the page so that we will see the latest changes
        } catch (err) {
            console.error(err.message);
        }
    }



    return (
        <Fragment>
            <h1 className='text-center mt-5'>Create Team</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitName}>
              <input 
                type='text' 
                className="form-control" 
                value = {team_name} 
                onChange={e => setName(e.target.value)}/>
              <button className="btn btn-success">Add Team</button>
            </form>
        </Fragment>
    )
}

export default CreateTeam;