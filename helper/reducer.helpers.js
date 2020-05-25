export const cleanUserData = (obj) => {
    const { uid, email, emailVerified, displayName, photoUrl } = obj;
    return { uid, email, emailVerified, displayName, photoUrl }
};