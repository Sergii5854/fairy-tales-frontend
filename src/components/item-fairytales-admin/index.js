import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './styles.styl';
const ItemFaIrytailesAdmin = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime, updated}) => {

    return (
        <div>
            <section data-id={id}>
                <button className="btn__back"><a href={'/'+ btoa('fairytales-admin')}><i class="material-icons">undo</i></a></button>
                <label > Назва казки</label>
                <input value={name}/>
                <label >Текст казки</label>
                <textarea value={text}
                       className="textarea"
                    // style={{background:`url(${imageUrl})`}}
                />
                <label >Зображення казки</label>
                <input value={imageUrl}/>
                <label >Колискова</label>
                <input value={lullaby}/>
                <label >Час завантаження казки</label>
                <input value={updateTime}/>
                <label >Оновлена казка</label>
                <input value={updated}/>
                <label >Аудіо казки</label>
                <input value={audioUrl}
                       className="audioblock"/>

            </section>
            <div className='new__fairytale__button'>

                <button className="btn__close">Close</button>
                <button className="btn__add">Add</button>
            </div>

        </div>
    );

};


export default ItemFaIrytailesAdmin;
