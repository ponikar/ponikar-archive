import Image from 'next/image';

const FooterRight = () => {
    return (
        <div className="flex-1 flex justify-end items-end pt-14 relative">
            <div className="w-11/12">
                <Image
                    alt="Darshan Ponikar"
                    src="/assets/images/footer.jpg"
                    width={1000}
                    height={550}
                />
            </div>
        </div>
    );
};

export default FooterRight;
