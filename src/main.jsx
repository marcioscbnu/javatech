import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Container,
  Globe2,
  Cpu,
  ServerCog
} from 'lucide-react'
import './styles.css'

const whatsapp = 'https://wa.me/5547999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20JavaTech.'

const services = [
  { icon: Rocket, title: 'Landing Pages', text: 'Páginas estratégicas, responsivas e orientadas à conversão para captar clientes, gerar contatos e apresentar ofertas com impacto.' },
  { icon: Globe2, title: 'Websites Profissionais', text: 'Sites institucionais modernos para empresas, profissionais liberais, cursos, clínicas, consultorias e negócios locais.' },
  { icon: ServerCog, title: 'Sistemas Web', text: 'Soluções sob medida para organização, automação e gestão de processos com interfaces claras e funcionais.' },
  { icon: Workflow, title: 'APIs e Integrações', text: 'Conexão entre sistemas, formulários, bancos de dados, serviços externos e automações para operações mais eficientes.' }
]

const mentorships = [
  'Lógica de Programação com Java ou JavaScript',
  'Banco de Dados SQL',
  'Modelagem de Dados',
  'Desenvolvimento em Java',
  'Java Web e Servlets',
  'JavaScript para Web',
  'Uso e consumo de APIs',
  'Conteinerização com Docker'
]

const portfolio = [
  { title: 'Pequenos Negócios', category: 'Modelo 1', url: 'https://pequenosnegocios.javatech.dev.br', description: 'Página comercial para empresas locais que desejam apresentar serviços, gerar contatos e fortalecer a presença digital.', tags: ['Negócios locais', 'WhatsApp', 'Conversão'] },
  { title: 'Educação', category: 'Modelo 2', url: 'https://educacao.javatech.dev.br', description: 'Modelo para cursos, professores, mentorias, treinamentos e instituições que precisam divulgar formações e captar alunos.', tags: ['Cursos', 'Mentorias', 'Captação'] },
  { title: 'Clínicas', category: 'Modelo 3', url: 'https://clinicas.javatech.dev.br', description: 'Website para clínicas e consultórios com foco em credibilidade, serviços, localização e agendamento de atendimento.', tags: ['Saúde', 'Agenda', 'Credibilidade'] },
  { title: 'Academias', category: 'Modelo 4', url: 'https://academias.javatech.dev.br', description: 'Landing page dinâmica para academias, studios, personal trainers e espaços de treinamento físico.', tags: ['Fitness', 'Planos', 'Matrículas'] },
  { title: 'Restaurantes', category: 'Modelo 5', url: 'https://restaurantes.javatech.dev.br', description: 'Página elegante para restaurantes, cafeterias, delivery e negócios gastronômicos apresentarem cardápio e reservas.', tags: ['Gastronomia', 'Cardápio', 'Reservas'] },
  { title: 'Profissionais Liberais', category: 'Modelo 6', url: 'https://profissionaisliberais.javatech.dev.br', description: 'Modelo para advogados, consultores, corretores, terapeutas e especialistas que vendem serviços de confiança.', tags: ['Serviços', 'Autoridade', 'Contato'] },
  { title: 'Clubes', category: 'Modelo 7', url: 'https://clubes.javatech.dev.br', description: 'Website para clubes, associações esportivas e espaços sociais divulgarem estrutura, eventos e benefícios.', tags: ['Eventos', 'Sócios', 'Institucional'] },
  { title: 'Entidades de Classe', category: 'Modelo 8', url: 'https://entidadesdeclasse.javatech.dev.br', description: 'Página institucional para sindicatos, conselhos, associações e entidades representativas comunicarem valor e serviços.', tags: ['Institucional', 'Associados', 'Gestão'] }
]

function protectPage() {
  const block = (event) => event.preventDefault()
  const keyBlock = (event) => {
    const key = event.key?.toLowerCase()
    if (key === 'f12' || (event.ctrlKey && key === 'u') || (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].includes(key))) {
      event.preventDefault()
    }
  }
  document.addEventListener('contextmenu', block)
  document.addEventListener('dragstart', block)
  document.addEventListener('keydown', keyBlock)
  return () => {
    document.removeEventListener('contextmenu', block)
    document.removeEventListener('dragstart', block)
    document.removeEventListener('keydown', keyBlock)
  }
}


