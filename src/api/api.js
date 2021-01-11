import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '2f779481-db2c-495a-9bc1-00ac4d4dad77'
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`)
				.then(response => {
					return response.data
				})
		)
	},
	follow(userId) {
		return (
			instance.post(`follow/${userId}`)
		)
	},
	unfollow(userId) {
		return (
			instance.delete(`follow/${userId}`)
		)
	},
	getFriends() {
		return (
			instance.get(`users`)
				.then(response => {
					return response.data
				})
		)
	},
}

export const profileAPI = {
	getUserProfile(id) {
		return (
			instance.get(`profile/${id}`)
				.then(response => {
					return response.data
				})
		)
	},
	getStatus(id) {
		return (
			instance.get(`profile/status/${id}`)
				.then(response => {
					return response.data
				})
		)
	},
	updateStatus(status) {
		return (
			instance.put(`profile/status`, { status: status })
		)
	},
	uploadAvatar(file) {
		const formData = new FormData()
		formData.append('image', file)
		return (
			instance.put(`profile/photo`, formData)
		)
	},
	updateProfile(profile) {
		return (
			instance.put(`profile`, profile)
		)
	}
}

export const authAPI = {
	me() {
		return (
			instance.get(`auth/me`)
				.then(response => {
					return response.data
				})
		)
	},
	login(email, password, remember = false, captcha = null) {
		return (
			instance.post(`auth/login`, {email, password, remember, captcha})
		)
	},
	logout() {
		return (
			instance.delete(`auth/login`)
		)
	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return (
			instance.get(`security/get-captcha-url`)
		)
	}
}
