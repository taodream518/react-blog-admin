/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-07-25 16:26:05
 * @LastEditTime: 2022-07-27 15:10:06
 */
export default (config: { mock?: boolean; setup: () => void }) => {
  const { mock = process.env.NODE_ENV === 'development', setup } = config;
  if (mock === false) return;
  // setup();
};
