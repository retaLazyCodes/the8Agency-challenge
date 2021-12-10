import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaSnapchatGhost,
    FaYoutube
} from 'react-icons/fa';

import './styles.css'

export const SocialLinks = () => {
    return (
        <ul className='social-media'>
            <li>
                <a className='social-media__link' href='!#' rel='noopener noreferrer'>
                    <FaTwitter size={24} color='white' />
                </a>
            </li>

            <li>
                <a className='social-media__link' href='!#' rel='noopener noreferrer'>
                    <FaFacebookF size={24} color='white' />
                </a>
            </li>

            <li>
                <a className='social-media__link' href='!#' rel='noopener noreferrer'>
                    <FaLinkedinIn size={24} color='white' />
                </a>
            </li>

            <li>
                <a className='social-media__link' href='!#' rel='noopener noreferrer'>
                    <FaYoutube size={24} color='white' />
                </a>
            </li>

            <li>
                <a className='social-media__link' href='!#' rel='noopener noreferrer'>
                    <FaInstagram size={24} color='white' />
                </a>
            </li>

            <li>
                <a className='social-media__link' href='!#' rel='noopener noreferrer'>
                    <FaSnapchatGhost size={24} color='white' />
                </a>
            </li>
        </ul>
    );
};