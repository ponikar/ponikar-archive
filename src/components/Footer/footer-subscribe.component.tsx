import { useCallback, useState } from "react";
import { subscribeForEmail } from "../../../Firebase/firestore/subscribe.firestore";
import { MediumButton } from "../Button/button.component"






const FooterSubscribe = () => {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const subscribe = useCallback(async () => {
        try {
            if(!email) return;

            setIsLoading(true);
            await subscribeForEmail(email);
            setEmail("");
            setIsLoading(false);
        } catch(e) {
            console.log(e.message, "SOMETHING WENT WRONG");
        }
    }, [email]);

    return <section className="mt-8 font-primary font-medium">
        <h5>Let’s learn together</h5>
        <div className="flex rounded-primary justify-between lg:w-full md:w-8/12 sm:w-full p-1 text-black bg-white">
        <input value={email} onChange={e => setEmail(e.currentTarget.value)} className="py-1 placeholder-primary px-2 pt-2 text-base" placeholder="Email Address" type="email" />
        <MediumButton disabled={isLoading} onClick={subscribe} className="rounded-primary" title={isLoading ? "Saving" : "Save"} />
    </div>
    </section>
}

export default FooterSubscribe;