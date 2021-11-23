import { createContext, useState } from 'react';

const SidebarVisibilityContext = createContext();

// named export
export function SidebarVisibilityContextProvider({children}) {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

// this can be done directly with setter funcn but we're using this to make it look clean
  function toggleSidebarVisibility() {
    setSidebarVisibility((prevState) => prevState ? false : true );
  }

  return (
    <SidebarVisibilityContext.Provider value={[sidebarVisibility, setSidebarVisibility, toggleSidebarVisibility]}>
      {children}
    </SidebarVisibilityContext.Provider>
  );
}

// default export
export default SidebarVisibilityContext;