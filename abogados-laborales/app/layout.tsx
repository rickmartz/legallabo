import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "JusticiaLaboral | Abogados Especialistas en Derecho Laboral",
  description:
    "Somos especialistas en derecho laboral comprometidos con la justicia y los derechos de los trabajadores. Ofrecemos asesoría legal en casos de despido injustificado, acoso laboral y más.",
  keywords:
    "abogados laborales, derecho laboral, despido injustificado, acoso laboral, demanda laboral, finiquito, indemnización, México",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://justicialaboral.mx" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Schema Markup para FAQ */}
        <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Qué debo hacer si fui despedido injustificadamente?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Si fuiste despedido sin una causa justificada, tienes derecho a una indemnización. Lo primero que debes hacer es solicitar por escrito tu carta de despido donde se especifique la causa. Luego, contacta a un abogado laboral para evaluar tu caso. Tienes un plazo de 2 meses para presentar una demanda laboral. En JusticiaLaboral podemos asesorarte desde el primer momento para proteger tus derechos y obtener la compensación que mereces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuánto tiempo tengo para demandar a mi empleador por despido injustificado?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En México, el plazo para presentar una demanda por despido injustificado es de 2 meses (60 días hábiles) a partir de la fecha del despido. Este plazo es de prescripción, lo que significa que si no presentas tu demanda dentro de este período, perderás tu derecho a reclamar. Por eso es importante actuar rápidamente y buscar asesoría legal lo antes posible."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué es considerado acoso laboral y cómo puedo probarlo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El acoso laboral o mobbing se define como conductas sistemáticas y repetitivas de hostigamiento, intimidación o agresión que atentan contra la dignidad del trabajador. Puede manifestarse como aislamiento, sobrecarga de trabajo, humillaciones, amenazas o cualquier comportamiento que genere un entorno hostil. Para probarlo, es importante documentar cada incidente (fechas, horas, testigos), guardar comunicaciones escritas, informar a recursos humanos y, si es posible, obtener testimonios de compañeros. Un abogado especializado puede ayudarte a construir un caso sólido."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Tengo derecho a finiquito si renuncio voluntariamente?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, aunque renuncies voluntariamente, tienes derecho a un finiquito que debe incluir: salarios pendientes, parte proporcional de aguinaldo, vacaciones no disfrutadas y prima vacacional. Sin embargo, al ser una renuncia voluntaria, no tienes derecho a indemnización constitucional (3 meses de salario) ni a los 20 días por año trabajado. Es importante revisar cuidadosamente el cálculo de tu finiquito para asegurarte de que incluye todos los conceptos a los que tienes derecho."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo puedo saber si mi contrato laboral cumple con la ley?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Un contrato laboral legal debe incluir: datos de identificación de ambas partes, tipo de contrato (temporal o indefinido), descripción del puesto y funciones, jornada laboral, salario y forma de pago, prestaciones, lugar de trabajo y fecha de inicio. Además, no puede contener cláusulas que violen tus derechos laborales, como renunciar a prestaciones de ley o establecer condiciones inferiores a las mínimas legales. En JusticiaLaboral ofrecemos revisión de contratos para verificar que cumplan con todas las disposiciones legales y proteger tus derechos."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué hacer si mi empleador no me paga horas extras?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Si tu empleador no te paga las horas extras trabajadas, tienes derecho a reclamarlas. Las primeras 9 horas extras semanales se pagan al doble y las adicionales al triple. Para reclamarlas: 1) Documenta todas las horas extras trabajadas (fechas, horarios), 2) Solicita formalmente el pago por escrito a tu empleador, 3) Si no hay respuesta, puedes presentar una demanda laboral. Tienes un año para reclamar el pago de horas extras no pagadas. Nuestros abogados pueden ayudarte a calcular correctamente el monto adeudado y representarte en el proceso legal."
                  }
                }
              ]
            }
          `}
        </Script>

        {/* Schema Markup para Local Business */}
        <Script id="business-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "JusticiaLaboral",
              "image": "https://justicialaboral.mx/logo.png",
              "url": "https://justicialaboral.mx",
              "telephone": "+525572708536",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Reforma 222",
                "addressLocality": "Ciudad de México",
                "addressRegion": "CDMX",
                "postalCode": "06600",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.4326,
                "longitude": -99.1332
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/justicialaboral",
                "https://twitter.com/justicialaboral",
                "https://www.linkedin.com/company/justicialaboral",
                "https://www.instagram.com/justicialaboral"
              ],
              "priceRange": "$$",
              "servesCuisine": "Derecho Laboral"
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'