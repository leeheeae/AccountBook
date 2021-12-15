import axios from 'axios';

const config = {
	baseUrl: 'http://localhost:3000/',
};

//전체 리스트 불러오기
function fetchDateList() {
	return axios.get(`${config.baseUrl}list`);
}

//http://localhost:3000/list/date?date=2021-12-16
//특정 일에 맞는 리스트 불러오기
function fetchWhereDateList(date) {
	return axios.get(`${config.baseUrl}list/date?date=${date}`);
}

//리스트 쓰기
function fetchDateListWrite() {
	return axios.post(`${config.baseUrl}list`);
}

//수정하기
function fetchDateListUpdate(id) {
	return axios.put(`${config.baseUrl}list/${id}`);
}

//삭제하기
function fetchDateListDelete(id) {
	return axios.delete(`${config.baseUrl}list/${id}`);
}

export {
	fetchDateList,
	fetchWhereDateList,
	fetchDateListWrite,
	fetchDateListUpdate,
	fetchDateListDelete,
};
