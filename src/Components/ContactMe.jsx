import React, { useState } from 'react';
import { contactDetails } from "../Constraints/Form.js";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactMe() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xkowbrnr", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus("success");
                e.target.reset(); // Clears the form
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="max-w-7xl mx-auto my-10 px-6">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 p-10 gap-20 bg-white ">
                <div className="flex flex-col">
                    <p className="text-sm font-bold text-blue-700 mb-1 uppercase tracking-widest">Contact Us</p>
                    <div className="space-y-6">
                        <h2 className="font-inter_bold text-3xl text-gray-900">Get in Touch</h2>
                        <div className="font-inter_regular text-sm text-gray-500 max-w-md">
                            <p>
                                Have a question or need more information? Feel free to contact us anytime.
                                We’re always happy to help and will get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-8 mt-8">
                            {contactDetails.map(({ icon: Icon, title, description }, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="rounded-lg p-3 bg-blue-950 shrink-0">
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-inter_bold text-lg text-gray-800">{title}</h4>
                                        <p className="text-sm font-inter_regular text-gray-600">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    {status === "success" ? (
                        // Success State UI
                        <div className="text-center p-10 bg-green-50 rounded-xl border border-green-200 animate-in fade-in duration-500">
                            <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
                            <p className="text-green-700 mt-2">Your message has been sent successfully. I'll get back to you soon.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-6 text-sm font-semibold text-green-700 underline hover:text-green-900"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        // Active Form UI
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                                <Send size={20} className={status === "loading" ? "animate-pulse" : ""} />
                            </button>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-600 text-sm font-medium mt-2">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}