"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  MessageSquare,
  Shield,
  Scale,
  Users,
  Menu,
  X,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">JusticiaLaboral</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#casos" className="text-sm font-medium hover:text-primary transition-colors">
              Casos de Éxito
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">55 7270 8536</span>
            </div>
            <Button>Consulta Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background pt-20">
            <nav className="flex flex-col space-y-6 p-8">
              <Link
                href="#"
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#casos"
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Éxito
              </Link>
              <Link
                href="#blog"
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#contacto"
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span className="font-medium">55 7270 8536</span>
                </div>
                <Button className="w-full" size="lg">
                  Consulta Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-background"></div>
          <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl"></div>

          <div className="container grid lg:grid-cols-2 gap-12 py-20 md:py-32">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                <Shield className="h-4 w-4" />
                <span>Especialistas en Derecho Laboral</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Defendemos tus <span className="text-primary">derechos</span> laborales
              </h1>

              <p className="text-xl text-muted-foreground">
                ¿Problemas en el trabajo? Somos tus aliados legales cuando más lo necesitas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="font-medium text-base">
                  Consulta gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="font-medium text-base">
                  Nuestros servicios
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Casos ganados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">30%</p>
                  <p className="text-sm text-muted-foreground">Más económico</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">4.8</p>
                  <p className="text-sm text-muted-foreground">Calificación</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Abogados laborales"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background"></div>
          <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>

          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Scale className="h-4 w-4" />
                <span>Nuestros Servicios</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Soluciones legales especializadas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos asesoría legal experta para proteger tus derechos como trabajador.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Despido Injustificado",
                  description:
                    "Te ayudamos a obtener la indemnización que mereces cuando has sido despedido sin justificación legal.",
                  icon: <Shield className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Acoso Laboral",
                  description:
                    "Protegemos tus derechos contra cualquier forma de acoso o discriminación en el entorno laboral.",
                  icon: <Users className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Prestaciones Laborales",
                  description: "Aseguramos que recibas todas las prestaciones que te corresponden por ley.",
                  icon: <Scale className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Contratos Laborales",
                  description: "Revisamos y negociamos tus contratos para garantizar condiciones justas y legales.",
                  icon: <MessageSquare className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Seguridad Social",
                  description:
                    "Te asesoramos en temas relacionados con IMSS, INFONAVIT y otras prestaciones de seguridad social.",
                  icon: <Shield className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Asesoría Empresarial",
                  description:
                    "Ayudamos a empresas a cumplir con la normativa laboral y prevenir conflictos laborales.",
                  icon: <Users className="h-10 w-10 text-primary" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative">
                    <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="group-hover:text-primary transition-colors duration-300 p-0 h-auto font-medium"
                    >
                      Saber más{" "}
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5"></div>

          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=1000&width=800"
                    alt="Nuestro equipo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Users className="h-4 w-4" />
                  <span>Sobre Nosotros</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Experiencia, ética y excelencia</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Somos una firma especializada en Derecho Laboral, referente en el campo jurídico donde nos hemos
                  destacado por ofrecer soluciones legales personalizadas de alta calidad.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Experiencia Comprobada</h3>
                      <p className="text-muted-foreground">
                        Más de 15 años resolviendo casos laborales complejos con un alto índice de éxito.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Equipo Especializado</h3>
                      <p className="text-muted-foreground">
                        Contamos con abogados altamente capacitados y comprometidos con la excelencia.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Enfoque Personalizado</h3>
                      <p className="text-muted-foreground">
                        Cada caso recibe atención individualizada para garantizar los mejores resultados.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="font-medium">
                  Conoce más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

          <div className="container relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                SOLUCIONES SENCILLAS A MOMENTOS COMPLICADOS
              </h2>
              <p className="text-xl mb-8 text-white/80">
                Resuelve tu situación laboral de manera rápida y efectiva. Nuestro equipo de abogados especializados
                está listo para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="font-medium text-base">
                  Contáctanos ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-medium text-base border-white/30 text-white hover:bg-white/10"
                >
                  Ver casos de éxito
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="casos" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background"></div>
          <div className="absolute top-1/3 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>

          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                <span>Testimonios</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Historias de éxito de personas que confiaron en nosotros para resolver sus problemas laborales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  position: "Caso de despido injustificado",
                  quote:
                    "Después de ser despedida injustamente, JusticiaLaboral me ayudó a obtener la indemnización que merecía. Su equipo fue profesional y eficiente durante todo el proceso.",
                },
                {
                  name: "Carlos Ramírez",
                  position: "Caso de acoso laboral",
                  quote:
                    "Enfrenté una situación de acoso en mi trabajo que parecía imposible de resolver. Gracias al apoyo legal de JusticiaLaboral, pude hacer valer mis derechos y obtener una compensación justa.",
                },
                {
                  name: "Laura Méndez",
                  position: "Caso de prestaciones no pagadas",
                  quote:
                    "Mi empleador se negaba a pagarme horas extras y otras prestaciones. JusticiaLaboral no solo logró que me pagaran lo que me debían, sino también una compensación adicional por daños.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 relative">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 text-6xl text-primary/10 font-serif">"</div>
                  <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5"></div>

          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Mail className="h-4 w-4" />
                  <span>Contáctanos</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Necesitas ayuda legal?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Estamos aquí para ayudarte. Completa el formulario y uno de nuestros abogados se pondrá en contacto
                  contigo a la brevedad.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center p-4 bg-primary/5 rounded-xl">
                    <PhoneCall className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-bold">Llámanos</h3>
                      <p className="text-muted-foreground">55 7270 8536</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-primary/5 rounded-xl">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">contacto@justicialaboral.mx</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-primary/5 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-bold">Dirección</h3>
                      <p className="text-muted-foreground">Av. Reforma 222, Col. Juárez, CDMX</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-xl">
                  <h3 className="font-bold mb-2">Horario de atención</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sábados: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="bg-background p-8 rounded-2xl shadow-lg border border-border/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-sm font-medium">
                          Nombre
                        </label>
                        <Input id="nombre" placeholder="Tu nombre" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telefono" className="text-sm font-medium">
                          Teléfono
                        </label>
                        <Input id="telefono" placeholder="Tu teléfono" className="h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Correo electrónico
                      </label>
                      <Input id="email" type="email" placeholder="Tu correo electrónico" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="asunto" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input id="asunto" placeholder="Asunto de tu consulta" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea id="mensaje" placeholder="Describe brevemente tu caso" rows={4} />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base">
                      Enviar mensaje
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar este formulario, aceptas nuestra política de privacidad.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background"></div>
          <div className="absolute bottom-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>

          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                <span>Nuestro Blog</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Conocimiento legal actualizado</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Mantente informado sobre temas de derecho laboral y consejos legales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "¿Qué hacer en caso de despido injustificado?",
                  excerpt:
                    "Conoce tus derechos y los pasos a seguir cuando enfrentas un despido sin justificación legal.",
                  date: "15 Mar 2023",
                },
                {
                  title: "Reforma laboral 2023: Lo que debes saber",
                  excerpt: "Analizamos los cambios más importantes de la nueva reforma laboral y cómo te afectan.",
                  date: "28 Feb 2023",
                },
                {
                  title: "Acoso laboral: Cómo identificarlo y qué hacer",
                  excerpt:
                    "Aprende a reconocer las señales de acoso en el trabajo y las acciones legales que puedes tomar.",
                  date: "10 Feb 2023",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-2xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                >
                  <div className="h-48 bg-primary/10 relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{post.date}</div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="group-hover:text-primary transition-colors duration-300 p-0 h-auto font-medium"
                    >
                      Leer más{" "}
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="font-medium">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section - ASK Search Optimization */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5"></div>
          <div className="absolute top-1/3 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl"></div>

          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4" />
                <span>Preguntas Frecuentes</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Resolvemos tus dudas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encuentra respuestas a las preguntas más comunes sobre derecho laboral y tus derechos como trabajador.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "¿Qué debo hacer si fui despedido injustificadamente?",
                  answer:
                    "Si fuiste despedido sin una causa justificada, tienes derecho a una indemnización. Lo primero que debes hacer es solicitar por escrito tu carta de despido donde se especifique la causa. Luego, contacta a un abogado laboral para evaluar tu caso. Tienes un plazo de 2 meses para presentar una demanda laboral. En JusticiaLaboral podemos asesorarte desde el primer momento para proteger tus derechos y obtener la compensación que mereces.",
                },
                {
                  question: "¿Cuánto tiempo tengo para demandar a mi empleador por despido injustificado?",
                  answer:
                    "En México, el plazo para presentar una demanda por despido injustificado es de 2 meses (60 días hábiles) a partir de la fecha del despido. Este plazo es de prescripción, lo que significa que si no presentas tu demanda dentro de este período, perderás tu derecho a reclamar. Por eso es importante actuar rápidamente y buscar asesoría legal lo antes posible.",
                },
                {
                  question: "¿Qué es considerado acoso laboral y cómo puedo probarlo?",
                  answer:
                    "El acoso laboral o mobbing se define como conductas sistemáticas y repetitivas de hostigamiento, intimidación o agresión que atentan contra la dignidad del trabajador. Puede manifestarse como aislamiento, sobrecarga de trabajo, humillaciones, amenazas o cualquier comportamiento que genere un entorno hostil. Para probarlo, es importante documentar cada incidente (fechas, horas, testigos), guardar comunicaciones escritas, informar a recursos humanos y, si es posible, obtener testimonios de compañeros. Un abogado especializado puede ayudarte a construir un caso sólido.",
                },
                {
                  question: "¿Tengo derecho a finiquito si renuncio voluntariamente?",
                  answer:
                    "Sí, aunque renuncies voluntariamente, tienes derecho a un finiquito que debe incluir: salarios pendientes, parte proporcional de aguinaldo, vacaciones no disfrutadas y prima vacacional. Sin embargo, al ser una renuncia voluntaria, no tienes derecho a indemnización constitucional (3 meses de salario) ni a los 20 días por año trabajado. Es importante revisar cuidadosamente el cálculo de tu finiquito para asegurarte de que incluye todos los conceptos a los que tienes derecho.",
                },
                {
                  question: "¿Cómo puedo saber si mi contrato laboral cumple con la ley?",
                  answer:
                    "Un contrato laboral legal debe incluir: datos de identificación de ambas partes, tipo de contrato (temporal o indefinido), descripción del puesto y funciones, jornada laboral, salario y forma de pago, prestaciones, lugar de trabajo y fecha de inicio. Además, no puede contener cláusulas que violen tus derechos laborales, como renunciar a prestaciones de ley o establecer condiciones inferiores a las mínimas legales. En JusticiaLaboral ofrecemos revisión de contratos para verificar que cumplan con todas las disposiciones legales y proteger tus derechos.",
                },
                {
                  question: "¿Qué hacer si mi empleador no me paga horas extras?",
                  answer:
                    "Si tu empleador no te paga las horas extras trabajadas, tienes derecho a reclamarlas. Las primeras 9 horas extras semanales se pagan al doble y las adicionales al triple. Para reclamarlas: 1) Documenta todas las horas extras trabajadas (fechas, horarios), 2) Solicita formalmente el pago por escrito a tu empleador, 3) Si no hay respuesta, puedes presentar una demanda laboral. Tienes un año para reclamar el pago de horas extras no pagadas. Nuestros abogados pueden ayudarte a calcular correctamente el monto adeudado y representarte en el proceso legal.",
                },
              ].map((faq, index) => (
                <div key={index} className="mb-8">
                  <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">¿No encuentras respuesta a tu pregunta?</p>
              <Button size="lg" className="font-medium">
                Consulta personalizada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-foreground border-t py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5 opacity-50"></div>

        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scale className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold tracking-tight">JusticiaLaboral</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Especialistas en derecho laboral comprometidos con la justicia y los derechos de los trabajadores.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#casos" className="text-muted-foreground hover:text-primary transition-colors">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Servicios</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Despido Injustificado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Acoso Laboral
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Prestaciones Laborales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contratos Laborales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Seguridad Social
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <PhoneCall className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">55 7270 8536</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">contacto@justicialaboral.mx</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">Av. Reforma 222, Col. Juárez, CDMX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} JusticiaLaboral. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

