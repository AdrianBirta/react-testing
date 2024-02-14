import './App.css';
import { Skills } from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <Skills skills={['HTML', 'CSS']} />
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
