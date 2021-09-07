import { useState } from 'react'

export const useLocalStorage = (key, initValue) => {
  const [ storedValue, setStoredValue ] = useState(() => {
    try {
      const ITEM = localStorage.getItem(key)
      return ITEM !== null ? JSON.parse(ITEM) : initValue
    } catch (error) {
      return initValue
    }
  })

  const setLocalStorage = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [ storedValue, setLocalStorage ]
}
