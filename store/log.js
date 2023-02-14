import { create } from 'zustand'

export const useLogStore = create((set, get) => ({
  logs: [],
  updateLog: (log) => {
    const prevLogs = get().logs
    const updatedLogs = [log, ...prevLogs]
    set({ logs: updatedLogs })
  },
}))
