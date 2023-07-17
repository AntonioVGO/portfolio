import { Button2 } from "../../components/atom/button/Button2.components";
import { Input2 } from "../../components/atom/input/Input2.components";
import { useForm } from '../../hooks/useForm.hook';


interface FormI {
  email: string,
  password1: string,
}

export const Login = () => {

  const initialFormState: FormI = { email: '', password1: ''};

  const {formData, onChange, resetForm} = useForm<FormI>(initialFormState)


  return (
    <main className="flex w-screen h-screen justify-center items-center bg-slate-500">
      <div className="flex flex-col p-5 rounded bg-cyan-400 w-full sm:w-4/6">
        <h1 className="text-center font-bold text-black text-2xl">Formulario de Registro</h1>
        <Input2 labelText="Email:" type="email" value={formData.email} name="email" onChange={onChange} />
        <Input2 labelText="Contraseña" type="password" value={formData.password1} name="password1" onChange={onChange} />
        <div className="flex flex-row mt-3 w-full gap-2">
          <Button2 text="Registrarse" />
          <Button2 text="Reset" variant="outlined" onClick={resetForm} />
        </div>
      </div>
    </main>
  )
}
