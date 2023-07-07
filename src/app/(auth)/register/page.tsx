"use client";
import { Form, Input, Button, InputPass } from "design-system-toshyro";
import { BsCaretLeftFill } from 'react-icons/bs';
import Link from "next/link";
import { registerWithEmailAndPassword } from "@/services/firebase/authentication";
import { toast } from "react-toastify";

export default function Register() {

  async function handleSubmit(data: any) {
    if (data.password != data.confirm_pass) return toast.error("As senhas deve ser iguais")
    const res = await registerWithEmailAndPassword(data.name, data.email, data.password);
    if (!res.success) return toast.error(res.message)
    toast.success("Conta criada com sucesso!");
  }

  return (
    <Form className="bg-white shadow-md rounded-xl p-12 grid grid-cols-12 w-[500px] gap-5 relative">
      <Link href="./home" className="p-5 absolute left-0 top-0 flex items-center gap-1 text-gray-500">
        <BsCaretLeftFill />
        <p className="text-xs font-semibold">Voltar</p>
      </Link>
      <h1 className="font-bold text-3xl col-span-12 text-center">Crie sua conta</h1>
      <Input width="col-span-12" name="name" label="Nome" />
      <Input width="col-span-12" name="email" label="Email" />
      <InputPass width="col-span-12" name="password" label="Senha" />
      <InputPass width="col-span-12" name="confirm_pass" label="Confirmar Senha" />
      <div className="col-span-12 mt-5">
        <Button type="button" title="Criar Conta" full color="bg-red-500 border-red-600 hover:bg-red-600 focus:ring-red-600" onSubmit={handleSubmit} />
      </div>
      <div className="col-span-12 flex gap-1 text-sm font-medium">
        <p>Já possui conta?</p>
        <Link href="./login" className="text-red-600 font-semibold">Entrar agora</Link>
      </div>
    </Form>
  )
}
