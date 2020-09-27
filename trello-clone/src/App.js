import React, {useState} from 'react';
import './App.css';
import Section from './componenet/section';
import AddTask from './componenet/addTask';


// Data 
const TAS = [
  {
    id: 1,
    title: "Task Title 01",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 2,
    title: "Task Title 02",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 0,
  },
  {
    id: 3,
    title: "Task Title 03",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 4,
    title: "Task Title 04",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 5,
    title: "Task Title 05",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 1,
  },
  {
    id: 6,
    title: "Task Title 06",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 7,
    title: "Task Title 07",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 8,
    title: "Task Title 08",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 9,
    title: "Task Title 09",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 2,
  },
];


function App() {

const [TASKS, setTASKS] = useState(TAS)


  return (
    <div>
    <AddTask/>
    <div className="trello">
    <Section  data={TASKS.filter(task=>task.status===0)} title="To Do"/>
    <Section  data={TASKS.filter(task=>task.status===1)} title="Current Work"/>
    <Section  data={TASKS.filter(task=>task.status===2)} title="Done"/>
    </div>
    </div>
  );
}

export default App;
