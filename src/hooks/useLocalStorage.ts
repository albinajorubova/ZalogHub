import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  isValid?: (value: unknown) => value is T,
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw === null) return initialValue

      const parsed: unknown = JSON.parse(raw)
      if (isValid && !isValid(parsed)) return initialValue

      return parsed as T
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage can be unavailable or full; keep the in-memory state usable.
    }
  }, [key, value])

  return [value, setValue] as const
}
