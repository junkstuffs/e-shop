import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail,
  Globe,
  MapPin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WHAT WE DO', href: '#about' },
    { name: 'NEWS', href: '#news' },
    { name: 'OUR BRANDS', href: '#brands' },
    { name: 'WORK PROCESS', href: '#process' },
    { name: 'CONTACT US', href: '#contact', primary: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-lush-cream/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group">
          <div className="flex items-center gap-1 font-black text-2xl tracking-wide text-lush-dark">
            <span className="text-lush-accent text-3xl font-serif italic">U</span>SHOPAL
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-lush-accent ${link.primary ? 'bg-lush-dark text-lush-cream px-5 py-2 rounded-full hover:bg-lush-accent hover:text-white' : 'text-lush-dark/80'}`}
            >
              {link.name}
            </a>
          ))}
          <span className="text-xs font-semibold tracking-widest text-lush-accent ml-4">EN / CN</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-lush-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-lush-cream border-t border-lush-dark/10 shadow-xl py-8 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold tracking-widest text-lush-dark hover:text-lush-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-lush-cream">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop" 
          alt="Model Portrait" 
          className="w-full h-full object-cover opacity-90 object-top grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lush-cream via-lush-cream/50 to-transparent md:via-lush-cream/20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        <div className="max-w-2xl mt-20 md:mt-0">
          <h1 className="text-[12vw] md:text-[6rem] leading-[0.85] font-black text-lush-dark mb-6 tracking-tighter">
            <span className="block relative">
              <span className="absolute -left-1 md:-left-2 top-0 text-lush-accent font-serif italic pr-1">U</span>
              <span className="pl-[8vw] md:pl-[4.5rem]">SHOPAL</span>
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-medium text-lush-dark/90 mb-8 uppercase tracking-tight font-serif">
            Luxe Beauty Brand <br/> Equity Partner
          </h2>
          <p className="text-lg md:text-xl text-lush-dark/70 font-light max-w-md leading-relaxed">
            The Fastest Growing Brand Platform <br/>
            Building and Investing in the Iconic Brands of the Future
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-lush-dark"></div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { value: "4", label: "Global Luxury Brands Direct Equity" },
    { value: "200+", label: "Direct Retail Store Exposure" },
    { value: "700", suffix: "Million +", label: "GMV Annual Run Rate (RMB)" }
  ];

  return (
    <section className="bg-lush-dark text-lush-cream py-20 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col justify-center ${idx > 0 ? 'pt-12 md:pt-0 md:pl-12' : ''}`}>
              <div className="flex items-baseline mb-2">
                <span className="text-6xl md:text-8xl font-light font-serif">{stat.value}</span>
                {stat.suffix && <span className="text-2xl md:text-4xl font-light ml-2">{stat.suffix}</span>}
                {!stat.suffix && <span className="text-4xl ml-1 font-light opacity-50">+</span>}
              </div>
              <p className="text-sm md:text-base tracking-widest uppercase opacity-70 mt-2 max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-lush-dark text-lush-cream py-24 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
             <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest leading-tight mb-4">
               About <span className="text-lush-accent font-serif italic">U</span>SHOPAL
             </h2>
             <div className="h-1 w-24 bg-lush-accent mb-8"></div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white/90">
              Growth <br/> Partners
            </h3>
            <div className="space-y-6 text-lg font-light text-white/70 leading-relaxed max-w-lg">
              <p className="border-l-2 border-lush-accent pl-6">
                We take luxury beauty brands from zero to mega.
                We invest in founders developing the iconic brands of tomorrow.
              </p>
              <p>
                We are beauty brand equity partners.
                The only luxury beauty player combining the future of the East and West.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandPortfolioIntro = () => {
  return (
    <section className="bg-lush-cream py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-bold uppercase text-lush-dark mb-4 tracking-tight">
          Our Brand <br/> Portfolio
        </h2>
        <p className="text-xl md:text-2xl font-serif italic text-lush-dark/70 border-b border-lush-dark pb-8 inline-block max-w-3xl">
          Direct Equity Ownership in 4 Global Luxury Beauty Brands
        </p>
        <div className="mt-8 text-right">
             <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-lush-accent pb-1 hover:text-lush-accent">10 Brands Across APAC</a>
        </div>
      </div>
    </section>
  );
};

interface BrandProps {
  name: string;
  image: string;
  logoFont?: string;
  layout?: 'wide' | 'tall';
}

