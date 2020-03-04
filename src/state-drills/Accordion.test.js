// You should write at least 4 snapshot tests for the Accordion component:
// The component renders an empty li when the sections prop is not supplied.
// The component renders no sections as active by default.
// The component opens a clicked section.
// The component only opens the last section when multiple sections have been clicked.

import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

describe(`Accordion Component`, () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

  it('renders empty given no sections', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})