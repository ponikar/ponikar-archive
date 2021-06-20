import { ChangeEvent, FC, useCallback, useRef } from 'react';
import { MediumButton } from '../../Button/button.component';

interface ProjectPreviewProps {
    images: string[];
    setImages: (prop: { images: string[] }) => void;
}

const ProjectPreviewImage: FC<ProjectPreviewProps> = ({
    images,
    setImages,
}) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages({
                images: [...images, URL.createObjectURL(e.target.files[0])],
            });
        }
    };

    const fileRef = useRef<HTMLInputElement>(null);

    const openImages = useCallback(() => {
        fileRef.current.click();
    }, []);

    const deleteImage = useCallback(
        (img) => {
            setImages({ images: images.filter((image) => image !== img) });
        },
        [images]
    );

    return (
        <div>
            <input onChange={onChange} ref={fileRef} type="file" hidden />
            {images.length < 6 && (
                <MediumButton onClick={openImages} title="Select Images" />
            )}
            <div className="grid mt-3 grid-cols-3 gap-3">
                {images.map((image, index) => (
                    <img
                        onDoubleClick={(_) => deleteImage(image)}
                        key={index}
                        src={image}
                        className="object-contain w-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectPreviewImage;
