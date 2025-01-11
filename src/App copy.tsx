import { Container } from '@mui/material';
import './App.css';
import { Counter } from './Counter';
import { CounterWithProgressBar } from './CounterWithProgressBar';

function App() {
	return (
		<div className="App">
			<Container maxWidth={'md'}>
				{/* <Counter />
				<CounterWithProgressBar /> */}
			</Container>
		</div>
	);
}

export default App;
