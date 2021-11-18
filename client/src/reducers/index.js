import updateProductList from './product-list'

const reducer = (state, action) => {
  return {
    productList: updateProductList(state, action)
  }
}

export default reducer
