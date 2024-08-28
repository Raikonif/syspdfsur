import React, { useContext, useState } from "react";
import { BookOpen, Menu, X, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useNavigate } from "react-router-dom";
import { supabaseAuth } from "~/service/supabase/supabaseAuth.service";
import toast from "react-hot-toast";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaCode, FaDiaspora, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Login() {
  const [enableCode, setEnableCode] = useState(false);

  const { authVerify, setAuthVerify, setLoading, authData } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { data, error } = await supabaseAuth(authVerify.email);
    data && setEnableCode(true);
    error && console.log("error", error);
    error
      ? toast.error("Error al enviar el magic Link")
      : toast.success(`Magic Link enviado a tu correo ${authVerify.email}`);
  };

  const handleSubmitToken = async () => {
    try {
      const canLogin = await authData(authVerify);
      if (canLogin) {
        setLoading(false);
        navigate("/adm/cases");
      } else {
        setLoading(false);
        toast.error("no se pudo enviar correctamente");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error inesperado al iniciar sesión");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-purple-950 text-white">
      <main className="flex-1 pt-16">
        <div className="container mx-auto flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 py-8 lg:flex-row">
          <div className="mb-8 lg:mb-0 lg:pr-8">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl lg:text-6xl">
              Ingresa al Panel Administrador.
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Ingresa tu correo electrónico para recibir un magic link y acceder a tu cuenta.
            </p>
          </div>
          <div className="flex w-full max-w-lg flex-col items-center justify-center">
            <form className="rounded-lg p-8">
              <div className="mb-3">
                <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                  Correo Electrónico:
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-purple-700 bg-purple-800 py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="you@example.com"
                    aria-autocomplete={"none"}
                    value={authVerify.email}
                    onChange={(e) => setAuthVerify({ ...authVerify, email: e.target.value })}
                    required
                  />
                  <IoMail className="absolute left-3 top-5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <Button
                  onPress={async () => await handleSubmit()}
                  className="flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Enviar Magic Link
                </Button>
              </div>
              <motion.div
                className={`${enableCode ? "visible" : "invisible"} container flex w-full flex-col`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.5 }}
              >
                <div className="mt-5">
                  <label htmlFor="password" className="mb-2 block text-sm text-gray-300">
                    Introduce El Codigo de Verificación:
                  </label>
                  <div className="relative">
                    <Input
                      id="code"
                      name="code"
                      type="text"
                      className="mb-3 w-full rounded-md border border-yellow-700 bg-yellow-800 py-2 pl-10 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="El codigo es de 6 dígitos"
                      aria-autocomplete={"none"}
                      value={authVerify.token}
                      onChange={(e) => setAuthVerify({ ...authVerify, token: e.target.value })}
                      required
                    />
                    <FaDiaspora className="absolute left-3 top-5 h-5 w-5 text-gray-400" />
                    <Button
                      color={"secondary"}
                      variant={"shadow"}
                      className="flex w-full justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                      onPress={async () => await handleSubmitToken()}
                    >
                      {"Verificar Codigo e Ingresar"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-purple-800 bg-purple-950 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <p className="text-xs text-gray-400">© 2024 Raikonif. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
