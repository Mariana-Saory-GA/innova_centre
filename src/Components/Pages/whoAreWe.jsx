import React, {Component} from 'react';
import Innova from '../../Video/videoInnova.mp4';
import './../Styles/whoAreWe.css';
import VideoPlayer from 'react-video-js-player';


class whoAreWe extends Component {
    render(){
        const videoSrc= Innova;
    return (
        <div>
            <section className="content-video">
                <div className="content-who">
                    <h1> ¿Quiénes somos?</h1>
                </div>
                <div className="video-who">
                    <VideoPlayer src={videoSrc} width="720" height="420" playbackRates={[0.5, 1, 3.85, 16]} className="repVideo"/>
                </div>
            </section>
        </div>
        )
    }
}

export default whoAreWe
