import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Development",
    categoryTh: "การพัฒนาปัญญาประดิษฐ์ (AI)",
    description: "Deep learning models, neural speech architectures, runtime acceleration, and model quantization.",
    descriptionTh: "การพัฒนาโมเดล Deep Learning, สถาปัตยกรรมโมเดลเสียง, รันไทม์ประสิทธิภาพสูง และการทำ Quantization",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "ONNX Runtime", highlight: true },
      { name: "Model Quantization", highlight: true },
    ],
  },
  {
    category: "AI Chatbots",
    categoryTh: "เอไอแชทบอทและการประยุกต์ใช้งาน",
    description: "Hands-on experience with premier conversational and coding assistant models.",
    descriptionTh: "การใช้งานและสั่งการโมเดลผู้ช่วยปัญญาประดิษฐ์ชั้นนำสำหรับการทำงานและการเขียนโค้ด",
    skills: [
      { name: "Copilot Chat" },
      { name: "ChatGPT" },
      { name: "Gemini", highlight: true },
      { name: "Claude", highlight: true },
    ],
  },
  {
    category: "Programming Languages",
    categoryTh: "ภาษาโปรแกรม",
    description: "Modern, high-performance systems and application programming languages.",
    descriptionTh: "ภาษาโปรแกรมสำหรับการพัฒนาระบบ แอปพลิเคชัน และซอฟต์แวร์ประสิทธิภาพสูง",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "Rust", highlight: true },
      { name: "Dart" },
      { name: "Python", highlight: true },
    ],
  },
  {
    category: "Web & Frontend",
    categoryTh: "การพัฒนาเว็บและส่วนต่อประสาน",
    description: "Cutting-edge React and Next.js frameworks, responsive design systems, and modern styling.",
    descriptionTh: "การพัฒนาเว็บแอปพลิเคชันด้วย Next.js และ React พร้อมระบบดีไซน์ทันสมัย",
    skills: [
      { name: "Next.js", highlight: true },
      { name: "React", highlight: true },
      { name: "Chakra UI", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 / CSS3", highlight: true },
    ],
  },
  {
    category: "Mobile & Native UI",
    categoryTh: "โมบายล์และเนทีฟแอปพลิเคชัน",
    description: "Cross-platform mobile frameworks and lightweight desktop native user interfaces.",
    descriptionTh: "การสร้างแอปพลิเคชันมือถือข้ามแพลตฟอร์มและซอฟต์แวร์เดสก์ท็อปเนทีฟ",
    skills: [
      { name: "Flutter" },
      { name: "Slint UI", highlight: true },
    ],
  },
  {
    category: "Power Platform",
    categoryTh: "ระบบอัตโนมัติและแอปพลิเคชันองค์กร",
    description: "Enterprise low-code solutions, workflow automation, and collaborative data services.",
    descriptionTh: "ระบบสนับสนุนการทำงานภายในองค์กร การสร้างโฟลว์อัตโนมัติ และการเชื่อมโยงข้อมูล",
    skills: [
      { name: "Power Apps", highlight: true },
      { name: "Power Automate", highlight: true },
      { name: "Power BI" },
      { name: "SharePoint" },
    ],
  },
  {
    category: "Databases",
    categoryTh: "ระบบจัดการฐานข้อมูล",
    description: "Relational, structured, and real-time backend data storage engines.",
    descriptionTh: "ระบบจัดเก็บและบริหารจัดการฐานข้อมูลเชิงสัมพันธ์และเรียลไทม์",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL" },
      { name: "Firebase" },
    ],
  },
  {
    category: "Third-Party & Cloud",
    categoryTh: "บริการคลาวด์และแพลตฟอร์มภายนอก",
    description: "Modern cloud infrastructure, backend-as-a-service, and automation nodes.",
    descriptionTh: "โครงสร้างพื้นฐานคลาวด์ แพลตฟอร์ม Backend-as-a-Service และโหนดเชื่อมต่ออัตโนมัติ",
    skills: [
      { name: "Cloudflare", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "n8n", highlight: true },
    ],
  },
  {
    category: "Developer Tools",
    categoryTh: "เครื่องมือสำหรับนักพัฒนา",
    description: "Version control, IDE environments, and agentic AI pair-programming software.",
    descriptionTh: "เครื่องมือควบคุมเวอร์ชัน ซอฟต์แวร์สภาพแวดล้อมการเขียนโค้ด และ Agentic IDE",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code" },
      { name: "Antigravity", highlight: true },
    ],
  },
  {
    category: "Office Tools",
    categoryTh: "โปรแกรมสำนักงานและสเปรดชีต",
    description: "Advanced spreadsheet modeling, presentations, and business documentation.",
    descriptionTh: "โปรแกรมบริหารจัดการข้อมูล สเปรดชีตขั้นสูง การนำเสนอ และงานเอกสารเชิงธุรกิจ",
    skills: [
      { name: "Microsoft Excel", highlight: true },
      { name: "Microsoft PowerPoint" },
      { name: "Microsoft Word" },
    ],
  },
  {
    category: "Design Tools",
    categoryTh: "เครื่องมือออกแบบและสื่อมัลติมีเดีย",
    description: "Graphic layout creation, multimedia asset production, and digital video editing.",
    descriptionTh: "การออกแบบสื่อกราฟิก งานนำเสนอ และการตัดต่อสื่อวิดีโอมัลติมีเดีย",
    skills: [
      { name: "Canva", highlight: true },
      { name: "CapCut" },
      { name: "Adobe Premiere Pro" },
    ],
  },
];
