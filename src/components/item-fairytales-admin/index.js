import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './styles.styl';

export default class ItemFaIrytailesAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fairytale: {
                id: '',
                name : '',
                author: '',
                text: '',
                lullaby: true,
                updateTime: Date.now(),
                audioUrl: ''
            }
        }
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(key, value ){
        this.setState({
            fairytale: {
                ...this.state.fairytale,
                [key]: value
            }
        })
        console.log(this.state);
    }
    render() {

        let id =  this.props.id;
        let name =  this.props.name;
        let text =  this.props.text;
        let lullaby =  this.props.lullaby;
        let updateTime =  this.props.updateTime;
        let audioUrl =  this.props.audioUrl;

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
                        onChange={event => this.changeValue('id', event.target.value)}
                    />
                    <label>Текст казки</label>
                    <textarea
                        name="text"
                        defaultValue={text}
                        onChange={event => this.changeValue('id', event.target.value)}
                        className="textarea"

                    />
                    <label>Колискова</label>
                    <input name="lullaby"
                           defaultValue={lullaby}
                           onChange={event => this.changeValue('id', event.target.value)}
                    />
                    <label>Час завантаження казки</label>
                    <input name="updateTime"
                           defaultValue={updateTime}
                           onChange={event => this.changeValue('id', event.target.value)}
                    />
                    <label>Аудіо казки</label>
                    <input name="audioUrl"
                           defaultValue={audioUrl}
                           onChange={event => this.changeValue('id', event.target.value)}
                           className="audioblock"/>

                </section>
                <div className='item__button'>

                    <button className="btn__close">Close</button>
                    <button className="btn__add">Add</button>
                </div>

            </div>
        );
    }
};

