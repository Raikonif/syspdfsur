import React, { useContext, useState } from "react";
import { supabaseAuth, supabaseVerifyCodeOTP } from "~/service/supabase/supabaseAuth.service";
import toast from "react-hot-toast";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import AdminContext from "~/pages/admin/context/AdminContext";

function Login() {
  const [enableCode, setEnableCode] = useState(false);

  const { authVerify, setAuthVerify, setUser, user } = useContext(AdminContext);

  const handleSubmit = async () => {
    const { data, error } = await supabaseAuth(authVerify.email);
    data && setEnableCode(true);
    error && console.log("error", error);
    error
      ? toast.error("Error al enviar el magic Link")
      : toast.success(`Magic Link enviado a tu correo ${authVerify.email}`);
  };
  const handleSubmitToken = async () => {
    const {
      data: { session },
      error,
    } = await supabaseVerifyCodeOTP(authVerify.email, authVerify.token);
    if (session) {
      setUser(session);
      toast.success("Logged!!!");
      console.log("session", session);
      console.log("user", user);
    } else {
      toast.error("no se pudo enviar correctamente");
      console.log("error", error);
    }
  };
  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico:
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={authVerify.email}
                  onChange={(e) => setAuthVerify({ ...authVerify, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Button
                onPress={async () => await handleSubmit()}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Introduce El Codigo de Verificación:
              </label>
              <div className="mt-1">
                <Input
                  id="code"
                  name="code"
                  type="text"
                  required
                  placeholder={"XXXXXX"}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={authVerify.token}
                  onChange={(e) => setAuthVerify({ ...authVerify, token: e.target.value })}
                />
              </div>
              <Button
                color={"secondary"}
                variant={"shadow"}
                className="w-full"
                onPress={async () => await handleSubmitToken()}
              >
                {"Verificar Codigo e Ingresar"}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
