import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../LoginScreen';
import { UserContext } from '../UserContext';

describe('Testing <LoginScreen /> component.', () => {
  const setUser = jest.fn();
  const wrapper =  mount(
  <UserContext.Provider value={{
    setUser
  }}>
    <LoginScreen />);
  </UserContext.Provider>);

  test('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });


  test('should execute setuser function.', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({
      id: '007',
      name: 'Rodwyn Moreno',
      email: 'rodwynmoreno@gmail.com'
    });
  });
});