import { create } from "zustand";

type ThemeStore = {
    isDark:boolean,
    toggleDark: () => void
}
export const useThemeStore = create<ThemeStore>((set)=>({
        isDark: localStorage.getItem('isDark') === "true",
        toggleDark: ()=>set((state)=>{
            const newValue = !state.isDark
            localStorage.setItem("isDark",String(newValue))
            return { isDark:newValue }
        })

}))