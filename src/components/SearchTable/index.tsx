/*
 * @Descripttion: 二次封装表格
 * @Author: Coder-Tao
 * @Date: 2022-07-29 09:43:30
 * @LastEditTime: 2022-07-29 16:11:09
 */

import React, { CSSProperties } from 'react';
import { Table } from '@arco-design/web-react';
import styles from './style/index.module.less';
import cs from 'classnames';

interface SearchTableProps {
  className?: string;
  style?: CSSProperties;
  colunms?: any[]; // 表格列数据
}

function SearchTable(props: SearchTableProps) {
  const { className, style, colunms } = props;
  return <Table columns={colunms} />;
}

export default SearchTable;
