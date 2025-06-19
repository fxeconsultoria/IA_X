import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { ArrowRight, Brain, Target, Zap, CheckCircle, Users, TrendingUp, Clock, Phone, Mail, Linkedin, MessageCircle, Menu, X, GraduationCap, BarChart3, DollarSign, Building2, ShoppingCart, Cog } from 'lucide-react';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="IA_X Gestão e Tecnologia" className="h-12 w-auto" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#produtos" className="text-sm font-medium hover:text-primary transition-colors">Produtos</a>
            <a href="#publico" className="text-sm font-medium hover:text-primary transition-colors">Para Quem</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="hidden md:block bg-primary hover:bg-primary/90">
              Fale Conosco
            </Button>
          </motion.div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden border-t bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#home" className="block text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#produtos" className="block text-sm font-medium hover:text-primary transition-colors">Produtos</a>
              <a href="#publico" className="block text-sm font-medium hover:text-primary transition-colors">Para Quem</a>
              <a href="#sobre" className="block text-sm font-medium hover:text-primary transition-colors">Sobre</a>
              <a href="#contato" className="block text-sm font-medium hover:text-primary transition-colors">Contato</a>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6">
              Formação + Implantação Prática em IA
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme sua Liderança com{' '}
            <span className="text-primary">Inteligência Artificial</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Capacitamos gestores de PMEs a aplicarem IA de forma estratégica para alavancar vendas, 
            melhorar gestão e reduzir custos. <strong>Produtividade, vendas e lucro em outro patamar.</strong>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
              Ver Nossos Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              Falar com Especialista
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Os Desafios dos Gestores de PMEs
              </h2>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  'Falta de clareza sobre como usar IA para aumentar vendas',
                  'Dificuldade em melhorar gestão com tecnologia',
                  'Necessidade de reduzir custos operacionais',
                  'Gestores sem capacitação prática em IA'
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    variants={fadeInUp}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-slate-600">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Nossa Solução Completa
              </h2>
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" />
                    Formação + Implantação Prática
                  </CardTitle>
                  <CardDescription>
                    Democratizamos o uso da IA na gestão empresarial com aplicações tangíveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Formação prática em IA para gestores',
                      'Implantação com foco em ROI',
                      'Resultados mensuráveis em 90 dias'
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Soluções completas para sua jornada em IA: da capacitação à implantação prática
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Curso de Formação */}
            <motion.div variants={fadeInUp}>
              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">Mais Popular</Badge>
                  </div>
                  <CardTitle>Curso de Formação de Gestores com IA</CardTitle>
                  <CardDescription>
                    Capacite-se para usar IA com foco em produtividade e resultados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">R$ 997</span>
                      <Badge variant="outline">Presencial + EAD</Badge>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Formação prática em IA',
                        'Materiais e gravações',
                        'Certificado de conclusão',
                        'Suporte pós-curso',
                        '1 turma por mês'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full hover:scale-105 transition-transform">
                      Inscreva-se na Próxima Turma
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pack Comercial */}
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <Badge variant="outline">B2B</Badge>
                  </div>
                  <CardTitle>Pack de Implantação Comercial com IA</CardTitle>
                  <CardDescription>
                    Estruturação comercial completa com IA para alavancar vendas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">R$ 25.000</span>
                      <Badge variant="outline">+ R$ 2.500/mês</Badge>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        'CRM com IA integrada',
                        'Automação de prospecção',
                        'Dashboards comerciais',
                        'Roteiros de vendas',
                        'Treinamento da equipe'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                      Solicitar Proposta Comercial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pack Financeiro */}
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <DollarSign className="h-8 w-8 text-primary" />
                    <Badge variant="outline">B2B</Badge>
                  </div>
                  <CardTitle>Pack de Implantação Financeira com IA</CardTitle>
                  <CardDescription>
                    Dashboards financeiros e automação para reduzir custos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">R$ 25.000</span>
                      <Badge variant="outline">Projeto</Badge>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Dashboards financeiros com IA',
                        'Previsões de fluxo de caixa',
                        'Margem de contribuição',
                        'DRE automatizado',
                        'Redução de custos'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                      Solicitar Proposta Financeira
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Público-Alvo */}
      <section id="publico" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Para Quem São Nossos Produtos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Focamos em gestores de PMEs que querem aplicar IA de forma prática e estratégica
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Perfil Ideal</h3>
              <div className="space-y-4">
                {[
                  { icon: Users, text: 'Empresários, supervisores e gerentes' },
                  { icon: Building2, text: 'Pequenas e médias empresas (PMEs)' },
                  { icon: TrendingUp, text: 'Empresas de 10 a 500 funcionários' },
                  { icon: Target, text: 'Foco em resultados e crescimento' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Setores Atendidos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShoppingCart, text: 'Varejo' },
                  { icon: Cog, text: 'Serviços' },
                  { icon: Building2, text: 'Indústria Leve' },
                  { icon: Brain, text: 'Tecnologia' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilares Estratégicos */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nossos Pilares Estratégicos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossa abordagem focada em resultados garante o sucesso da sua jornada em IA
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: GraduationCap, title: 'Educação Executiva em IA', desc: 'Formação prática e aplicada para gestores' },
              { icon: Target, title: 'Implantação com Foco em ROI', desc: 'Projetos que geram retorno mensurável' },
              { icon: TrendingUp, title: 'Alavancagem de Vendas', desc: 'IA aplicada para aumentar receita' },
              { icon: Brain, title: 'Autoridade em IA Aplicada', desc: 'Referência em IA para gestão empresarial' }
            ].map((item, index) => (
              <motion.div variants={fadeInUp} key={index}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full text-center">
                  <CardHeader>
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Veja os resultados que nossos clientes alcançam com nossas soluções
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '90 dias', label: 'Para ver resultados', desc: 'Implante IA na sua gestão comercial e veja os resultados' },
              { number: '25+', label: 'Alunos por mês', desc: 'Meta de capacitação de gestores em IA' },
              { number: '45%', label: 'Margem de lucro', desc: 'ROI alto com investimento em conhecimento' }
            ].map((item, index) => (
              <motion.div variants={fadeInUp} key={index}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">{item.number}</div>
                    <CardTitle className="text-lg">{item.label}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Descubra como podemos transformar sua gestão com Inteligência Artificial
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Nome da sua empresa"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Produto de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione um produto</option>
                    <option value="curso">Curso de Formação de Gestores com IA</option>
                    <option value="comercial">Pack de Implantação Comercial</option>
                    <option value="financeiro">Pack de Implantação Financeira</option>
                    <option value="consultoria">Consultoria Personalizada</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Reduza custos, ganhe eficiência e tome decisões com dados em tempo real
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Democratizamos o uso da IA na gestão empresarial, com aplicações tangíveis que geram resultado rápido e sustentável.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
              Transforme sua Gestão Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp}>
              <img src={logo} alt="IA_X Gestão e Tecnologia" className="h-12 w-auto mb-4" />
              <p className="text-sm mb-4">
                Democratizamos o uso da IA na gestão empresarial, com aplicações tangíveis que geram resultado rápido e sustentável.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-4">Nossos Produtos</h3>
              <ul className="space-y-2">
                <li><a href="#produtos" className="text-sm hover:text-primary transition-colors">Curso de Formação de Gestores</a></li>
                <li><a href="#produtos" className="text-sm hover:text-primary transition-colors">Pack Implantação Comercial</a></li>
                <li><a href="#produtos" className="text-sm hover:text-primary transition-colors">Pack Implantação Financeira</a></li>
                <li><a href="#contato" className="text-sm hover:text-primary transition-colors">Consultoria Personalizada</a></li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">+55 (11) 9999-9999 WhatsApp disponível</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-slate-400">Fortaleza, CE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-slate-400">Atendimento remoto e presencial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">linkedin.com/company/ia-x-gestao-e-tecnologia</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center text-sm text-slate-500 mt-8">
            &copy; {new Date().getFullYear()} IA_X Gestão e Tecnologia. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20IA_X%20Gestão%20e%20Tecnologia."
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;

