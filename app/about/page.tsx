'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center">
            Sobre <span className="text-green-500">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Somos una empresa tecnológica de vanguardia, nacida de la visión de un futuro donde la eficiencia y la innovación se unen para transformar la forma en que las empresas operan. Desde nuestros humildes comienzos, nos hemos dedicado apasionadamente a la automatización de procesos, utilizando el poder de la inteligencia artificial y los bots para liberar el potencial humano y permitir que las organizaciones se enfoquen en lo que realmente importa: crecer y crear valor.
            <br /><br />
            Nuestra historia comenzó en un pequeño garaje, como muchas grandes ideas. Un grupo de ingenieros y visionarios se reunió con un objetivo común: simplificar las tareas repetitivas y tediosas que consumen incontables horas de trabajo. Creíamos firmemente que la tecnología, si se aplicaba correctamente, podía ser una fuerza liberadora, no una amenaza. Así nació nuestra primera generación de bots, diseñados para realizar tareas específicas con una precisión y velocidad inigualables.
            <br /><br />
            Con el tiempo, nuestra experiencia y conocimientos crecieron. Desarrollamos algoritmos más sofisticados, integramos capacidades de aprendizaje automático y expandimos nuestra suite de soluciones para abarcar una amplia gama de industrias, desde finanzas y atención médica hasta logística y servicio al cliente. Cada proyecto nos enseñó algo nuevo, cada desafío nos hizo más fuertes. Nos convertimos en expertos en identificar cuellos de botella en los procesos empresariales y en diseñar soluciones de automatización a medida que no solo aumentan la eficiencia, sino que también mejoran la calidad y reducen los errores.
            <br /><br />
            Hoy, somos líderes reconocidos en el campo de la automatización robótica de procesos (RPA) y la inteligencia artificial aplicada. Nuestro equipo está formado por algunos de los talentos más brillantes en ingeniería de software, ciencia de datos y diseño de experiencia de usuario. Trabajamos en estrecha colaboración con nuestros clientes para comprender sus necesidades únicas y ofrecer soluciones que no solo cumplen, sino que superan sus expectativas. Nos enorgullece decir que hemos ayudado a innumerables empresas a optimizar sus operaciones, reducir costos y mejorar la satisfacción de sus empleados y clientes.
            <br /><br />
            Pero nuestra misión va más allá de la simple automatización. Estamos comprometidos con la creación de un futuro donde la tecnología y la humanidad coexistan en armonía, donde los bots se encarguen de las tareas mundanas, permitiendo que las personas se dediquen a la creatividad, la estrategia y la interacción humana significativa. Invertimos continuamente en investigación y desarrollo para estar a la vanguardia de la innovación, explorando nuevas fronteras en IA, procesamiento del lenguaje natural y robótica avanzada.
            <br /><br />
            Mirando hacia el futuro, estamos emocionados por las posibilidades que nos esperan. Continuaremos expandiendo nuestras capacidades, explorando nuevos mercados y ayudando a más empresas a abrazar la transformación digital. Creemos que la automatización es la clave para desbloquear un nuevo nivel de productividad y prosperidad, y estamos dedicados a ser su socio de confianza en este viaje. Gracias por considerar a nuestra empresa. Esperamos tener la oportunidad de trabajar con usted y ayudarle a construir el futuro de su negocio, un bot a la vez.
          </p>
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