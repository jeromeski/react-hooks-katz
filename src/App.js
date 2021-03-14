import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';

function App() {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = (e) => {
    console.log(e.target.value)
    setUserQuery(e.target.value)
  };

	const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`);
  };

  const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			searchQuery();
		}
	};

	return (
		<div className='App'>
			<h1>Hello David</h1>
			<div className='form'>
				<input
					type='text'
					value={userQuery}
					onChange={updateUserQuery}
					onKeyPress={handleKeyPress}
				/>
				<button onClick={searchQuery}>Search</button>
			</div>
			<hr />
      <Joke/>
      <hr />
      <Stories/>
		</div>
	);
};

export default App;
