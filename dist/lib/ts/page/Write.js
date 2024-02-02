"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
const Write = ({ modul = '', fileName = '' }) => {
    /**
     * ! CONTENT
     */
    return `
  /**
   * @author Tengu
   * @date ${new Date()}
   */

  import * as React from 'react';
  import { PageTitle } from '../../../_metronic/layout/core';
  import { useDispatch, useSelector } from 'react-redux';
  import { RootState } from '../../redux/store';
  import { Dispatch } from 'redux';
  import { Button } from 'reactstrap';
  import { AddIcon } from '../../components/Icon/GeneralIcon';
  import { actOpenModal } from '../../redux/Modal/ModalAct';
  
  interface I${fileName} {}
  
  const ${fileName}Page: React.FunctionComponent<I${fileName}> = (props) => {
    const dispatch: Dispatch<any> = useDispatch();
  
    const breadcrumbs = [
      {
        title: 'Dashboard',
        path: '/dashboard',
        isSeparator: false,
        isActive: false,
      },
      {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
      },
    ];
  
    /**
     * ? Reducer to get your module
     */
  
    /**
      const modul${modul} = useSelector((state: RootState) => state.modul${modul});
      const { status${modul} } = {
        statusDefault: modul${modul}.status,
      };
  
    React.useEffect(() => {
      if (status${modul} === 'default') {
        dispatch();
      }
    }, [status${modul}]);
   */
  
    return (
      <React.Fragment>
        <PageTitle
          breadcrumbs={breadcrumbs}
          toolbar={
            <React.Fragment>
              <Button
                size='sm'
                color='primary'
                onClick={() => dispatch(actOpenModal({ name: '', open: true }))}
              >
                <AddIcon />
                Add
              </Button>
            </React.Fragment>
          }
        >
          ${modul}
        </PageTitle>
        <div>{/* content */}</div>
      </React.Fragment>
    );
  };
  
  export default ${fileName}Page;
  `;
};
exports.Write = Write;