function LogoIntro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3100)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="logoIntro" aria-hidden="true">
      <div className="introAura" />
      <div className="introLogoWrap">
        <img src="/assets/logo-javatech.png" alt="" />
        <span className="introScan" />
      </div>
      <p>Desenvolvimento & Educação Tecnológica</p>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <a className="brand animatedBrand" href="#inicio" aria-label="JavaTech">
        <span className="brandGlow" />
        <img src="/assets/logo-javatech.png" alt="JavaTech" />
      </a>
      <nav className="nav" aria-label="Navegação principal">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#mentorias">Mentorias</a>
        <a href="#sobre">Sobre</a>
      </nav>
      <a className="navCta" href={whatsapp} target="_blank" rel="noreferrer">Solicitar orçamento</a>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="heroContent">
        <span className="eyebrow"><Sparkles size={16} /> Desenvolvimento & Educação Tecnológica</span>
        <h1>Transformamos ideias em soluções digitais de alto impacto.</h1>
        <p>
          Landing Pages, Websites Profissionais, Sistemas Web e Mentorias Especializadas para empresas,
          profissionais e estudantes que desejam acelerar seus resultados com tecnologia.
        </p>
        <div className="heroActions">
          <a className="primaryBtn" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Falar pelo WhatsApp</a>
          <a className="secondaryBtn" href="#portfolio">Ver portfólio <ArrowRight size={18} /></a>
        </div>
        <div className="trustRow">
          <span><BadgeCheck size={17} /> Atendimento direto</span>
          <span><BadgeCheck size={17} /> Design responsivo</span>
          <span><BadgeCheck size={17} /> Soluções sob medida</span>
        </div>
      </div>
      <div className="heroPanel">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="showcaseCard mainShowcase">
          <div className="heroLogoPulse"><img src="/assets/logo-javatech.png" alt="JavaTech" /></div>
          <div className="browserDots"><span /><span /><span /></div>
          <div className="mockHeader" />
          <div className="mockTitle" />
          <div className="mockGrid"><span /><span /><span /></div>
          <div className="mockBanner" />
        </div>
        <div className="floatingCard cardOne"><Code2 size={22} /> Websites premium</div>
        <div className="floatingCard cardTwo"><Database size={22} /> SQL & APIs</div>
        <div className="floatingCard cardThree"><Container size={22} /> Docker</div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="sectionHead">
        <span className="eyebrow">Serviços</span>
        <h2>Projetos digitais com estética, performance e clareza comercial.</h2>
        <p>Cada entrega é construída para comunicar valor, facilitar o contato do cliente e fortalecer sua presença digital.</p>
      </div>
      <div className="cardsGrid">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="serviceCard" key={title}>
            <div className="iconBox"><Icon size={25} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="sectionHead">
        <span className="eyebrow">Portfólio</span>
        <h2>Modelos e soluções para inspirar seu próximo projeto.</h2>
        <p>Explore modelos por segmento, escolha uma linha visual e solicite uma versão personalizada para o seu negócio.</p>
      </div>
      <div className="portfolioGrid">
        {portfolio.map((item, index) => (
          <article className="portfolioCard" key={item.title}>
            <div className="portfolioVisual">
              <img src="/assets/marca-dagua-javatech.png" alt="JavaTech" />
              <span>0{index + 1}</span>
            </div>
            <div className="portfolioBody">
              <small>{item.category}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tagRow">{item.tags.map(tag => <em key={tag}>{tag}</em>)}</div>
              <a href={item.url} target="_blank" rel="noreferrer">Ver modelo <ArrowRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Mentorships() {
  return (
    <section id="mentorias" className="section mentorships">
      <div className="mentorPanel">
        <div>
          <span className="eyebrow">Mentorias e reforço</span>
          <h2>Aulas personalizadas para quem precisa aprender tecnologia com clareza.</h2>
          <p>
            Atendimento voltado a estudantes, profissionais em transição de carreira e pessoas que desejam fortalecer a base técnica em programação, banco de dados e desenvolvimento web.
          </p>
          <a className="primaryBtn" href={whatsapp} target="_blank" rel="noreferrer"><BookOpen size={19} /> Solicitar mentoria</a>
        </div>
        <div className="mentorList">
          {mentorships.map((item) => <span key={item}><GraduationCap size={18} /> {item}</span>)}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="aboutPhoto">
        <img src="/assets/prof-marcio-aguiar.jpg" alt="Prof. Márcio Aguiar" />
      </div>
      <div className="aboutText">
        <span className="eyebrow">Quem está por trás da JavaTech?</span>
        <h2>Prof. Márcio Aguiar</h2>
        <p>
          Professor universitário, desenvolvedor Full Stack e consultor em tecnologia, atuando na criação de soluções digitais, desenvolvimento de software, sistemas corporativos e formação de profissionais da área de tecnologia.
        </p>
        <p>
          Com experiência em ensino superior, projetos empresariais e desenvolvimento web, a JavaTech nasceu para unir conhecimento técnico, inovação, usabilidade e resultado.
        </p>
        <div className="authorityGrid">
          <span><GraduationCap size={18} /> Professor Universitário</span>
          <span><MonitorSmartphone size={18} /> Desenvolvedor Full Stack</span>
          <span><Database size={18} /> Banco de Dados</span>
          <span><Cpu size={18} /> Soluções Web</span>
          <span><Boxes size={18} /> Docker</span>
          <span><Layers3 size={18} /> Sistemas Corporativos</span>
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  const data = [
    ['Atendimento direto', 'Você fala com quem entende o projeto, planeja a solução e executa a entrega.'],
    ['Soluções sob medida', 'Cada página ou sistema é construído conforme o objetivo, o público e a identidade do cliente.'],
    ['Tecnologia moderna', 'Projetos com foco em responsividade, performance, integração e experiência de uso.'],
    ['Compromisso com resultado', 'Design bonito é importante, mas clareza, conversão e funcionalidade são essenciais.']
  ]
  return (
    <section className="section differentials">
      {data.map(([title, text]) => (
        <article key={title}>
          <ShieldCheck size={24} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  )
}

function FinalCta() {
  return (
    <section id="contato" className="section finalCta">
      <img src="/assets/logo-javatech.png" alt="JavaTech" />
      <h2>Seu próximo projeto começa aqui.</h2>
      <p>Solicite uma proposta para landing page, website, sistema web ou mentoria especializada.</p>
      <a className="primaryBtn" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Falar pelo WhatsApp</a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/assets/logo-javatech.png" alt="JavaTech" />
        <p>Landing Pages • Websites • Sistemas Web • Mentorias • Desenvolvimento de Software</p>
      </div>
      <p>© 2026 JavaTech. Todos os direitos reservados.</p>
    </footer>
  )
}

function App() {
  useEffect(() => protectPage(), [])
  return (
    <>
      <LogoIntro />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Mentorships />
        <About />
        <Differentials />
        <FinalCta />
      </main>
      <Footer />
      <a className="whatsappFloat" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a JavaTech pelo WhatsApp"><MessageCircle size={24} /></a>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
