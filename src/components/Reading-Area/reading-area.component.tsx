import { FC } from 'react';
import PageBase from '../Base/page-base.component';

interface ReadingAreaProps {
    className?: string;
}

export const ReadingArea: FC<ReadingAreaProps> = ({
    children,
    className = '',
}) => {
    return (
        <PageBase>
            <section
                className={`${className} mt-32 2xl:w-6/12 lg:w-7/12 w-11/12 mx-auto`}
            >
                {children}
            </section>
        </PageBase>
    );
};
