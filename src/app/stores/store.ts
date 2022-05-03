import { createContext, useContext } from "react";
import EmployeeStore from "./employeeStore";
import ModalStore from "./modalStore";

interface Store {
     employeeStore: EmployeeStore;
     modalStore: ModalStore;

}

export const store: Store = {
     employeeStore: new EmployeeStore(),
     modalStore: new ModalStore()

}

export const StoreContext = createContext(store);

export function useStore() {
     return useContext(StoreContext);
}