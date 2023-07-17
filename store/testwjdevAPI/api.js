import axios from "axios"
const testwjdevAPI = axios.create({
  baseURL: "https://test-11898-wj-dev-102206.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testwjdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_book_list(payload) {
  return testwjdevAPI.get(`/api/v1/book/`)
}
function api_v1_book_create(payload) {
  return testwjdevAPI.post(`/api/v1/book/`, payload)
}
function api_v1_book_retrieve(payload) {
  return testwjdevAPI.get(`/api/v1/book/${payload.id}/`)
}
function api_v1_book_update(payload) {
  return testwjdevAPI.put(`/api/v1/book/${payload.id}/`, payload)
}
function api_v1_book_partial_update(payload) {
  return testwjdevAPI.patch(`/api/v1/book/${payload.id}/`, payload)
}
function api_v1_book_destroy(payload) {
  return testwjdevAPI.delete(`/api/v1/book/${payload.id}/`)
}
function api_v1_home_list(payload) {
  return testwjdevAPI.get(`/api/v1/home/`)
}
function api_v1_home_create(payload) {
  return testwjdevAPI.post(`/api/v1/home/`, payload)
}
function api_v1_home_retrieve(payload) {
  return testwjdevAPI.get(`/api/v1/home/${payload.id}/`)
}
function api_v1_home_update(payload) {
  return testwjdevAPI.put(`/api/v1/home/${payload.id}/`, payload)
}
function api_v1_home_partial_update(payload) {
  return testwjdevAPI.patch(`/api/v1/home/${payload.id}/`, payload)
}
function api_v1_home_destroy(payload) {
  return testwjdevAPI.delete(`/api/v1/home/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return testwjdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testwjdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return testwjdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return testwjdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testwjdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testwjdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testwjdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testwjdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testwjdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testwjdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testwjdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testwjdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testwjdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_book_list,
  api_v1_book_create,
  api_v1_book_retrieve,
  api_v1_book_update,
  api_v1_book_partial_update,
  api_v1_book_destroy,
  api_v1_home_list,
  api_v1_home_create,
  api_v1_home_retrieve,
  api_v1_home_update,
  api_v1_home_partial_update,
  api_v1_home_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
