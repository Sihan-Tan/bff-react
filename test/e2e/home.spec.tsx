import React from "react";
// react-test-renderer && enzyme
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeIndex from "@components/home/Index";

afterEach(cleanup);
describe("基础React单元测试", () => {
  test("index组件测试", () => {
    const { container, getByText } = render(<HomeIndex title="sa" />);
    expect(getByText("我以我血荐轩辕")).toBeInTheDocument();
  });
});
