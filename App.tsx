
import React, { useState, useEffect, useRef } from 'react';

// Type Definitions
interface Config {
  background_color: string;
  surface_color: string;
  text_color: string;
  primary_action_color: string;
  secondary_action_color: string;
  font_family: string;
  font_size: number;
  company_name: string;
  tagline: string;
  hero_title: string;
  hero_subtitle: string;
  cta_button: string;
  services_title: string;
  service1_title: string;
  service1_desc: string;
  service2_title: string;
  service2_desc: string;
  service3_title: string;
  service3_desc: string;
  footer_text: string;
}

interface ComponentProps {
    config: Config;
}

// SDK window interface
declare global {
    interface Window {
        elementSdk?: {
            init: (options: any) => void;
            setConfig: (config: Partial<Config>) => void;
        };
    }
}

// Constants
const defaultConfig: Config = {
  background_color: "#0f172a",
  surface_color: "#1e293b",
  text_color: "#f8fafc",
  primary_action_color: "#3b82f6",
  secondary_action_color: "#64748b",
  font_family: "Segoe UI",
  font_size: 16,
  company_name: "Tech Nexo",
  tagline: "Transformación digital en la nube",
  hero_title: "Expertos en Cloud y Automatización",
  hero_subtitle: "Especialistas en Terraform certificados en Azure para impulsar la transformación digital de tu empresa",
  cta_button: "Contactar Ahora",
  services_title: "Nuestros Servicios",
  service1_title: "Infraestructura como Código",
  service1_desc: "Implementación de infraestructura escalable y reproducible con Terraform, asegurando consistencia y control total",
  service2_title: "Migración a la Nube",
  service2_desc: "Transición segura y eficiente a Microsoft Azure con certificación oficial, minimizando riesgos y tiempos de inactividad",
  service3_title: "Automatización de Procesos",
  service3_desc: "Optimización de workflows empresariales mediante automatización inteligente, aumentando eficiencia y reduciendo costos",
  footer_text: "© 2024 Tech Nexo. Todos los derechos reservados."
};

// Components
const Navbar: React.FC<ComponentProps> = ({ config }) => (
    <nav id="navbar" className="shadow-md sticky top-0 z-50" style={{ backgroundColor: config.surface_color, color: config.text_color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center">
                    <svg id="logo-icon" className="h-10 w-10 mr-3" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: config.primary_action_color }}>
                        <rect width="40" height="40" rx="8" fill="currentColor" />
                        <path d="M12 20L18 14L24 20L30 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 26L18 20L24 26L30 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                        <h1 id="company-name" className="text-2xl font-bold" style={{ fontSize: `${config.font_size * 1.5}px` }}>{config.company_name}</h1>
                        <p id="tagline" className="text-sm opacity-80" style={{ fontSize: `${config.font_size * 0.875}px` }}>{config.tagline}</p>
                    </div>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#servicios" className="hover:opacity-80 transition-opacity font-medium">Servicios</a>
                    <a href="#certificaciones" className="hover:opacity-80 transition-opacity font-medium">Certificaciones</a>
                    <a href="#contacto" className="hover:opacity-80 transition-opacity font-medium">Contacto</a>
                </div>
            </div>
        </div>
    </nav>
);

const Hero: React.FC<ComponentProps> = ({ config }) => (
    <section id="hero" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 id="hero-title" className="text-5xl font-bold mb-6 leading-tight" style={{ fontSize: `${config.font_size * 3.125}px` }}>{config.hero_title}</h2>
                    <p id="hero-subtitle" className="text-xl mb-8 opacity-90" style={{ fontSize: `${config.font_size * 1.25}px` }}>{config.hero_subtitle}</p>
                    <button id="cta-button" className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{ backgroundColor: config.primary_action_color, color: config.text_color, fontSize: `${config.font_size * 1.125}px` }}>
                        {config.cta_button}
                    </button>
                </div>
                <div className="flex justify-center">
                    <svg className="w-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="180" fill="#E5E7EB" opacity="0.2" />
                        <circle cx="200" cy="200" r="140" fill="#E5E7EB" opacity="0.3" />
                        <circle cx="200" cy="200" r="100" fill="#E5E7EB" opacity="0.4" />
                        <circle id="cloud-center" cx="200" cy="200" r="60" style={{ color: config.primary_action_color }} fill="currentColor" />
                        <circle id="cloud-orbit-1" cx="280" cy="150" r="30" style={{ color: config.primary_action_color }} fill="currentColor" opacity="0.7" />
                        <circle id="cloud-orbit-2" cx="280" cy="250" r="25" style={{ color: config.primary_action_color }} fill="currentColor" opacity="0.7" />
                        <circle id="cloud-orbit-3" cx="120" cy="150" r="25" style={{ color: config.primary_action_color }} fill="currentColor" opacity="0.7" />
                        <circle id="cloud-orbit-4" cx="120" cy="250" r="30" style={{ color: config.primary_action_color }} fill="currentColor" opacity="0.7" />
                        <path d="M200 140V260M140 200H260" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        <path d="M165 165L235 235M235 165L165 235" stroke="white" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
);

