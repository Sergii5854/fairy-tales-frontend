
import React, {Component} from 'react';
import './styles.styl';
import Modal from './../modal/';
import NewFairytele from './../new-fairytele';

export default class ButtonAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    toggleShow() {
        this.setState((prevState)=>({
            showModal: !prevState.showModal}));
    }


    render() {

        const modal = this.state.showModal ? (
            <Modal>
                <NewFairytele closeModal={() =>  this.toggleShow()}/>
            </Modal>
        ) : null;
        return (
            <div>
                <a className='button__add' onClick={() =>  this.toggleShow()}>+</a>
                {modal}
            </div>
        )
    }
}
