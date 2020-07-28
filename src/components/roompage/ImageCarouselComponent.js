import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function ImageCarouselComponent(props) {
    const {imageArr,onChangeArrangement,onShowImageDialog} = props
    return(
        imageArr && imageArr.length > 0 ? <>
            <div className="roompage_info_left_largeimage" style={ { backgroundImage: `url(${ imageArr[ 0 ] })` } } onClick={ () => onShowImageDialog(
                imageArr[ 0 ]) }>
                <span className="roompage_info_left_caroucelBtn" onClick={ onChangeArrangement }><ArrowForwardIosIcon /></span>
            </div>
            <div className="roompage_info_left_smallimages">
                <div className="roompage_info_left_smallimages_image" style={ { backgroundImage: `url(${ imageArr[ 1 ] })` } } onClick={ () => onShowImageDialog(
                    imageArr[ 1 ]) }></div>
                <div className="roompage_info_left_smallimages_image" style={ { backgroundImage: `url(${ imageArr[ 2 ] })` } } onClick={ () => onShowImageDialog(
                    imageArr[ 2 ]) }></div>
            </div>
        </> : null
    )

}

export default ImageCarouselComponent;