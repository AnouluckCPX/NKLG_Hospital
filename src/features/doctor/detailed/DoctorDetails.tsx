import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Employee } from '../../../app/model/Employee';
import { useStore } from '../../../app/stores/store';
import DoctorHeader from './DoctorHeader';

export default observer(function DoctorDetails() {

  const { employeeStore } = useStore();
  const { selectedEmployee: employee, loadEmployee, loadingInitial } = employeeStore;
  const { emp_id } = useParams<{ emp_id: string }>();

  useEffect(() => {
    if (emp_id) loadEmployee(emp_id);
  }, [emp_id, loadEmployee])

  if (loadingInitial || !employee) return <LoadingComponent />

  return (
    <>
      <DoctorHeader employee={employee} />
    </>
  )
})
