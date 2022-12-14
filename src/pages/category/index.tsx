import { Button, Message, Popconfirm } from '@arco-design/web-react';
import React from 'react';
import SearchTable from '@/components/SearchTable';
import locale from './locale';
// import {
//   Table,
//   Button,
//   Input,
//   Breadcrumb,
//   Card,
//   Modal,
//   Form,
//   Message,
//   Popconfirm,
// } from '@arco-design/web-react';
// import { useSelector, useDispatch } from 'react-redux';

// import {
//   TOGGLE_CONFIRM_LOADING,
//   TOGGLE_VISIBLE,
//   UPDATE_FORM_PARAMS,
//   UPDATE_LIST,
//   UPDATE_LOADING,
//   UPDATE_PAGINATION,
// } from './redux/actionTypes';
// import useLocale from '../../utils/useLocale';
// import { ReducerState } from '../../redux';
import styles from './style/index.module.less';
import { remove } from '@/api/category';
import useLocale from '@/utils/useLocale';
// import { list } from '../../api/category';
// import { EditableCell, EditableRow } from './edit';

// const formItemLayout = {
//   labelCol: {
//     span: 5,
//   },
//   wrapperCol: {
//     span: 19,
//   },
// };

// export default function Category() {
// const locale = useLocale();
//   const [form] = Form.useForm();
//   const dispatch = useDispatch();

//   const categoriesState = useSelector(
//     (state: ReducerState) => state.categories
//   );

//   const { data, pagination, loading, formParams, visible, confirmLoading } =
//     categoriesState;

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData(current = 1, pageSize = 20, params = {}) {
//     dispatch({ type: UPDATE_LOADING, payload: { loading: true } });
//     try {
//       const postData = {
//         page: current,
//         pageSize,
//         ...params,
//       };
//       console.log(postData);
//       const res: any = await list(postData);
//       console.log(res);
//       if (res) {
//         dispatch({ type: UPDATE_LIST, payload: { data: res.data.list } });
//         dispatch({
//           type: UPDATE_PAGINATION,
//           payload: {
//             pagination: {
//               ...pagination,
//               current,
//               pageSize,
//               total: res.data.totalCount,
//             },
//           },
//         });
//         dispatch({ type: UPDATE_LOADING, payload: { loading: false } });
//         dispatch({ type: UPDATE_FORM_PARAMS, payload: { params } });
//       }
//     } catch (error) {}
//   }

//   function onChangeTable(pagination) {
//     const { current, pageSize } = pagination;
//     fetchData(current, pageSize, formParams);
//   }

//   function onSearch(name) {
//     fetchData(1, pagination.pageSize, { name });
//   }
//   const onAdd = () => {
//     dispatch({
//       type: TOGGLE_VISIBLE,
//       payload: {
//         visible: true,
//       },
//     });
//   };
//   const onCancel = () => {
//     dispatch({
//       type: TOGGLE_VISIBLE,
//       payload: {
//         visible: false,
//       },
//     });
//     form.resetFields();
//   };
//   const onOk = async () => {
//     await form.validate();
//     const data = form.getFields(); // {name:'123'}
//     dispatch({
//       type: TOGGLE_CONFIRM_LOADING,
//       payload: {
//         confirmLoading: true,
//       },
//     });
//     const res: any = await create(data);
//     if (res.code === 0) {
//       dispatch({
//         type: TOGGLE_CONFIRM_LOADING,
//         payload: {
//           confirmLoading: false,
//         },
//       });
//       onCancel();
//       fetchData();
//       Message.success(res.msg);
//     } else {
//       Message.success('???????????????????????????');
//     }
//   };

//   const onHandleSave = async (row) => {
//     const res: any = await update(row);
//     if (res.code === 0) {
//       Message.success(res.msg);
//       fetchData();
//     } else {
//       Message.error('???????????????????????????');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Breadcrumb style={{ marginBottom: 20 }}>
//         <Breadcrumb.Item>????????????</Breadcrumb.Item>
//       </Breadcrumb>
//       <Card bordered={false}>
//         <div className={styles.toolbar}>
//           <div>
//             <Button onClick={onAdd} type="primary">
//               ????????????
//             </Button>
//           </div>
//           <div>
//             {/* <DatePicker.RangePicker style={{ marginRight: 8 }} onChange={onDateChange} /> */}
//             <Input.Search
//               style={{ width: 300 }}
//               searchButton
//               placeholder="?????????????????????"
//               onSearch={onSearch}
//             />
//           </div>
//         </div>
//         <Table
//           rowKey="_id"
//           loading={loading}
//           onChange={onChangeTable}
//           pagination={pagination}
//           columns={columns.map((column) =>
//             column.editable
//               ? {
//                   ...column,
//                   onCell: () => ({
//                     onHandleSave,
//                   }),
//                 }
//               : column
//           )}
//           data={data}
//           components={{
//             body: {
//               row: EditableRow,
//               cell: EditableCell,
//             },
//           }}
//           className={styles['table-demo-editable-cell']}
//         />

//         <Modal
//           title={<div style={{ textAlign: 'left' }}> ???????????? </div>}
//           visible={visible}
//           onOk={onOk}
//           confirmLoading={confirmLoading}
//           onCancel={onCancel}
//         >
//           <Form {...formItemLayout} form={form}>
//             <Form.Item
//               label="????????????"
//               field="name"
//               rules={[{ required: true, message: '?????????????????????' }]}
//             >
//               <Input placeholder="?????????????????????" />
//             </Form.Item>
//           </Form>
//         </Modal>
//       </Card>
//     </div>
//   );
// }

function Category() {
  const locale = useLocale();
  const columns = [
    {
      title: '????????????',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: '????????????',
      dataIndex: 'articleCount',
    },
    {
      title: '????????????',
      dataIndex: 'createdTime',
    },
    {
      title: '????????????',
      dataIndex: 'updatedTime',
    },

    {
      title: locale['searchTable.columns.operations'],
      dataIndex: 'operations',
      render: (_, record) => (
        <div className={styles.operations}>
          {/* <Button type="text" size="small">
            {locale['searchTable.columns.operations.update']}
          </Button> */}
          <Popconfirm
            title={locale['searchTable.columns.operations.delete.tip']}
            onOk={() => onDelete(record)}
          >
            <Button type="text" status="danger" size="small">
              {locale['searchTable.columns.operations.delete']}
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onDelete = async (row) => {
    const { code, msg } = await remove(row);
    if (code === 0) {
      Message.success(msg);
      // fetchData();
    } else {
      Message.error(msg);
    }
  };

  return <SearchTable colunms={columns} />;
}

export default Category;
