import './App.css';
import useArray from './customHook';


function App() {
  const { data, push } = useArray();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => push({id: data.length + 1, title: `New Post ${data.length + 1}`, body: `Via custom hook  ${data.length + 1}`})}>
           Push
          </button>
        </p>
        {data && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
