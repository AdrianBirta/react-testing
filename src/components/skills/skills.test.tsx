import { render, screen, logRoles } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    }); // return null if no elements match, return empty array for queryAll
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container); // print out a list of all the implicit aria rules within the DOM tree
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000, // set to 2000 ms, by default is 1000 ms
      }
    );

    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();

    // findBy - returns a Promise which resolves when an element is found which matches the given query
    // findAllBy - returns a Promise which resolves an array of elements
    // default timeout 1000 ms
  });
});
