import { create } from 'zustand'
type AuthStore = {
    isLoggingIn:boolean,
    isSigningUp:boolean
} 
export const useAuthStore = create<AuthStore>((get,set)=>({
     isLoggingIn:false,
     isSigningUp:false
}))