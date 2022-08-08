/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-07-25 16:26:05
 * @LastEditTime: 2022-07-28 15:09:20
 */
import useLocale from '@/utils/useLocale';
import { Button, Form, Input, Space } from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { useRef, useState } from 'react';
import { login as loginApi } from '../../api/user';
import locale from './locale';
import styles from './style/index.module.less';

export default function LoginForm() {
  const formRef = useRef<FormInstance>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const t = useLocale(locale);

  function afterLoginSuccess({ token }) {
    // 记录登录状态 缓存token
    localStorage.setItem('token', token);
    // 跳转首页
    window.location.href = '/';
  }

  async function login(params) {
    setErrorMessage('');
    setLoading(true);
    loginApi(params)
      .then((res) => {
        const { data, code, msg } = res;
        if (code === 0) {
          afterLoginSuccess(data);
        } else {
          setErrorMessage(msg || t['login.form.login.errMsg']);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      login(values);
    });
  }

  return (
    <div className={styles['login-form-wrapper']}>
      <div className={styles['login-form-title']}>{t['login.form.title']}</div>
      <div className={styles['login-form-sub-title']}>
        {t['login.form.title']}
      </div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form
        className={styles['login-form']}
        layout="vertical"
        ref={formRef}
        initialValues={{ username: 'admin', password: 'admin' }}
      >
        <Form.Item
          field="username"
          rules={[{ required: true, message: t['login.form.username.errMsg'] }]}
        >
          <Input
            prefix={<IconUser />}
            placeholder={t['login.form.username.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Form.Item
          field="password"
          rules={[{ required: true, message: t['login.form.password.errMsg'] }]}
        >
          <Input.Password
            prefix={<IconLock />}
            placeholder={t['login.form.password.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Space size={16} direction="vertical">
          <Button type="primary" long onClick={onSubmitClick} loading={loading}>
            {t['login.form.login']}
          </Button>
          <Button
            type="text"
            long
            className={styles['login-form-register-btn']}
          >
            {t['login.form.register']}
          </Button>
        </Space>
      </Form>
    </div>
  );
}
