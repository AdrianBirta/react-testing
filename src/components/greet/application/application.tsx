// Priority Order for Queries
// "Your test should resemble how users interact with your code (component, page, etc.) as much as possible"
// 1. getByRole() - top prefference about everything, if not helps then getByLabelText()
// 2. getByLabelText() - really good for form fields, if not helps then getByPlaceholderText()
// 3. getByPlaceholderText() - is not for substitut for getByLabelText()
// 4. getByText() - outside of forms, can be used to find non-interactiv elements like divs, spans and paragraphs
// 5. getByDisplayValue() - the current value of a form element can be useful when navigating a page with filled in values and get by display value is the query that an help you
// *
// 6. getByAltText() - if your element supports img, area, input or any custom element
// 7. getByTitle() - using the title attribute
// 8. getByTestId()

export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Birta"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kindom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
