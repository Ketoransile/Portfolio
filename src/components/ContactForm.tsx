"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { toast } from "sonner";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("access_key", "ae571f37-8e03-4b62-a37a-c558f552db2e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      // Send the data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        // Show success toast
        toast.success(
          "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible."
        );
        // Clear the form fields
        form.reset();
      } else {
        // Show error toast
        toast.error(
          "Oops! Something went wrong. Please try again later or reach out directly."
        );
      }
    } catch (error) {
      // Show error toast
      console.log(error);
      toast.error(
        "Oops! Something went wrong. Please try again later or reach out directly."
      );
    }
  }

  return (
    <div className="flex flex-col gap-4 max-md:p-6">
      <div className="flex gap-4 justify-center">
        <Link href="https://t.me/Kehtoran" target="_blank">
          <FaTelegram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdi-sileshi-56710a2a6"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/Ketoransile" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://www.instagram.com/abdi_sile/" target="_blank">
          <FaInstagram />
        </Link>
      </div>
      <div className="flex justify-between gap-4 max-md:flex-col items-center">
        <Link
          href="mailto:abdisileshi123@gmail.com"
          className="flex justify-center items-center gap-2 border border-slate-700 p-2 rounded-lg max-w-48 lg:min-w-48"
        >
          <MdOutlineEmail />
          <button className="text-xs">abdisileshi123@gmail.com</button>
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center gap-2 border border-slate-700 p-2 rounded-lg lg:max-w-48 lg:min-w-48"
        >
          <SlCalender />
          <button className="text-xs">Book a call</button>
        </Link>
      </div>
      <div className="">
        <p className="text-xs text-center text-slate-500">Or send a message</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Message</FormLabel> */}
                <FormControl>
                  {/* <Input placeholder="Your Message" {...field} /> */}
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full disabled:bg-slate-300"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sending..." : " Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
