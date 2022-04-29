import create from 'zustand';

const useStore = create((set) => ({
  state: true,
  toggle: () => set({ state: false }),
}));

export default useStore;
