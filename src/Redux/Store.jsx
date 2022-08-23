import { createStore } from 'redux'

const authState = {
    auth: {
        isAuth: false,
    }
}
console.log("authState", authState);

const data = {
    name: "Muhammad Iqbal",
    img: "https://www.freepnglogos.com/uploads/avengers-png/avengers-png-transparent-avengers-Images-pluspng-6.png"
}

const authReducer = (state = data) => {
    return state;
}


export const store = createStore(authReducer)


export default store;