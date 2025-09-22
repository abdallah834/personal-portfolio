"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

/////////////////// using local api to send a mail using gmail it also relies on the API folder /////////////////
// {
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Loader2Icon } from "lucide-react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// const DANGEROUS_PATTERNS = [
//   /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // Script tags
//   /<iframe\b[^>]*>/gi, // Iframe tags
//   /javascript:/gi, // JavaScript protocol
//   /vbscript:/gi, // VBScript protocol
//   /on\w+\s*=/gi, // Event handlers (onclick, onload, etc.)
//   /<object\b[^>]*>/gi, // Object tags
//   /<embed\b[^>]*>/gi, // Embed tags
//   /<form\b[^>]*>/gi, // Form tags
//   /data:text\/html/gi, // Data URLs with HTML
//   /[\x00-\x1f\x7f-\x9f]/g, // Control characters
//   /\${.*?}/g, // Template literals
//   /\$\(.*?\)/g, // jQuery-like selectors
//   /eval\s*\(/gi, // eval() function
//   /Function\s*\(/gi, // Function constructor
//   /setTimeout\s*\(/gi, // setTimeout
//   /setInterval\s*\(/gi, // setInterval
// ];
// const SQL_INJECTION_PATTERNS = [
//   /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
//   /('|(\\')|(;)|(\\;)|(\-\-)|(\#)|(\*)|(\%27)|(\%3B)|(\%23)|(\%2A))/gi,
//   /(\bOR\b.*\b=\b)|(\bAND\b.*\b=\b)/gi,
// ];
// export default function ContactForm() {
//   const schema = z.object({
//     name: z
//       .string()
//       .regex(/^[a-zA-ZÀ-ÿĀ-žА-я\u4e00-\u9fff\s'-]{1,100}$/, {
//         message: "Make sure to enter a valid name",
//       })
//       .min(1, { message: "Name is required" }),
//     email: z
//       .email()
//       .regex(
//         /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/,
//         { message: "Invalid email" }
//       ),
//     subject: z
//       .string()
//       .regex(/^[a-zA-Z0-9\sÀ-ÿĀ-žА-я\u4e00-\u9fff.,!?:;()\-_'"]{1,200}$/, {
//         message: "Make sure to enter a valid subject title",
//       }),
//     message: z
//       .string()
//       .regex(
//         /^[a-zA-Z0-9\sÀ-ÿĀ-žА-я\u4e00-\u9fff.,!?:;()'"@#$%&*+=\-_/\\[\]{}|~`\n\r]{1,5000}$/,
//         {
//           message: "Make sure to enter a valid message",
//         }
//       )
//       .min(3, { message: "Minimum 3 characters needed" }),
//   });
//   const form = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: { name: "", email: "", subject: "", message: "" },
//   });
//   const [submitting, setIsSubmitting] = useState(false);
//   const onSubmission = async (data: z.infer<typeof schema>) => {
//     if (
//       DANGEROUS_PATTERNS.some((pattern) =>
//         pattern.test(Object.values(data.email).toString())
//       ) ||
//       DANGEROUS_PATTERNS.some((pattern) =>
//         pattern.test(Object.values(data.name).toString())
//       ) ||
//       DANGEROUS_PATTERNS.some((pattern) =>
//         pattern.test(Object.values(data.subject).toString())
//       ) ||
//       DANGEROUS_PATTERNS.some((pattern) =>
//         pattern.test(Object.values(data.message).toString())
//       ) ||
//       SQL_INJECTION_PATTERNS.some((pattern) =>
//         pattern.test(Object.values(data.message).toString())
//       )
//     ) {
//       alert("Malicious code detected!");
//     }

//     try {
//       console.log(data);
//       setIsSubmitting(true);
//       const response: any = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const resData = await response.json();
//       console.log(resData);
//       toast.success("Message sent successfully!");
//     } catch (error) {
//       console.log(error);
//       toast.error("There was an error sending your message.");
//     } finally {
//       setIsSubmitting(false);
//       form.reset();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-4 h-screen">
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmission)}
//           className="space-y-8 min-w-92 mx-auto flex flex-col justify-center text-white"
//         >
//           {/******************** name ********************/}
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-white">Name</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Your name"
//                     {...field}
//                     type="string"
//                     className="selection:bg-blue-400 placeholder:text-white/60"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/******************** Email ********************/}
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-white">Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="example@gmail.com"
//                     {...field}
//                     className="selection:bg-blue-400 placeholder:text-white/60"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/******************** subject ********************/}
//           <FormField
//             control={form.control}
//             name="subject"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-white">Subject</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Your subject"
//                     {...field}
//                     type="string"
//                     className="selection:bg-blue-400 placeholder:text-white/60"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/******************** message ********************/}
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-white">Message</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Your message"
//                     {...field}
//                     type="text"
//                     className="selection:bg-blue-400 placeholder:text-white/60"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {submitting === true ? (
//             <Button type="submit" disabled>
//               <Loader2Icon className="animate-spin" />
//               Submit
//             </Button>
//           ) : (
//             <Button type="submit">Submit</Button>
//           )}
//         </form>
//       </Form>
//     </div>
//   );
// }
// }

export default function Contact() {
  const personalGmail = "abdallahayman834@gmail.com";

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 h-screen">
      <AnimatedContent
        distance={120}
        direction="vertical"
        initialOpacity={0}
        animateOpacity
        threshold={0}
        duration={2}
        reverse={false}
        ease="power3.out"
        scale={1}
      >
        <div className="bg-transparent flex flex-col gap-6 items-center justify-center p-8 rounded-lg border border-white/20 bg-linear-120 from-40% from-white/15 to-blue-300/40 to-110%  backdrop-blur-xs">
          <h3 className="text-white font-[Bebas_Neue] tracking-wider text-xl text-center">
            If you would like to contact me:
          </h3>
          <Link
            href={`https://mail.google.com/mail/u/0/?to=${personalGmail}&fs=1&tf=cm`}
            target="_blank"
          >
            <button className="px-4 py-2 bg-zinc-100 text-black rounded hover:bg-zinc-300 cursor-pointer flex items-center gap-4 relative bottom-[3px] active:bottom-0 transition-all duration-300 active:scale-95 ease-in-out">
              <Icon icon="logos:google-gmail" className="text-xl" />
              <span className="text-lg font-semibold">
                Contact Me Via Gmail
              </span>
            </button>
          </Link>
        </div>
      </AnimatedContent>
    </div>
  );
}
