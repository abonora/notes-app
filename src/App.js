import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Notes</h1>
        <p>Let's create a simple notes app that accepts a Title (input) and a body (textarea) and saves it in localstorage. Let's break it down into these steps to build it:</p>
        <ol>
          <li>Get the basic component that has the input fields working and storing the data in localstorage</li>
          <li>Once we verify that the notes are being stored in localstorage, create a new component that displays all the notes</li>
          <li>Style the whole thing</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
