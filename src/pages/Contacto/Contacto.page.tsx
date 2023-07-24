import { Input2 } from '../../components/atom/input/Input2.components';
import { Button2 } from '../../components/atom/button/Button2.components';
import { useRef, FormEvent } from 'react';
import Layout from '../../components/layout/Layout';
import emailjs from '@emailjs/browser';
import { TextArea } from '../../components/atom/input/TextArea.components';

export const Contacto = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_rq4h1yn', 'template_29xf21z', form.current as HTMLFormElement, 'Ez0OQ2vHCvKl3JrY2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Layout>
                <main className="h-screen">
                    <form ref={form} onSubmit={sendEmail} className="flex justify-center">
                        <div className="flex flex-col p-5 rounded bg-white dark:bg-gray-800 w-full m-20 sm:w-4/6">
                            <h1 className="text-center font-bold text-black dark:text-white text-2xl mb-5">Formulario de Contacto</h1>
                            <Input2 labelText="Nombre:" type="text" name="user_name" />
                            <Input2 labelText="Email:" type="email" name="email" />
                            <TextArea labelText="Mensaje:" name="message" />
                            <div className="flex flex-row mt-3 w-full gap-2">
                                <Button2 text="Enviar"/>
                            </div>
                        </div>
                    </form>
                </main>
            </Layout>
        </>
    )
}







/*export const Contacto = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_rq4h1yn', 'template_29xf21z', form.current as HTMLFormElement, 'Ez0OQ2vHCvKl3JrY2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};*/