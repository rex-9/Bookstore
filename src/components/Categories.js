import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkStatus());
  }, []);

  const clickCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (<button type="button" onClick={clickCheckStatus}>Check Status</button>);
};

export default Categories;
