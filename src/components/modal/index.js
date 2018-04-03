import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('root__modal');

export default class Modal extends Component{
    element: HTMLDivElement;
    constructor(props) {
        super(props);
        this.element= document.createElement('div');
    }

    componentDidMount() {
        if(modalRoot) modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        if(modalRoot) modalRoot.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.element,
        );
    }
}
