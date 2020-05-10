import { auth, firestore, functions } from './firebase';

const addUserType = functions.httpsCallable('setAccountType');

export const loginUser = async (email, password, type) => {
    try {
        const querySnapshot = await firestore.collection(type).where("email", "==", email).get();
        if (querySnapshot.size < 1) {
            throw new Error('User either doesn"t exist or change your login type')
        }
        return await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        return ({ error: error.message })
    }
};


export const registerNewUser = async (obj, type) => {
    try {
        const { email, password, mobile } = obj;
        delete obj.password;
        delete obj.cpassword;
        const userAuth = await auth.createUserWithEmailAndPassword(email, password)
        const result = await addUserType({ email, type });
        const manageUser = await auth.currentUser;
        await manageUser.sendEmailVerification();
        await manageUser.updateProfile({
            displayName: obj.displayName,
            photoURL: "https://firebasestorage.googleapis.com/v0/b/x-app-bef0a.appspot.com/o/utils%2Fimages%2Favatar.png?alt=media&token=e7deb4ec-50e4-4731-88d4-192afbaa887e",
            phoneNumber: mobile,
            userType: type
        });
        await saveUserDetails(obj, type, userAuth.user.uid)
        await auth.signOut();
        return true
    } catch (error) {
        return ({ error: error.message })
    }
}

export const saveUserDetails = async (obj, type, userId) => {
    try {
        const userRef = firestore.doc(`${type}/${userId}`);
        const snapShot = await userRef.get();
        if (!snapShot.exists) {
            const createdAt = new Date();
            await userRef.set({
                ...obj,
                createdAt,
            });
            return true;
        }
        return false;
    } catch (error) {
        return ({ error: error.message })
    }
}


export const verifyUserAccount = async () => {
    try {
        const manageUser = await auth.currentUser;
        await manageUser.sendEmailVerification();
        return true;
    } catch (error) {
        return ({ error: error.message })
    }
}

