import React, { createContext, useContext } from 'react';

const SecurityContext = createContext({ username: "", permissions: []})

const ControlsComponent = (props) => (
  <SecurityContext.Provider value={{ username: props.username }}>
    <LogoutWrapper />
  </SecurityContext.Provider>
);

const LogoutWrapper = (props) => {
  const context = useContext(SecurityContext);
  const contextAnother = useContext(SecurityContext);

  return (
    <div>
      <p>{context.username}</p>
      <p>{contextAnother.username}</p>
      <button>Click here to log out</button>
    </div>
  )
};

export default ControlsComponent;
