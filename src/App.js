import React, { useState } from 'react';

function App() {
  const [userQuery, setUserQuery] = useState('')

  const updateUserQuery = (e) => {
    console.log(e.target.value)
    setUserQuery(e.target.value)
  };

	const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`)
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      searchQuery()
    }
  }

	return <div className='App'>
    <h1>Hello David</h1>
    <div className="form">
      <input type="text" value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
      <button onClick={searchQuery}>Search</button>
    </div>
  </div>;
};

export default App;
