import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Home, Menu, X } from 'react-feather';
import Logo from '../../Logo/logo.component';
import { navAnimatedProps } from './navigate.animate';
import AdminNavigationLink from './navigation-link.component';
import { adminNavigationData } from './navigation-link.data';

const AdminNavigaton: FC<{}> = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.nav
            animate={!toggle ? 'closed' : 'opened'}
            {...navAnimatedProps}
            className="fixed z-20 font-primary left-0 top-0 h-full w-56 border-r border-grey  bg-back"
        >
            <div className="p-2 mt-3">
                {!toggle && (
                    <Menu
                        className="cursor-pointer"
                        onClick={(_) => setToggle(true)}
                        size={24}
                    />
                )}
            </div>

            {toggle && (
                <div className="mt-5 flex w-full items-center justify-between px-4 py-2">
                    <Logo />
                    <X
                        onClick={(_) => setToggle(false)}
                        className="cursor-pointer"
                        size={22}
                    />
                </div>
            )}

            <div className="mt-10">
                {toggle && <h4 className="ml-5"> Navigations </h4>}
                <ul className="">
                    {adminNavigationData.map((navigation) => (
                        <AdminNavigationLink
                            key={navigation.href}
                            toggle={toggle}
                            {...navigation}
                        />
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default AdminNavigaton;
