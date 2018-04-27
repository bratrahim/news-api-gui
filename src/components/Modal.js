import React from 'react';
import "../stylesheets/Modal.scss";

export default class Modal extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
            {
                show:this.props.show
            }
    }
    componentWillReceiveProps(newProps)
    {
        this.setState({show:newProps.show});
    }
    render() {
        return (
            <div>
                <div id="modal" className={this.state.show?"active":null}>
                    <div id="content"></div>
                </div>
                <div id="mask" className={this.state.show?"active":null} onClick={this.props.hideModal}></div>
            </div>)
    }
}