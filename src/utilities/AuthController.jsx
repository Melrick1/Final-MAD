import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Auth } from "../config/FirebaseAPI";
import { showMessage } from "react-native-flash-message";

{/* SignUp */}
const AuthSignUp = async (name, email, password) => {
    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
        const user = userCredential.user;

        // Set display name in Firebase Auth
        await updateProfile(user, { displayName: name });

        await signOut(Auth);
        showMessage({message: 'SignUp Berhasil'});
    }
    catch (error) {
        showMessage(error);
    }
};


export { AuthSignUp };