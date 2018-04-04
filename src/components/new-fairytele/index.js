import React , {Component}from 'react';
import './styles.styl';


class NewFairytele extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {

            fairytale: {
                name : '',
                text: '',
                imageUrl: '',
                lullaby: '',
                updateTime: new Date(),
                updated: '',
                audioUrl: ''
            }
        }
    }


    
    changeValue = (key, value) => {
        this.setState = {
            fairytale: {
                ...this.state.fairytale,
                [key]: value
            }
        }
    }

    closeModal = (closeModal)=>{
        alert("close")
        this.setState((prevState)=>({
            showModal: !prevState.showModal}));
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
                    <form>
                        <div className='new__fairytale' >
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
                            <button className="btn__add">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};
NewFairytele.defaultProps = {
    name: 10,
    closeModal: () => closeModal
};
export default NewFairytele;