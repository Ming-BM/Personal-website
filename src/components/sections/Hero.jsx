import { GithubIcon, LinkedinIcon, EmailIcon } from '../icons/Icons';
import { contactData } from '../../data/contact';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:20px_20px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-blue-500 text-lg font-mono">const developer = {'{'}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold">
            你好，我是{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mingda Bi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            软件工程专业学生 | 云计算 & 全栈开发 | 系统管理
          </p>
          <div className="inline-block">
            <span className="text-blue-500 text-lg font-mono">{'}'}</span>
          </div>
          <div className="flex justify-center space-x-4 pt-6">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition"
            >
              联系我
            </a>
          </div>
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="text-gray-400 hover:text-blue-500 transition"
              title="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
