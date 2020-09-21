import React, {useState, useEffect} from 'react'
import axios from 'axios';
function TaskList() {
  const [organisations, setOrganisations] = React.useState([])
  useEffect(() => {
    axios.get('/taskmanager/v1/tasks.json')
      .then(res => {
        const organisations = res.data.tasks.map(task => task.OrganisationId).filter((value, index, self) => self.indexOf(value) === index);
        organisations.unshift('ALL');
        setOrganisations(organisations)
      });
  }, []);

  return (
    <div>
      {organisations.map(organisation => <div key={organisation}> {organisation} </div>)}
    </div>
  );
}

export default TaskList;
