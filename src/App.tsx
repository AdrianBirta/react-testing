import './App.css';
import { Application } from './components/application/application';
import { Counter } from './components/counter/counter';
import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
      {/* <Application />
      <Skills skills={['HTML', 'CSS']} /> */}
      <Counter />
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

// # RTL Queries
// getBy & getAllBy
// queryBy & queryAllBy
// findBy & findAllBy
// # Manual queries
// You can use the regular querySelector DOM API to find elements
// Not recommended because those attributes are INVISIBLE to the user
