import exp from 'constants';
import { Application } from './application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form',
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2, // 2 for h2 - h{level}
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory'); // accepts also 'selector' option - same as getByLabelText
    expect(paragraphElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', { name: 'Name' }); // element
    expect(nameElement).toBeInTheDocument(); // assertion

    const nameElement2 = screen.getByLabelText('Name', {
      // search for the label with 'Name' text
      selector: 'input', // and find the element associate with that label - element 'input'
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue('Birta');
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});

// https://www.w3.org/TR/html-aria/#docconformance
