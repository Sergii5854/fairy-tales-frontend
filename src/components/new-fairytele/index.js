import React from 'react';
import './styles.styl';

const NewFairytele = ({closeModal}) => {
    const state = {
        name :"name tales "
    }
const example = () => {


    state.name = "name tales 3223 "
    console.log(state.name, state);
    alert("example" )
}
    return (
        <div className='new__fairytale-container'>
            <div className='new__fairytale-wrap'>
                <div className='new__fairytale__header '>
                    <p className='new__fairytale__header__text'>New Fairytele</p>
                    <a className='new__fairytale__header__link' onClick={closeModal}>
                        <i className="material-icons ">close</i>
                    </a>
                </div>
                <form>

                    <div className='new__fairytale' onClick={example}>

                            <label > Назва казки</label>
                            <input name='name'/>
                            <label >Текст казки</label>
                            <textarea name='text'
                                      className="textarea"

                            />
                            <label >Зображення казки</label>
                            <input name='imageUrl'/>
                            <label >Колискова</label>
                            <input name='lullaby'/>
                            <label >Час завантаження казки</label>
                            <input name='updateTime'/>
                            <label >Оновлена казка</label>
                            <input name='updated'/>
                            <label >Аудіо казки</label>
                            <input name='audioUrl'
                                   className="audioblock"/>


                    </div>

                    <div className='new__fairytale__button'>

                        <button className="btn__close">Close</button>
                        <button className="btn__add">Add</button>
                    </div>

                </form>
            </div>
        </div>
    )
};
NewFairytele.defaultProps = {
    name: 10,
    text: () => undefined
};

export default NewFairytele;