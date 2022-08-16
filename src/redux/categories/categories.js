const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initState = [];

const cateXer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default cateXer;
export { checkStatus };
