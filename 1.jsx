import React, { useState, useEffect } from '';

function DataDisplay() {
  // State to hold the fetched data
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect runs once when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Store data in state
        setIsLoading(false); // Update loading state
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); // Empty dependency array ensures this only runs once

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {/* Map through the data and render it to the UI */}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
