import './App.css';
import { TaskForm } from './components/TaskForm';
import { Task } from './components/Task';

import { useState } from 'react';

function App() {
	const [taskList, setTaskList] = useState([]);

	const addTask = (task) => {
		const newTask = { desc: task, id: taskList.length };
		setTaskList([...taskList, newTask]);
	};

	const deleteTask = (id) => {
		const newTaskList = taskList.filter((taskItem) => taskItem.id !== id);
		setTaskList(newTaskList);
	};

	return (
		<div className="App">
			<TaskForm addTask={addTask} />

			<ol>
				{taskList.map((taskItem) => {
					return (
						<Task key={taskItem.id} deleteTask={deleteTask} task={taskItem} />
					);
				})}
			</ol>
		</div>
	);
}

export default App;
