import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function PriorityChanger(props) {
  const processType = (newType) => {
    if (newType === 'HIGH') {
      return 'danger';
    } else if (newType === 'MEDIUM') {
      return 'warning'
    } else {
      return 'info'
    }
  }
  const [type, setType] = useState('LOW');
  const [priority, setPriority] = useState('LOW');
  const [flag, setFlag] = useState(false)
  
  if (props.priority !== undefined && flag === false) {
    setType(processType(props.priority));
    setPriority(props.priority);
    setFlag(true);
  }


  //setType(processType(props.priority));
  const handlePriorityChange = (eventKey, ev) => {
    setPriority(eventKey);
    setType(processType(eventKey));
    props.updateFunc(eventKey, 'priority');
  }
  return (
    <DropdownButton id="priority" title={priority} variant={type}>
      <Dropdown.Item onSelect={handlePriorityChange} eventKey="HIGH">HIGH</Dropdown.Item>
      <Dropdown.Item onSelect={handlePriorityChange} eventKey="MEDIUM">MEDIUM</Dropdown.Item>
      <Dropdown.Item onSelect={handlePriorityChange} eventKey="LOW">LOW</Dropdown.Item>
    </DropdownButton>
  )


}

export default PriorityChanger;
