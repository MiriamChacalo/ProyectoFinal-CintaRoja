import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import "./auth.css";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebaseApp();
  const user = useUser();

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div>
      {!user && (
        <div className="login-content">
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-btn">
            <button className="btn btn-secondary" onClick={submit}>
              Crear cuenta{" "}
            </button>
            <button className="btn btn-light" onClick={login}>
              Iniciar sesión
            </button>
          </div>
        </div>
      )}
      {user && <button onClick={logout}>Cerrar sesión</button>}
    </div>
  );
};