const BrandCard = ({ name, image, logoFont, layout = 'tall' }: BrandProps) => {
  return (
    <div className="group relative bg-white/50 hover:bg-white transition-colors duration-500 overflow-hidden">
      <div className="p-8 pb-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full border border-lush-dark/50 group-hover:bg-lush-accent group-hover:border-lush-accent transition-colors"></div>
          <h3 className={`text-xl md:text-2xl uppercase tracking-widest text-lush-dark ${logoFont || 'font-serif'}`}>{name}</h3>
        </div>
      </div>
      <div className={`w-full overflow-hidden ${layout === 'tall' ? 'aspect-[4/5]' : 'aspect-video'}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  );
};

const BrandsGrid = () => {
  return (
    <section id="brands" className="bg-lush-cream pb-32">
      <div className="container mx-auto px-6 md:px-12 space-y-24">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
          <div className="lg:col-span-1 border-r border-lush-dark/10 p-4">
             {/* Spacer or Text if needed */}
          </div>
          <div className="lg:col-span-1">
             <BrandCard 
               name="Chantecaille" 
               image="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop"
             />
          </div>
           <div className="lg:col-span-1">
             <BrandCard 
               name="RMK" 
               image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
             />
          </div>
           <div className="lg:col-span-1">
             <BrandCard 
               name="BULK Homme" 
               image="https://images.unsplash.com/photo-1556228720-1957be83e981?q=80&w=800&auto=format&fit=crop"
               logoFont="font-sans font-black"
             />
          </div>
        </div>

        {/* Row 2 - Wide */}
        <div>
          <h3 className="text-3xl font-serif italic text-lush-dark mb-12 border-t border-lush-dark pt-8">10 Brands Across APAC</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <BrandCard 
               name="Molton Brown" 
               image="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop"
               layout="wide"
             />
             <BrandCard 
               name="Phyto" 
               image="https://images.unsplash.com/photo-1598440947619-2c35fc9af908?q=80&w=800&auto=format&fit=crop"
               layout="wide"
               logoFont="font-sans font-bold"
             />
             <BrandCard 
               name="SUQQU" 
               image="https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=800&auto=format&fit=crop"
               layout="wide"
             />
          </div>
        </div>

        {/* Row 3 - Wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <BrandCard 
               name="ARgENTUM" 
               image="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1200&auto=format&fit=crop"
               layout="wide"
               logoFont="font-sans"
             />
             <BrandCard 
               name="Juliette has a gun" 
               image="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop"
               layout="wide"
               logoFont="font-serif italic"
             />
        </div>
      </div>
    </section>
  );
};

const MetricsSection = () => {
  return (
    <section className="bg-lush-cream border-t border-lush-dark/10 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Metric 1 */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl uppercase tracking-widest text-lush-dark/60 border-b border-lush-dark/20 pb-4">
              Average Ticket Value
            </h4>
            <div className="flex items-baseline text-lush-dark">
              <span className="text-4xl mr-4 opacity-50">&gt;</span>
              <span className="text-xl mr-2 font-bold">¥</span>
              <span className="text-8xl md:text-[8rem] leading-none font-serif">5000</span>
            </div>
            <div className="pt-8">
               <div className="w-full h-[1px] bg-lush-dark/10"></div>
               <div className="flex items-center gap-4 mt-6">
                 <div className="text-5xl font-serif">BC</div>
                 <div className="text-xs uppercase tracking-widest opacity-60">Bonnie & Clyde <br/> Developed in 2020</div>
               </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl uppercase tracking-widest text-lush-dark/60 border-b border-lush-dark/20 pb-4">
              CBEC Shanghai Delivery
            </h4>
            <div className="flex items-baseline text-lush-dark">
              <span className="text-8xl md:text-[8rem] leading-none font-serif">4</span>
              <span className="text-4xl md:text-6xl font-bold ml-4">Hours</span>
            </div>
            <div className="pt-8 space-y-2">
               <p className="text-lg underline underline-offset-4 decoration-lush-accent/50 text-lush-dark/80">
                 Bonnie & Clyde developed in 2020
               </p>
               <p className="text-lg underline underline-offset-4 decoration-lush-accent/50 text-lush-dark/80">
                 has over 10M user base
               </p>
               <p className="text-lg underline underline-offset-4 decoration-lush-accent/50 text-lush-dark/80">
                 in the coveted 28-35yr old range
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SustainabilitySection = () => {
  return (
    <section className="relative bg-lush-dark text-lush-cream overflow-hidden">
      {/* Top Banner Text */}
      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-6xl md:text-[10vw] leading-none font-bold uppercase tracking-tight mb-8 md:mb-0">
            Sustain<span className="text-lush-accent">ability</span>
          </h2>
          <div className="max-w-md text-right md:text-left md:mt-4">
             <p className="text-sm md:text-base font-light opacity-80 leading-relaxed mb-4">
               Embracing the movement towards conscious beauty, we ensure <span className="underline decoration-lush-accent underline-offset-4">our unwavering commitment to sustainability resonates</span> with the values of the emerging generation.
             </p>
             <p className="text-xs uppercase tracking-widest text-lush-accent">Ethically Sourced Products</p>
          </div>
        </div>
      </div>

      {/* Image Shelf */}
      <div className="w-full h-[50vh] relative">
        <img 
          src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1600&auto=format&fit=crop" 
          alt="Sustainability Shelf" 
          className="w-full h-full object-cover sepia-[.3] brightness-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lush-dark via-transparent to-lush-dark/50"></div>
        
        {/* Decorative Silhouettes (simulating the bottles in the image) */}
        <div className="absolute bottom-0 w-full flex justify-around items-end px-12 opacity-80 mix-blend-overlay">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="w-16 h-32 md:w-32 md:h-64 bg-black/60 rounded-t-lg backdrop-blur-sm transform translate-y-4"></div>
           ))}
        </div>
      </div>
    </section>
  );
};

const DetailedStats = () => {
  return (
    <section className="bg-lush-dark text-lush-cream py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Stat 1 */}
          <div className="pr-8 pt-8 md:pt-0">
            <h4 className="text-sm uppercase tracking-widest text-lush-gray mb-8 pb-2 border-b border-white/10 w-24">Brands</h4>
            <div className="text-base text-lush-gray mb-12 h-12">4 invested and 10 licensed brands</div>
            <div className="text-8xl md:text-9xl font-light font-serif flex items-start">
              14<span className="text-4xl mt-4">+</span>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6">
              <h5 className="text-xl uppercase font-serif mb-2">Bonnie & Clyde</h5>
              <p className="text-xs text-lush-gray leading-relaxed max-w-xs">
                Bonnie & Clyde developed in 2020 has over 10M user base, commanding the highest ATV in multi-brand beauty.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="md:pl-12 pt-8 md:pt-0">
            <h4 className="text-sm uppercase tracking-widest text-lush-gray mb-8 pb-2 border-b border-white/10 w-24">Employees</h4>
            <div className="text-base text-lush-gray mb-12 h-12">HQ in Shanghai, with a global infrastructure network</div>
            <div className="text-8xl md:text-9xl font-light font-serif flex items-start">
              250<span className="text-4xl mt-4">+</span>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6">
              <h5 className="text-xl uppercase font-serif mb-2">Retail Store</h5>
              <p className="text-xs text-lush-gray leading-relaxed max-w-xs">
                over 200 direct retail store exposure.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="md:pl-12 pt-8 md:pt-0">
            <h4 className="text-sm uppercase tracking-widest text-lush-gray mb-8 pb-2 border-b border-white/10 w-24">Offices</h4>
            <div className="text-base text-lush-gray mb-12 h-12">8 offices across Asia, Europe, and the Americas</div>
            <div className="text-8xl md:text-9xl font-light font-serif flex items-start">
              8
            </div>
            <div className="mt-12 border-t border-white/10 pt-6">
              <h5 className="text-xl uppercase font-serif mb-2">Luxury Spas</h5>
              <p className="text-xs text-lush-gray leading-relaxed max-w-xs">
                Our luxury spas perform over 7 million treatments annually.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const RetailLocations = () => {
  const locations = [
    { name: "Hainan Hailu Duty-Free", image: "https://images.unsplash.com/photo-1567406080365-d6023d8c4743?q=80&w=800&auto=format&fit=crop" },
    { name: "Nanjing De Ji", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" },
    { name: "Haikou International Duty-Free", sub: "Shopping Complex | 2023", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=800&auto=format&fit=crop" },
    { name: "Shenzhen", sub: "2024", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="bg-lush-dark text-lush-cream py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
           <h3 className="text-sm font-bold tracking-widest uppercase">Retail Presence</h3>
           <div className="flex gap-4 text-xs opacity-60">
             <span>Shanghai Taikoo</span>
             <span>Shanghai Jingan Kerry</span>
             <span>Shanghai Kee Club</span>
             <span>Shanghai CNSC</span>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 mb-4">
                 <div className="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-widest uppercase opacity-70">USHOPAL</div>
                 <img src={loc.image} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
              <h4 className="text-lg font-medium">{loc.name}</h4>
              {loc.sub && <p className="text-sm opacity-60 mt-1">{loc.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-lush-cream py-20 border-t border-lush-dark/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-12">
          
          <div className="text-center">
             <h3 className="text-2xl md:text-3xl font-light text-lush-dark mb-8 uppercase tracking-widest">Contact Us:</h3>
             <div className="flex gap-8 justify-center text-lush-dark">
                <a href="#" className="hover:text-lush-accent transition-colors"><Mail size={32} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-lush-accent transition-colors"><Instagram size={32} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-lush-accent transition-colors"><Globe size={32} strokeWidth={1.5} /></a> {/* Using Globe for Weibo generic */}
                <a href="#" className="hover:text-lush-accent transition-colors"><Facebook size={32} strokeWidth={1.5} /></a>
                <a href="#" className="hover:text-lush-accent transition-colors"><Linkedin size={32} strokeWidth={1.5} /></a>
             </div>
          </div>

          <div className="text-center text-xs text-lush-dark/50 uppercase tracking-widest mt-12">
            <p>&copy; 2024 Ushopal.com is a registered trademark. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="font-sans antialiased text-lush-dark selection:bg-lush-accent selection:text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSection />
      <BrandPortfolioIntro />
      <BrandsGrid />
      <MetricsSection />
      <SustainabilitySection />
      <RetailLocations />
      <DetailedStats />
      <Footer />
    </div>
  );
};

export default App;