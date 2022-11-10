import React from "react";

export const ColorModeContext = React.createContext({
  mode: "light"
})

export default function ColorModeProvider({children}){
  return(
    <ColorModeContext.Provider>
      {children}
    </ColorModeContext.Provider>
  )
}