import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Auth } from "../config/FirebaseAPI";
import { showMessage } from "react-native-flash-message";

// Validate Inputs
const validateInputs = async (email, password, name = null) => {
    if (name !== null && !name.trim()) {
      showMessage({ message: "Nama pengguna diperlukan", type: 'danger' });
      return false;
    }
    if (!email.trim()) {
      showMessage({ message: "Email diperlukan", type: 'danger' });
      return false;
    }
    if (!password.trim()) {
      showMessage({ message: "Password diperlukan", type: 'danger' });
      return false;
    }
    return true;
};

  
// SignUp
const AuthSignUp = async (name, email, password) => {
    const isValid = await validateInputs(email, password, name);
    if (!isValid) return;

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
        const user = userCredential.user;

        // Set display name in Firebase Auth
        await updateProfile(user, { displayName: name });

        await signOut(Auth);
        showMessage({
            message: 'SignUp Berhasil',
            type: 'success'
        });
    }
    catch (error) {
        ErrorHandler(error)
    }
};


// SignOut
const AuthSignOut = async () => {
    try {
        await signOut(Auth);
        showMessage({
            message: 'User Signed-Out Successfully',
            type: 'success'
        });
    } catch (error) {
        ErrorHandler(error)
    }
}

/* Error Handler */
const ErrorHandler = (error) => {
    let ErrorMessage = ''
    switch(error.code){
      case 'auth/invalid-email':
        ErrorMessage = "Format Email salah";
        break;
      case 'auth/email-already-in-use':
        ErrorMessage = "Email sudah dipakai";
        break;
      case 'auth/missing-password':
        ErrorMessage = "Password tidak boleh kosong"
        break
      case 'auth/weak-password':
        ErrorMessage = "Password harus lebih dari 6 kata";
        break;
      case 'auth/invalid-credential':
        ErrorMessage = "Email atau Password salah";
        break;
      default:
        ErrorMessage = "Terjadi kesalahan" ;
        break;
    }
    showMessage({ message: ErrorMessage, type: 'danger' });
    console.log(error.message)
}

export { AuthSignUp, AuthSignOut };