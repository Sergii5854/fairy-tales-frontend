import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './styles.styl';
import {
    editFairytale,
    deleteFairytale
} from '../../services/http'

export default class ItemFaIrytailesAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fairytale: {
                name : '',
                text: '',
                lullaby: true,
                updateTime: Date.now(),
                audioUrl: ''
            }
        }
        this.changeValue = this.changeValue.bind(this);
        this.submit = this.submit.bind(this);
        this.remove = this.remove.bind(this);
    }

    changeValue(key, value ){
        this.setState({
            fairytale: {
                ...this.state.fairytale,
                [key]: value
            }
        })
    }

    submit (event) {
        console.log("submit");
        editFairytale(this.state.fairytale)
            .then(console.log)
            .catch(console.warn)
    }
    remove(event){
      event.preventDefault()
        let id =  this.props.id;
        console.log("clos", id);
        deleteFairytale(this.state.fairytale)
    }

    render() {

        let id =  this.props.id;
        let name =  this.props.name;
        let text =  this.props.text;
        let lullaby =  this.props.lullaby;
        let updateTime =  this.props.updateTime;
        let audioUrl =  this.props.audioUrl;

        console.log(this.state);

        return (
            <div>
                <section data-id={id}>
                    <button className="btn__back">
                        <a href={'/' + btoa('fairytales-admin')}>
                            <i className="material-icons">undo</i>
                        </a>
                    </button>
                    <label> Назва казки</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        onChange={event => this.changeValue('name', event.target.value)}
                    />
                    <label>Текст казки</label>
                    <textarea  type="text"
                        name="text"
                        defaultValue={text}
                        onChange={event => this.changeValue('text', event.target.value)}
                        className="textarea"

                    />
                    <label>Колискова</label>
                    <input name="lullaby"
                           type="text"
                           defaultValue={lullaby}
                           onChange={event => this.changeValue('lullaby', event.target.value)}
                    />
                    <label>Час завантаження казки</label>
                    <input name="updateTime"
                           type="text"
                           defaultValue={updateTime}
                           onChange={event => this.changeValue('updateTime', event.target.value)}
                    />
                    <label>Аудіо казки</label>
                    <input name="audioUrl"
                           type="text"ц
                           defaultValue={audioUrl}
                           onChange={event => this.changeValue('audioUrl', event.target.value)}
                           className="audioblock"/>

                </section>
                <div className='item__button'>

                    <a href={'/' + btoa('fairytales-admin')}
                            className="btn__close btn">Close</a>

                    <a href={'/' + btoa('fairytales-admin')}
                       className="btn__remove btn"
                        onClick={this.remove}
                    >Remove</a>

                    <a onClick={this.submit}
                       className="btn__add btn">Add</a>
                </div>

            </div>
        );
    }
};
