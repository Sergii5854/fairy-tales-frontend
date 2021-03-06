import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import './styles.styl';
import './audioplayer.styl';
import './audioplayer.js';

const ItemFaIrytailes = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime, updated}) => {

    let playlist =
        [{ url: audioUrl , title: name }];

    let existsAudioUrl = <AudioPlayer  playlist={playlist}  />
        
    if (audioUrl === undefined) {
      existsAudioUrl = null
    }
            
    return (
        <div>
            <section data-id={id}>
                <h1 className="title">{name}</h1>
                <div className="audioblock">
                    {existsAudioUrl}
                </div>
                <p className="text flow-text"
                    // style={{background:`url(${imageUrl})`}}
                >
                    {text}
                </p>

        </section>

        </div>
    );

};


export default ItemFaIrytailes;
