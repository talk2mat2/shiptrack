import {createContext} from 'react';

export const UserContext = createContext({
  setUser: (payload: string) => {},
  user: {full_name: ''},
});
