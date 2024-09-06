"use client"
import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', business: '' , location: ''});
  const [submitted, setSubmitted] = useState(false);
// Config variables
  
const handleSubmit = async (e:any) => {
  e.preventDefault();
if (submitted) {toast.error('Already Submitted.')};
  try {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Details uploaded. Well done")
      setSubmitted(true);
    }
  } catch (error) {
    toast.error('Failed to submit form.')
    console.error('Failed to submit form:', error);
  }
};

//const newRow = { "Column 1": "Andris", "Column 2": "Aberdeen" , "Column 3": "andris.lukovskis@gmail.com"  , "Column 4": "StandinOn"  };




  return (
    <main className="flex min-h-screen flex-col items-center  from-gray-400 to-gray-300 bg-gradient-to-r" >
      
      <p className="w-full text-3xl h-16 pt-3 pl-10 bg-gray-700">EPI-USE Assessment</p>

      <div className="w-4/6 h-[70vh] bg-white/90 mt-20 rounded-md">

      <p className="text-2xl text-center p-2 w-full text-neutral-900 font-semibold border-b"> Weather Form</p>

      <div className="flex-row mt-10">
      <div className="p-5 w-full h-full flex flex-row-reverse">
      <form className="w-1/2 text-center" onSubmit={handleSubmit}>
        <p className="py-1 text-black">Full Name <span className="text-red-700">*</span></p>
        <input type="text" id="name" className="h-10 w-96 p-1 mb-5 border-2 rounded-md border-neutral-300 text-black"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required></input>

        <p className="py-1 text-black">Email <span className="text-red-700">*</span></p>
        <input type="text" id="email" className="h-10 w-96 p-1 mb-5 border-2 rounded-md border-neutral-300 text-black"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required></input>

        <p className="py-1 text-black">Business Name <span className="text-red-700">*</span></p>
        <input type="text" id="business" className="h-10 w-96 p-1 mb-5 border-2 rounded-md border-neutral-300 text-black"
        value={formData.business}
        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
        required></input>

        <p className="py-1 text-black">Location <span className="text-red-700">*</span></p>
        <input type="text" id="location" className="h-10 w-96 p-1 mb-5 border-2 rounded-md border-neutral-300 text-black"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        required></input>
        <p className="py-1 text-black"></p>
        <button type="submit" disabled={submitted} className="bg-green-600 text-xl mt-5 px-7 py-2 rounded-md hover:cursor-pointer hover:bg-green-400 disabled:bg-green-200 disabled:cursor-not-allowed disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none">{!submitted ? "Submit" : "Submitted"} </button>
      </form>
      <div className="text-black px-14  text-center w-1/2">
      <p>To receive your personalized weather forecast, please take a moment to complete the form. To receive your personalized weather forecast, please take a moment to complete the form</p>
      <p className="mt-3"> By providing your details, you'll ensure that we can deliver accurate and timely weather updates directly to you. We value your privacy and will only use your information for this purpose.</p>
      <p className="mt-40"> Thank you for trusting us to keep you informed and prepared!</p>
      </div>
      <p></p>
      </div>
      
      
      </div>
      </div>

    </main>
  );
}
