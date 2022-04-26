import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> Function", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".numOfEvents")).toHaveLength(1);
  });

  test("check default number of events is 32", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("change in default value of number of events", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32,
    });
    const eventObject = { target: { value: 50 } };
    NumberOfEventsWrapper.find(".numOfEvents").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(50);
  });
});
