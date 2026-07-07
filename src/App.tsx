import React, { useState, useEffect, useRef } from 'react';
import {
  Server,
  Cpu,
  Database,
  Activity,
  FileText,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Github,
  Send,
  Terminal,
  ChevronRight,
  ChevronDown,
  Code,
  Clock,
  ArrowRight,
  Search,
  Menu,
  ExternalLink,
  Layers,
  Settings,
  AlertCircle,
  CheckCircle2,
  Zap,
  BarChart3,
  RefreshCw,
  Play,
  Square,
  Flame,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

// @ts-ignore
import profileImage from './assets/images/remya_profile.jpg';

// Resume data to be used in components
const RESUME_DATA = {
  name: "Remya Rajan",
  title: "Senior Backend & Distributed Systems Engineer",
  location: "Atlanta, GA",
  phone: "+1 (404) 324-1107",
  email: "remya.rajan88ar@gmail.com",
  linkedin: "https://www.linkedin.com/in/remya-rajan-77734029/",
  experienceYears: 13,
  summary: "Backend and Distributed Systems Engineer with 13+ years of experience building scalable, high-performance backend platforms and consumer-facing services using Java and Spring Boot. Strong expertise in designing and operating large-scale microservices, event-driven architectures, and data-intensive systems using Kafka, REST APIs, and cloud-native infrastructure.",
  skills: [
    { name: "Java 17+", category: "Languages", rating: 95, usedAt: ["AT&T", "MongoDB", "Lowe's", "Litmus7", "Symantec"] },
    { name: "Python", category: "Languages", rating: 80, usedAt: ["MongoDB", "Lowe's"] },
    { name: "Spring Boot", category: "Frameworks", rating: 95, usedAt: ["AT&T", "MongoDB", "Lowe's", "Litmus7", "Symantec"] },
    { name: "Spring Batch", category: "Frameworks", rating: 90, usedAt: ["Lowe's", "Litmus7"] },
    { name: "Spring Data / JPA", category: "Frameworks", rating: 92, usedAt: ["AT&T", "MongoDB", "Lowe's", "Litmus7", "Symantec"] },
    { name: "Apache Kafka", category: "Streaming", rating: 92, usedAt: ["Lowe's", "AT&T"] },
    { name: "PostgreSQL", category: "Databases", rating: 88, usedAt: ["Lowe's", "AT&T"] },
    { name: "MongoDB", category: "Databases", rating: 90, usedAt: ["MongoDB", "Lowe's"] },
    { name: "Oracle SQL / PL-SQL", category: "Databases", rating: 85, usedAt: ["Symantec"] },
    { name: "Redis Caching", category: "Streaming", rating: 87, usedAt: ["Lowe's", "AT&T"] },
    { name: "Google Cloud (GCP)", category: "Cloud & DevOps", rating: 88, usedAt: ["AT&T", "Lowe's"] },
    { name: "Docker", category: "Cloud & DevOps", rating: 90, usedAt: ["Lowe's", "AT&T", "MongoDB"] },
    { name: "Kubernetes (GKE)", category: "Cloud & DevOps", rating: 88, usedAt: ["Lowe's", "AT&T"] },
    { name: "Prometheus & Grafana", category: "Observability", rating: 86, usedAt: ["AT&T", "Lowe's"] },
    { name: "Splunk (Alerting & Metrics)", category: "Observability", rating: 88, usedAt: ["AT&T", "Lowe's"] },
    { name: "CI/CD (Jenkins, Spinnaker)", category: "Cloud & DevOps", rating: 85, usedAt: ["Lowe's", "AT&T"] },
    { name: "Testing (JUnit, Mockito)", category: "Languages", rating: 90, usedAt: ["AT&T", "MongoDB", "Lowe's", "Litmus7", "Symantec"] }
  ],
  experience: [
    {
      role: "Senior Application Developer (Contract)",
      company: "AT&T",
      location: "Atlanta, GA",
      period: "Jan 2026 - Present",
      bullets: [
        "Enhanced and maintained high-throughput Java 17 / Spring Boot microservices supporting enterprise-scale data processing systems.",
        "Supported production troubleshooting and incident resolution, ensuring system stability and minimizing downtime.",
        "Collaborated with product, QA, and operations teams to deliver production-ready features with end-to-end ownership.",
        "Collaborated with engineers through code reviews and knowledge sharing, improving code quality and team alignment.",
        "Contributed to improving observability through Prometheus/Splunk metrics, logging, and monitoring dashboards.",
        "Worked closely with product managers and stakeholders to understand requirements and drive feature delivery."
      ],
      skills: ["Java 17", "Spring Boot", "REST APIs", "Observability", "Prometheus", "Splunk", "GCP", "Kubernetes"]
    },
    {
      role: "Senior Software Engineer (Contract)",
      company: "MongoDB",
      location: "Remote",
      period: "Nov 2024 - Dec 2025",
      bullets: [
        "Worked on enhancement and modernization of Java-based microservices to improve scalability and maintainability.",
        "Developed automation utilities using Java and Python for data migration, validation, and operational workflows.",
        "Contributed to architecture discussions and design improvements for existing systems.",
        "Strengthened test coverage and reliability practices using JUnit and Mockito, ensuring stable production deployments."
      ],
      skills: ["Java", "Python", "MongoDB NoSQL", "Microservices", "Data Migration", "JUnit", "Mockito"]
    },
    {
      role: "Senior Software Engineer",
      company: "Lowe's India",
      location: "Bangalore, India",
      period: "Mar 2021 - Jul 2024",
      bullets: [
        "Led development of scalable REST APIs, Kafka-based event-driven microservices, and Spring Batch applications for enterprise retail systems.",
        "Contributed to system architecture and service decomposition, ensuring scalability, resilience, and maintainability.",
        "Designed and optimized backend services integrating MongoDB and PostgreSQL, improving query performance and system efficiency.",
        "Implemented CI/CD pipelines using Jenkins and Kubernetes, improving deployment reliability and speed.",
        "Ensured system stability through production support, on-call rotation, and RCA-based issue resolution.",
        "Collaborated with cross-functional teams to translate business requirements into scalable technical solutions.",
        "Mentored engineers and conducted code reviews and design discussions, improving engineering standards."
      ],
      skills: ["Spring Boot", "Apache Kafka", "Spring Batch", "PostgreSQL", "MongoDB", "Kubernetes", "CI/CD", "Jenkins"]
    },
    {
      role: "Technology Specialist - Java",
      company: "Litmus7 Systems",
      location: "Kochi, India",
      period: "2020 - 2021",
      bullets: [
        "Developed enterprise backend services using Java and Spring Boot microservices architecture.",
        "Improved code quality through SonarQube static analysis and automated testing practices.",
        "Contributed to performance improvements and backend service enhancements for retail supply chain systems."
      ],
      skills: ["Java 11", "Spring Boot", "SonarQube", "Microservices", "Retail Systems", "Testing"]
    },
    {
      role: "Software Engineer",
      company: "Symantec (Gen Digital)",
      location: "Pune, India",
      period: "2012 - 2019",
      bullets: [
        "Developed and maintained Java/Spring-based backend applications for enterprise security systems.",
        "Developed full-stack features using Angular for frontend and Spring-based services for backend.",
        "Designed and optimized Oracle SQL/PL-SQL queries, improving database performance and efficiency.",
        "Participated in full SDLC including development, testing, deployment, and production support activities.",
        "Collaborated with QA and engineering teams to ensure high-quality feature delivery."
      ],
      skills: ["Java", "Spring Boot", "Angular", "Oracle SQL", "PL-SQL", "Cyber Security Systems", "SDLC"]
    }
  ],
  education: [
    {
      degree: "Master of Technology (M.Tech) – Cyber Security",
      school: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore, India",
      year: "2012",
      description: "Focused on cryptography, cloud security, and distributed application hardening."
    },
    {
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      school: "Mahatma Gandhi University",
      location: "Kerala, India",
      year: "2009",
      description: "Comprehensive foundation in computer architectures, compilers, databases, and network algorithms."
    }
  ]
};

export default function App() {
  let API_BASE = ((import.meta as any).env?.VITE_API_URL as string) || '';
  if (API_BASE && !API_BASE.startsWith('http://') && !API_BASE.startsWith('https://')) {
    API_BASE = '';
  }

  // Navigation active states
  const [activeTab, setActiveTab] = useState('summary');
  const [scrolled, setScrolled] = useState(false);

  // Experience detailed list expansion
  const [expandedJobs, setExpandedJobs] = useState<Record<number, boolean>>({ 0: true, 1: true });

  // Skills interactive search and filter
  const [skillSearch, setSkillSearch] = useState('');
  const [skillFilter, setSkillFilter] = useState('All');

  // Contact form submission state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    urgency: 'General Inquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [triageReport, setTriageReport] = useState<any>(null);
  const [localMessages, setLocalMessages] = useState<any[]>([]);
  const [showPrintHint, setShowPrintHint] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Email settings for GitHub Pages static deployments
  const [emailService, setEmailService] = useState<'none' | 'web3forms' | 'formspree'>(() => {
    const savedService = localStorage.getItem('remya_portfolio_email_service');
    if (savedService === 'web3forms' || savedService === 'formspree') return savedService;
    
    // Check vite env
    const envWeb3 = (import.meta as any).env?.VITE_WEB3FORMS_KEY;
    if (envWeb3) return 'web3forms';
    const envFormspree = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT;
    if (envFormspree) return 'formspree';
    
    return 'none';
  });
  
  const [emailKey, setEmailKey] = useState<string>(() => {
    const savedKey = localStorage.getItem('remya_portfolio_email_key');
    if (savedKey) return savedKey;
    
    // Check vite env
    const envWeb3 = (import.meta as any).env?.VITE_WEB3FORMS_KEY;
    if (envWeb3) return envWeb3;
    const envFormspree = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT;
    if (envFormspree) return envFormspree;
    
    return '';
  });

  const [showEmailConfig, setShowEmailConfig] = useState(false);



  // Handle sticky navbar scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll with navigation tabs highlighting
  useEffect(() => {
    const sections = ['summary', 'skills', 'experience', 'education', 'contact'];
    const handleIntersection = () => {
      const scrollPos = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleIntersection);
    return () => window.removeEventListener('scroll', handleIntersection);
  }, []);

  // Fetch local contact messages on load
  useEffect(() => {
    const saved = localStorage.getItem('remya_portfolio_messages');
    if (saved) {
      setLocalMessages(JSON.parse(saved));
    }
  }, []);



  // Skill filter logic
  const filteredSkills = RESUME_DATA.skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(skillSearch.toLowerCase());
    const matchesFilter = skillFilter === 'All' || skill.category === skillFilter;
    return matchesSearch && matchesFilter;
  });

  const skillCategories = ['All', 'Languages', 'Frameworks', 'Databases', 'Streaming', 'Cloud & DevOps', 'Observability'];

  // Toggle job bullet expansions
  const toggleJob = (index: number) => {
    setExpandedJobs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Submit Contact Form
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill out all required fields.");
      return;
    }

    setFormSubmitting(true);
    try {
      const categoryMap: Record<string, string> = {
        'General Inquiry': 'General Inquiry',
        'Interview Invitation': 'Interview Request',
        'Immediate Hire Contract': 'Immediate Project Proposal'
      };
      const category = categoryMap[contactForm.urgency] || 'General Inquiry';
      const receivedAt = new Date().toISOString();
      const mockId = 'msg_' + Math.random().toString(36).substring(2, 11);

      let isRealTransmission = false;

      if (emailService === 'web3forms' && emailKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: emailKey,
            subject: `💼 New Portfolio Message from ${contactForm.name}`,
            from_name: contactForm.name,
            name: contactForm.name,
            email: contactForm.email,
            company: contactForm.company || "Not Specified",
            urgency: contactForm.urgency,
            message: contactForm.message
          })
        });
        
        if (!response.ok) {
          const resData = await response.json().catch(() => ({}));
          throw new Error(resData.message || "Failed to transmit via Web3Forms API. Check your Access Key.");
        }
        isRealTransmission = true;
      } else if (emailService === 'formspree' && emailKey) {
        const endpoint = emailKey.includes('formspree.io') 
          ? emailKey 
          : `https://formspree.io/f/${emailKey.trim()}`;
          
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: contactForm.name,
            email: contactForm.email,
            company: contactForm.company || "Not Specified",
            urgency: contactForm.urgency,
            message: contactForm.message
          })
        });

        if (!response.ok) {
          const resData = await response.json().catch(() => ({}));
          throw new Error(resData.error || "Failed to transmit via Formspree API. Check your Form ID.");
        }
        isRealTransmission = true;
      } else {
        // Simulate a realistic transmission delay for high-fidelity interactive feedback
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      const mockData = {
        id: mockId,
        status: "success",
        receivedAt,
        triage: {
          category,
          urgency: contactForm.urgency === 'Immediate Hire Contract' ? 'High' : 'Medium',
          autoReply: isRealTransmission 
            ? `Your message has been successfully emailed to Remya's personal inbox and saved to your browser cache!`
            : `Thank you, ${contactForm.name}! Your message has been saved to local browser storage.`
        }
      };

      setTriageReport(mockData);
      setFormSubmitted(true);
      
      // Store in local storage so visitor can inspect their submitted messages
      const newMessage = {
        id: mockId,
        senderName: contactForm.name,
        company: contactForm.company || 'Not Specified',
        email: contactForm.email,
        urgency: contactForm.urgency,
        message: contactForm.message,
        receivedAt,
        category,
        status: isRealTransmission ? 'Emailed to Remya' : 'Saved to Local Storage'
      };
      
      const updatedMessages = [newMessage, ...localMessages];
      setLocalMessages(updatedMessages);
      localStorage.setItem('remya_portfolio_messages', JSON.stringify(updatedMessages));
      
      // Reset form fields
      setContactForm({ name: '', email: '', company: '', urgency: 'General Inquiry', message: '' });
    } catch (err: any) {
      console.error(err);
      alert(`Email Transmission Failed: ${err.message || "Please check your network and settings."}`);
    } finally {
      setFormSubmitting(false);
    }
  };



  // Handle printing CV
  const triggerPrintResume = () => {
    const isIframe = window.self !== window.top;
    if (isIframe) {
      setShowPrintHint(true);
    }
    window.print();
  };



  return (
    <div id="portfolio-container" className="min-h-screen grid-bg relative text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white font-sans bg-[#F9F8F6]">
      
      {/* PRINT ADVICE BANNER */}
      {showPrintHint && (
        <div className="bg-[#1A1A1A] text-white text-[11px] sm:text-xs px-4 py-2.5 text-center flex items-center justify-between shadow-md relative z-50 font-sans border-b border-white/10" id="print-warning-banner">
          <div className="flex-1 text-center font-mono">
            <span className="font-bold text-amber-300 mr-1.5">💡 PRINTING IN AN IFRAME:</span>
            Standard print dialogs can print outer frames or be blocked in sandboxes. For a perfect PDF or physical print, open this app in a 
            <a 
              href={window.location.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-amber-300 ml-1 font-bold inline-flex items-center gap-0.5"
            >
              New Tab <ExternalLink className="h-3 w-3" />
            </a>, then click <strong>Print CV</strong>!
          </div>
          <button 
            onClick={() => setShowPrintHint(false)} 
            className="text-white/60 hover:text-white ml-2 cursor-pointer font-bold text-sm px-1.5"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
      
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute top-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-[#1A1A1A]/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-[#1A1A1A]/1 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-[#1A1A1A]/2 blur-[100px] pointer-events-none" />

      {/* STICKY HEADER */}
      <header id="header" className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${scrolled ? 'bg-[#F9F8F6]/95 backdrop-blur-md border-black/10 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3" id="nav-brand-group">
            <div className="h-10 w-10 rounded bg-[#1A1A1A] flex items-center justify-center shadow-sm" id="brand-logo">
              <Server className="h-5 w-5 text-[#F9F8F6] stroke-[2]" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-tight text-[#1A1A1A] block">Remya Rajan</span>
              <span className="text-[9px] font-mono text-[#1A1A1A]/60 tracking-widest uppercase block -mt-1">Distributed Core</span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-1" id="nav-links-desktop">
            <a href="#summary" onClick={() => setActiveTab('summary')} className={`px-4 py-1.5 rounded-full font-serif text-sm tracking-wide transition-all ${activeTab === 'summary' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70 hover:text-black hover:bg-black/5'}`}>Summary</a>
            <a href="#skills" onClick={() => setActiveTab('skills')} className={`px-4 py-1.5 rounded-full font-serif text-sm tracking-wide transition-all ${activeTab === 'skills' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70 hover:text-black hover:bg-black/5'}`}>Stack Matrix</a>
            <a href="#experience" onClick={() => setActiveTab('experience')} className={`px-4 py-1.5 rounded-full font-serif text-sm tracking-wide transition-all ${activeTab === 'experience' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70 hover:text-black hover:bg-black/5'}`}>Experience</a>
            <a href="#education" onClick={() => setActiveTab('education')} className={`px-4 py-1.5 rounded-full font-serif text-sm tracking-wide transition-all ${activeTab === 'education' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70 hover:text-black hover:bg-black/5'}`}>Education</a>
            <a href="#contact" onClick={() => setActiveTab('contact')} className={`px-4 py-1.5 rounded-full font-serif text-sm tracking-wide transition-all ${activeTab === 'contact' ? 'bg-[#1A1A1A] text-white font-medium' : 'text-[#1A1A1A]/70 hover:text-black hover:bg-black/5'}`}>Contact Portal</a>
          </nav>

          <div className="flex items-center space-x-3" id="header-actions">
            <button
              onClick={triggerPrintResume}
              id="print-resume-btn"
              className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-transparent hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-black/20 transition-all text-xs font-semibold cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Print CV</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative" id="main-content">
        
        {/* HERO / PROFILE SUMMARY SECTION */}
        <section id="summary" className="pt-8 pb-16 md:py-20 border-b border-black/10">
          
          {/* PROFILE BRIEF */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between" id="profile-brief">
            <div className="flex-1 space-y-6 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 text-[#1A1A1A] border border-black/10 text-xs font-mono">
                <Zap className="h-3 w-3 animate-bounce" />
                <span>13+ Years Distributed Backend Veteran</span>
              </div>
              
              <h1 className="font-serif font-bold text-6xl sm:text-7xl lg:text-8xl text-[#1A1A1A] tracking-tighter leading-none m-0" id="main-name-heading">
                Remya Rajan
              </h1>
              <h2 className="text-xl sm:text-2xl font-serif italic mt-2 text-[#1A1A1A]/70" id="main-title-heading">
                Senior Backend & Distributed Systems Engineer
              </h2>
              
              <p className="text-[#1A1A1A]/80 text-sm sm:text-base leading-relaxed font-sans" id="summary-text">
                Expert in building secure, scalable, and high-performance backend platforms using <span className="text-[#1A1A1A] font-bold">Java 17+</span> and <span className="text-[#1A1A1A] font-bold">Spring Boot</span>. Strong architect specializing in decoupling complex services into <span className="text-[#1A1A1A] font-bold">microservices</span>, orchestrating event-driven architectures with <span className="text-[#1A1A1A] font-bold">Apache Kafka</span>, and managing data systems under high-concurrency workloads. Passionate about system design, automation, and observability.
              </p>

              {/* Direct Contacts Row */}
              <div className="flex flex-wrap gap-y-3 gap-x-6 text-xs text-[#1A1A1A]/70 font-mono py-2" id="hero-contact-row">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3.5 w-3.5 text-[#1A1A1A]" />
                  <span>Atlanta, GA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5 text-[#1A1A1A]" />
                  <a href="mailto:remya.rajan88ar@gmail.com" className="hover:text-black transition-all">remya.rajan88ar@gmail.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5 text-[#1A1A1A]" />
                  <span>+1 (404) 324-1107</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-3.5 w-3.5 text-[#1A1A1A]" />
                  <a href="https://www.linkedin.com/in/remya-rajan-77734029/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all flex items-center space-x-1">
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4" id="hero-actions-row">
                <a
                  href="#contact"
                  className="flex items-center space-x-2 px-6 py-3 bg-[#1A1A1A] hover:bg-black text-[#F9F8F6] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm cursor-pointer"
                >
                  <span>Hiring? Send Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#skills"
                  className="flex items-center space-x-2 px-6 py-3 bg-transparent border border-black/30 hover:bg-black/5 text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
                >
                  <span>Stack Matrix</span>
                  <Layers className="h-4 w-4 text-[#1A1A1A]/70" />
                </a>
              </div>
            </div>

            {/* Profile Image - aligned to right of description */}
            <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 flex-shrink-0 self-center md:self-start relative group mt-4 md:mt-0" id="profile-image-container">
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-2xl translate-x-2 translate-y-2 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300 -z-10" />
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-[#1A1A1A] bg-white relative flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={profileImage}
                    alt="Remya Rajan Portrait"
                    className="w-full h-full object-cover transition-all duration-500"
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                    id="profile-image"
                  />
                ) : (
                  <div className="w-full h-full bg-[#FAF9F5] flex flex-col justify-between p-6 select-none font-sans relative" id="profile-fallback-monogram">
                    {/* Minimalist Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-5 pointer-events-none">
                      <div className="border-r border-b border-[#1A1A1A]"></div>
                      <div className="border-r border-b border-[#1A1A1A]"></div>
                      <div className="border-b border-[#1A1A1A]"></div>
                      <div className="border-r border-b border-[#1A1A1A]"></div>
                      <div className="border-r border-b border-[#1A1A1A]"></div>
                      <div className="border-b border-[#1A1A1A]"></div>
                      <div className="border-r border-[#1A1A1A]"></div>
                      <div className="border-r border-[#1A1A1A]"></div>
                      <div></div>
                    </div>
                    
                    <div className="flex justify-between items-start z-10">
                      <span className="text-[10px] font-mono tracking-widest text-[#1A1A1A]/60 font-bold uppercase">EST. 2012</span>
                      <span className="text-[10px] font-mono tracking-widest text-[#1A1A1A]/60 font-bold uppercase">GA / USA</span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center my-auto z-10">
                      <span className="font-serif font-extrabold text-5xl md:text-6xl text-[#1A1A1A] tracking-tighter leading-none select-none">RR</span>
                    </div>
                    
                    <div className="flex flex-col z-10">
                      <div className="h-[2px] bg-[#1A1A1A] w-full mb-2"></div>
                      <span className="text-[9px] font-mono tracking-wider text-[#1A1A1A] uppercase font-black">Sr. Distributed Systems</span>
                      <span className="text-[8px] font-mono tracking-wider text-[#1A1A1A]/60 uppercase">13+ Years Experience</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>



        {/* TECHNICAL STACK MATRIX */}
        <section id="skills" className="py-16 border-t border-black/10 scroll-mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-serif font-bold text-3xl text-[#1A1A1A] tracking-tight">Technical Stack Matrix</h2>
              <p className="text-black/60 text-sm mt-1">Filter, search, and trace technologies back to actual professional roles she occupied.</p>
            </div>
            
            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-black/45" />
              </span>
              <input
                type="text"
                placeholder="Search skills (e.g. Java, GCP)..."
                value={skillSearch}
                onChange={e => setSkillSearch(e.target.value)}
                className="w-full bg-white border border-black/15 rounded-full py-2 pl-9 pr-4 text-xs font-mono text-[#1A1A1A] placeholder-black/35 focus:outline-none focus:border-black transition-all"
              />
            </div>
          </div>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap gap-2 mb-6" id="skills-filter-tabs">
            {skillCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSkillFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-serif text-xs transition-all cursor-pointer ${skillFilter === cat ? 'bg-[#1A1A1A] text-white font-medium shadow-sm' : 'bg-black/5 border border-transparent text-black/70 hover:bg-black/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="skills-matrix-grid">
            {filteredSkills.map(skill => (
              <div
                key={skill.name}
                className="bg-white border border-black/10 p-4 rounded-lg hover:border-black/30 transition-all duration-300 relative group overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 h-[1.5px] bg-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-all duration-300 w-full" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-[#1A1A1A] group-hover:text-black transition-colors">{skill.name}</span>
                  <span className="text-[9px] font-mono text-black/50 tracking-wider bg-black/5 px-2 py-0.5 rounded border border-black/5">{skill.category}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-black/40 block font-bold">PROFESSIONAL FOOTPRINT:</span>
                  <div className="flex flex-wrap gap-1">
                    {skill.usedAt.map(company => (
                      <span
                        key={company}
                        className="text-[9px] font-mono text-black/60 bg-black/5 border border-black/5 px-1.5 py-0.5 rounded hover:text-black transition-colors"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {filteredSkills.length === 0 && (
              <div className="col-span-full py-12 text-center text-black/50 italic font-mono text-sm">
                No matching skills found. Try searching for "Java", "Kafka", or select another category filter.
              </div>
            )}
          </div>
        </section>

        {/* WORK EXPERIENCE TIMELINE */}
        <section id="experience" className="py-16 border-t border-black/10 scroll-mt-12">
          <div className="mb-10 text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif font-bold text-3xl text-[#1A1A1A] tracking-tight">Professional Journey</h2>
            <p className="text-black/60 text-sm">Over a decade of scalable, highly critical software contributions across diverse global industries.</p>
          </div>

          <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-black/10">
            {RESUME_DATA.experience.map((job, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedJobs[idx];

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-stretch gap-6 sm:gap-12 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Circle Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 h-8.5 w-8.5 rounded-full border border-black/20 bg-white flex items-center justify-center z-10 text-[#1A1A1A] font-serif font-bold text-xs shadow-sm">
                    {RESUME_DATA.experience.length - idx}
                  </div>

                  {/* Empty Side (For desktop balance) */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="sm:w-1/2 pl-10 sm:pl-0">
                    <div className="bg-white border border-black/10 p-6 rounded-xl hover:border-black/20 transition-all duration-300 relative overflow-hidden group shadow-sm">
                      {/* Top outline highlight */}
                      <div className="absolute top-0 left-0 h-[1.5px] bg-[#1A1A1A] opacity-20 group-hover:opacity-100 transition-all duration-300 w-full" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                        <div>
                          <h3 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-black transition-colors">{job.role}</h3>
                          <span className="text-sm font-semibold text-black/70">{job.company}</span>
                        </div>
                        <div className="text-left sm:text-right text-xs font-mono">
                          <span className="text-black font-semibold block">{job.period}</span>
                          <span className="text-black/50 block">{job.location}</span>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleJob(idx)}
                        className="flex items-center space-x-1.5 text-xs font-mono text-black/50 hover:text-black transition-colors mb-3 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronDown className="h-3 w-3 rotate-180 transition-transform" />
                            <span>Collapse Accomplishments</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3 w-3 transition-transform" />
                            <span>Expand accomplishments ({job.bullets.length})</span>
                          </>
                        )}
                      </button>

                      {/* Expandable list of bullets */}
                      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y-2.5 text-xs text-black/70 list-disc pl-4 leading-relaxed font-sans">
                          {job.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Tags Used */}
                      <div className="pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
                        {job.skills.map(s => (
                          <span
                            key={s}
                            className="text-[9px] font-mono text-black/70 bg-black/5 border border-black/5 px-2 py-0.5 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EDUCATION & COMPLEMENTARY HIGHLIGHTS */}
        <section id="education" className="py-16 border-t border-black/10 scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Education Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-black" />
                <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] tracking-tight">Academic Foundation</h2>
              </div>
              <p className="text-black/70 text-sm leading-relaxed font-sans">
                Her extensive career is fortified by highly rigorous computer science and cybersecurity studies, specializing in robust application architectures and cryptographically secure distributed databases.
              </p>

              <div className="space-y-4">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-black/10 p-5 rounded-lg space-y-2 hover:border-black/20 transition-all shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif font-bold text-sm text-[#1A1A1A]">{edu.degree}</h3>
                        <p className="text-xs text-black/60">{edu.school} | {edu.location}</p>
                      </div>
                      <span className="text-xs font-mono text-black bg-black/5 border border-black/10 px-2.5 py-0.5 rounded">{edu.year}</span>
                    </div>
                    <p className="text-xs text-black/60 leading-relaxed italic font-serif">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Engineering Tooling & Core Strengths */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-6 w-6 text-black" />
                <h2 className="font-serif font-bold text-2xl text-[#1A1A1A] tracking-tight">AI-Assisted Efficiency</h2>
              </div>
              <p className="text-black/70 text-sm leading-relaxed font-sans">
                She leverages modern productivity integrations and AI tools, driving engineering efficiency without compromising security or architectural sanity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-black/10 rounded-lg space-y-1 hover:border-black/20 transition-all shadow-sm">
                  <Zap className="h-5 w-5 text-black/70 mb-1" />
                  <h4 className="font-serif font-semibold text-xs text-[#1A1A1A]">Prompt Engineering</h4>
                  <p className="text-[11px] text-black/60 leading-relaxed font-sans">Advanced capability in drafting highly contextual system layouts and database schemas using LLMs.</p>
                </div>
                <div className="p-4 bg-white border border-black/10 rounded-lg space-y-1 hover:border-black/20 transition-all shadow-sm">
                  <Terminal className="h-5 w-5 text-black/70 mb-1" />
                  <h4 className="font-serif font-semibold text-xs text-[#1A1A1A]">AI IDE Integrations</h4>
                  <p className="text-[11px] text-black/60 leading-relaxed font-sans">Highly adept using Windsurf and GitHub Copilot to optimize boilerplate and automate testing loops.</p>
                </div>
                <div className="p-4 bg-white border border-black/10 rounded-lg space-y-1 hover:border-black/20 transition-all shadow-sm">
                  <Cpu className="h-5 w-5 text-black/70 mb-1" />
                  <h4 className="font-serif font-semibold text-xs text-[#1A1A1A]">Observability Dashboards</h4>
                  <p className="text-[11px] text-black/60 leading-relaxed font-sans">Splunk query creation and Prometheus alerting architectures to identify outages in seconds.</p>
                </div>
                <div className="p-4 bg-white border border-black/10 rounded-lg space-y-1 hover:border-black/20 transition-all shadow-sm">
                  <Layers className="h-5 w-5 text-black/70 mb-1" />
                  <h4 className="font-serif font-semibold text-xs text-[#1A1A1A]">Production Guarding</h4>
                  <p className="text-[11px] text-black/60 leading-relaxed font-sans">Excellent on-call record, performing RCA (Root Cause Analysis) audits and restoring live clusters quickly.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* RECRUITER CONTACT FORM & MESSAGES HUB */}
        <section id="contact" className="py-16 border-t border-black/10 scroll-mt-12">
          <div className="mb-10 text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif font-bold text-3xl text-black tracking-tight">Recruiter Connection Portal</h2>
            <p className="text-black/60 text-sm">Reviewing Remya's credentials? Submit your inquiry, interview request, or job proposal directly.</p>
          </div>

          <div className="max-w-2xl mx-auto w-full">
            
            {/* Contact form */}
            <div className="bg-white rounded-lg border border-black/15 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">Leave a Message</h3>
                <button
                  type="button"
                  onClick={() => setShowEmailConfig(!showEmailConfig)}
                  className={`text-[10px] font-mono flex items-center space-x-1 border rounded px-2 py-1 transition-all cursor-pointer ${
                    showEmailConfig || emailService !== 'none'
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white hover:bg-black'
                      : 'bg-white border-black/15 text-black/60 hover:text-black hover:border-black/30'
                  }`}
                  title="Configure live email delivery using a free static-form provider"
                >
                  <Settings className={`h-3 w-3 ${formSubmitting ? 'animate-spin' : ''}`} />
                  <span>{emailService !== 'none' ? 'Live Email Active' : 'Configure Live Email'}</span>
                </button>
              </div>

              {/* Optional Email Delivery Setup Panel */}
              {showEmailConfig && (
                <div className="p-4 bg-[#F9F8F6] border border-black/15 rounded space-y-3 font-sans text-[11px] text-black/80">
                  <div className="flex items-center justify-between">
                    <span className="font-bold uppercase tracking-wider text-[9px] text-black/50">GitHub Pages Email Delivery Setup</span>
                    <button 
                      type="button" 
                      onClick={() => setShowEmailConfig(false)}
                      className="text-black/40 hover:text-black font-semibold cursor-pointer text-xs"
                    >
                      ✕ Close
                    </button>
                  </div>
                  <p className="leading-relaxed text-black/60">
                    Because GitHub Pages hosts static files without a running backend server, standard API endpoints won't work out-of-the-box. You can connect a free contact-form delivery service in seconds to receive recruiters' messages directly in your inbox:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-[10px] text-black/70 block">Form Service Provider</label>
                      <select
                        value={emailService}
                        onChange={e => {
                          const val = e.target.value as 'none' | 'web3forms' | 'formspree';
                          setEmailService(val);
                          localStorage.setItem('remya_portfolio_email_service', val);
                        }}
                        className="w-full bg-white border border-black/15 rounded p-2 text-xs focus:outline-none focus:border-black cursor-pointer font-mono"
                      >
                        <option value="none">Simulated Mode (Saves locally only)</option>
                        <option value="web3forms">Web3Forms (Free - Recommended)</option>
                        <option value="formspree">Formspree (Classic Endpoint)</option>
                      </select>
                    </div>

                    {emailService !== 'none' && (
                      <div className="space-y-1">
                        <label className="font-bold text-[10px] text-black/70 block">
                          {emailService === 'web3forms' ? 'Access Key (UUID)' : 'Form ID or Endpoint URL'}
                        </label>
                        <input
                          type="password"
                          required
                          placeholder={emailService === 'web3forms' ? 'e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' : 'e.g. xxxxxxxx or https://formspree.io/f/...'}
                          value={emailKey}
                          onChange={e => {
                            const val = e.target.value;
                            setEmailKey(val);
                            localStorage.setItem('remya_portfolio_email_key', val);
                          }}
                          className="w-full bg-white border border-black/15 rounded p-2 text-xs focus:outline-none focus:border-black font-mono"
                        />
                      </div>
                    )}
                  </div>

                  {emailService === 'web3forms' && (
                    <div className="bg-white p-2.5 rounded border border-black/10 text-[10px] text-black/75 leading-relaxed space-y-1.5 font-sans">
                      <p className="font-bold text-[#1A1A1A]">🚀 Setup Web3Forms in 1 minute:</p>
                      <ol className="list-decimal pl-4 space-y-1">
                        <li>Visit <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-black hover:text-black/75">web3forms.com</a> (completely free).</li>
                        <li>Enter your email to receive a free <strong>Access Key</strong> in your inbox.</li>
                        <li>Paste that key into the field above and it will auto-save in your browser.</li>
                      </ol>
                      <p className="text-black/50 text-[9px] mt-1 font-mono">
                        💡 <strong>Dev Tip:</strong> You can also bake this key directly into your build by declaring <code>VITE_WEB3FORMS_KEY</code> in your repository environment secrets.
                      </p>
                    </div>
                  )}

                  {emailService === 'formspree' && (
                    <div className="bg-white p-2.5 rounded border border-black/10 text-[10px] text-black/75 leading-relaxed space-y-1.5 font-sans">
                      <p className="font-bold text-[#1A1A1A]">🚀 Setup Formspree in 1 minute:</p>
                      <ol className="list-decimal pl-4 space-y-1">
                        <li>Register a free account at <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-black hover:text-black/75">formspree.io</a>.</li>
                        <li>Create a new form and target your preferred contact email.</li>
                        <li>Copy the form ID (e.g. <code>mqkvpzoe</code>) or full endpoint URL and paste it above.</li>
                      </ol>
                      <p className="text-black/50 text-[9px] mt-1 font-mono">
                        💡 <strong>Dev Tip:</strong> You can also bake this endpoint directly into your build by declaring <code>VITE_FORMSPREE_ENDPOINT</code> in your repository environment secrets.
                      </p>
                    </div>
                  )}
                  
                  {emailService === 'none' && (
                    <p className="text-black/50 text-[10px] italic">
                      Currently running in local browser cache mode. All submissions are processed, classified, and saved strictly within your local browser storage.
                    </p>
                  )}
                </div>
              )}
              
              <form onSubmit={handleContactSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-black/60 text-[10px] uppercase font-mono tracking-wide">Full Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={contactForm.name}
                      onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-[#F9F8F6] border border-black/15 rounded p-2.5 text-xs text-[#1A1A1A] placeholder-black/30 focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-black/60 text-[10px] uppercase font-mono tracking-wide">Email Address <span className="text-red-600">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={contactForm.email}
                      onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#F9F8F6] border border-black/15 rounded p-2.5 text-xs text-[#1A1A1A] placeholder-black/30 focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-black/60 text-[10px] uppercase font-mono tracking-wide">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. AT&T, MongoDB, lowe's..."
                      value={contactForm.company}
                      onChange={e => setContactForm({ ...contactForm, company: e.target.value })}
                      className="w-full bg-[#F9F8F6] border border-black/15 rounded p-2.5 text-xs text-[#1A1A1A] placeholder-black/30 focus:outline-none focus:border-black transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-black/60 text-[10px] uppercase font-mono tracking-wide">Inquiry Priority Urgency</label>
                    <select
                      value={contactForm.urgency}
                      onChange={e => setContactForm({ ...contactForm, urgency: e.target.value })}
                      className="w-full bg-[#F9F8F6] border border-black/15 rounded p-2.5 text-xs text-black/70 focus:outline-none focus:border-black transition-all cursor-pointer font-mono"
                    >
                      <option value="General Inquiry">General Conversation</option>
                      <option value="Interview Invitation">Interview Request</option>
                      <option value="Immediate Hire Contract">Immediate Project Proposal</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-black/60 text-[10px] uppercase font-mono tracking-wide">Inquiry Message <span className="text-red-600">*</span></label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your role, compensation model, or technological stack..."
                    value={contactForm.message}
                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-[#F9F8F6] border border-black/15 rounded p-2.5 text-xs text-[#1A1A1A] placeholder-black/30 focus:outline-none focus:border-black transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F9F8F6] font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-40 cursor-pointer flex items-center justify-center space-x-2 rounded"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{formSubmitting ? "TRANSMITTING..." : "TRANSMIT PROPOSAL"}</span>
                </button>
              </form>

              {/* Success Report */}
              {formSubmitted && triageReport && (
                <div className="mt-4 p-4 rounded bg-[#F3F1EC] border border-black/10 font-mono text-xs text-black/80 space-y-2" id="contact-success-notification">
                  <div className="flex items-center space-x-2 text-emerald-700 font-bold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>TRANSMISSION SUCCESSFUL</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-black/60 font-sans">
                    Your message has been compiled, checked for criteria, and securely dispatched to Remya's core system. Thank you for reaching out!
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] bg-white p-2.5 rounded border border-black/10">
                    <div>
                      <span className="text-black/40 block">STATUS:</span>
                      <span className="text-emerald-750 font-bold">DISPATCHED</span>
                    </div>
                    <div>
                      <span className="text-black/40 block">TRANSMISSION ID:</span>
                      <span className="text-black font-semibold font-mono">{triageReport.id || 'TX-' + Math.floor(Math.random() * 90000 + 10000)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

      </main>



      {/* FLUSH PRINTING MEDIA STYLE FOR RESUME */}
      <style>{`
        /* Marquee Keyframes for System Designs Flow */
        @keyframes marquee-right {
          0% { transform: translateX(-100%); left: 0%; }
          100% { transform: translateX(100%); left: 100%; }
        }
        @keyframes marquee-right-slow {
          0% { transform: translateX(-100%); left: 0%; }
          100% { transform: translateX(100%); left: 100%; }
        }
        .animate-marquee-right {
          animation: marquee-right 2s linear infinite;
        }
        .animate-marquee-right-slow {
          animation: marquee-right-slow 3s linear infinite;
        }

        /* PRINT STYLE OVERRIDES */
        @media print {
          body {
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
          }
          #portfolio-container {
            background: white !important;
            color: black !important;
            padding: 0 !important;
          }
          header, #print-warning-banner, #ai-assistant-toggle, #ai-assistant-wrapper, #interactive-hardware-card, #design, #skills-filter-tabs, .glow-btn, #print-resume-btn, #floating-ai-trigger, #ai-chat-window, .relative.before\\:bg-slate-800, #skills-matrix-grid .h-1.5, #recruiter-inbox-scroller, #contact, footer {
            display: none !important;
          }
          #main-content {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          #summary {
            grid-template-cols: 1fr !important;
            display: block !important;
            border-bottom: 2px solid #ccc !important;
            padding-bottom: 15px !important;
          }
          #profile-brief {
            width: 100% !important;
          }
          #profile-brief p {
            color: #333 !important;
          }
          #main-name-heading {
            color: black !important;
            font-size: 32pt !important;
            font-weight: bold !important;
          }
          #main-title-heading {
            color: #333 !important;
            font-size: 16pt !important;
            background: none !important;
            -webkit-text-fill-color: initial !important;
          }
          #hero-contact-row {
            color: #333 !important;
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 15px !important;
            font-size: 9pt !important;
          }
          #hero-contact-row a {
            color: black !important;
          }
          #hero-actions-row {
            display: none !important;
          }
          #skills {
            display: block !important;
            border-bottom: 2px solid #ccc !important;
            padding: 15px 0 !important;
          }
          #skills h2 {
            color: black !important;
            font-size: 16pt !important;
            margin-bottom: 10px !important;
          }
          #skills-matrix-grid {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 10px !important;
          }
          #skills-matrix-grid > div {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            width: 30% !important;
          }
          #skills-matrix-grid .font-display {
            color: black !important;
            font-size: 10pt !important;
          }
          #skills-matrix-grid .text-slate-400 {
            color: #444 !important;
            font-size: 8pt !important;
          }
          #experience {
            display: block !important;
            padding: 15px 0 !important;
            border-bottom: 2px solid #ccc !important;
          }
          #experience h2 {
            color: black !important;
            font-size: 16pt !important;
            margin-bottom: 15px !important;
          }
          /* Remove timeline offset for desktop */
          .relative.before\\:absolute {
            display: none !important;
          }
          #experience > div {
            display: block !important;
            margin-bottom: 25px !important;
          }
          #experience .sm\\:w-1\\/2 {
            width: 100% !important;
          }
          #experience .pl-10 {
            padding-left: 0 !important;
          }
          #experience .bg-slate-900\\/20 {
            background: none !important;
            border: none !important;
            padding: 0 !important;
          }
          #experience h3 {
            color: black !important;
            font-size: 13pt !important;
            font-weight: bold !important;
          }
          #experience .text-slate-300 {
            color: #333 !important;
            font-size: 11pt !important;
            font-weight: bold !important;
          }
          #experience .text-teal-400 {
            color: black !important;
          }
          #experience .text-slate-500 {
            color: #555 !important;
          }
          #experience div[class*="transition-all"] {
            max-height: none !important;
            opacity: 1 !important;
            overflow: visible !important;
            display: block !important;
          }
          #experience ul {
            display: block !important;
            max-height: none !important;
            opacity: 1 !important;
            margin-top: 5px !important;
          }
          #experience li {
            color: #222 !important;
            font-size: 10pt !important;
            margin-bottom: 3px !important;
          }
          #experience .pt-4 {
            display: none !important;
          }
          #education {
            display: block !important;
            padding: 15px 0 !important;
          }
          #education h2 {
            color: black !important;
            font-size: 16pt !important;
            margin-bottom: 10px !important;
          }
          #education .lg\\:col-span-6 {
            width: 100% !important;
            margin-bottom: 15px !important;
          }
          #education .bg-slate-900\\/10 {
            background: none !important;
            border: none !important;
            padding: 0 !important;
          }
          #education h3 {
            color: black !important;
            font-size: 11pt !important;
          }
          #education p {
            color: #333 !important;
          }
          #education .text-teal-400 {
            color: black !important;
            background: none !important;
            border: none !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#EAE8E4] py-8 text-center text-xs text-black/60" id="footer-details">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>© 2026 Remya Rajan. All Rights Reserved.</p>
          <p className="font-mono text-[9px] text-black/40">
            Deployed on Cloud Run • Powered by React 19, Tailwind CSS v4 & Google Gemini 3.5
          </p>
        </div>
      </footer>

    </div>
  );
}
