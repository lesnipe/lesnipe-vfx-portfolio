import {default as Image1} from '../../images/img1.svg';
import {default as Image2} from '../../images/img2.svg';
import {default as Image3} from '../../images/img3.svg';
import {MdAlternateEmail} from 'react-icons/md';
import {RiGalleryLine} from 'react-icons/ri';
import {IoWalletOutline} from 'react-icons/io5'

export const infoObject1 = {
    id: 'portfolio',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    toplineIcon: <IoWalletOutline/>,
    topline: 'PORTFOLIO',
    headline1: 'Take a look at my',
    headline2: 'personal portfolio.',
    description: 'It includes the most recent projects that I\'ve participated in. Most of them are music videos in which I had to handle either the direction, editing, or visual effects application.',
    buttonLabel: 'Book now',
    imgStart: false,
    imgScale: 1,
    img: Image1,
    alt: 'portfolio',
    primary: false,
    dark: false,
    fontbig: true,
    big: true
}

export const infoObject2 = {
    id: 'gallery',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    toplineIcon: <RiGalleryLine />,
    topline: 'GALLERY',
    headline1: 'Check out some',
    headline2: 'amazing stills!',
    description: 'I present you with a collection that includes some of the best scenes in projects I was a part of.',
    buttonLabel: 'See more',
    imgStart: true,
    imgScale: 0.8,
    img: Image2,
    alt: 'gallery',
    primary: true,
    dark: true,
    fontbig: true,
    big: true
}

export const infoObject3 = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    toplineIcon: <MdAlternateEmail />,
    topline: 'CONTACT',
    headline1: 'Let\'s create together!',
    headline2: 'Message me',
    description: 'I\'m available for projects. Fill in the form to enquire about any collaborations, sponsorship, or commissioned work.',
    buttonLabel: 'Let\'s talk',
    imgStart: false,
    imgScale: 1,
    img: Image3,
    alt: 'contact',
    primary: false,
    dark: false,
    fontbig: true,
    big: true
}