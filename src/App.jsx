import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Star, Users, TrendingUp, Target, MessageCircle } from 'lucide-react' // Importar MessageCircle para o WhatsApp
import modernBusinessAI from './assets/modern_business_ai.png'
import aiBusiness from './assets/ai_business.jpg'
import aiFuture from './assets/ai_future.jpg'
import bannerPromocional from './assets/banner_promocional.png'
import LogoIAX from './assets/LogoIA-XMetalizada.png' // Importar a nova logo
import { ContactForm } from './components/ContactForm.jsx' // Importar o formulário de contato
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = '55859925756556'; // Número de telefone com código do país e DDD
    const message = encodeURIComponent('Quero transformar minha gestão com IA');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Substituir o placeholder pela logo */}
              <img src={LogoIAX} alt="Logo IA_X" className="h-12 w-auto" />
              <span className="text-xl font-bold text-gray-800">IA_X Gestão e Tecnologia</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#produtos" className="text-gray-700 hover:text-blue-600 transition-colors">Produtos</a>
              <a href="#para-quem" className="text-gray-700 hover:text-blue-600 transition-colors">Para Quem</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleWhatsAppClick} // Adicionado onClick
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                Formação + Implantação Prática em IA
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Liderança</span> com Inteligência Artificial
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Capacitamos gestores de PMEs a aplicarem IA de forma estratégica para alavancar vendas, 
                melhorar gestão e reduzir custos. <strong>Produtividade, vendas e lucro em outro patamar.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Ver Nossos Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={handleWhatsAppClick} // Adicionado onClick
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={modernBusinessAI} 
                alt="Ambiente de negócios moderno com IA" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">Resultados em 90 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Destaque */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Reduza custos, ganhe eficiência e tome decisões com dados em tempo real
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Democratizamos o uso da IA na gestão empresarial, com aplicações tangíveis que geram resultado rápido e sustentável.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={handleWhatsAppClick} // Adicionado onClick
          >
            Transforme sua Gestão Agora
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Desafios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Os Desafios dos Gestores de PMEs</h2>
              <div className="space-y-6">
                {[
                  "Falta de clareza sobre como usar IA para aumentar vendas",
                  "Dificuldade em melhorar gestão com tecnologia", 
                  "Necessidade de reduzir custos operacionais",
                  "Gestores sem capacitação prática em IA"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiBusiness} 
                alt="Desafios empresariais com IA" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={aiFuture} 
                alt="Futuro da IA nos negócios" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Nossa Solução Completa</h2>
              <div className="space-y-6">
                {[
                  { icon: Users, text: "Formação prática em IA para gestores" },
                  { icon: Target, text: "Implantação com foco em ROI" },
                  { icon: CheckCircle, text: "Resultados mensuráveis em 90 dias" }
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-lg text-gray-700 mt-2">{solution.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Democratizamos o uso da IA na gestão empresarial, com aplicações tangíveis que geram resultado rápido e sustentável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Curso de Formação de Gestores",
                description: "Capacitação completa em IA para líderes empresariais",
                color: "from-blue-500 to-blue-600",
                link: "#"
              },
              {
                title: "Pack Implantação Comercial", 
                description: "Soluções de IA focadas em vendas e relacionamento",
                color: "from-green-500 to-green-600",
                link: "#"
              },
              {
                title: "Sistema de Delivery com IA",
                description: "Implantação de atendimento automatizado via WhatsApp para restaurantes",
                color: "from-purple-500 to-purple-600",
                link: "/delivery-ia"
              },
              {
                title: "Consultoria Personalizada",
                description: "Atendimento especializado para suas necessidades",
                color: "from-orange-500 to-orange-600",
                link: "#"
              }
            ].map((product, index) => (
              <Link to={product.link} key={index}>
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4`}></div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={bannerPromocional} 
              alt="Banner promocional IA Business Management" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl text-white">
                  <h3 className="text-4xl font-bold mb-4">
                    Revolucione sua Gestão com IA
                  </h3>
                  <p className="text-xl mb-8">
                    Junte-se a centenas de gestores que já transformaram seus negócios com nossas soluções de Inteligência Artificial.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-gray-100"
                    onClick={handleWhatsAppClick} // Adicionado onClick
                  >
                    Comece Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar sua gestão com IA? Entre em contato conosco e descubra como podemos ajudar sua empresa.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                {/* Substituir o placeholder pela logo */}
                <img src={LogoIAX} alt="Logo IA_X" className="h-12 w-auto" />
                <span className="text-xl font-bold">IA_X Gestão e Tecnologia</span>
              </div>
              
              <p className="text-lg text-gray-300 mb-8">
                Democratizamos o uso da IA na gestão empresarial, com aplicações tangíveis que geram resultado rápido e sustentável.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+55 (85) 99257-5655 WhatsApp disponível</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>iaxgestao@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Fortaleza, CE</span>
                </div>
              </div>
              
              <p className="text-gray-400 mt-6">Atendimento remoto e presencial</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Nossos Produtos</h3>
              <div className="space-y-3">
                {[
                  { name: "Curso de Formação de Gestores", link: "#" },
                  { name: "Pack Implantação Comercial", link: "#" },
                  { name: "Sistema de Delivery com IA", link: "/delivery-ia" },
                  { name: "Consultoria Personalizada", link: "#" }
                ].map((product, index) => (
                  <Link key={index} to={product.link} className="block text-blue-400 hover:text-blue-300 transition-colors">
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 IA_X Gestão e Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/55859925756556" 
        className="whatsapp-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  )
}

export default App

