"use client";
import { Form, Input, Button, InputPass } from "design-system-toshyro";
import { BsCaretLeftFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Link from "next/link";
import { loginWithEmailAndPassword, loginWithGoogle } from "@/services/firebase/authentication";

export default function Login() {

  async function handleSubmit(data: any) {
    const res = await loginWithEmailAndPassword(data.email, data.password)
    console.log(res)
  }

  return (
    <Form className="bg-white shadow-md rounded-xl p-12 grid grid-cols-12 w-[500px] gap-5 relative">
      <Link href="./home" className="p-5 absolute left-0 top-0 flex items-center gap-1 text-gray-500">
        <BsCaretLeftFill />
        <p className="text-xs font-semibold">Voltar</p>
      </Link>
      <h1 className="font-bold text-3xl col-span-12 text-center">Faça o login</h1>
      <Input width="col-span-12" name="email" label="Email" />
      <InputPass width="col-span-12" name="password" label="Senha" />
      <div className="col-span-12 text-sm">
        <Link href="./recover" className="text-red-600 font-semibold">Esqueceu a senha?</Link>
      </div>
      <div className="col-span-12 mt-5">
        <Button title="Entrar" color="bg-red-500 border-red-600 hover:bg-red-600 focus:ring-red-600" full onSubmit={handleSubmit} />
      </div>
      <div className="col-span-12 flex gap-1 text-sm font-medium">
        <p>Ainda não possui conta?</p>
        <Link href="./register" className="text-red-600 font-semibold">Criar Conta</Link>
      </div>
      <div className="col-span-12 w-full flex justify-around">
        <button
          type="button"
          onClick={() => loginWithGoogle()}
          className="border rounded-md p-2 hover:bg-gray-100"
        >
          <FcGoogle size={22} />
        </button>
      </div>
    </Form>
  )
}
