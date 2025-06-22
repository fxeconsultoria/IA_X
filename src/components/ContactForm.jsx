import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Mail, Phone, User, MessageSquare } from 'lucide-react'
// import emailjs from '@emailjs/browser'; // Removido: Não é mais necessário, pois estamos usando o Google Apps Script

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
    setSubmitStatus(null) // Reset status on new submission
    
    // URL do seu script do Google Apps fornecida
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxoyrCkMcmjUGHRL-Fvq46n2hpAUl6tx5sWGTB-jcNsLNp7-Q-ip2gIDpdzZdP0kyFTjA/exec';

    // Converte os dados do formulário para o formato URL-encoded
    // Isso é necessário para que o Google Apps Script possa ler os parâmetros corretamente
    const formDataEncoded = new URLSearchParams(formData ).toString();

    try {
      // Envia os dados para o script do Google Apps
      // Usamos 'no-cors' porque o script do Google Apps geralmente não envia cabeçalhos CORS
      // que permitiriam ler a resposta diretamente no cliente.
      // A suposição é que se a requisição não falhar na rede, ela foi enviada com sucesso.
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Importante para evitar erros de CORS em requisições cross-origin
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Define o tipo de conteúdo do corpo da requisição
        },
        body: formDataEncoded, // O corpo da requisição com os dados do formulário
      });
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' }) // Limpa o formulário após o envio
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
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

