import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should Match snapShot", () => {
    const tree = render(<App/>);
    expect(tree).toMatchSnapshot();
  });
});
