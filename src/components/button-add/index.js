
import React, {Component} from 'react';
import './styles.styl';
import Modal from './../modal/';
import NewFairytele from './../new-message';

export default class ButtonAdd extends Component {
    constructor(props: Props) {
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
                <NewMessage closeNewMail={() =>  this.toggleShow()}/>
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
