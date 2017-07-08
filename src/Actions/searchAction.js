import axios from 'axios';

export const updateSearchTerm = (text) => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    text
  }
}
