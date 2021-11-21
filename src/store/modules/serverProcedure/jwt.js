import jwt_decode from "jwt-decode";
import router from '../../../router/index'
const URL_LOGIN = '/api/auth/login/'
const URL_REFRESH = '/api/auth/refresh/'

async function Login(pair) {
    return fetch(URL_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pair)
    }).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            let error = new Error(res.statusText);
            error.response = res;
            throw error
        }
    }).catch((e) => {
        console.log(e)
        return { error: true, text: e }
    });
}

async function RefreshToken(ctx) {
    const userLocalStorage = JSON.parse(localStorage.getItem("YENISEI_AUTH"));
    if (userLocalStorage) {
        const query = fetch(URL_REFRESH, { method: 'POST', body: JSON.stringify({ refreshToken: userLocalStorage.refreshToken }), headers: { 'Content-Type': 'application/json' }, })
        query.then(res => {
            if (res.ok) {
                res.json().then(json => {
                    const decoded = jwt_decode(
                        json.accessToken
                    );
                    const user = {
                        id: decoded.id,
                        role: decoded.role,
                        name: userLocalStorage.name,
                        accessToken: json.accessToken,
                        refreshToken: json.refreshToken
                    }
                    localStorage.setItem("YENISEI_AUTH", JSON.stringify(user));
                    ctx.commit('updateUser', user)
                })
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                throw error
            }
        }).catch((text) => {
            router.push("/")
            localStorage.removeItem("YENISEI_AUTH")
            ctx.dispatch("DisplayMessage", `login ${text}`);
        });
    }
}


export { RefreshToken, Login }