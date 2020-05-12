import { firestore, auth } from '../firebase/firebase';


export const getProfile = async (id, type) => {
    const userRef = await firestore.collection(type).doc(params.id);
    const user = await userRef.get();
    if (user.exists) {
        return { ...user.data(), id }
    } else {
        return null;
    }
};
