/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: '線上客服',
            img: 'dist/images/1.jpg'
        },
        guest: {
            name: 'guest',
            img: 'dist/images/2.png'
        },
        // 会话列表
        sessions: [{
            id: 1,
            messages: [{
                    content: '您好，我是智能機器人Rose，請您簡單完整描述您的問題，我們將立即為您服務，例：機場停車預約方式。',
                    date: now
                },
                {
                    content: 'assdxxxxxxx。',
                    date: now
                }
            ]
        }],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {
        INIT_DATA(state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        // 回覆
        REPLY_MESSAGE({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            setTimeout(function() {
                session.messages.push({
                    content: `信用卡各卡權益說明：
                              XX銀行推出多樣的信用卡，請參閱本行官網，選擇您的最佳信用卡，謝謝。
                              ※欲知更多詳細資訊請`,
                    date: new Date(),
                    self: false
                });
            }, 1000)
        },
        // 发送消息
        SEND_MESSAGE({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        // 选择会话
        SELECT_SESSION(state, id) {
            state.currentSessionId = id;
        },
        // 搜尋
        SET_FILTER_KEY(state, value) {
            state.filterKey = value;
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    }, {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value),
    reply: ({ dispatch }, content) => dispatch('REPLY_MESSAGE', content)
};