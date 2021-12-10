import { SocialLinks } from 'components/SocialLinks';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content'>
                <p className='footer__copyright'>&copy; 2020</p>
                <SocialLinks />
            </div>
            <hr className='bottom-line' />
        </div>
    );
};