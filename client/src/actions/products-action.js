import {productService} from "../service/product-service"


const requested = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
}
const loaded = (newProducts) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: newProducts
  }
}
const Error = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  }
}



export const fetchTodo = (body, method, url) => {
  return async dispatch => {
    dispatch(requested())

    productService.product(body, method, url)
        .then(user => {dispatch(loaded(user))},
            error => {dispatch(Error(error))}

        )
  }
}

export const fetchAvatar = (body) => {
  return  dispatch => {
    dispatch(requested())

    productService.avatar(body)
        .then(user => {dispatch(loaded(user))},
            error => {dispatch(Error(error))}

        )
  }
}
export const  product = () => {
  return dispatch => {
    dispatch(requested())

    productService.getUser()
      .then(user => {dispatch(loaded(user))},
        error => {dispatch(Error(error))}
      )
  }
}

