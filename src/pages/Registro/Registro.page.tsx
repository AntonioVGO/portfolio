import { useState } from 'react';
import { Input2 } from '../../components/atom/input/Input2.components';
import { Button2 } from '../../components/atom/button/Button2.components';

interface FormI {
  name: string,
  surname: string,
  email: string,
  password1: string,
  password2: string,
}

const initialFormState: FormI = { name: '', surname: '', email: '', password1: '', password2: '' };

export const Registro = () => {
  const [formState, setFormState] = useState<FormI>(initialFormState);

  const handleReset = () => {
    setFormState(initialFormState);
  }

  return (
    <main className="flex w-screen h-screen justify-center items-center bg-white">
      <div className="flex flex-col p-5 rounded bg-gray-800 w-full sm:w-4/6 text-white">
        <h1 className="text-center font-bold text-white text-2xl">Formulario de Registro</h1>
        <Input2 labelText="Nombre:" value={formState.name} onChange={({ target }) => setFormState((prev) => ({ ...prev, name: target.value }))} />
        <Input2 labelText="Apellidos:" value={formState.surname} onChange={({ target }) => setFormState((prev) => ({ ...prev, surname: target.value }))} />
        <Input2 labelText="Email:" type="email" value={formState.email} onChange={({ target }) => setFormState((prev) => ({ ...prev, email: target.value }))} />
        <Input2 labelText="Contraseña" type="password" value={formState.password1} onChange={({ target }) => setFormState((prev) => ({ ...prev, password1: target.value }))} />
        <Input2 labelText="Repetir contraseña" type="password" value={formState.password2} onChange={({ target }) => setFormState((prev) => ({ ...prev, password2: target.value }))} />
        <div className="flex flex-row mt-3 w-full gap-2">
          <Button2 text="Registrarse" />
          <Button2 text="Reset" variant="outlined" onClick={handleReset} />
        </div>
      </div>
    </main>
  )
}