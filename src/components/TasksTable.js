import React, {useState, useEffect, useContext} from 'react'
import Table from 'react-bootstrap/table';
import axios from 'axios';
import TaskIdContext from '../context/taskIdContext';

function TaskTable() {
  const {taskId, setTaskId} = useContext(TaskIdContext)

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
    const setNewTaskId = (task) => {
      setTaskId(task)
      console.log(task);
    }

    const showAllOrganisations = () => {
      axios.get('/taskmanager/v1/tasks.json')
        .then(res => {
          setTaskList(res.data.tasks);
          setShowAllOrgs(false)
        });
    }

  return(
    <div>
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
              <a href="#" onClick={(e) => setNewTaskId(task.AbxTaskId)}>
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
  </div>
  )
  
}

export default TaskTable;
