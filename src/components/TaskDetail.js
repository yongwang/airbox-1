import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/table';
import {Toast, ToastHeader, ToastBody} from 'react-bootstrap';
import axios from 'axios';

import PriorityChanger from './PriorityChanger';

function TaskDetail() {
  const [task, setTask] = React.useState([]);
  const [saveFlag, setSaveFlag] = React.useState(false);
  const [showSaveSuccess, setShowSaveSucces] = React.useState(false);

  useEffect(() => {
    axios.get('/taskmanager/v1/tasks/1.json')
      .then(res => {
        setTask(res.data.task);
      })
  }, []);

  const createDate = timestamp => {
    return new Date(timestamp).toLocaleString();
  };

  function saveTask() {
    if (saveFlag) {
      //axios.put('/taskmanager/v1/task/' + task.AbxTaskId, JSON.stringify(task))
      //.then(() => {
        setShowSaveSucces(true);
      //});
    }
  }
  const whenChanged = (newVal, key) => {
    let taskCopy = Object.assign({}, task)
    taskCopy[key] = newVal;
    setTask(taskCopy);
    setSaveFlag(true);
  }

  useEffect(() => {
      if(typeof task === 'object') {
        saveTask();
      }
  }, [task])

  return (
    <div>
    <Table striped bordered variant="dark" size="sm">
      <thead>
        <tr>
          <th>Task Summary</th>
          <th>Priority</th>
          <th>Organisation</th>
          <th>Assigned To</th>
          <th>Caller</th>
          <th>Task Status</th>
          <th>Location</th>
          <th>Details</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{task.taskSummary}</td>
          <td><PriorityChanger priority={task.priority} updateFunc={whenChanged}/></td>
          <td>{task.OrganisationId}</td>
          <td>{task.AssignedTo}</td>
          <td>{task.callerId}</td>
          <td>{task.TaskStatus}</td>
          <td>{task.latitude} / {task.longitude}</td>
          <td>{task.taskDescription}</td>
          <td>{createDate(task.timestamp)}</td>
        </tr>
      </tbody>
    </Table>
    <Toast show={showSaveSuccess} onClose={() => setShowSaveSucces(false)} delay={30000}>
      <Toast.Header>
        Changes Saved Successfully
      </Toast.Header>
      <Toast.Body>
        <p>Your changes have been saved to the server</p>
        <p>This is not a real save its just for demonstration purposes</p>
      </Toast.Body>
    </Toast>
  </div>
  )
}

export default TaskDetail;
