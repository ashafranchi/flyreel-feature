import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests"
import CardContainer from './CardContainer';

describe("CardContainer", () => {
  it("should render the card container", () => {
    const wrapper = shallow(<CardContainer />);
  });
});