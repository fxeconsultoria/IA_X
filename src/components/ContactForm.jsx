import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Mail, Phone, User, MessageSquare } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Aqui você pode integrar com um serviço de email como EmailJS ou uma API backend
      console.log('Dados do formulário:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Entre em Contato</CardTitle>
        <CardDescription className="text-center">
          Preencha o formulário abaixo e entraremos em contato em breve
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Nome Completo
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              E-mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Telefone/WhatsApp
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(85) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Conte-nos sobre seu interesse em IA para gestão empresarial..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>

          {submitStatus === 'success' && (
            <div className="text-green-600 text-center text-sm">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-600 text-center text-sm">
              Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

