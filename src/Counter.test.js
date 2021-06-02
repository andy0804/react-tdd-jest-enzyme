import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new EnzymeAdapter() });
import Counter from "./Counter";
/**
 * Factory function to create a shallow wrapper for the Counter component
 * @function setup
 * @returns shallow wrapper
 */

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
const setup = () => shallow(<Counter />);
test("renders  Counter Component", () => {
  const wrapper = setup();
  const counterComponent = findByTestAttr(wrapper, "component-app");
  //   const counterComponent = wrapper.find("#counterDiv");
  expect(counterComponent.length).toBe(1);
});
test("renders Increment Button ", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});
test("renders Counter Display ", () => {
  const wrapper = setup();
  const countDisplay = findByTestAttr(wrapper, "counter-display");
  expect(countDisplay.length).toBe(1);
});
test("Counter display starts out at zero", () => {
  const wrapper = setup();
  const countDisplayInitial = findByTestAttr(wrapper, "count").text();
  expect(countDisplayInitial).toBe("0");
});
test(" when you click the button it increments  counter", () => {
  const wrapper = setup();
  // find the button
  const incrementButton = findByTestAttr(wrapper, "increment-button");

  // click the button
  incrementButton.simulate("click");
  //check the count
  const countDisplayInitial = findByTestAttr(wrapper, "count").text();
  expect(countDisplayInitial).toBe("1");
});
