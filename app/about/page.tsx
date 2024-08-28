import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full sm:w-2/3 animate-slideInFromBottom p-4 my-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>KAR Structural Consultancy is committed to providing exceptional engineering solutions. Our team of experts specializes in innovative designs for commercial, residential, and industrial projects.</p>
      </div>
      <div className="w-full sm:w-2/3 animate-slideInFromBottom p-4 my-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Structural Engineering</li>
          <li>Consultancy Services</li>
          <li>Project Management</li>
          <li>Structural Analysis</li>
        </ul>
      </div>
      <div className="w-full sm:w-2/3 animate-slideInFromBottom p-4 my-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col">
          <label className="mb-2 font-bold" htmlFor="name">Name:</label>
          <input className="mb-4 p-2 border rounded" type="text" id="name" name="name" />
          <label className="mb-2 font-bold" htmlFor="email">Email:</label>
          <input className="mb-4 p-2 border rounded" type="email" id="email" name="email" />
          <label className="mb-2 font-bold" htmlFor="message">Message:</label>
          <textarea className="mb-4 p-2 border rounded" id="message" name="message"></textarea>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