const Services: React.FC<ComponentProps> = ({ config }) => {
    const services = [
        { id: 1, title: config.service1_title, desc: config.service1_desc, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
        { id: 2, title: config.service2_title, desc: config.service2_desc, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /> },
        { id: 3, title: config.service3_title, desc: config.service3_desc, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /> },
    ];

    return (
        <section id="servicios" className="py-20 px-4" style={{ backgroundColor: config.surface_color }}>
            <div className="max-w-7xl mx-auto">
                <h2 id="services-title" className="text-4xl font-bold text-center mb-16" style={{ fontSize: `${config.font_size * 2.5}px` }}>{config.services_title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} id={`service-card-${service.id}`} className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" style={{ backgroundColor: config.background_color, color: config.text_color }}>
                            <div id={`service-icon-${service.id}`} className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: config.primary_action_color }}>
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{service.icon}</svg>
                            </div>
                            <h3 id={`service${service.id}-title`} className="text-2xl font-bold mb-4" style={{ fontSize: `${config.font_size * 1.5}px` }}>{service.title}</h3>
                            <p id={`service${service.id}-desc`} className="opacity-90" style={{ fontSize: `${config.font_size}px` }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Certifications: React.FC<ComponentProps> = ({ config }) => (
    <section id="certificaciones" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Certificaciones y Especialidades</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div id="cert-card-1" className="p-8 rounded-xl" style={{ backgroundColor: config.surface_color }}>
                    <div className="text-6xl mb-4">🔷</div>
                    <h3 className="text-2xl font-bold mb-2">Certificados en Azure</h3>
                    <p className="opacity-80">Partners oficiales de Microsoft Azure con certificaciones actualizadas</p>
                </div>
                <div id="cert-card-2" className="p-8 rounded-xl" style={{ backgroundColor: config.surface_color }}>
                    <div className="text-6xl mb-4">⚡</div>
                    <h3 className="text-2xl font-bold mb-2">Especialistas Terraform</h3>
                    <p className="opacity-80">Expertos en infraestructura como código con años de experiencia</p>
                </div>
            </div>
        </div>
    </section>
);

const Contact: React.FC<ComponentProps> = ({ config }) => (
    <section id="contacto" className="py-20 px-4" style={{ backgroundColor: config.surface_color }}>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">¿Listo para transformar tu empresa?</h2>
            <p className="text-xl mb-12 opacity-90">Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos en la nube</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button id="contact-email" className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: config.secondary_action_color, color: config.text_color, fontSize: `${config.font_size * 1.125}px` }}>
                    📧 contacto@technexo.com
                </button>
                <button id="contact-phone" className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: config.primary_action_color, color: config.text_color, fontSize: `${config.font_size * 1.125}px` }}>
                    📞 Solicitar Consulta
                </button>
            </div>
        </div>
    </section>
);

const Footer: React.FC<ComponentProps> = ({ config }) => (
    <footer id="footer" className="py-8 px-4" style={{ backgroundColor: config.surface_color }}>
        <div className="max-w-7xl mx-auto text-center">
            <p id="footer-text" className="opacity-80" style={{ fontSize: `${config.font_size}px` }}>{config.footer_text}</p>
        </div>
    </footer>
);


// Main App Component
const App: React.FC = () => {
    const [config, setConfig] = useState<Config>(defaultConfig);
    const configRef = useRef(config);
    configRef.current = config;

    useEffect(() => {
        const { font_family, background_color, text_color } = config;
        document.body.style.fontFamily = `${font_family}, Tahoma, Geneva, Verdana, sans-serif`;
        document.body.style.backgroundColor = background_color;
        document.body.style.color = text_color;
    }, [config]);

    useEffect(() => {
        if (window.elementSdk) {
            const onConfigChange = (newConfig: Partial<Config>) => {
                setConfig(prev => ({ ...prev, ...newConfig }));
            };

            const mapToCapabilities = () => {
                const currentConfig = configRef.current;
                return {
                    recolorables: [
                        { get: () => currentConfig.background_color, set: (value: string) => window.elementSdk?.setConfig({ background_color: value }) },
                        { get: () => currentConfig.surface_color, set: (value: string) => window.elementSdk?.setConfig({ surface_color: value }) },
                        { get: () => currentConfig.text_color, set: (value: string) => window.elementSdk?.setConfig({ text_color: value }) },
                        { get: () => currentConfig.primary_action_color, set: (value: string) => window.elementSdk?.setConfig({ primary_action_color: value }) },
                        { get: () => currentConfig.secondary_action_color, set: (value: string) => window.elementSdk?.setConfig({ secondary_action_color: value }) }
                    ],
                    borderables: [],
                    fontEditable: {
                        get: () => currentConfig.font_family,
                        set: (value: string) => window.elementSdk?.setConfig({ font_family: value })
                    },
                    fontSizeable: {
                        get: () => currentConfig.font_size,
                        set: (value: number) => window.elementSdk?.setConfig({ font_size: value })
                    }
                };
            };

            const mapToEditPanelValues = () => {
                const currentConfig = configRef.current;
                return new Map(Object.entries(currentConfig).filter(([key]) => ![
                    'background_color', 'surface_color', 'text_color', 'primary_action_color', 'secondary_action_color', 'font_family', 'font_size'
                ].includes(key)));
            };

            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }
    }, []);

    return (
        <div className="min-h-full">
            <Navbar config={config} />
            <main>
                <Hero config={config} />
                <Services config={config} />
                <Certifications config={config} />
                <Contact config={config} />
            </main>
            <Footer config={config} />
        </div>
    );
};

export default App;
