import React from 'react';

export default class CommunisComponent extends React.Component{

    constructor(props){
        super(props);
    }

    updateFormState = (key, event) => {
        let form = this.state.form;
        form[key] = event.target.value;
        this.setState({form});
    }

}
