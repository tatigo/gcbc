import fetch from 'cross-fetch';

const GET_CHARACTER = 'rta/blockChainAPI/GET_CHARACTER';
const GET_CHARACTER_SUCCESS = 'rta/blockChainAPI/GET_CHARACTER_SUCCESS';
const GET_CHARACTER_FAILURE = 'rta/blockChainAPI/GET_CHARACTER_FAILURE';

export const requestCharacter = () => ({ type: GET_CHARACTER });
export const receiveCharacter = character => ({ type: GET_CHARACTER_SUCCESS, character });
export const receiveCharacterFail = error => ({ type: GET_CHARACTER_FAILURE, error });
export const fetchCharacter = () => (dispatch) => {
  dispatch(requestCharacter());
  
  return fetch('/api/character/0x678a3db10c89286ea88e0ed4532ecdf5af332264').then(
    res => res.json(),
    error => dispatch(receiveCharacterFail(error))
  )
    .then(character => dispatch(receiveCharacter([character])))
  
}

const initialState = {
  character: [],
  isFetching: false,
  error: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        isFetching: true
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.character,
        isFetching: false
      };
    case GET_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };

    default:
      return state;
  }
};