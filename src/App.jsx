
import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Users, Lightbulb, Truck, CheckCircle } from 'lucide-react';
import logoLestani from '../src/images/logo-lestani.jpg'; // Ajusta la ruta si es necesario
// ... el resto de tu componente
const Navbar = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ad36b130-5455-49d7-8319-8c62b1211e4f/941e573e7d88995a71198599b9e16f0f.jpg";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-background/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logoUrl} alt="j-software Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-primary">j-software</span>
        </div>
        <div className="space-x-4">
          <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300">Servicios</a>
          <a href="#clients" className="text-foreground hover:text-primary transition-colors duration-300">Clientes</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/70 via-primary/50 to-secondary/60 pt-20">
    <div className="container mx-auto text-center px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
      >
        Transformamos tu Negocio con <span className="text-yellow-300">Tecnología Innovadora</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
      >
        En <span className="font-semibold">j-software</span>, creamos soluciones a medida que digitalizan procesos, optimizan operaciones y potencian tu crecimiento.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
      >
        <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-primary-foreground font-semibold px-10 py-6 text-lg">
          Descubre Nuestras Soluciones
        </Button>
      </motion.div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-primary mb-4"
      >
        Nuestra Misión y Servicios
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
      >
        Digitalizamos procesos, optimizamos operaciones y acompañamos el crecimiento de cada cliente con herramientas simples, potentes y adaptadas a su realidad.
      </motion.p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border-primary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/20 to-primary/5 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Truck className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl font-semibold text-primary">Sistema Logístico Integral</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardDescription className="text-md text-foreground">
                Ofrecemos un sistema logístico completo para el sector transporte, ideal para pequeñas y medianas empresas que buscan profesionalizar su gestión. Optimiza rutas, gestiona flotas y controla envíos en tiempo real.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border-primary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/20 to-primary/5 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl font-semibold text-primary">Desarrollo a Medida</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardDescription className="text-md text-foreground">
                Creamos software personalizado que se adapta perfectamente a tus necesidades específicas. Desde aplicaciones web hasta sistemas de gestión complejos, te cubrimos.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border-primary/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/20 to-primary/5 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Lightbulb className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl font-semibold text-primary">Consultoría Tecnológica</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardDescription className="text-md text-foreground">
                Te asesoramos para que tomes las mejores decisiones tecnológicas. Analizamos tus procesos y te proponemos soluciones innovadoras para optimizar tu rendimiento.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

const ClientsSection = () => (
  <section id="clients" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-primary mb-16"
      >
        Nuestros Clientes Satisfechos
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="max-w-3xl mx-auto shadow-2xl glassmorphism border-primary/50">

          <CardHeader className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              {/* Se reemplaza el div del icono por la etiqueta img */}
              <img
                src={logoLestani}
                alt="Logo de Expreso Lestani"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <CardTitle className="text-3xl font-bold text-primary">Expreso Lestani</CardTitle>
                <p className="text-md text-muted-foreground">Empresa de Transporte y Logística</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <CardDescription className="text-lg text-foreground leading-relaxed">
              "Gracias al sistema desarrollado por <span className="font-semibold text-primary">j-software</span>, Expreso Lestani ha logrado una transformación digital significativa. Pudimos agilizar nuestros movimientos de encomiendas, reducir costos operativos y obtener un mayor control sobre nuestros remitos. La eficiencia y la trazabilidad han mejorado notablemente, permitiéndonos ofrecer un servicio superior a nuestros clientes."
            </CardDescription>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Mayor agilidad en encomiendas</span>
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Reducción de costos</span>
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Control optimizado de remitos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-primary/80 to-primary">
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-white mb-6"
      >
        ¿Listo para Digitalizar tu Negocio?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
      >
        Contáctanos hoy mismo y descubre cómo j-software puede ayudarte a alcanzar tus objetivos.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
      >
        <Button size="lg" variant="secondary" className="bg-yellow-400 hover:bg-yellow-500 text-primary-foreground font-semibold px-10 py-6 text-lg">
          Hablemos de tu Proyecto
        </Button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-gray-900 text-gray-400">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} j-software. Todos los derechos reservados.</p>
      <p className="text-sm mt-1">Soluciones Tecnológicas para un Futuro Digital.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
