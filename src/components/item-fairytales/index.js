import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const ItemFaIrytailes = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime, updated}) => {
  console.log({audioUrl, id, name});

    return (
        <div>
            <section data-id={id}>
                <h1>{name}</h1>
                <p className="text"
                    // style={{background:`url(${imageUrl})`}}
                >
                    {text}
                </p>
                <div className="audioblock">
                    <ReactAudioPlayer
                        src={audioUrl}

                        controls
                    />
                </div>
            </section>

        </div>
    );

};


export default ItemFaIrytailes;
