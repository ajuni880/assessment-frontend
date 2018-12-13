import React from 'react';
import { connect } from 'react-redux';
import { setText } from '../actions/filters';

const PeopleFilter = ({ text, setText }) => (
    <div className="container">
        <div className="search">
            <input 
                type="text"
                autoComplete="off"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                className="search__input"
                placeholder="Search people here..."
            />
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    text: state.text
});

const mapDispatchToProps = (dispatch) => ({
    setText: (text) => dispatch(setText(text))
});


export default connect(mapStateToProps, mapDispatchToProps)(PeopleFilter);