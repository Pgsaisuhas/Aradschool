import { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import { AuthWrapper } from './auth/AuthWrapper';
import './App.css'
import { Login } from './components/pages/Login';
import { RenderMenu, RenderRoutes } from './components/RenderNavigation';

function App() {

  return (
		<>
			<BrowserRouter>
				<AuthWrapper>
				</AuthWrapper>
			</BrowserRouter>
		</>
	);
}

export default App


// src/App.jsx


// export default api;

// src/App.jsx
// import React, { useState, useEffect } from 'react';
// import api from './api';

// function App() {
  
// }

// export default App;