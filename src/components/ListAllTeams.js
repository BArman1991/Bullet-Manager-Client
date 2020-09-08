import React, {Fragment, useEffect, useState} from "react"
import EditTeam from "./EditTeam"

const ListAllTeams = () => {
    const [teams, setTeams] = useState([])

    
    
    const getTeams = async () => {
        try {
            const response = await fetch("http://localhost:5000/Teams")
            const jsonData = await response.json();

            setTeams(jsonData)
        } catch (err) {
            console.error(err.message);
        }

    }
    
    useEffect(() => {
        getTeams();
    }, []);
    console.log(teams);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                </tr> */}
                {teams.map(team => (
                    <tr key={team.team_id}>
                        <td>{team.team_name}</td>
                        <td><EditTeam team={team}/></td>
                    </tr> 
                ))}
                
                </tbody>
            </table>
        </Fragment>)
}

export default ListAllTeams;