'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Minus, Square, X } from 'lucide-react';

const CmdContactForm = () => {
  const [output, setOutput] = useState([
    { text: "Welcome to the CMD Contact Form", color: "text-yellow-400" },
    { text: "Please provide the following information:", color: "text-yellow-400" },
    { text: "", color: "text-green-500" },
    { text: "Enter your name:", color: "text-blue-400" }
  ]);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [currentField, setCurrentField] = useState("name");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const validateInput = (field, value) => {
    switch (field) {
      case 'name':
        return value.length < 2 ? "Name must be at least 2 characters long." : null;
      case 'email':
        return !value.includes('@') ? "Please enter a valid email address." : null;
      case 'message':
        return value.length < 10 ? "Message must be at least 10 characters long." : null;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const error = validateInput(currentField, input.trim());
    if (error) {
      setOutput(prev => [
        ...prev,
        { text: "", color: "text-green-500" },
        { text: `Error: ${error}`, color: "text-red-500" },
        { text: "", color: "text-green-500" },
        { text: `Enter your ${currentField}:`, color: "text-blue-400" }
      ]);
      setInput("");
      return;
    }

    setFormData(prev => ({ ...prev, [currentField]: input.trim() }));
    setOutput(prev => [
      ...prev,
      { text: "", color: "text-green-500" },
      { text: `C:\\Contact>${input}`, color: "text-green-500" },
      { text: "", color: "text-green-500" }
    ]);

    if (currentField === 'name') {
      setCurrentField('email');
      setOutput(prev => [...prev, { text: "Enter your email:", color: "text-blue-400" }]);
    } else if (currentField === 'email') {
      setCurrentField('message');
      setOutput(prev => [...prev, { text: "Enter your message:", color: "text-blue-400" }]);
    } else {
      setOutput(prev => [
        ...prev,
        { text: "Thank you for your submission. Sending your message...", color: "text-yellow-400" },
        { text: "", color: "text-green-500" },
        { text: "Message sent successfully!", color: "text-green-400" },
        { text: "", color: "text-green-500" },
        { text: "Form Data:", color: "text-purple-400" },
        { text: `Name: ${formData.name}`, color: "text-purple-400" },
        { text: `Email: ${formData.email}`, color: "text-purple-400" },
        { text: `Message: ${input.trim()}`, color: "text-purple-400" },
        { text: "", color: "text-green-500" },
        { text: "Thank you for contacting us. We will get back to you soon.", color: "text-yellow-400" },
        { text: "", color: "text-green-500" },
        { text: "Type 'reset' to start over or close this window.", color: "text-blue-400" }
      ]);
    }

    setInput("");
  };

  const resetForm = () => {
    if (input.toLowerCase() === 'reset') {
      setFormData({ name: "", email: "", message: "" });
      setCurrentField('name');
      setOutput([
        { text: "Welcome to the CMD Contact Form", color: "text-yellow-400" },
        { text: "Please provide the following information:", color: "text-yellow-400" },
        { text: "", color: "text-green-500" },
        { text: "Enter your name:", color: "text-blue-400" }
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    resetForm();
  }, [input]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
      <div className="bg-gray-700 p-2 flex justify-between items-center">
        <div className="flex items-center">
          <Terminal className="mr-2 text-green-500" size={16} />
          <span className="text-white font-semibold">CMD Contact Form</span>
        </div>
        <div className="flex space-x-2">
          <Minus className="text-gray-400 hover:text-white cursor-pointer" size={16} />
          <Square className="text-gray-400 hover:text-white cursor-pointer" size={16} />
          <X className="text-gray-400 hover:text-white cursor-pointer" size={16} />
        </div>
      </div>
      <div className="bg-black font-mono p-4 h-[440px] overflow-y-auto">
        <div className="whitespace-pre-wrap">
          {output.map((line, index) => (
            <div key={index} className={line.color}>{line.text}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-2 flex">
          <span className="text-green-500">C:\Contact&gt;</span>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className="flex-grow bg-transparent outline-none ml-1 text-green-500"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default CmdContactForm;