import { useState } from 'react';

export const TaskForm = (props) => {
	const [task, setTask] = useState('');

	const handleChange = (event) => {
		setTask(event.target.value);
	};

	const submit = () => {
		props.addTask(task);
	};

	return (
		<>
			<label htmlFor="task">Task Description: </label>
			<input
				onChange={(event) => {
					handleChange(event);
				}}
				type="text"
				id="task"
				name="task"
			/>
			<button onClick={submit}>Submit</button>
		</>
	);
};
