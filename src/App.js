import React, {useState, createContext, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TaskTable from './components/TasksTable';
import TaskDetail from './components/TaskDetail';
import {TaskIdContext} from './context/taskIdContext'


function App() {

  const [taskId, setTaskId] = useState(0);

  return (
    <div className="App">
      <TaskIdContext.Provider value={{taskId, setTaskId}}>
      <h1>Tasks</h1>
      <Container>
        <Row>
          <Col>
            <TaskTable/>
          </Col>
        </Row>
        <Row>
          <Col>
            <TaskDetail/>
          </Col>
        </Row>
      </Container>
      </TaskIdContext.Provider>
    </div>
  );
}

export default App;
