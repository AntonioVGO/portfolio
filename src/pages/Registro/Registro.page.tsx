import { Input2 } from '../../components/atom/input/Input2.components';
import { Button2 } from '../../components/atom/button/Button2.components';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.hook';
import { FormEvent } from 'react';
import { User } from "../Login/Login.page";
import { Header } from '../../components/moleculis/Header.components';


export interface RegistroData {
  name: string,
  password: string,
  email: string,
  role: string,
}

const registroData: RegistroData = { name: '', password: '', email: '', role: 'ADMIN_ROLE' };

export const Registro = () => {

  const { formData, onChange } = useForm<RegistroData>(registroData)

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
      <Header />
      <main className="flex w-screen h-screen justify-center bg-gradient-to-tl from-rose-500 to-indigo-700">
        <div className="flex flex-col p-5 rounded bg-gray-800 w-full h-fit mt-40 sm:w-4/6">
          <h1 className="text-center font-bold text-white text-2xl">Formulario de Registro</h1>
          <Input2 labelText="Nombre:" value={formData.name} name="name" onChange={onChange} />
          <Input2 labelText="Email:" type="email" value={formData.email} name="email" onChange={onChange} />
          <Input2 labelText="Contraseña" type="password" value={formData.password} name="password" onChange={onChange} />
          <div className="flex flex-row mt-3 w-full gap-2">
            <Button2 text="Registrarse" onClick={onSubmit} />
            <Button2 text="Reset" variant="outlined" />
          </div>
        </div>
      </main>
    </>
  )
}
