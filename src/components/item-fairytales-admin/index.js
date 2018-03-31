import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const ItemFaIrytailes = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime, updated}) => {

    let existsAudioUrl = <ReactAudioPlayer src={audioUrl} controls/>

    if (audioUrl === undefined) {
        existsAudioUrl = <ReactAudioPlayer/>
    }

    return (
        <div>
            <section data-id={id}>
                <input value={name}/>
                <input value={text}
                       className="text"
                    // style={{background:`url(${imageUrl})`}}
                />
                <input value={existsAudioUrl}
                       className="audioblock"/>

            </section>


        </div>
    );

};


export default ItemFaIrytailes;
