import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const [sending,setSending] = useState(false);
  const [attempts,setAttempts] = useState(0);
  const [lastAttempt,setLastAttempt] = useState(0);

  const MAX_ATTEMPTS = 3;
  const COOLDOWN = 60000;

  const sendEmail = (e) => {

    e.preventDefault();

    const now = Date.now();

    if(attempts >= MAX_ATTEMPTS && now - lastAttempt < COOLDOWN){
      alert("Too many attempts. Try again in 1 minute.");
      return;
    }

    if(form.current.botcheck.value !== ""){
      return;
    }

    const mobile = form.current.mobile.value;
    const phoneRegex = /^[0-9]{10}$/;

    if(!phoneRegex.test(mobile)){
      alert("Enter valid 10 digit mobile number");
      return;
    }

    setSending(true);

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(()=>{

      alert("Message sent successfully 🚀");

      form.current.reset();

      setAttempts(attempts+1);
      setLastAttempt(now);
      setSending(false);

    })

    .catch(()=>{

      alert("Failed to send message ❌");

      setAttempts(attempts+1);
      setLastAttempt(now);
      setSending(false);

    });

  };

  return (

<div
id="contact"
className="px-6 md:px-16 lg:px-24 py-24 text-white"
>

<h1
data-aos="fade-up"
className="text-4xl md:text-5xl font-semibold text-center mb-16"
>
Let's <span className="text-purple-400">Connect</span>
</h1>

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

{/* LEFT FORM */}

<form
ref={form}
onSubmit={sendEmail}
data-aos="zoom-in"
className="flex flex-col gap-6 p-8 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-white/10
shadow-[0_0_40px_rgba(0,0,0,0.4)]
hover:border-purple-500/40
transition-all duration-500"
>

<input type="text" name="botcheck" className="hidden"/>

<div className="flex flex-col gap-2">
<label>Name *</label>
<input
type="text"
name="name"
required
placeholder="Enter your name"
className="bg-white/5 border border-white/10
rounded-lg px-4 py-3
outline-none focus:border-purple-500"
/>
</div>

<div className="flex flex-col gap-2">
<label>Email *</label>
<input
type="email"
name="email"
required
placeholder="Enter your email"
className="bg-white/5 border border-white/10
rounded-lg px-4 py-3
outline-none focus:border-purple-500"
/>
</div>

<div className="flex flex-col gap-2">
<label>Mobile *</label>
<input
type="tel"
name="mobile"
required
placeholder="Enter mobile number"
className="bg-white/5 border border-white/10
rounded-lg px-4 py-3
outline-none focus:border-purple-500"
/>
</div>

<div className="flex flex-col gap-2">
<label>You are a *</label>
<select
name="role"
className="bg-white/5 border border-white/10
rounded-lg px-4 py-3
outline-none focus:border-purple-500"
>
<option className="text-black">HR</option>
<option className="text-black">Friend</option>
<option className="text-black">Other</option>
</select>
</div>

<div className="flex flex-col gap-2">
<label>Message *</label>
<textarea
name="message"
rows="4"
required
placeholder="Enter your message"
className="bg-white/5 border border-white/10
rounded-lg px-4 py-3
resize-none outline-none
focus:border-purple-500"
/>
</div>

<button
type="submit"
disabled={sending}
className="mt-4 w-full px-8 py-3
bg-purple-600 rounded-lg font-medium
hover:bg-purple-700 transition
disabled:opacity-50"
>
{sending ? "Sending..." : "Submit"}
</button>

</form>


{/* RIGHT SIDE CARDS */}

<div className="flex flex-col gap-4">

{/* Card 1 */}

<div
data-aos="fade-up"
data-aos-delay="100"
className="p-8 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-white/10
hover:border-purple-500/40"
>

<h4 className="text-xl font-semibold mb-2">
Let's Work Together
</h4>

<p className="text-zinc-300">
I'm always excited to collaborate on interesting projects,
whether it's web development, design, or cybersecurity research.
</p>

</div>


{/* Card 2 */}

<div
data-aos="fade-up"
data-aos-delay="200"
className="p-7 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-white/10
hover:border-purple-500/40"
>

<h4 className="text-xl font-semibold mb-2">
Email Me
</h4>

<p className="text-zinc-300">
electronicsprojects33@gmail.com
</p>

</div>


{/* Card 3 */}

<div
data-aos="fade-up"
data-aos-delay="300"
className="p-7 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-white/10
hover:border-purple-500/40"
>

<h4 className="text-xl font-semibold mb-2">
Call Me
</h4>

<p className="text-zinc-300">
+91 8720091829
</p>

</div>


{/* Card 4 */}

<div
data-aos="fade-up"
data-aos-delay="400"
className="p-7 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-white/10
hover:border-purple-500/40"
>

<h4 className="text-xl font-semibold mb-2">
Location
</h4>

<p className="text-zinc-300">
Currently in <strong>Bhopal, India</strong> but open to working worldwide.
</p>

</div>


{/* Card 5 SOCIAL */}

<div
data-aos="fade-up"
data-aos-delay="500"
className="p-8 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-white/10
hover:border-purple-500/40 flex flex-col gap-4"
>

<h4 className="text-xl font-semibold">
Find Me Online
</h4>

<div className="flex gap-6 text-2xl">

<a
href="https://github.com/anshsahu-01"
target="_blank"
rel="noopener noreferrer"
className="hover:text-purple-400 transition"
>
<i className="fab fa-github"></i>
</a>

<a
href="https://linkedin.com/in/anshsahu01"
target="_blank"
rel="noopener noreferrer"
className="hover:text-purple-400 transition"
>
<i className="fab fa-linkedin"></i>
</a>
<a
href="https://instagram.com/anshhu_01"
target="_blank"
rel="noopener noreferrer"
className="hover:text-purple-400 transition"
>
<i className="fab fa-instagram"></i>
</a>
<a
href="https://www.facebook.com/share/1Awsto9txx/"
target="_blank"
rel="noopener noreferrer"
className="hover:text-purple-400 transition"
>
<i className="fab fa-facebook"></i>
</a>

</div>

</div>

</div>

</div>

</div>

  );

};

export default Contact;