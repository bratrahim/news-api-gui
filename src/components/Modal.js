import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import "../stylesheets/Modal.scss";
import ScrollLock from 'react-scrolllock';

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
                    <Scrollbars>
                        <div id="content">
                            <img className="modal-image" src={this.props.article.urlToImage} />
                            <h1>{this.props.article.title}</h1>
                            <span>{this.props.article.publishedAt}</span>
                            <span>{this.props.article.author}</span>
                            <a>{this.props.article.url}</a>
                            <p>{this.props.article.description}</p>


                        </div>
                    </Scrollbars>
                </div>
                {this.state.show?<ScrollLock/>:null}

                <div id="mask" className={this.state.show?"active":null} onClick={this.props.hideModal}></div>
            </div>)
    }
}