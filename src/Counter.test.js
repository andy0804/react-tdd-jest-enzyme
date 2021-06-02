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

test("check whether decrement button exists", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});
test(" when you click the  decrement button it decrements  counter", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  decrementButton.simulate("click");
  const countDisplayAfterDecrement = findByTestAttr(wrapper, "count").text();
  expect(countDisplayAfterDecrement).toBe("0");
});
test("don't decrement the counter when the counter is zero", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const countDisplayAfterDecrement = findByTestAttr(wrapper, "count").text();
  expect(countDisplayAfterDecrement).toBe("0");
});
test("should show error message to user if user tries to decrment when count is 0", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const errorComponent = findByTestAttr(wrapper, "error-message");
  expect(errorComponent.length).toBe(1);
});
test("should hide  error message  after the user increments the counter after decrementing when 0", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const errorComponent = findByTestAttr(wrapper, "error-message");
  expect(errorComponent.length).toBe(0);
});
test("testing if the error message has class danger", () => {
  // find and click the increment button
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  // check the class of the error message
  const errorDiv = findByTestAttr(wrapper, "error-message");
  const errorHasHiddenClass = errorDiv.hasClass("danger");
  expect(errorHasHiddenClass).toBe(true);
});
