const defaultFilters = {
    text: '',
};

export default function(state = defaultFilters, action) {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                text: action.text
            };
        default:
            return state;
    }
};