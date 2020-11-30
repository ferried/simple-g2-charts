// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import YzAreaChart from "./YzAreaChart";
import { YzAreaChartProps } from "./YzAreaChart.types";

describe("Test Component", () => {
  let props: YzAreaChartProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<YzAreaChart {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("YzAreaChart");

    expect(component).toHaveTextContent("harvey was here");
  });
});
