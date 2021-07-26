import "./setupTests"
import App from './App';
import CardContainer from './CardContainer';

import { shallow, mount, render } from 'enzyme';

describe("CardContainer", () => {
  it("CardContainer should render CardContainer", () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});