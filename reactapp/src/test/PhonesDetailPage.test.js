import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { PhonesDetailPage } from "../components/phones/PhonesDetailPage";

const MockPhonesDetailPage = () => {
  return (
    <BrowserRouter>
      <PhonesDetailPage />
    </BrowserRouter>
  );
};

describe("PhonesDetailPage is render", () => {
  test("should return true", () => {
    render(<MockPhonesDetailPage />);
    const title = screen.getByText("Phone Detail");
    expect(title).toBeInTheDocument();
  });
});

describe("PhonesDetailPage show data from the async call", () => {
  test("should return true", async () => {
    render(<MockPhonesDetailPage />);
    const phonesPageDivElement = await screen.findByTestId("test");
    expect(phonesPageDivElement).toBeInTheDocument();
  });
});

describe("Test on <PhonesDetailPage />", () => {
  test("snapshot testing", () => {
    const tree = renderer.create(<MockPhonesDetailPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
