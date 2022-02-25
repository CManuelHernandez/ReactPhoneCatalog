import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { PhonesPage } from "../components/phones/PhonesPage";

describe("PhonesPage is render", () => {
  test("should return true", () => {
    render(<PhonesPage />);
    const title = screen.getByText("Carlos Manuel Hernández Montero");
    expect(title).toBeInTheDocument();
  });
});

describe("Test on <PhonesPage />", () => {
  test("snapshot testing", () => {
    const tree = renderer.create(<PhonesPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
