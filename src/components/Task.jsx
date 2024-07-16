import { useState } from 'react';
import './Task.css';

export const Task = (props) => {
	const [done, setDone] = useState(false);

	const remove = () => {
		props.deleteTask(props.task.id);
	};

	const toggleComplete = () => {
		setDone(!done);
	};

	return (
		<li
			onClick={toggleComplete}
			className={done ? 'container done' : 'container'}
		>
			<p>{props.task.desc}</p>
			<button onClick={remove} className="btn">
				Delete
			</button>
		</li>
	);
};
