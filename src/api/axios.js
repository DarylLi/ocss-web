import axios from 'axios';
import store from 'store';
export function _axios(options, blocked = true) {
    // let blocked=blocked?blocked:true;
    // console.log(blocked)
    return new Promise((resolve, reject) => {
        // store.dispatch('setError', []);
        const instance = axios.create({
            // headers: {"Content-Security-Policy":"upgrade-insecure-requests"},
            headers: {"authorization":"bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWhhb3RpYW4iLCJ1aWQiOjEyNCwiY3JlYXRlZCI6MTU1ODQ5NzMzMDA0OCwidGVuYW50SWQiOiJsaWhhb3RpYW4iLCJleHAiOjE1NTg3NTY1MzB9.maXDlVaDQi_KKbTnYrA_B1MCWh9utLnfzkqY-IwgbLTEocs8z1-LdSGDOpuv89lvIwHaOSlajLils0dZzRCd_A"},
            timeout: 20000 // 超时
        });
        // mApp.blockPage();
        if (blocked)
            // store.commit('SET_BLOCKED', true);
        instance(options)
            .then(response => {
                const res = response.data;
                resolve(res);
                // mApp.unblockPage();
                store.commit('SET_PAGE_LOADED', true);
            })
            .catch(error => {
                store.commit('SET_PAGE_LOADED', true);
                // mApp.unblockPage();
                // Message({
                //     message: error.response.data,
                //     type: 'error',
                //     duration: 5 * 1000
                // });
                // if (error.response && error.response.data.data && options.url.indexOf('/user/allUser') < 0) {
                //     if (error.response.data.data[0]) {
                //         if (error.response.data.data[0].nodesName.some((node) => node === "publicError")) {
                //             // if (env != 'dev' && !log) Message({
                //             if (true) {
                //                 if (error.response.data.data[0].errorPath != 'exception.loanOrderService.invalid_order_id')
                //                     Message({
                //                         message: error.response.data.data[0].errorMessage,
                //                         type: 'error',
                //                         duration: 1 * 1000
                //                     });
                //                 if (log) {
                //                     // errLogStore.state.errLog=;
                //                     store.commit('setErrorList', error.response.data.data[0])
                //                     store.commit('setCheckerShow', true)
                //                 }
                //             } else Message({
                //                 type: 'error',
                //                 dangerouslyUseHTMLString: true,
                //                 message: '<textarea cols="80" rows="30">' + formatJson(JSON.stringify(error.response.data.data[0].errorStack)) + '</textarea>',
                //                 duration: 0,
                //                 showClose: true
                //             });
                //         }
                //     }
                //     store.dispatch('setError', error.response.data);
                //     if (error.response.data.data[0] && error.response.data.data[0].errorMessage === "exception.system.need_login" || error.response.data[0] && error.response.data[0].errorMessage === "exception.system.need_login") {
                //         store.dispatch('LogOut').then(() => {
                //             // this.$router.push({ path: '/login' })
                //             // window.location.href="/#/login"
                //             router.push({ path: '/login' })
                //         });
                //     }
                // } else {
                //     options.url.indexOf('/user/allUser') < 0 ? Message({
                //         // message: '请求超时,请刷新页面重试,或联系程序员',
                //         message: '服务器错误',
                //         type: 'error',
                //         duration: 1 * 1000
                //     }) : '';
                // }
                reject(error);
            });
    });
}