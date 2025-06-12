"use client";

import { createContext, useContext, useState } from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup,} from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";




// Crear el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuthContext = () => useContext(AuthContext);

// Proveedor del contexto de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isAuthenticated: false,
    email: null,
    uid: null,
  });

  // Función para iniciar sesión
  const login = async (email, password) => {
  try {
    console.log("Intentando login con", email, password);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login exitoso:", userCredential.user);

    setUser({
      isAuthenticated: true,
      email: userCredential.user.email,
      uid: userCredential.user.uid,
    });

    return { success: true };
  } catch (error) {
    console.error("Error al iniciar sesión:", error.code, error.message);
    return { success: false, error };
  }
};


  // Función para registrar un nuevo usuario
  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setUser({
        isAuthenticated: true,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
  try {
    await auth.signOut();
    setUser({
      isAuthenticated: false,
      email: null,
      uid: null,
    });
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};


  // Función para iniciar sesión con Google
  const loginWithGoogle = async (provider) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setUser({
        isAuthenticated: true,
        email: user.email,
        uid: user.uid,
      });
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
