"use client";
import { Form, Input, Button } from "design-system-toshyro";
import { BsCaretLeftFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Link from "next/link";
import { recoverPassword } from "@/services/firebase/authentication";

export default function Recover() {

  async function handleSubmit(data: any) {
    const res = await recoverPassword(data.email)
    if(!res.success) return toast.error(res.message)
    toast.success("Email de recuperação enviado com sucesso!");
  }

  return (
    <Form className="bg-white shadow-md rounded-xl p-12 grid grid-cols-12 w-[500px] gap-5 relative">
      <Link href="./login" className="p-5 absolute left-0 top-0 flex items-center gap-1 text-gray-500">
        <BsCaretLeftFill />
        <p className="text-xs font-semibold">Voltar</p>
      </Link>
      <h1 className="font-bold text-3xl col-span-12 text-center">Recuperação da senha</h1>
      <Input width="col-span-12" type="email" name="email" label="Email" />
      <div className="col-span-12 mt-5">
        <Button title="Enviar email" color="bg-red-500 border-red-600 hover:bg-red-600 focus:ring-red-600" full onSubmit={handleSubmit} />
      </div>
    </Form>
  )
}
