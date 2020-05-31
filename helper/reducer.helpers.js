export const cleanUserData = (obj) => {
    const { id, email, username } = obj;
    return {id, email, username, isAdmin }
};