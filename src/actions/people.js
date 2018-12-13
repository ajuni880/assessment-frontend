
export const setPeople = (people) => ({
  type: 'SET_PEOPLE',
  people
});

export const setSelectedPerson = (id) => ({
  type: 'SET_SELECTED_PERSON',
  id
});

export const startSetPeople = (town = 'Brastlewark') => (dispatch, getState) => {
  return fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(res => res.json())
    .then(data =>{ 
      dispatch(setPeople(data[town]));  
      dispatch(setSelectedPerson(4));  
    });
};