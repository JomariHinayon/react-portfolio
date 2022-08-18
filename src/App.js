import { Box, Stack } from '@mui/material';
import react from 'react';
import Home from './components/home/home';
import ResponsiveAppBar from './components/navbar/ResponsiveAppBar';
import About from './components/about/About';
import './app.css';
const App = () => {
	return (
		<>
		<Box sx={{backgroundColor:'#f5f5f5'}} >
			<ResponsiveAppBar/>
			<Home/>
		</Box>
		<Box>
			<About/>
		</Box>
		</>	
		);
};

export default App;