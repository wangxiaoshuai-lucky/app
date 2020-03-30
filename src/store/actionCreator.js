
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_TODOLIST } from './actionType';


export const createChangeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const createAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const createDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const createInitItemAction = (data) => ({
  type: INIT_TODOLIST,
  data
})