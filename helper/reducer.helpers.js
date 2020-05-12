export const cleanUserData = (obj) => {
    const { uid, email, emailVerified, displayName } = obj;
    return { uid, email, emailVerified, displayName }
};