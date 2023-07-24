import { Input2 } from '../../components/atom/input/Input2.components';
import { Button2 } from '../../components/atom/button/Button2.components';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.hook';
import { FormEvent } from 'react';
import { User } from "../Login/Login.page";
import Layout from '../../components/layout/Layout';
import {TextArea } from '../../components/atom/input/TextArea.components';


export interface ContactoData {
  name: string,
  email: string,
  text: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const contactoData: ContactoData = { name: '', email: '', text: ""};

export const Contacto = () => {

  const { formData, onChange, resetForm} = useForm<ContactoData>(contactoData)

  const navigate = useNavigate();

  const onSubmit = async (e?: FormEvent) => {

    e?.preventDefault();

    try {
      const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData)
        });
      const data: User = await resp.json()
      if (!!data?.uid) {
        navigate('/login');
      }
    } catch (e) {

    }
  }

  return (
    <>
      <Layout>
        <main className="h-screen">
          <div className="flex justify-center">
            <div className="flex flex-col p-5 rounded bg-white dark:bg-gray-800 w-full m-20 sm:w-4/6">
              <h1 className="text-center font-bold text-black dark:text-white text-2xl mb-5">Formulario de Contacto</h1>
              <Input2 labelText="Nombre:" value={formData.name} name="name" onChange={onChange} />
              <Input2 labelText="Email:" type="email" value={formData.email} name="email" onChange={onChange} />
              <TextArea labelText="Mensaje:" value={formData.text} name="text" onChange={onChange} />
              <div className="flex flex-row mt-3 w-full gap-2">
                <Button2 text="Enviar" onClick={onSubmit} />
                <Button2 text="Reset" variant="outlined" onClick={resetForm}/>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
