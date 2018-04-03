import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';
import './styles.styl';
import './audioplayer.css';
import './audioplayer.js';

const ItemFaIrytailes = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime, updated}) => {

    var playlist =
        [{ url: {audioUrl}, title: 'Track 1 - a track to remember' },
            { url: {audioUrl}, title: 'Oggs Oggs Oggs' }];


    let existsAudioUrl = <AudioPlayer  playlist={playlist}  />
            
    return (
        <div>
            <section data-id={id}>
                <h1>{name}</h1>
                <p className="text flow-text"
                    // style={{background:`url(${imageUrl})`}}
                >
                    {text}
                </p>
        <div className="audioblock">
        {existsAudioUrl}
        </div>
        </section>

        </div>
    );

};


export default ItemFaIrytailes;
