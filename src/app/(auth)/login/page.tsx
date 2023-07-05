"use client";
import { Form, Input, Button } from "design-system-toshyro";
import { toast } from 'react-toastify';
import Link from "next/link";

export default function Login() {

  function handleSubmit(data: any) {
    toast.info("Email: " + data.email);
    toast.info("Senha: " + data.password);
  }

  return (
    <Form className="bg-white shadow-md rounded-xl p-12 grid grid-cols-12 w-[500px] gap-5">
      <h1 className="font-bold text-3xl col-span-12 text-center">Faça o login</h1>
      <Input width="col-span-12" name="email" label="Email" />
      <Input width="col-span-12" name="password" label="Senha" type="password" />
      <div className="col-span-12 text-sm">
        <Link href="./lost_pass" className="text-blue-600 font-semibold">Esqueceu a senha?</Link>
      </div>
      <div className="col-span-12 mt-5">
        <Button title="Entrar" full onSubmit={handleSubmit} />
      </div>
      <div className="col-span-12 flex gap-1 text-sm font-medium">
        <p>Ainda não possui conta?</p>
        <Link href="./signin" className="text-blue-600 font-semibold">Criar Conta</Link>
      </div>
    </Form>
  )
}
