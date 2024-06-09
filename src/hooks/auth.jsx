import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';
import { Await } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Error SignIn")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketMovies:token");
        localStorage.removeItem("@rocketMovies:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {

            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));

            setData({ user, token: data.token })
            alert("Profile successfully updated")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Error update profile")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketMovies:token");
        const user = localStorage.getItem("@rocketMovies:user");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };