export const cleanUserData = (obj) => {
    const { uid, email } = obj;
    return { uid, email }
};