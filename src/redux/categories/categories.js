const STATUS = 'UNDER_CONSTRUCTION';

const cateXer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: STATUS,
});

export default cateXer;
export { checkStatus };
