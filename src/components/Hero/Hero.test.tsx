import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from './';
import { SearchBar } from '../SearchBar';

describe('<Hero />', () => {
  it('renders title with valid text', () => {
    const wrapper = shallow(<Hero />);
    const title = wrapper.find('.c-hero__title');

    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('17 jobs Live');
  });

  it('renders <SearchBar />', () => {
    const wrapper = shallow(<Hero />);
    const searchBar = wrapper.find(SearchBar);

    expect(searchBar.exists()).toBe(true);
  });
});
