import React from 'react';

const View = (props) => {
    console.log(props);

    return (
        <div className="view">
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Hobbies: {props.hobbies}</h3>
        </div>
    );
}
export default View;