import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../AppRouter';
import { UserContext } from '../UserContext';

describe('Testing <AppRouter /> component.', () => {
  const user = {
    id: '007',
    name: 'Rodwyn Moreno',
    email: 'rodwynmoreno@gmail.com'
  };
  const wrapper = mount(
  <UserContext.Provider value={{
    user
  }}>
    <AppRouter />
  </UserContext.Provider>)
  test('should ', () => {
    
  });
});