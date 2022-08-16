import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkStatus());
  }, []);
  const categories = useSelector((state) => state.categories);

  const clickCheckStatus = () => {
    dispatch(checkStatus());
    console.log(categories);
  };
  return (<button type="button" onClick={clickCheckStatus}>Check Status</button>);
};

export default Categories;
