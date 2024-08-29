import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Input, Textarea } from "@nextui-org/react";
import toast from "react-hot-toast";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "~/constants/service/service.constants";

function Contact() {
  const [emailSent, setEmailSent] = useState({
    email: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    user_email: "",
    reply_to: "",
    user_name: "",
    message: "",
  });
  const form = useRef<HTMLFormElement | string>("");
  const regexNum = "/^\\+\\d{1,3}\\d{6,14}$/\n";
  const validateData = () => {
    return !(
      !formData.user_email ||
      !formData.message ||
      (!formData.user_name &&
        (!formData.reply_to.toString().match(regexNum) || formData.reply_to.length !== 0))
    );
  };

  const sendOnJS = (e: any) => {
    e.preventDefault();
    if (validateData()) {
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            user_name: formData.user_name,
            message: formData.message,
            user_email: formData.user_email,
            reply_to: formData.reply_to,
          },
          { publicKey: PUBLIC_KEY },
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Mensaje enviado correctamente");
          // Handle success response
        })
        .catch((error) => {
          console.error("FAILED...", error);
          toast("Error al enviar el mensaje", { icon: "❌" });
          // Handle error response
        });
      setFormData({
        user_email: "",
        user_name: "",
        message: "",
        reply_to: "",
      });
    } else {
      toast.error("Por favor, complete todos los campos o coloque todos los datos correctamente");
    }
  };

  return (
    <section id="contact" className="w-full bg-yellow-400 py-12 md:py-24 lg:py-32">
      <form onSubmit={sendOnJS}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-950 sm:text-4xl md:text-5xl">
                Contáctame
              </h2>
              <p className="mx-auto max-w-[600px] text-purple-900 md:text-xl/relaxed">
                Escribeme a un e-mail
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex flex-col gap-2">
                <Input
                  className="h-10 flex-1 rounded-md border border-purple-300 bg-white px-3 py-2 text-sm text-purple-950 placeholder:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Ingrese su nombre completo"
                  value={formData.user_name}
                  onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                  type="text"
                />
                <Input
                  className="h-10 flex-1 rounded-md border border-purple-300 bg-white px-3 py-2 text-sm text-purple-950 placeholder:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Ingrese su correo electronico"
                  value={formData.user_email}
                  onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                  type="email"
                />
                <Textarea
                  className="h-10 flex-1 rounded-md border border-purple-300 bg-white px-3 py-2 text-sm text-purple-950 placeholder:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Escriba su mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button
                  className="h-10 rounded-md bg-purple-950 px-8 text-sm font-medium text-yellow-400 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="button"
                >
                  Enviar Mensaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
