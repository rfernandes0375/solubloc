import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Zap, Layers, Recycle, ArrowRight, MessageCircle,
  Box, Construction, CheckCircle2, Ruler, Weight, LayoutPanelLeft,
  Anchor, Landmark, Mountain, FileText, AlertTriangle, Settings,
  XCircle
} from 'lucide-react';
import './index.css';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.2, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const PDF_URL = "https://www.solubloc.com.br/downloads/Folder_Superbloc.pdf";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="container" style={{ position: 'fixed', top: '2rem', left: '0', right: '0', zIndex: 1000 }}>
        <div style={{
          background: 'rgba(18, 21, 28, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '1rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <img src="logo_solubloc.png" alt="Solubloc Logo" style={{ height: '35px' }} />
          <div style={{ display: 'flex', gap: '3rem', fontSize: '0.9rem', fontWeight: '600' }}>
            <a href="#solucao" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>A Solução</a>
            <a href="#producao" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Produção</a>
            <a href="#versatilidade" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Versatilidade</a>
            <a href="#portoalegre" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Casos</a>
          </div>
          <a href="https://wa.me/5562981183722?text=Olá, quero saber mais sobre a Solubloc!" className="btn-premium" style={{ padding: '0.7rem 1.8rem', fontSize: '0.9rem' }}>
            WhatsApp <MessageCircle size={18} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ paddingTop: '220px', minHeight: '100vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <FadeIn style={{ textAlign: 'left' }}>
          <div className="badge"><Box size={14} /> Solubloc</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: 0.9 }}>
            Infraestrutura <br />
            <span style={{ color: 'var(--accent)' }}>Inteligente.</span>
          </h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', fontWeight: '500' }}>
            Soluções definitivas em contenção modular por gravidade. <br />
            Alta durabilidade, custo otimizado e montagem a seco.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
              Baixar Catálogo PDF <FileText size={18} />
            </a>
            <a href="#portoalegre" className="glass-card" style={{ padding: '1rem 2rem', borderRadius: '16px', textDecoration: 'none', fontWeight: '700' }}>
              Ver Caso Real
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="img-container" style={{ border: 'none', boxShadow: 'none' }}>
            <img
              src="solubloc_hero_premium_v2_1775125433051.png"
              alt="Bloco Solubloc Render"
              style={{ width: '100%', filter: 'drop-shadow(0 0 60px rgba(255,140,0,0.1))' }}
            />
          </div>
        </FadeIn>
      </section>

      {/* Comparison Section - INVERTED ORDER AND NEW LEGENDS */}
      <section id="solucao" className="container">
        <div style={{ textAlign: 'left', marginBottom: '5rem' }}>
          <span className="badge" style={{ background: 'rgba(255,140,0,0.1)', color: 'var(--accent)', border: '1px solid rgba(255,140,0,0.2)' }}>
            <Shield size={14} /> Comparativo Técnico
          </span>
          <h2 style={{ fontSize: '3.5rem' }}>O Fim da Era dos Gabiões.</h2>
        </div>

        <div className="grid-2-comparison" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* SOLUBLOC FIRST */}
          <FadeIn className="glass-card" style={{ padding: '3rem', border: '1px solid var(--accent)' }}>
            <div style={{ height: '350px', overflow: 'hidden', borderRadius: '16px', marginBottom: '2.5rem' }}>
              <img src="solubloc.png" alt="Solubloc" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ color: 'var(--text)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <CheckCircle2 color="#22c55e" size={32} />
                <h3 style={{ fontSize: '2rem' }}>✅Solubloc</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                <li>• Alta durabilidade, sem corrosão</li>
                <li>• Produção no local da obra</li>
                <li>• Montagem rápida e mecanizada</li>
                <li>• Menor mão de obra exposta</li>
              </ul>
            </div>
          </FadeIn>

          {/* GABIÃO SECOND */}
          <FadeIn delay={0.2} className="glass-card" style={{ padding: '3rem', opacity: 0.8 }}>
            <div style={{ height: '350px', overflow: 'hidden', borderRadius: '16px', marginBottom: '2.5rem' }}>
              <img src="gabiao.png" alt="Gabião" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <XCircle color="#ef4444" size={32} />
                <h3 style={{ fontSize: '2rem' }}>❌Gabião</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                <li>• Corrosão dos metais</li>
                <li>• Produção artesanal lenta</li>
                <li>• Alta exposição de operários</li>
                <li>• Deformações comuns</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Production On-Site */}
      <section id="producao" className="container" style={{ background: 'var(--surface)', margin: '100px 2rem', borderRadius: '48px', padding: '100px 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'center' }}>
          <FadeIn>
            <div className="badge"><Settings size={14} /> Autonomia Total</div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Produção In loco: <br />Logística Inteligente.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
              O modelo Solubloc permite a fabricação dos blocos diretamente no canteiro de obras. Eliminamos o custo do frete de peças pesadas.
            </p>
          </FadeIn>
          <div className="grid" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', maxWidth: '600px', marginLeft: 'auto' }}>
            <FadeIn delay={0.1} className="img-container" style={{ height: '300px', flex: 1, marginTop: '-20px' }}>
              <img src="forma1.jpg" alt="Forma 1" style={{ height: '100%', objectFit: 'cover' }} />
            </FadeIn>
            <FadeIn delay={0.2} className="img-container" style={{ height: '300px', flex: 1, marginTop: '40px' }}>
              <img src="forma2.jpg" alt="Forma 2" style={{ height: '100%', objectFit: 'cover' }} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* UPDATED ENGINEERING SECTION - engenharia.png */}
      <section id="tecnica" className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
          <FadeIn delay={0.2} className="img-container" style={{ height: '600px', borderRadius: '32px' }}>
            <img src="engenharia.png" alt="Engenharia Técnica" style={{ height: '100%', objectFit: 'cover' }} />
          </FadeIn>
          <FadeIn>
            <div className="badge">Engenharia</div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Precisão de Encaixe Técnico.</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <div className="spec-label">Dimensões</div>
                <div className="spec-value">1.60 x 0.80 x 0.80m</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Peso</div>
                <div className="spec-value">2.400 kg</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Encaixe</div>
                <div className="spec-value">Macho-Fêmea</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Material</div>
                <div className="spec-value">Concreto 25MPa+</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EMERGENCY CASE - PORTO ALEGRE */}
      <section id="portoalegre" className="container">
        <div style={{ background: '#12151c', padding: '6rem', borderRadius: '48px', overflow: 'hidden' }}>
          <FadeIn style={{ marginBottom: '5rem' }}>
            <div className="badge" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <AlertTriangle size={14} /> Caso Emergêncial
            </div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Porto Alegre: Contenção de Encostas.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '800px', fontSize: '1.2rem' }}>
              Resposta rápida a deslizamentos urbanos utilizando o sistema Solubloc.
            </p>
          </FadeIn>

          <div className="grid-3" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
            <FadeIn className="img-container" style={{ height: '500px' }}>
              <img src="prefeirutadeportoalegre1.jpg" alt="Porto Alegre" style={{ height: '100%', objectFit: 'cover' }} />
            </FadeIn>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <FadeIn delay={0.1} className="img-container" style={{ height: '240px' }}>
                <img src="prefeirutadeportoalegre2.jpg" alt="Porto Alegre" style={{ height: '100%', objectFit: 'cover' }} />
              </FadeIn>
              <FadeIn delay={0.2} className="img-container" style={{ height: '240px' }}>
                <img src="prefeirutadeportoalegre3.jpg" alt="Porto Alegre" style={{ height: '100%', objectFit: 'cover' }} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Versatility Section */}
      <section id="versatilidade" className="container">
        <FadeIn style={{ textAlign: 'left', marginBottom: '5rem' }}>
          <span className="badge">Aplicações Diversas</span>
          <h2 style={{ fontSize: '3.5rem' }}>Versatilidade Sem Barreiras.</h2>
        </FadeIn>

        <div className="grid-3">
          {[
            { img: "cabeceiradeponte.png", title: "Pontes e Viadutos", icon: <Landmark size={20} /> },
            { img: "contecao_maritima_rios.png", title: "Contenção Marítima", icon: <Anchor size={20} /> },
            { img: "encostas.png", title: "Muros de Arrimo", icon: <Mountain size={20} /> }
          ].map((item, i) => (
            <FadeIn key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden' }} delay={i * 0.1}>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--accent)' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.2rem' }}>{item.title}</h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="container" style={{ marginBottom: '150px' }}>
        <FadeIn style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(255,140,0,0.1) 0%, transparent 40%), var(--surface)',
          padding: '8rem 4rem',
          borderRadius: '48px',
          textAlign: 'center',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>Eleve sua Infraestrutura.</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="https://wa.me/5562981183722?text=Olá, quero saber mais sobre a Solubloc!" className="btn-premium">
              Falar com vendedor <ArrowRight />
            </a>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '1.3rem 3rem', borderRadius: '16px', textDecoration: 'none', fontWeight: '700', border: '1px solid var(--border)' }}>
              Catálogo Completo PDF
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="container" style={{ paddingBottom: '60px', opacity: 0.5 }}>
        <img src="logo_solubloc.png" alt="Solubloc" style={{ height: '20px', grayscale: '100%', marginBottom: '1rem' }} />
        <p>&copy; 2026 Solubloc Industrial. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
