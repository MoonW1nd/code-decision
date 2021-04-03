import React from "react";
import { shallow } from "enzyme";

import App from "../layout/App";

it("renders without crashing", () => {
  const wrapperApp = shallow(<App />);

  expect(wrapperApp).toMatchSnapshot();
});
