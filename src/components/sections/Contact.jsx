import SectionTitle from '../ui/SectionTitle';
import { EmailIcon, PhoneIcon, GithubIcon } from '../icons/Icons';
import { contactData } from '../../data/contact';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="text-xl text-gray-300 mb-12">
          Interested in my work or want to collaborate? Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-950 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
            <EmailIcon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href={`mailto:${contactData.email}`}
              className="text-blue-500 hover:underline break-all"
            >
              {contactData.email}
            </a>
          </div>
          <div className="bg-slate-950 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
            <PhoneIcon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a
              href={`tel:${contactData.phoneLink}`}
              className="text-blue-500 hover:underline"
            >
              {contactData.phone}
            </a>
          </div>
          <div className="bg-slate-950 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition">
            <GithubIcon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {contactData.githubUsername}
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${contactData.email}`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-medium text-lg transition transform hover:scale-105"
          >
            Send Email
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-12 py-4 rounded-lg font-medium text-lg transition transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
