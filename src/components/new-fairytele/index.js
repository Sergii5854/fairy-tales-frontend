import React , {Component}from 'react';
import './styles.styl';
import {
    newFairytale
} from '../../services/http'

class NewFairytele extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fairytale: {
                id: '',
                name : '',
                author: '',
                text: '',
                imageUrl: '',
                lullaby: true,
                updateTime: Date.now(),
                updated: true,
                audioUrl: ''
            }
        }
        this.changeValue = this.changeValue.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeValue (key, value) {
        this.setState({
            fairytale: {
                ...this.state.fairytale,
                [key]: value
            }
        })
    }

    closeModal () {
        this.props.closeModal()
    }

    submit (event) {
        newFairytale(this.state.fairytale)
            .then(console.log)
            .catch(console.warn)
    }

    render() {
        return (
            <div className='new__fairytale-container'>
              <div className='new__fairytale-wrap'>
                <div className='new__fairytale__header '>
                  <p className='new__fairytale__header__text'>New Fairytele</p>
                  <a className='new__fairytale__header__link' onClick={this.closeModal}>
                    <i className="material-icons ">close</i>
                  </a>
                </div>
                <form onSubmit={this.submit}>
                  <div className='new__fairytale' >

                    <label >Id</label>
                    <input
                        name='id'
                        value={this.state.fairytale.id}
                        onChange={event => this.changeValue('id', event.target.value)}
                    />

                    <label > Назва казки</label>
                    <input name='name'
                           onClick={this.changeValue}
                           value={this.state.fairytale.name}
                           onChange={event => this.changeValue('name', event.target.value)}
                    />

                    <label >Текст казки</label>
                    <textarea name='text'
                              className="textarea"

                              value={this.state.fairytale.text}
                              onChange={event => this.changeValue('text', event.target.value)}
                    />

                    <label >Зображення казки</label>
                    <input
                        name='imageUrl'
                        value={this.state.fairytale.imageUrl}
                        onChange={event => this.changeValue('imageUrl', event.target.value)}
                    />

                    <label >Автор</label>
                    <input
                        name='author'
                        value={this.state.fairytale.author}
                        onChange={event => this.changeValue('author', event.target.value)}
                    />

                    <label >Колискова</label>
                    <input
                        name='lullaby'
                        value={this.state.fairytale.lullaby}
                        onChange={event => this.changeValue('lullaby', event.target.value)}
                    />

                    <label >Час завантаження казки</label>
                    <input
                        name='updateTime'
                        value={this.state.fairytale.updateTime}
                        onChange={event => this.changeValue('updateTime', event.target.value)}
                    />

                    <label >Оновлена казка</label>
                    <input
                        name='updated'
                        value={this.state.fairytale.updated}
                        onChange={event => this.changeValue('updated', event.target.value)}
                    />

                    <label >Аудіо казки</label>
                    <input name='audioUrl'
                           className="audioblock"
                           value={this.state.fairytale.audioUrl}
                           onChange={event => this.changeValue('audioUrl', event.target.value)}
                    />

                  </div>
                  <div className='new__fairytale__button'>
                    <button  className="btn__close">Close</button>
                    <button type="submit" className="btn__add">Add</button>
                  </div>
                </form>
              </div>
            </div>
        )
    }
};

export default NewFairytele;