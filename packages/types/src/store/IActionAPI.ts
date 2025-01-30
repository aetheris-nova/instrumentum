import type { StoreApi } from 'zustand';

interface IActionAPI<State> {
  getState: StoreApi<State>['getState'];
  setState: StoreApi<State>['setState'];
}

export default IActionAPI;
