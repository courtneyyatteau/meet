import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render an event", () => {
    expect(EventWrapper.find(".kind")).toHaveLength(1);
  });

  test("render the summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("render the location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("details collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
  test("render show details button", () => {
    expect(EventWrapper.find(".showDetails")).toHaveLength(1);
  });

  test("open details when show details button is clicked", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".showDetails").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("hide details when hide details button is clicked", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hideDetails").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
