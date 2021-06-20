import Instagram from '../../../public/assets/svgs/instagram.svg';
import Twitter from '../../../public/assets/svgs/twitter.svg';
import Linkedin from '../../../public/assets/svgs/linkedin.svg';
import FooterSubscribe from './footer-subscribe.component';
import FooterLink from './footer-link.component';
import { MenuData } from '../../data/static-menu.data';

export const FooterLeftSubSection = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-lg mt-5 mb-2"> Links </h2>
            {MenuData.map((menu, index) => (
                <FooterLink {...menu} key={index} />
            ))}
        </div>
    );
};

export const FooterLeftInputSection = () => {
    return (
        <div className="flex lg:ml-20 flex-col">
            <h2 className="text-lg mt-5 mb-2"> Follow ME </h2>
            <div className="flex items-center">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/PonikarDarshan"
                >
                    <Twitter fill="#fff" />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://instagram.com/iponikar"
                    className="ml-3"
                >
                    {' '}
                    <Instagram fill="#fff" />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/darshan-ponikar-aa89691a3/"
                    className="ml-3"
                >
                    {' '}
                    <Linkedin fill="#fff" />
                </a>
            </div>
            <FooterSubscribe />
        </div>
    );
};
