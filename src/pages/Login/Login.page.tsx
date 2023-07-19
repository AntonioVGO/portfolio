import { Button2 } from "../../components/atom/button/Button2.components";
import { Input2 } from "../../components/atom/input/Input2.components";
import { useForm } from '../../hooks/useForm.hook';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/App.context";
import { FormEvent, useContext } from "react";
import { Header } from "../../components/moleculis/Header.components";

export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}


interface LoginDataI {
  email: string,
  password: string,
}

const initialLoginForm: LoginDataI = { email: '', password: '' };



export const Login = () => {

  const { formData, onChange, resetForm } = useForm<LoginDataI>(initialLoginForm)

  const navigate = useNavigate();

  const { setToken, setUser } = useContext(AppContext);

  const onSubmit = async (e?: FormEvent) => {

    e?.preventDefault();

    try {
      const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData)
        });
      const data: LoginResponse = await resp.json();
      if (!!data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      }
    } catch (error) {

    }
  }


  return (
    <>
      <Header />
      <main className="flex w-screen h-screen justify-center bg-gradient-to-tl from-rose-500 to-indigo-700">
        <div className="flex flex-col p-5 rounded bg-gray-800 w-full h-fit mt-40 sm:w-4/6">
          <h1 className="text-center font-bold text-white text-2xl">Login</h1>
          <Input2 labelText="Email:" type="email" value={formData.email} name="email" onChange={onChange} />
          <Input2 labelText="Contraseña" type="password" value={formData.password} name="password" onChange={onChange} />
          <div className="flex flex-row mt-3 w-full gap-2">
            <Button2 onClick={onSubmit} text="Login" />
            <Button2 text="Reset" variant="outlined" onClick={resetForm} />
          </div>
          <div className="flex flex-row mt-3 w-full gap-2 text-white">
            <p>¿No estás registrado?</p>
            <p>Haz click</p><button onClick={() => navigate("/registro")} className="hover:text-sky-600 active:text-sky-800 transition duration-150 ease-in-out">AQUÍ</button>
          </div>
        </div>
      </main>
    </>
  )
}



