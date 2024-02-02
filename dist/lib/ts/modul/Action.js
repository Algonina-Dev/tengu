"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteAction = void 0;
const string_1 = require("../../../helper/string");
const WriteAction = (params) => {
    let modul = params.modul.toUpperCase();
    let submodul = params.filename.toUpperCase();
    let nameR = modul === submodul ? modul : modul + '_' + submodul;
    let f = params.modul === params.filename
        ? (0, string_1.ucwords)(params.modul)
        : (0, string_1.ucwords)(params.modul) + (0, string_1.ucwords)(params.filename);
    return `
  import { Dispatch } from 'redux';
  import { InitAction } from '../store';
  import { CONFIG } from '../../config/Config';
  import { CONNECTION } from '../../config/Connection';
  // import { errorgNotif, successNotif } from '../../components/Toast/ToastNotify';
  // import { actOpenModal } from '../Modal/ModalAct';
  

  var path = '/';

  /**
  *  * GET Function
  */
  export const actGet${f} = () => async (dispatch: Dispatch<InitAction>) => {
    try {
      dispatch({ type: 'LOADING_${nameR}' });
      let config = CONFIG({ url: path, method: 'get', data: {} });
      let response = await CONNECTION(config);
      if (response.status === 200) {
        dispatch({ type: 'SUCCESS_${nameR}', payload: response.data });
      } else {
        dispatch({ type: 'ERROR_${nameR}', payload: [] });
      }
    } catch (error) {
      dispatch({ type: 'ERROR_${nameR}', payload: [] });
    }
  };
  
  /**
  *  * POST Function
  */
  export const actPost${f} = (params: any) => async (dispatch: any) => {
    try {
      dispatch({ type: 'LOADING_${nameR}' });
      let config = CONFIG({ url: '/', method: 'post', data: params });
      let response = await CONNECTION(config);
      if (response.status === 200) {
     
        dispatch({ type: 'SUCCESS_${nameR}', payload: response.data });

      } else {
     
        dispatch({ type: 'SUCCESS_${nameR}' });
      }
      console.log(response);
    } catch (error) {
      dispatch({ type: 'ERROR_${nameR}', payload: [] });
    }
  };
    
  /**
  *  * PUT Function
  */
  export const actPut${f} = (params: any) => async (dispatch: Dispatch<any>) => {
    try {
      const { id } = params;
      dispatch({ type: 'LOADING_${nameR}' });
      let config = CONFIG({ url: path + '/' + id, method: 'put', data: params });
      let response = await CONNECTION(config);
      if (response.status === 200) {
        dispatch({ type: 'SUCCESS_${nameR}', payload: response.data });
      } else {
        dispatch({ type: 'SUCCESS_${nameR}' });
      }
      console.log(response);
    } catch (error) {
      dispatch({ type: 'ERROR_${nameR}', payload: [] });
    }
  };

  /**
  *  * DELETE Function
  */
  export const actDelete${f} = (params: any) => async (dispatch: Dispatch<any>) => {
    try {
      const { id } = params;
      dispatch({ type: 'LOADING_${nameR}' });
      let config = CONFIG({ url: path + '/' + id, method: 'delete', data: params });
      let response = await CONNECTION(config);
      if (response.status === 200) {
        dispatch({ type: 'SUCCESS_${nameR}', payload: response.data });
      } else {
        dispatch({ type: 'SUCCESS_${nameR}' });
      }
      console.log(response);
    } catch (error) {
      dispatch({ type: 'ERROR_${nameR}', payload: [] });
    }
  };
  `;
};
exports.WriteAction = WriteAction;
