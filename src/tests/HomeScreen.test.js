import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../HomeScreen';
import { UserContext } from '../UserContext';

describe('Testing <HomeScreen /> component.', () => {
  const user = {
    id: '007',
    name: 'Rodwyn Moreno',
    email: 'rodwynmoreno@gmail.com'
  };
  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  
  );

  test('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});