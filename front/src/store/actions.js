import {
	fetchDateList,
	fetchWhereDateList,
	fetchDateListWrite,
	fetchDateListUpdate,
	fetchDateListDelete,
} from '../api';

export default {
	FETCH_DATE_LIST({ commit }) {
		fetchDateList()
			.then(({ data }) => {
				commit('SET_DATE_LIST', data);
			})
			.catch((err) => console.error(err));
	},
	FETCH_WHERE_DATE_LIST({ commit }, payload) {
		fetchWhereDateList(payload)
			.then(({ data }) => {
				commit('SET_WHERE_DATE_LIST', data);
			})
			.catch((err) => console.error(err));
	},
};
