import React, { Component } from 'react';
import './styles.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }


    componentDidMount() {

    }


    importAll = (r) => {
        return r.keys().map(r);
    }

    imageClick = (key) => {
        this.setState({ isOpen: true, photoIndex: key })
    }

    render() {

        const images = this.importAll(require.context('../../../images/gallery', false, /\.(png|jpe?g|svg)$/));

        // console.log(imageArr)
        return (
            <div className="container lbox">
                <section>

                    {
                        images.map((ob, key) => {

                            
                            return (
                                <img alt="ob" key={key} src={ob} onClick={() => {
                                    this.imageClick(key);
                                }} />
                            )
                        })
                    }



                </section>
                {this.state.isOpen && (
                    <div style={{ zIndex: 1000 }}>
                        <Lightbox
                            mainSrc={images[this.state.photoIndex]}
                            nextSrc={images[(this.state.photoIndex + 1) % images.length]}
                            prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + 1) % images.length,
                                })
                            }
                        />
                    </div>
                )}

            </div>
        );
    }
}

export default ImageGallery;