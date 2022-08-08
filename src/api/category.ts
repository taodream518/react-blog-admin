/*
 * @Descripttion: 文章分类Api
 * @Author: Coder-Tao
 * @Date: 2022-07-26 16:52:37
 * @LastEditTime: 2022-07-29 10:15:06
 */
import { request, QueryPagination, ListData, ApiBody } from './request';

// 列表查询条件
export interface QueryListCondition extends QueryPagination {
  name?: string;
}

// 分类数据类型声明
export interface CategoryRecord {
  id: number;
  name: string;
}

// 分类列表
export function list(
  params: QueryListCondition
): Promise<ApiBody<ListData<any>>> {
  return request({
    url: '/category',
    method: 'GET',
    params,
  });
}

// 新增分类
export async function create(data: Omit<CategoryRecord, 'id'>) {
  return request({
    url: '/category',
    method: 'POST',
    data,
  });
}

// 修改分类
export async function update(data: CategoryRecord) {
  return request({
    url: `/category`,
    method: 'PUT',
    data,
  });
}

// 删除分类
export async function remove(id: number) {
  return request({
    url: `/category/${id}`,
    method: 'DELETE',
  });
}
