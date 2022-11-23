/**
 * 此处可直接引用自己项目封装好的 axios 配合后端联调
 */
import http from "@/api";

//获取验证图片  以及token
export function reqGet(data: object) {
	return http.get("/code", data);
}

//滑动或者点选验证
export function reqCheck(data: object) {
	return http.post("/code/check", data);
}
