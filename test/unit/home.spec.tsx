import React from "react";
// react-test-renderer && enzyme
import { render, cleanup, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeIndex from "@components/home/Index";

afterEach(cleanup);
describe("基础React单元测试", () => {
  test("index组件测试", async () => {
    await waitFor(() => {});
    const { container, getByText } = render(
      <HomeIndex title="sa">测试一波</HomeIndex>
    );
    expect(getByText("测试一波")).toBeInTheDocument();
  });
});
