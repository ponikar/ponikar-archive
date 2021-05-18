import { MediumButton } from "../Button/button.component"






const FooterSubscribe = () => {
    return <section className="mt-8 font-primary font-medium">
        <h5>Let’s learn together</h5>
        <div className="flex rounded-primary justify-between lg:w-full md:w-8/12 sm:w-full p-1 text-black bg-white">
        <input className="py-1 placeholder-primary px-2 pt-2 text-base" placeholder="Email Address" type="email" />
        <MediumButton className="rounded-primary" title="Save" />
    </div>
    </section>
}

export default FooterSubscribe;