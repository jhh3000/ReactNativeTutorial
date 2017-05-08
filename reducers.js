import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters;

function visbilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todo(todos = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...todos,
          {
            text: action.text,
            completed: false,
          }
        ]
    case TOGGLE_TODO:
      return todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            })
          }
          return todo
        })
    default:
      return todos;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp;
