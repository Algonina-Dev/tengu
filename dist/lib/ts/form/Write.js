"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Write = void 0;
const Write = ({ fields = [], filename = '' }) => {
    var schema = '';
    var initialValue = '';
    var formField = '';
    fields.map((item) => {
        schema += `${item}: Yup.string().required(),`;
        initialValue += `${item}: '',`;
        formField += `<FormGroup>
    <Label>${item}</Label>
    <Input
      type='text'
      placeholder='${item}'
      name='${item}'
      className='form-control-sm'
      onChange={handleChange}
    />
    <FormText color='danger'>{errors?.${item}}</FormText>
  </FormGroup>`;
    });
    return `import * as React from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import {
    Button,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
  } from 'reactstrap';
  import { RootState } from '../../redux/store';
  import { Dispatch } from 'redux';
  import { actOpenModal } from '../../redux/Modal/ModalAct';
  import CLModal from '../../components/modal/CLModal';
  import { ModalFooter } from 'react-bootstrap';
  import * as Yup from 'yup';
  import { useFormik } from 'formik';
//   import ReactSelect from 'react-select';
  
  interface IAppProps {}
  
  const schema = Yup.object().shape({
    ${schema}
  });
  
  const initialValues = {
    ${initialValue}
  };

  const modalName:string = "";

  const ${filename}: React.FC<IAppProps> = (props) => {
    const popup = useSelector((state: RootState) => state.popup);
    const isOpen = popup[modalName];
    const dispatch: Dispatch<any> = useDispatch();

    /**
     * ! Reducer
     */

    // const modul = useSelector((state: RootState) => state.modul);
    // const { status } = {
    //   statusTypeuser: modul.status,
    // };
  
    const formik = useFormik({
      initialValues,
      validationSchema: schema,
      onSubmit: async (values, { setStatus, setSubmitting }) => {
        return "";
      },
    });
  
    const { errors, setValues, values } = formik;

    // const handleSelected = (params: any) => {
    //   const { value } = params;
    //   setValues((values: any) => ({
    //     ...values,
    //     active: value,
    //   }));
    // };
  
    const handleChange = ({ target }: any) => {
      const { name, value } = target;
  
      setValues((values: any) => ({
        ...values,
        [name]: value,
      }));
    };

    return (
      <React.Fragment>
        <CLModal isOpen={isOpen}>
          <Form onSubmit={formik.handleSubmit}>
            <ModalHeader
              title='Add User'
              toggle={() => dispatch(actOpenModal({ name: modalName, open: false }))}
            >
              Create Type User
            </ModalHeader>
            <ModalBody>
           ${formField}
            </ModalBody>
            <ModalFooter>
              <Button
                color='default'
                size='sm'
                onClick={() => dispatch(actOpenModal({ name: modalName, open: false }))}
              >
                Close
              </Button>
              <Button color='primary' type='submit' size='sm'>
                Save
              </Button>
            </ModalFooter>
          </Form>
        </CLModal>
      </React.Fragment>
    );
  };
  
  export default ${filename};
  `;
};
exports.Write = Write;
