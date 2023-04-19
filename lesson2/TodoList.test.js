import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "./TodoList";
import "jest-enzyme";

configure({ adapter: new Adapter() });

describe("TodoList component", () => {
  describe("When provided with an empty list of tasks", () => {
    it("contains an empty <ul> element", () => {
      const todoList = shallow(<TodoList tasks={[]} />);
      expect(todoList).toContainReact(<ul />);
    });

    it("does not contain any <li> element", () => {
      const todoList = shallow(<TodoList tasks={[]} />);
      expect(todoList.find("li").length).toEqual(0);
    });
  });

  describe("when provided with an array of tasks", () => {
    it("contains a matching number of <li> elements", () => {
      const tasks = ["Wash plates", "Make bed"];
      const todoList = shallow(<TodoList tasks={tasks} />);
      expect(todoList.find("li").length).toEqual(tasks.length);
    });
  });
});
