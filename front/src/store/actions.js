import {
	fetchDateList,
	fetchWhereDateList,
	fetchDateListWrite,
	fetchDateListUpdate,
	fetchDateListDelete,
} from '../api';

export default {
	FETCH_DATE_LIST({ commit }) {
		return fetchDateList()
			.then(({ data }) => {
				commit('SET_DATE_LIST', data);
			})
			.catch((err) => console.error(err));
	},
	// FETCH_WHERE_DATE_LIST({ commit }, payload) {
	// 	return  fetchWhereDateList(payload)
	// 		.then(({ data }) => {
	// 			commit('SET_WHERE_DATE_LIST', data);
	// 		})
	// 		.catch((err) => console.error(err));
	// },

	async FETCH_WHERE_DATE_LIST({ commit }, payload) {
		const response = await fetchWhereDateList(payload);
		commit('SET_WHERE_DATE_LIST', response.data);
		return response;
	},
};
