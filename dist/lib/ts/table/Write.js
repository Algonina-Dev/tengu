"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
const string_1 = require("../../../helper/string");
const Write = (params) => {
    const name = params.modul === params.subModul
        ? (0, string_1.ucwords)(params.modul)
        : (0, string_1.ucwords)(params.modul) + (0, string_1.ucwords)(params.subModul);
    return `
  import * as React from 'react';
import DataTablePagination, { TableColumn } from '../../components/Table/DataTablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Badge, Button } from 'reactstrap';
import { DeleteIcon, EditIcon } from '../../components/Icon/GeneralIcon';
import { Link } from 'react-router-dom';

import { actOpenModal } from '../../redux/Modal/ModalAct';
import { Dispatch } from 'redux';
import { confirmAlert } from 'react-confirm-alert';

interface IList${name}Props {}

const modalName: string = '';

const List${name}: React.FunctionComponent<IList${name}Props> = (props) => {
  const [data, setData] = React.useState<any[]>([]);
  const dispatch: Dispatch<any> = useDispatch();

  const modul${name} = useSelector((state: RootState) => state.modul${name});
  const { status${name}, data${name} } = {
    status${name}: modul${name}.status,
    data${name}: modul${name}.payload,
  };

  React.useEffect(() => {
    let datas: any[] = [];
    if (status${name} === 'success' && data${name}.length > 0) {
      data${name}.map((item: any, i: number) => {
        return datas.push({
          no: i + 1,
        });
      });
    }
    setData(datas);
  }, [status${name}, data${name}]);

  const columns: TableColumn[] = [
    {
      text: 'No',
      dataField: 'no',
      width: '5%',
      headerStyle: {
        width: '5%',
        fontWeight: '600',
        textTransform: 'Capitalize',
      },
    },
    {
      text: 'Action',
      dataField: 'id',
      headerStyle: {
        width: '10%',
        textAlign: 'center',
      },
      style: {
        textAlign: 'center',
      },
      formatter: (cell: any, row: any) => {
        return (
          <div className='d-flex gap-3 align-content-center justify-content-center'>
            <Button size='sm' className='btn-icon' onClick={() => handleOnEdit(row)}>
              <EditIcon classname='text-primary' />
            </Button>
            <Button size='sm' className='btn-icon' onClick={() => handleOnDelete(row)}>
              <DeleteIcon classname='text-danger' />
            </Button>
          </div>
        );
      },
    },
  ];

  const handleOnEdit = (rows: any) => {
    dispatch(actOpenModal({ name: modalName, open: true, data: rows }));
  };

  const handleOnDelete = (rows: any) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this data?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {

          },
        },
        {
          label: 'No',
          onClick: () => {
            console.log('no');
          },
        },
      ],
    });
  };
  return <DataTablePagination data={data} columns={columns} title='List ${params.modul}' />;
};

export default List${name};
`;
};
exports.Write = Write;
