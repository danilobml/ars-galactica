
export const checkLogin = (auth) => {
    {
        const user = JSON.parse(localStorage.getItem('ARS_GALACTICA_USER'))
        if(user) {
            auth.value.isAuthenticated = true
        }
    }
}