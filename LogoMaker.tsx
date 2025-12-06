import React, { useState, useRef, useEffect } from 'react';

// Template interface
interface LogoTemplate {
  name: string;
  text: string;
  color: string;
  font: string;
}

const templates: LogoTemplate[] = [
  { name: 'Modern', text: 'Innovate', color: '#2c3e50', font: 'Arial' },
  { name: 'Playful', text: 'FunZone', color: '#3498db', font: 'Comic Sans MS' },
  { name: 'Elegant', text: 'Serenity', color: '#c0392b', font: 'Georgia' },
  { name: 'Creative', text: 'Artistry', color: '#8e44ad', font: 'Verdana' },
  { name: 'Corporate', text: 'Synergy', color: '#16a085', font: 'Helvetica' },
];

const LogoMaker: React.FC = () => {
  const [logoText, setLogoText] = useState(templates[0].text);
  const [logoColor, setLogoColor] = useState(templates[0].color);
  const [font, setFont] = useState(templates[0].font);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].name);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawLogo = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Set styles
          ctx.fillStyle = logoColor;
          ctx.font = `60px ${font}`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Draw text
          ctx.fillText(logoText, canvas.width / 2, canvas.height / 2);
        }
      }
    };
    drawLogo();
  }, [logoText, logoColor, font]);

  const handleTemplateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const templateName = event.target.value;
    const template = templates.find(t => t.name === templateName);
    if (template) {
      setLogoText(template.text);
      setLogoColor(template.color);
      setFont(template.font);
      setSelectedTemplate(template.name);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Creative Logo Maker</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Controls */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Customize</h2>
            
            <div className="mb-6">
              <label htmlFor="template" className="block text-sm font-medium text-gray-700 mb-2">Select a Template</label>
              <select id="template" value={selectedTemplate} onChange={handleTemplateChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {templates.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="logoText" className="block text-sm font-medium text-gray-700 mb-2">Logo Text</label>
              <input type="text" id="logoText" value={logoText} onChange={(e) => setLogoText(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="logoColor" className="block text-sm font-medium text-gray-700 mb-2">Logo Color</label>
              <input type="color" id="logoColor" value={logoColor} onChange={(e) => setLogoColor(e.target.value)} className="mt-1 h-10 w-full block border-gray-300 rounded-md" />
            </div>

            <div>
              <label htmlFor="font" className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
              <input type="text" id="font" value={font} onChange={(e) => setFont(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
          
          {/* Canvas Preview */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 self-start">Preview</h2>
            <canvas ref={canvasRef} width={600} height={400} className="rounded-lg border border-gray-200" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogoMaker;