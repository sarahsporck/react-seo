import React, { ReactElement, ReactNode, createContext } from 'react'

const SeoContext = createContext<any>({})
export const SeoConsumer = SeoContext.Consumer

type SeoProviderProps = {
  children: ReactNode
}

const SeoProvider = ({ children }: SeoProviderProps): ReactElement => {
  return <SeoContext.Provider value={{}}>{children}</SeoContext.Provider>
}

export default SeoProvider
