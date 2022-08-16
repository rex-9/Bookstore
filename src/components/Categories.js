import { checkStatus } from '../redux/categories/categories';
import store from '../redux/configureStore';

const Categories = () => {
  const clickCheckStatus = () => {
    store.dispatch(checkStatus());
    console.log(store.getState().categories);
  };
  return (<button type="button" onClick={clickCheckStatus}>Check Status</button>);
};

export default Categories;
