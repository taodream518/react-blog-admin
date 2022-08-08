/*
 * @Descripttion:
 * @Author: Coder-Tao
 * @Date: 2022-07-25 16:26:05
 * @LastEditTime: 2022-07-29 14:27:08
 */
import React from 'react';
import { Carousel } from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/index.module.less';

export default function LoginBanner() {
  const t = useLocale(locale);
  const data = [
    {
      slogan: t['login.banner.slogan1'],
      subSlogan: t['login.banner.subSlogan1'],
      image: 'https://www.dmoe.cc/random.php',
    },
    {
      slogan: t['login.banner.slogan2'],
      subSlogan: t['login.banner.subSlogan2'],
      image: 'https://img.paulzzh.com/touhou/random',
    },
    {
      slogan: t['login.banner.slogan3'],
      subSlogan: t['login.banner.subSlogan3'],
      image: 'https://api.lyiqk.cn/acg',
    },
  ];
  return (
    <Carousel className={styles.carousel} animation="fade">
      {data.map((item, index) => (
        <div key={`${index}`}>
          <div className={styles['carousel-item']}>
            <div className={styles['carousel-title']}>{item.slogan}</div>
            <div className={styles['carousel-sub-title']}>{item.subSlogan}</div>
            <img
              alt="banner-image"
              className={styles['carousel-image']}
              src={item.image}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
