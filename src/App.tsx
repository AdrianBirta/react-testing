import './App.css';
import { Application } from './components/application/application';

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  );
}

export default App;

// # What to test
// Test component renders
// Test component renders with props
// Test component renders in different states
// Test component reacts to events

// # What not to test
// Implementation details
// Third party code
// Code that is not important from a user point of view
