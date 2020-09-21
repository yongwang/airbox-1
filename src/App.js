import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TaskTable from './components/TasksTable';
import TaskDetail from './components/TaskDetail';


function App() {

  

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
