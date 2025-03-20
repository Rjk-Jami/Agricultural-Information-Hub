"use client"
import { useState } from "react";
import { Upload } from "lucide-react";
const page = () => {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        expertise: "",
        message: "",
        file: null,
      });
      
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() || "" });
      };
    
      const handleExpertiseChange = (value) => {
        setFormData({ ...formData, expertise: value.trim() || "" });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] || null });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        setSubmitted(true);
      };
    
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Contact Agricultural Experts
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions about farming practices, crop management, or pest
          control? Our team of agricultural experts is here to help. Fill out
          the form below to get in touch.
        </p>
      </div>
      <div className="max-w-3xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg border border-green-200">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Contact Us
        </h2>
        {submitted ? (
        <div className="text-center text-green-700 text-lg font-semibold">
          Thank you for your inquiry! We will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-green-800 font-medium">Name <span className="text-red-500">*</span></label>
              <input required id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-green-800 font-medium">Email <span className="text-red-500">*</span></label>
              <input required id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email address" className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-green-800 font-medium">Phone Number (Optional)</label>
              <input required id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500" />
            </div>
            <div className="space-y-2">
              <label htmlFor="expertise" className="text-green-800 font-medium">Area of Expertise Needed</label>
              <select required id="expertise" value={formData.expertise} onChange={(e) => handleExpertiseChange(e.target.value)} className="w-full p-3 border border-green-200 rounded-lg focus:border-green-500">
                <option value="" disabled>Select area of expertise</option>
                <option value="crop-management">Crop Management</option>
                <option value="pest-control">Pest Control</option>
                <option value="soil-health">Soil Health</option>
                <option value="irrigation">Irrigation Systems</option>
                <option value="organic-farming">Organic Farming</option>
                <option value="livestock">Livestock Management</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-green-800 font-medium">Message <span className="text-red-500">*</span></label>
            <textarea required id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your inquiry or issue in detail" className="w-full p-3 min-h-[150px] border border-green-200 rounded-lg focus:border-green-500"></textarea>
          </div>
          <div className="space-y-2">
            <label htmlFor="file-upload" className="text-green-800 font-medium">Attachment (Optional)</label>
            <div className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center">
              <input required id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf,.doc,.docx" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Upload className="h-8 w-8 text-green-500" />
                  <span className="text-sm font-medium text-green-700">Click to upload or drag and drop</span>
                  <span className="text-xs text-gray-500">PNG, JPG, PDF, DOC up to 5MB</span>
                </div>
              </label>
              {formData.file && <div className="mt-4 text-sm text-green-700">File selected: {formData.file.name}</div>}
            </div>
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">Submit Inquiry</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default page;
