import './App.css';
import { Counter } from './Counter';
import { CounterWithProgressBar } from './CounterWithProgressBar';

import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { CounterWithSettings } from './CounterWithSettings';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function BasicTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="counters example" centered>
					<Tab style={ {color: '#c78238'} } label="Simple counter" {...a11yProps(0)} />
					<Tab style={ {color: '#c78238'} } label="Counter with progress bar" {...a11yProps(1)} />
					<Tab style={ {color: '#c78238'} } label="Counter with settings" {...a11yProps(2)} />
				</Tabs>
			</Box>

			<CustomTabPanel value={value} index={0}>
				<Counter />
			</CustomTabPanel>

			<CustomTabPanel value={value} index={1}>
				<CounterWithProgressBar />
			</CustomTabPanel>

			<CustomTabPanel value={value} index={2}>
				<CounterWithSettings />
			</CustomTabPanel>
		</Box>
	);
}




function App() {
	return (
		<div className="App">
			<Container maxWidth={'md'}>
				{/* <Counter />
				<CounterRange /> */}
				<BasicTabs />
			</Container>
		</div>
	);
}

export default App;
