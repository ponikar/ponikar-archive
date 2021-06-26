import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { saveContactDetails } from '../Firebase/firestore/subscribe.firestore';
import PageBase from '../src/components/Base/page-base.component';
import PrimaryButton from '../src/components/Button/button.component';
import { TextArea, TextInput } from '../src/components/Input/input.component';
import { Loading } from '../src/components/Loading/loading.component';
import { useFormHelpers } from '../src/hooks/use-form-helpers.hook';
import contactStyle from '../styles/contact.module.css';

interface ContactStateType {
    name: string;
    email: string;
    message: string;
}

const CONTACT_INITIAL_STATE: ContactStateType = {
    name: '',
    email: '',
    message: '',
};

const Contact: FC<{}> = () => {
    const [contact, setContact] = useState<ContactStateType>(
        CONTACT_INITIAL_STATE
    );

    const [helpers, setHelpers, HELPER_INIT_STATE] = useFormHelpers();

    const { name, email, message } = contact;

    const setAnyProps = (
        prop: 'name' | 'email' | 'message',
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setContact({ ...contact, [prop]: e.target.value });

    const saveContact = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            try {
                e.preventDefault();
                setHelpers({ ...HELPER_INIT_STATE, isLoading: true });
                if (!name || !email || !message)
                    return setHelpers({
                        isLoading: false,
                        message: 'The given fields are required',
                        success: false,
                    });
                await saveContactDetails(contact);
                setHelpers({
                    message: 'Contact has been saved',
                    isLoading: false,
                    success: true,
                });
                setContact(CONTACT_INITIAL_STATE);
            } catch (e) {
                setHelpers({
                    isLoading: false,
                    message: 'Something went wrong!',
                    success: false,
                });
            }
        },
        [name, email, contact, HELPER_INIT_STATE, setHelpers]
    );

    return (
        <PageBase>
            <section
                className={`${contactStyle.container} flex justify-center items-center`}
            >
                <div className="bg-background rounded-highlight py-12 lg:mt-0 md:mt-0 mt-56 lg:w-6/12 w-11/12">
                    <h2 className="font-secondary text-xl text-center">
                        {' '}
                        reach me out{' '}
                    </h2>
                    {helpers.message && (
                        <h5
                            className={`${
                                helpers.success ? 'text-green' : 'text-red'
                            } text-center text-sm my-1`}
                        >
                            {' '}
                            {helpers.message}{' '}
                        </h5>
                    )}

                    <form
                        onSubmit={saveContact}
                        className="lg:w-8/12 w-10/12 mx-auto"
                    >
                        <TextInput
                            onChange={(e) => setAnyProps('name', e)}
                            value={name}
                            label="What's your Name?"
                            placeholder="Jake Peralata"
                        />
                        <TextInput
                            onChange={(e) => setAnyProps('email', e)}
                            value={email}
                            label="What's your Email?"
                            placeholder="jake@brooklyninenine.com"
                        />
                        <TextArea
                            onChange={(e) => setAnyProps('message', e)}
                            value={message}
                            rows={4}
                            placeholder="I just wanna know something about..."
                            label="Tell me Something!"
                        />
                        {helpers.isLoading ? (
                            <Loading />
                        ) : (
                            <PrimaryButton
                                type="submit"
                                title="Say Hi!"
                                className="w-full"
                            />
                        )}
                    </form>
                </div>
            </section>
        </PageBase>
    );
};

export default Contact;
