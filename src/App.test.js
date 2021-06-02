import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new EnzymeAdapter() });
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("shallow testing App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
