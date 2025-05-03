import {create} from "zustand";

interface SidebarVisibility {
    sidebarVisibility:boolean;
    updateSidebarVisibility:() => void;
}
export const useSidebarVisibility = create<SidebarVisibility>()(
    (set) => (
        {
            sidebarVisibility:false,
            updateSidebarVisibility:() => set( (state) => (
                {
                    sidebarVisibility:!state.sidebarVisibility,
                }
            ))
        }
    )
)