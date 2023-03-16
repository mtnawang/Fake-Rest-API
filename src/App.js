import './App.css';
import Todo from './components/GetPosts'
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      return response.json()
    }).then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Moammar's Fake REST API</h1>

      {posts.map((info) => {
        return <Todo 
          key={info.id} 
          userid={info.json_userID} 
          title={info.title} 
          body={info.body}/>             
      })}
    </div>
  );
}

export default App;
