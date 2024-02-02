"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteReducer = void 0;
const string_1 = require("../../../helper/string");
const WriteReducer = ({ modul = '', fileName = '' }) => {
    let modulName = (0, string_1.ucwords)(modul);
    let subName = modul === fileName ? '' : (0, string_1.ucwords)(fileName);
    return `import { InitAction } from './../store';
    export interface ${modul}${subName}Param {
    /**
     *  ! Input params
     */
    }
    
    interface init${(0, string_1.ucwords)(modulName)}${subName} {
      status: 'loading' | 'success' | 'error' | 'default';
      payload: any[];
    }
    
    const state${(0, string_1.ucwords)(modul)}${subName}: init${(0, string_1.ucwords)(modul)}${subName} = {
      status: 'default',
      payload: [],
    };
    
    const ${modulName}${subName}Reducer = (state = state${(0, string_1.ucwords)(modul)}${subName}, action: InitAction) => {
      const newState: init${(0, string_1.ucwords)(modul)}${subName} = { ...state };
    
      switch (action.type) {
        case 'SUCCESS_${modul.toUpperCase()}${subName === '' ? '' : '_' + subName.toUpperCase()}':
          newState.status = 'success';
          newState.payload = action.payload;
          break;
        case 'LOADING_${modul.toUpperCase()}${subName === '' ? '' : '_' + subName.toUpperCase()}':
          newState.status = 'loading';
          newState.payload = action.payload;
          break;
        case 'ERROR_${modul.toUpperCase()}${subName === '' ? '' : '_' + subName.toUpperCase()}':
          newState.status = 'error';
          newState.payload = action.payload;
          break;
        default:
          break;
      }
      return newState;
    };
    
    export default ${modulName}${subName}Reducer;
    `;
};
exports.WriteReducer = WriteReducer;
