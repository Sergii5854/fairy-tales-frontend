import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './styles.styl';

const ItemFaIrytailesAdmin = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime}) => {

    var talesObj = {
        'name': {name}
    }
    console.log(talesObj);

    const changeValue = (key) => {
    let value = document.getElementsByName(key)[0].value;
       console.log(key, value)
        talesObj.key = value

        console.log(talesObj);
    }

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
                    onChange={() => changeValue('name')}/>
                <label>Текст казки</label>
                <textarea
                          name="text"
                          defaultValue={text}
                          onChange={() => changeValue('text')}
                          className="textarea"

                />
                <label>Зображення казки</label>
                <input name="imageUrl"
                       defaultValue={imageUrl}
                       onChange={() => changeValue('imageUrl')}/>
                <label>Колискова</label>
                <input name="lullaby"
                       defaultValue={lullaby}
                       onChange={() => changeValue('lullaby')}/>
                <label>Час завантаження казки</label>
                <input name="updateTime"
                       defaultValue={updateTime}
                       onChange={() => changeValue('updateTime')}/>
                <label>Аудіо казки</label>
                <input name="audioUrl"
                       defaultValue={audioUrl}
                       onChange={() => changeValue('audioUrl')}
                       className="audioblock"/>

            </section>
            <div className='item__button'>

                <button className="btn__close">Close</button>
                <button className="btn__add">Add</button>
            </div>

        </div>
    );

};


export default ItemFaIrytailesAdmin;
