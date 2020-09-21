import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/table';
import axios from 'axios';

function TaskTable() {
  const [taskList, setTaskList] = React.useState([]);
  const [showAllOrgs, setShowAllOrgs] = React.useState('false')
  useEffect(() => {
    axios.get('/taskmanager/v1/tasks.json')
      .then(res => {
        setTaskList(res.data.tasks);
      });
    }, []);

    const organisationClick = (org) => {
      if (org) {
        axios.get('/taskmanager/v1/organisations/' + org + '.json')
          .then(res => {
            setTaskList(res.data.tasks);
            setShowAllOrgs(true);
          })
      }
    }

    const showAllOrganisations = () => {
      axios.get('/taskmanager/v1/tasks.json')
        .then(res => {
          setTaskList(res.data.tasks);
          setShowAllOrgs(false)
        });
    }
    const showTaskDetail = (taskId) => {
      console.log('showTaskDetail', taskId);
    }

  return(
    <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Summary</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Assigned To</th>
          <th>
            Organisation&nbsp; 
            { showAllOrgs === true &&
              <a href="#" onClick={showAllOrganisations}>Show All</a>
            }
          </th>
          <th>Caller</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map(task =>
          <tr key={task.AbxTaskId}>
            <td>
              <a href="#" onClick={(e) => showTaskDetail(task.AbxTaskId)}>
                {task.taskSummary}
              </a>
            </td>
            <td>{task.priority}</td>
            <td>{task.TaskStatus}</td>
            <td>{task.AssignedTo}</td>
            <td><a href="#" onClick={(e) => organisationClick(task.OrganisationId)}>{task.OrganisationId}</a></td>
            <td>{task.callerId}</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
  
}

export default TaskTable;
