import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("app component", () => {
  it("contains a header with the 'Hello world!'", () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<h1>Hello world!</h1>)).toEqual(true);
  });
});
