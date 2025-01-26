const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Contact Me</h1>
      <div className="max-w-xl mx-auto bg-[#1a1a2e] p-8 rounded-lg border border-gray-800">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-[#0B0B1E] border border-gray-800 rounded-lg text-white focus:border-purple-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-[#0B0B1E] border border-gray-800 rounded-lg text-white focus:border-purple-500 focus:outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-[#0B0B1E] border border-gray-800 rounded-lg text-white focus:border-purple-500 focus:outline-none"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;