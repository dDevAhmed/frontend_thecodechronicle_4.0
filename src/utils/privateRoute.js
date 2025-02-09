// might consider different users private routes (admin, user)
const privateRoutes = ['saved', 'account'];

export const privateRoute = (currentRoute) => {
    return privateRoutes.includes(currentRoute) || false;

    // if (privateRoutes.includes(currentRoute)) {
    //     return true
    // }
};
