import styles from './AddNote.module.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { commonDate } from '../../../utils/date';

export const AddNote = props => {
  const initState = {
    title: '',
    description: '',
  };
  const [initialValues, setInitialValues] = useState(initState);
  const [isDisabled, setIsDisabled] = useState(true);
  const [title, setTitle] = useState('');
  const [descrip, setDescrip] = useState('');

  useEffect(() => {
    if (title !== '' && descrip !== '') {
      setIsDisabled(false);
    }
  }, [title, descrip]);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('title is required')
      .min(3, 'title must be at least 3 characters')
      .max(15, 'title must not exceed 15 characters'),
    description: Yup.string()
      .required('description is required')
      .min(3, 'description must be at least 3 characters')
      .max(60, 'description must not exceed 15 characters'),
  });
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const disabledStatus = e => {
    const title = e.currentTarget.childNodes[1].value;
    const description = e.currentTarget.childNodes[2].value;

    if (title !== '' && description !== '') {
      setIsDisabled(true);
      return Notify.warning(` Please fill all fields `);
    }
    setIsDisabled(false);
  };
  const onSubmit = e => {
    e.preventDefault();
  };
  const onError = error => {
    console.log('ERROR:::', error);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new idea item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className={styles.title} controlId="title">
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              {...register('title')}
            />
            {errors.name && (
              <Form.Text className="text-danger">
                {errors.name.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="description" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} {...register('description')} />
            {errors.description && (
              <Form.Text className="text-danger">
                {errors.description.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Text className={styles.date}>
            {commonDate(new Date())}
          </Form.Text>
          <Modal.Footer>
            <button className={styles.saveBtn} onClick={props.onHide}>
              Save
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    </Modal>
  );
};
