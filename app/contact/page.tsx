'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setError(data.message || 'Error al enviar el mensaje.');
        setStatus('');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error de conexión. Inténtalo de nuevo.');
      setStatus('');
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-green-900/40 py-4 px-6">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold tracking-tight">BotMM</span>
          </Link>
          <div className="flex-grow flex justify-center">
            <nav className="hidden md:flex items-center justify-center gap-6">
              <Link href="/about" className="text-sm font-medium hover:text-green-500 transition">
                Sobre Nosotros
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-green-500 transition">
                Precios
              </Link>
              <Link href="/docs" className="text-sm font-medium hover:text-green-500 transition">
                Documentación
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-green-500 transition">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-green-500 transition">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-500 hover:bg-green-900/10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-green-900/40 bg-gray-900">
            <nav className="flex flex-col py-4 px-6">
              <Link href="/about" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Sobre Nosotros
              </Link>
              <Link href="/pricing" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Precios
              </Link>
              <Link href="/docs" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Documentación
              </Link>
              <Link href="/blog" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Blog
              </Link>
              <Link href="/contact" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900 flex-grow">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center">
            Contacto
          </h1>

          <Card className="bg-gray-900 border-green-900/40">
            <CardHeader>
              <CardTitle className="text-white">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nombre</Label>
                  <Input id="name" placeholder="Tu Nombre" className="bg-black border-green-900/40 focus:border-green-500/40 text-white" value={formData.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@correo.com" className="bg-black border-green-900/40 focus:border-green-500/40 text-white" value={formData.email} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Asunto</Label>
                  <Input id="subject" placeholder="Asunto del Mensaje" className="bg-black border-green-900/40 focus:border-green-500/40 text-white" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensaje</Label>
                  <Textarea id="message" placeholder="Tu Mensaje Aquí" className="bg-black border-green-900/40 focus:border-green-500/40 text-white min-h-[150px]" value={formData.message} onChange={handleChange} />
                </div>
                {status && <p className="text-center text-sm text-green-500">{status}</p>}
                {error && <p className="text-center text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-black">
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-black py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold">BotMM</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/about" className="hover:text-green-500 transition">
                Sobre Nosotros
              </Link>
              <Link href="/pricing" className="hover:text-green-500 transition">
                Precios
              </Link>
              <Link href="/docs" className="hover:text-green-500 transition">
                Documentación
              </Link>
              <Link href="/blog" className="hover:text-green-500 transition">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-green-500 transition">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-900/40 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} BotMM. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}