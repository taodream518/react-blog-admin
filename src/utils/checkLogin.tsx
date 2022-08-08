/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-07-25 16:26:05
 * @LastEditTime: 2022-07-28 14:37:52
 */
export default function checkLogin() {
  return !!localStorage.getItem('token');
}
