import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  FileText, 
  Users, 
  TrendingUp, 
  Radio, 
  Download, 
  ExternalLink, 
  Search, 
  X, 
  Save, 
  RefreshCw, 
  AlertCircle,
  Database,
  ArrowRight,
  MessageSquare,
  Clock,
  Sparkles,
  Phone,
  Check,
  Key,
  Cpu,
  Sliders,
  Zap,
  Flame,
  Pin,
  PinOff,
  HelpCircle,
  Activity,
  Award,
  BarChart3,
  Globe
} from 'lucide-react';
import { CATEGORIES, AUTHORS } from '../data/mockData';
import { isSupabaseConfigured, getSupabaseStatus } from '../lib/supabase';
import { 
  fetchArticles, 
  saveArticle, 
  deleteArticle, 
  checkArticleDuplicate,
  fetchWeeklyDrops, 
  updateWeeklyDrop, 
  fetchNewsletterSubscribers, 
  fetchConciergeInquiries,
  resetToHomologatedArticles,
  purgeDuplicatesAndRestore,
  promoteToHero,
  togglePinHero
} from '../services/radarService';
import { generateLuxuryArticle, getGeminiApiKey, saveGeminiApiKey } from '../services/aiArticleGenerator';
import { getHotPautas, updateHotPautaStatus, resetHotPautasFeeds } from '../data/hotFeedsData';
import { getHeroAnalysis, calculateEditorialScore, calculateCapaWeight } from '../services/rankingEngine';
import { isFounderModeActive, setFounderMode } from '../services/analyticsService';

export default function AdminPage() {
  const masterPin = import.meta.env.VITE_ADMIN_PIN || 'RADAR2026';
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('radar_admin_auth') === 'true' || window.location.search.includes('auth=true');
  });
  const [pinInput, setPinInput] = useState('');
  const [isFounderMode, setIsFounderMode] = useState(() => isFounderModeActive());
  const [pinError, setPinError] = useState(false);

  // Active Tab: 'articles', 'hot_pautas', 'drops', 'subscribers', 'concierge', 'supabase'
  const [activeTab, setActiveTab] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('tab') || 'articles';
    } catch (e) {
      return 'articles';
    }
  });

  // Data states
  const [articles, setArticles] = useState([]);
  const [drops, setDrops] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  // Article Modal Editor State
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Supercarros',
    categorySlug: 'supercarros',
    authorSlug: 'henrique-vianna',
    type: 'article',
    badge: 'EDITORIAL VIP',
    readTime: '5 min de leitura',
    image: '',
    excerpt: '',
    contentParagraphsText: '',
    specsText: '',
    videoUrl: '',
    videoDuration: '04:00',
    status: 'published',
    isHero: false,
    isHeroSecondary: false
  });

  // AI Generator Modal State
  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState(null);
  const [aiError, setAiError] = useState('');
  const [geminiKey, setGeminiKey] = useState(() => getGeminiApiKey());
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [keySavedToast, setKeySavedToast] = useState(false);
  const [autoPublish, setAutoPublish] = useState(() => {
    return localStorage.getItem('radar_auto_publish') !== 'false';
  });

  // Central de Pautas Quentes 24h
  const [hotPautas, setHotPautas] = useState(() => getHotPautas());
  const [selectedPautaCategory, setSelectedPautaCategory] = useState('todos');
  const [importingPautaId, setImportingPautaId] = useState(null);
  const [isScouting, setIsScouting] = useState(false);

  // Modal de Explicação de Ranking Multidimensional
  const [rankingExplanationModal, setRankingExplanationModal] = useState(null);

  // Diagnostic
  const dbStatus = getSupabaseStatus();

  // Load dashboard data
  const loadData = async () => {
    setLoading(true);
    try {
      const [arts, drps, subs, inqs] = await Promise.all([
        fetchArticles(),
        fetchWeeklyDrops(),
        fetchNewsletterSubscribers(),
        fetchConciergeInquiries()
      ]);
      setArticles(arts || []);
      setDrops(drps || []);
      setSubscribers(subs || []);
      setInquiries(inqs || []);
      setHotPautas(getHotPautas());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Ao acessar o painel administrativo, ativa automaticamente a proteção de tráfego interno
    setFounderMode(true);
    setIsFounderMode(true);
  }, []);

  const handleToggleFounderMode = () => {
    const next = !isFounderMode;
    setFounderMode(next);
    setIsFounderMode(next);
    showToast(next ? 'Modo Fundador ATIVADO: seus acessos não serão contabilizados no Analytics.' : 'Modo Fundador DESATIVADO: seus acessos serão contabilizados.');
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  // Toast feedback helper
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  // Authentication Handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === masterPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem('radar_admin_auth', 'true');
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('radar_admin_auth');
  };

  // AI Generator Handlers
  const handleGenerateWithAI = async (e) => {
    if (e) e.preventDefault();
    if (!aiInput.trim()) return;
    setIsGenerating(true);
    setAiError('');
    setGeneratedArticle(null);

    try {
      const result = await generateLuxuryArticle(aiInput);
      setGeneratedArticle(result);

      if (autoPublish) {
        await saveArticle({
          ...result,
          status: 'published',
          isHero: true
        });
        showToast('✦ Matéria gerada e publicada diretamente na Capa!');
        loadData();
      }
    } catch (err) {
      setAiError(err.message || 'Falha ao processar análise editorial com IA.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveGeneratedArticle = async (destination = 'hero') => {
    if (!generatedArticle) return;
    const payload = {
      ...generatedArticle,
      placement: destination,
      status: destination === 'draft' ? 'draft' : 'published',
      isHero: destination === 'hero'
    };

    // 🛡️ Auditoria Extra de Duplicidade
    const dupCheck = checkArticleDuplicate(payload, articles);
    if (dupCheck.isDuplicate) {
      const msg = dupCheck.isCapaCollision
        ? `⚠️ ALERTA EDITORIAL (CAPA ATUAL):\n\n${dupCheck.reason}.\nMatéria na Capa: "${dupCheck.matchedArticle?.title}"\n\nDeseja publicar mesmo assim?`
        : `⚠️ ALERTA EDITORIAL (DUPLICIDADE):\n\n${dupCheck.reason}.\nMatéria existente: "${dupCheck.matchedArticle?.title}"\n\nDeseja publicar mesmo assim?`;
      if (!window.confirm(msg)) {
        return;
      }
    }

    const res = await saveArticle(payload);
    if (res.success) {
      if (destination === 'hero') {
        showToast('✦ Matéria gerada por IA e publicada no topo da Capa!');
      } else if (destination === 'feed') {
        showToast('✦ Matéria publicada no Feed com sucesso (Capa mantida intacta)!');
      } else {
        showToast('Matéria gerada por IA salva como rascunho!');
      }
      setIsAIGeneratorOpen(false);
      setGeneratedArticle(null);
      setAiInput('');
      loadData();
    }
  };

  // Article Editor handlers
  const handleOpenNewArticle = () => {
    setEditingArticle(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Supercarros',
      categorySlug: 'supercarros',
      authorSlug: 'henrique-vianna',
      type: 'article',
      badge: 'NOVO NO RADAR',
      readTime: '6 min de leitura',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
      excerpt: '',
      contentParagraphsText: '',
      specsText: 'potencia: 1.000 cv\nvalor: Sob Consulta',
      videoUrl: '',
      videoDuration: '04:00',
      status: 'published',
      isHero: false,
      isHeroSecondary: false
    });
    setIsEditorOpen(true);
  };

  const handleOpenEditArticle = (art) => {
    setEditingArticle(art);
    setFormData({
      title: art.title || '',
      slug: art.slug || '',
      category: art.category || 'Supercarros',
      categorySlug: art.categorySlug || 'supercarros',
      authorSlug: art.authorSlug || 'henrique-vianna',
      type: art.type || 'article',
      badge: art.badge || 'EDITORIAL VIP',
      readTime: art.readTime || '5 min de leitura',
      image: art.image || '',
      excerpt: art.excerpt || '',
      contentParagraphsText: (art.contentParagraphs || []).join('\n\n'),
      specsText: art.specs ? Object.entries(art.specs).map(([k, v]) => `${k}: ${v}`).join('\n') : '',
      videoUrl: art.videoUrl || '',
      videoDuration: art.videoDuration || '04:00',
      status: art.status || 'published',
      isHero: Boolean(art.isHero),
      isHeroSecondary: Boolean(art.isHeroSecondary)
    });
    setIsEditorOpen(true);
  };

  const handleSaveArticle = async (e) => {
    e.preventDefault();

    // Parse paragraphs from text
    const paragraphs = formData.contentParagraphsText
      .split('\n\n')
      .map(p => p.trim())
      .filter(Boolean);

    // Parse specs from lines (key: value)
    const specsObj = {};
    formData.specsText.split('\n').forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join(':').trim();
        if (key && val) specsObj[key] = val;
      }
    });

    const payload = {
      ...(editingArticle ? { id: editingArticle.id } : {}),
      title: formData.title,
      slug: formData.slug || formData.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
      category: formData.category,
      categorySlug: formData.categorySlug,
      authorSlug: formData.authorSlug,
      type: formData.type,
      badge: formData.badge,
      readTime: formData.readTime,
      image: formData.image,
      excerpt: formData.excerpt,
      contentParagraphs: paragraphs.length > 0 ? paragraphs : [formData.excerpt],
      specs: specsObj,
      videoUrl: formData.type === 'video' ? formData.videoUrl : null,
      videoDuration: formData.type === 'video' ? formData.videoDuration : null,
      status: formData.status,
      isHero: formData.isHero,
      isHeroSecondary: formData.isHeroSecondary
    };

    // 🛡️ Auditoria Extra de Duplicidade (apenas para matérias novas ou com alteração de título/imagem)
    if (!editingArticle || editingArticle.title !== payload.title || editingArticle.image !== payload.image) {
      const dupCheck = checkArticleDuplicate(payload, articles);
      if (dupCheck.isDuplicate) {
        const msg = dupCheck.isCapaCollision
          ? `⚠️ ALERTA EDITORIAL (CAPA ATUAL):\n\n${dupCheck.reason}.\nMatéria na Capa: "${dupCheck.matchedArticle?.title}"\n\nDeseja publicar mesmo assim?`
          : `⚠️ ALERTA EDITORIAL (DUPLICIDADE):\n\n${dupCheck.reason}.\nMatéria existente: "${dupCheck.matchedArticle?.title}"\n\nDeseja publicar mesmo assim?`;
        if (!window.confirm(msg)) {
          return;
        }
      }
    }

    const res = await saveArticle(payload);
    if (res.success) {
      showToast(editingArticle ? 'Matéria atualizada com sucesso!' : 'Nova matéria publicada no Radar!');
      setIsEditorOpen(false);
      loadData();
    }
  };

  const handleDeleteArticle = async (id, title) => {
    if (window.confirm(`Tem certeza que deseja excluir "${title}" do Radar?`)) {
      await deleteArticle(id);
      showToast('Matéria removida com sucesso.');
      loadData();
    }
  };

  // Toggle publish/draft status
  const handleToggleStatus = async (art) => {
    const newStatus = art.status === 'draft' ? 'published' : 'draft';
    await saveArticle({ ...art, status: newStatus });
    showToast(`Status alterado para ${newStatus === 'published' ? 'Publicado' : 'Rascunho'}.`);
    loadData();
  };

  // Drops quick edit handler
  const handleUpdateDrop = async (id, field, value) => {
    await updateWeeklyDrop(id, { [field]: value });
    showToast('Cotação do Drop atualizada.');
    loadData();
  };

  // Export Subscribers to CSV
  const handleExportSubscribersCSV = () => {
    if (subscribers.length === 0) {
      alert('Nenhum assinante cadastrado ainda.');
      return;
    }
    const headers = 'ID,Email,Data_Inscricao,Status\n';
    const rows = subscribers
      .map(s => `"${s.id}","${s.email}","${s.created_at || s.createdAt || ''}","${s.status || 'active'}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `radar_do_luxo_assinantes_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Central de Pautas Quentes: Importação e Redação com IA em 1 clique
  // Aceita destino: 'hero' (publica na capa) ou 'feed' (publica no site sem alterar a capa)
  const handleImportPauta = async (pauta, placement = 'hero') => {
    // 🛡️ VERIFICAÇÃO ANTES DE IMPORTAR
    const getPhotoId = (url) => {
      if (!url) return '';
      const m = url.match(/photo-[a-z0-9\-]+/i);
      return m ? m[0] : '';
    };

    const pautaPhoto = getPhotoId(pauta.suggestedImage);
    const pautaTitle = (pauta.suggestedHook || pauta.originalTitle || '').toLowerCase();

    const alreadyExists = articles.find(a => {
      const aPhoto = getPhotoId(a.image);
      const aTitle = (a.title || '').toLowerCase();
      if (pautaPhoto && aPhoto && pautaPhoto === aPhoto) return true;
      if (pautaTitle && aTitle && (aTitle.includes(pautaTitle.slice(0, 22)) || pautaTitle.includes(aTitle.slice(0, 22)))) return true;
      return false;
    });

    if (alreadyExists) {
      alert(`⚠️ Esta pauta já está publicada no Radar!\n\nMatéria existente: "${alreadyExists.title}".\n\nO sistema impediu a criação de duplicatas para manter o acervo exclusivo.`);
      updateHotPautaStatus(pauta.id, 'imported');
      setHotPautas(getHotPautas());
      return;
    }

    setImportingPautaId(pauta.id);
    const destLabel = placement === 'hero' ? 'Capa Principal' : 'Feed Geral (Capa Mantida)';
    showToast(`Redigindo ensaio editorial com IA a partir de ${pauta.source} (Destino: ${destLabel})...`);

    try {
      const inputContext = `${pauta.suggestedHook}\n\nResumo: ${pauta.summary}\nFonte: ${pauta.source}\nURL: ${pauta.sourceUrl}`;
      const result = await generateLuxuryArticle(inputContext);

      // Garante a imagem cinematográfica da pauta se não houver outra específica
      if (pauta.suggestedImage && (!result.image || result.image.includes('1592198084033'))) {
        result.image = pauta.suggestedImage;
      }

      // Herda pontuação de ranking da pauta
      result.rankingScore = pauta.rankingScore || calculateEditorialScore(result).totalScore;

      if (autoPublish) {
        await saveArticle({
          ...result,
          status: 'published',
          placement,
          isHero: placement === 'hero'
        });
        updateHotPautaStatus(pauta.id, 'imported');
        setHotPautas(getHotPautas());
        showToast(placement === 'hero' 
          ? '✦ Matéria redigida com sucesso e publicada no topo da Capa!' 
          : '✦ Matéria publicada no Feed com sucesso (Capa atual mantida intacta)!');
        loadData();
      } else {
        setGeneratedArticle({ ...result, pendingPlacement: placement });
        setIsAIGeneratorOpen(true);
        updateHotPautaStatus(pauta.id, 'imported');
        setHotPautas(getHotPautas());
      }
    } catch (err) {
      alert(`Falha ao redigir pauta com IA: ${err.message}`);
    } finally {
      setImportingPautaId(null);
    }
  };

  // Promove matéria diretamente para a Capa
  const handlePromoteHero = async (articleId) => {
    await promoteToHero(articleId);
    showToast('✦ Matéria promovida para Destaque Principal da Capa!');
    loadData();
  };

  // Alterna fixação manual da Capa (Pin)
  const handleTogglePin = async (articleId) => {
    const res = await togglePinHero(articleId);
    showToast(res.isPinned 
      ? '📌 Matéria fixada na Capa com sucesso! (Decaimento temporal pausado)' 
      : 'Matéria desafixada da Capa. (Decaimento temporal reativado)');
    loadData();
  };

  // Dispara o Scout internacional ao vivo de novas pautas
  const handleScoutLiveFeeds = async () => {
    setIsScouting(true);
    showToast('🌐 Conectando à rede mundial de luxo (Robb Report, Hodinkee, Monochrome, Leilões)...');
    try {
      resetHotPautasFeeds();
      const freshPautas = getHotPautas();
      setHotPautas(freshPautas);
      const availableCount = freshPautas.filter(p => p.status === 'available').length;
      showToast(`✓ Scout concluído com sucesso! ${availableCount} pautas mundiais disponíveis.`);
    } catch (err) {
      console.error(err);
      showToast('⚠️ Erro ao atualizar feeds de pautas.');
    } finally {
      setIsScouting(false);
    }
  };

  // Renova feeds de pautas quentes para o ciclo de 24h
  const handleRenewPautas = () => {
    resetHotPautasFeeds();
    setHotPautas(getHotPautas());
    showToast('✦ Feeds de pautas quentes renovados para o ciclo de 24 horas!');
  };

  // Restaura o acervo original homologado equilibrado (12 matérias)
  const handleResetHomologated = () => {
    if (window.confirm('Deseja restaurar o acervo de matérias para a coleção homologada equilibrada (12 matérias distribuídas entre Supercarros, Relojoaria, Mansões, Patrimônio e Iates)?')) {
      resetToHomologatedArticles();
      showToast('✦ Acervo equilibrado do Radar restaurado com sucesso!');
      loadData();
    }
  };

  // --------------------------------------------------------------------------
  // 1. LOGIN / LOCK SCREEN
  // --------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-lux-bg-light dark:bg-lux-bg-dark">
        <div className="w-full max-w-md bg-white dark:bg-lux-bg-cardDark p-8 rounded-2xl border border-lux-border-light dark:border-lux-border-dark shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold" />

          <div className="w-16 h-16 rounded-full bg-lux-gold/10 border border-lux-gold/30 text-lux-gold flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-lux-gold" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lux-gold block mb-1">
            ACESSO RESTRITO • MESA EDITORIAL
          </span>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-lux-text-primary dark:text-lux-text-darkPrimary mb-2">
            Radar do Luxo
          </h1>

          <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary font-light mb-6">
            Insira o PIN de segurança editorial para acessar o painel de publicações e leads.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Insira o PIN de segurança"
                className="w-full text-center tracking-[0.3em] font-mono text-lg bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg py-3 px-4 text-lux-text-primary dark:text-white focus:outline-none focus:border-lux-gold transition-colors"
              />
            </div>

            {pinError && (
              <p className="text-xs text-red-500 font-medium">
                PIN de segurança incorreto. Tente novamente.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-lux-text-primary dark:bg-lux-gold text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow"
            >
              <Unlock className="w-4 h-4" />
              <span>Desbloquear Mesa Editorial</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsAuthenticated(true);
                sessionStorage.setItem('radar_admin_auth', 'true');
              }}
              className="w-full py-2.5 rounded-lg border border-lux-border-light dark:border-lux-border-dark hover:border-lux-gold text-lux-text-secondary dark:text-lux-text-darkSecondary font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-lux-emerald" />
              <span>Entrar Direto (Ambiente Local)</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-lux-border-light dark:border-lux-border-dark text-[11px] text-lux-text-muted">
            <span>Dica de desenvolvimento: PIN padrão é </span>
            <button
              type="button"
              onClick={() => {
                setPinInput('RADAR2026');
                setIsAuthenticated(true);
                sessionStorage.setItem('radar_admin_auth', 'true');
              }}
              className="text-lux-gold font-bold underline hover:opacity-80"
            >
              RADAR2026 (Clique para Entrar)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 2. MAIN ADMIN DASHBOARD
  // --------------------------------------------------------------------------
  const filteredArticles = articles.filter(a => 
    a.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.authorSlug?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-lux-bg-light dark:bg-lux-bg-dark text-lux-text-primary dark:text-lux-text-darkPrimary py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Toast Feedback */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-lux-text-primary text-white dark:bg-lux-gold dark:text-black px-5 py-3 rounded-lg shadow-2xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-4 h-4 text-lux-emerald" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Masthead Row */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-lux-border-light dark:border-lux-border-dark">
          <div>
            <div className="flex items-center gap-2 text-lux-gold text-xs font-bold tracking-[0.25em] uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-lux-gold" />
              <span>PAINEL EDITORIAL & GESTÃO DO RADAR</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-lux-text-primary dark:text-lux-text-darkPrimary">
              Mesa de Operações
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Supabase Status Pill */}
            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${
              isSupabaseConfigured 
                ? 'bg-lux-emerald/10 border-lux-emerald/30 text-lux-emerald' 
                : 'bg-lux-gold/15 border-lux-gold/30 text-lux-gold-dark dark:text-lux-gold'
            }`}>
              <Database className="w-3.5 h-3.5" />
              <span>{isSupabaseConfigured ? '🟢 Supabase Ativo' : '🟡 Modo Local'}</span>
            </div>

            {/* View Live Site */}
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-xs font-semibold hover:border-lux-gold transition-colors"
            >
              <span>Ver Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-xs font-semibold transition-colors"
            >
              Sair
            </button>
          </div>
        </header>

        {/* Metric Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-sm">
            <div className="flex items-center justify-between text-lux-text-muted mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold">Total de Matérias</span>
              <FileText className="w-4 h-4 text-lux-gold" />
            </div>
            <div className="font-serif text-2xl font-bold">{articles.length}</div>
            <div className="text-[11px] text-lux-text-muted mt-1">
              {articles.filter(a => a.status !== 'draft').length} publicadas • {articles.filter(a => a.status === 'draft').length} rascunhos
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-sm">
            <div className="flex items-center justify-between text-lux-text-muted mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold">Assinantes VIP</span>
              <Users className="w-4 h-4 text-lux-gold" />
            </div>
            <div className="font-serif text-2xl font-bold">{subscribers.length}</div>
            <div className="text-[11px] text-lux-emerald mt-1 flex items-center gap-1">
              <span>● Radar Privado ativo</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-sm">
            <div className="flex items-center justify-between text-lux-text-muted mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold">Mesa de Concierge</span>
              <MessageSquare className="w-4 h-4 text-lux-gold" />
            </div>
            <div className="font-serif text-2xl font-bold">{inquiries.length}</div>
            <div className="text-[11px] text-lux-text-muted mt-1">Solicitações de colecionadores</div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-sm">
            <div className="flex items-center justify-between text-lux-text-muted mb-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold">Drops Ativos</span>
              <TrendingUp className="w-4 h-4 text-lux-gold" />
            </div>
            <div className="font-serif text-2xl font-bold">{drops.length}</div>
            <div className="text-[11px] text-lux-text-muted mt-1">Cotações da semana</div>
          </div>
        </div>

        {/* Founder Protection & Analytics Safeguard Banner */}
        <div className="p-4 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-gold/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isFounderMode ? 'bg-emerald-500/10 text-emerald-500' : 'bg-lux-gold/10 text-lux-gold'}`}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-lux-text-primary dark:text-white">
                  Filtro de Tráfego Interno (Modo Fundador)
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  isFounderMode 
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                    : 'bg-zinc-500/15 text-zinc-500 border border-zinc-500/30'
                }`}>
                  {isFounderMode ? '● Ativo (Seus Acessos Não Contam)' : '○ Desativado'}
                </span>
              </div>
              <p className="text-[11px] text-lux-text-muted mt-0.5 leading-relaxed">
                {isFounderMode
                  ? 'Seus acessos de casa e testes neste dispositivo são ignorados pela Vercel e pelo Google Analytics. Sua cota de 2.500 visitas está 100% protegida.'
                  : 'Seus acessos estão sendo contabilizados normalmente nas métricas da revista.'}
              </p>
            </div>
          </div>
          <button
            onClick={handleToggleFounderMode}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex-shrink-0 ${
              isFounderMode
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-lux-gold hover:bg-lux-gold-light text-black'
            }`}
          >
            {isFounderMode ? '✓ Proteção Ativa' : 'Ativar Proteção'}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-lux-border-light dark:border-lux-border-dark pb-3">
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'articles'
                ? 'bg-lux-gold text-black shadow-sm'
                : 'text-lux-text-secondary hover:text-lux-text-primary dark:hover:text-white'
            }`}
          >
            Matérias & Posts ({articles.length})
          </button>

          <button
            onClick={() => setActiveTab('hot_pautas')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === 'hot_pautas'
                ? 'bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold text-black shadow-md font-bold'
                : 'text-amber-500 hover:text-lux-gold border border-amber-500/30 bg-amber-500/10'
            }`}
          >
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span>Pautas Quentes 24h ({hotPautas.filter(p => p.status === 'available').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('drops')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'drops'
                ? 'bg-lux-gold text-black shadow-sm'
                : 'text-lux-text-secondary hover:text-lux-text-primary dark:hover:text-white'
            }`}
          >
            Drops & Cotações ({drops.length})
          </button>

          <button
            onClick={() => setActiveTab('subscribers')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'subscribers'
                ? 'bg-lux-gold text-black shadow-sm'
                : 'text-lux-text-secondary hover:text-lux-text-primary dark:hover:text-white'
            }`}
          >
            Assinantes VIP ({subscribers.length})
          </button>

          <button
            onClick={() => setActiveTab('concierge')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'concierge'
                ? 'bg-lux-gold text-black shadow-sm'
                : 'text-lux-text-secondary hover:text-lux-text-primary dark:hover:text-white'
            }`}
          >
            Mesa de Concierge ({inquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('supabase')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'supabase'
                ? 'bg-lux-gold text-black shadow-sm'
                : 'text-lux-text-secondary hover:text-lux-text-primary dark:hover:text-white'
            }`}
          >
            Guia Supabase & SQL
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: ARTIGOS & POSTS */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'articles' && (
          <div className="space-y-4">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-lux-text-muted absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar matérias por título ou categoria..."
                  className="w-full bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark rounded-lg pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-lux-gold transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    if (window.confirm('Deseja eliminar todas as matérias duplicadas do site e manter apenas os artigos oficiais únicos?')) {
                      purgeDuplicatesAndRestore();
                      loadData();
                      showToast('🧹 Todas as duplicatas foram eliminadas e o acervo foi restaurado com sucesso!');
                    }
                  }}
                  title="Remove imediatamente todas as duplicatas geradas por cliques repetidos e restaura o acervo limpo"
                  className="px-3 py-2 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Limpar Duplicatas</span>
                </button>

                <button
                  onClick={handleResetHomologated}
                  title="Restaura a coleção homologada equilibrada com 12 matérias divididas por temas"
                  className="px-3 py-2 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-lux-text-secondary hover:text-lux-text-primary text-xs font-semibold flex items-center gap-1.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-lux-gold" />
                  <span className="hidden sm:inline">Restaurar Acervo</span>
                </button>

                <button
                  onClick={() => {
                    setIsAIGeneratorOpen(true);
                    setGeneratedArticle(null);
                    setAiError('');
                  }}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>✦ Gerar com IA</span>
                </button>

                <button
                  onClick={handleOpenNewArticle}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-lux-text-primary dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>Nova Manual</span>
                </button>
              </div>
            </div>

            {/* Widget: Termômetro da Capa & Radar de Rotação Editorial */}
            {(() => {
              const heroAnalysis = getHeroAnalysis(articles);
              if (!heroAnalysis || !heroAnalysis.currentHero) return null;
              const { currentHero, currentHeroWeight, topChallenger, shouldRotate, delta, recommendationMsg } = heroAnalysis;

              return (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-black/85 via-black/95 to-lux-bg-dark border border-lux-gold/30 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-lux-gold animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-lux-gold">
                        Termômetro da Capa & Radar de Rotação
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-lux-text-muted">Modo de Capa:</span>
                      <button
                        onClick={() => handleTogglePin(currentHero.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
                          currentHero.isPinnedHero
                            ? 'bg-lux-gold text-black border-lux-gold shadow font-extrabold'
                            : 'bg-white/10 text-white border-white/20 hover:border-lux-gold/50'
                        }`}
                      >
                        {currentHero.isPinnedHero ? <Pin className="w-3 h-3 fill-black" /> : <PinOff className="w-3 h-3 text-lux-gold" />}
                        <span>{currentHero.isPinnedHero ? 'Capa Fixada (Sem Decaimento)' : 'Dinâmica (Meia-Vida 24h)'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Card Capa Atual */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider">
                        <span className="text-lux-gold flex items-center gap-1">
                          <span>👑</span>
                          <span>Destaque Atual da Capa</span>
                        </span>
                        <span className={currentHeroWeight.healthColor}>
                          {currentHeroWeight.healthLabel}
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <img
                          src={currentHero.image}
                          alt={currentHero.title}
                          className="w-16 h-12 rounded-lg object-cover border border-white/10 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-serif text-sm font-bold text-white truncate">
                            {currentHero.title}
                          </h4>
                          <span className="text-[11px] text-lux-text-darkSecondary block truncate mt-0.5">
                            Por {AUTHORS[currentHero.authorSlug]?.name || 'Redação'} • {currentHero.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-lux-text-muted">Peso Dinâmico da Capa:</span>
                          <span className="font-mono font-bold text-white text-xs">
                            {currentHero.isPinnedHero ? '999 pts (Protegido)' : `${currentHeroWeight.currentWeight} pts (Base: ${currentHeroWeight.baseScore})`}
                          </span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${currentHero.isPinnedHero ? 'bg-lux-gold w-full' : 'bg-gradient-to-r from-lux-gold to-lux-gold-light'}`}
                            style={{ width: currentHero.isPinnedHero ? '100%' : `${Math.min(100, (currentHeroWeight.currentWeight / (currentHeroWeight.baseScore || 100)) * 100)}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-lux-text-muted">
                          <span>{currentHeroWeight.isPinned ? 'Decaimento temporal pausado' : `No ar há ${currentHeroWeight.hoursElapsed}h`}</span>
                          <span>{currentHeroWeight.isPinned ? 'Manual' : `Decaimento: -${currentHeroWeight.decayPercentage}%`}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Top Desafiante do Feed */}
                    <div className={`p-4 rounded-xl border space-y-3 ${shouldRotate ? 'bg-amber-500/10 border-amber-500/40' : 'bg-white/5 border-white/10'}`}>
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider">
                        <span className="text-white flex items-center gap-1">
                          <span>⚡</span>
                          <span>Principal Desafiante no Feed</span>
                        </span>
                        {topChallenger && (
                          <span className="font-mono text-lux-gold font-bold">
                            Peso: {topChallenger.weightData.currentWeight} pts (Score: {topChallenger.weightData.baseScore})
                          </span>
                        )}
                      </div>

                      {topChallenger ? (
                        <>
                          <div className="flex items-start gap-3">
                            <img
                              src={topChallenger.article.image}
                              alt={topChallenger.article.title}
                              className="w-16 h-12 rounded-lg object-cover border border-white/10 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="font-serif text-sm font-bold text-white truncate">
                                {topChallenger.article.title}
                              </h4>
                              <span className="text-[11px] text-lux-text-darkSecondary block truncate mt-0.5">
                                Por {AUTHORS[topChallenger.article.authorSlug]?.name || 'Redação'} • {topChallenger.article.category}
                              </span>
                            </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 text-xs">
                            <span className="text-[11px] text-lux-text-darkSecondary italic">
                              {shouldRotate ? `Superou a Capa em +${delta} pts!` : `Diferença para a Capa: ${delta > 0 ? `+${delta}` : delta} pts`}
                            </span>

                            <button
                              onClick={() => handlePromoteHero(topChallenger.article.id)}
                              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-lux-gold to-lux-gold-light text-black font-bold text-[11px] uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow"
                            >
                              <span>✦ Promover para Capa</span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <p className="text-xs text-lux-text-muted italic py-4 text-center">
                          Nenhum outro artigo publicado no feed disputando a Capa.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Recommendation message */}
                  <div className="text-[11px] text-lux-text-darkSecondary flex items-center gap-2 pt-1 border-t border-white/10">
                    <span className="font-bold text-lux-gold uppercase tracking-wider">Diagnóstico Editorial:</span>
                    <span>{recommendationMsg}</span>
                  </div>
                </div>
              );
            })()}

            {/* Articles Table */}
            <div className="bg-white dark:bg-lux-bg-cardDark rounded-xl border border-lux-border-light dark:border-lux-border-dark overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-black/5 dark:bg-black/30 border-b border-lux-border-light dark:border-lux-border-dark text-[10px] uppercase tracking-wider text-lux-text-muted">
                    <tr>
                      <th className="p-4">Matéria</th>
                      <th className="p-4">Autor</th>
                      <th className="p-4">Categoria</th>
                      <th className="p-4">Ranking & Peso</th>
                      <th className="p-4">Formato</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lux-border-light dark:divide-lux-border-dark">
                    {filteredArticles.map((art) => {
                      const author = AUTHORS[art.authorSlug] || AUTHORS['henrique-vianna'];
                      const isDraft = art.status === 'draft';
                      const weightInfo = calculateCapaWeight(art);
                      const baseScore = art.rankingScore || weightInfo.baseScore;

                      return (
                        <tr key={art.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3 max-w-md">
                              <img
                                src={art.image}
                                alt={art.title}
                                className="w-12 h-12 rounded object-cover flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  {art.isHero && (
                                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-lux-gold text-black flex items-center gap-1">
                                      <span>👑 CAPA</span>
                                      {art.isPinnedHero && <Pin className="w-2.5 h-2.5 fill-black" />}
                                    </span>
                                  )}
                                  <span className="font-serif font-bold text-sm block truncate text-lux-text-primary dark:text-lux-text-darkPrimary">
                                    {art.title}
                                  </span>
                                </div>
                                <span className="text-[11px] text-lux-text-muted block truncate">
                                  {art.excerpt}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5 font-medium">
                              <img
                                src={author?.avatar}
                                alt={author?.name}
                                className="w-5 h-5 rounded-full object-cover"
                              />
                              <span>{author?.name || art.authorSlug}</span>
                            </div>
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-black/5 dark:bg-white/10">
                              {art.category}
                            </span>
                          </td>

                          {/* Ranking & Peso da Capa */}
                          <td className="p-4 whitespace-nowrap">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => setRankingExplanationModal(art)}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold font-mono border border-lux-gold/30 bg-lux-gold/10 text-lux-gold hover:bg-lux-gold/20 transition-colors"
                                  title="Clique para ver a justificativa nos 4 pilares"
                                >
                                  <Award className="w-3 h-3 text-lux-gold" />
                                  <span>{baseScore} pts</span>
                                  <HelpCircle className="w-2.5 h-2.5 text-lux-text-muted" />
                                </button>
                                {art.isHero && (
                                  <button
                                    onClick={() => handleTogglePin(art.id)}
                                    title={art.isPinnedHero ? "Capa Fixada (clique para desafixar e reativar decaimento)" : "Clique para fixar na Capa"}
                                    className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-lux-gold"
                                  >
                                    {art.isPinnedHero ? <Pin className="w-3.5 h-3.5 fill-lux-gold" /> : <PinOff className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />}
                                  </button>
                                )}
                              </div>
                              <span className="text-[10px] text-lux-text-muted block font-mono">
                                {art.isHero ? (art.isPinnedHero ? 'Capa Fixada' : `Peso Capa: ${weightInfo.currentWeight}`) : `Peso Feed: ${weightInfo.currentWeight}`}
                              </span>
                            </div>
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            <span className="text-[10px] font-medium text-lux-gold uppercase">
                              {art.type === 'video' ? '▶ Vídeo' : 'Artigo'}
                            </span>
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            <button
                              onClick={() => handleToggleStatus(art)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
                                isDraft
                                  ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20'
                                  : 'bg-lux-emerald/10 text-lux-emerald hover:bg-lux-emerald/20'
                              }`}
                              title="Clique para alternar Publicado / Rascunho"
                            >
                              {isDraft ? 'Rascunho' : 'Publicado'}
                            </button>
                          </td>

                          <td className="p-4 whitespace-nowrap text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {!art.isHero && art.status === 'published' && (
                                <button
                                  onClick={() => handlePromoteHero(art.id)}
                                  className="p-1.5 rounded hover:bg-lux-gold/20 text-lux-text-muted hover:text-lux-gold transition-colors"
                                  title="Promover para Destaque Principal da Capa"
                                >
                                  <Sparkles className="w-4 h-4 text-lux-gold" />
                                </button>
                              )}

                              <Link
                                to={`/artigo/${art.slug}`}
                                target="_blank"
                                className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/5 text-lux-text-muted hover:text-lux-gold transition-colors"
                                title="Ver no site"
                              >
                                <Eye className="w-4 h-4" />
                              </Link>

                              <button
                                onClick={() => handleOpenEditArticle(art)}
                                className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/5 text-lux-text-muted hover:text-lux-gold transition-colors"
                                title="Editar matéria"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => handleDeleteArticle(art.id, art.title)}
                                className="p-1.5 rounded hover:bg-red-500/10 text-lux-text-muted hover:text-red-500 transition-colors"
                                title="Excluir matéria"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: CENTRAL DE PAUTAS QUENTES (FEEDS 24H) */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'hot_pautas' && (
          <div className="space-y-6">
            
            {/* Header Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-black/80 via-black/90 to-lux-bg-dark border border-lux-gold/30 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-lux-gold/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-lux-gold flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-lux-gold text-lux-gold" />
                      <span>Radar de Ingestão Autônoma • Feeds 24h</span>
                    </span>
                    <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      Ciclo de Frescor Ativo
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Central de Pautas Quentes do Radar
                  </h2>
                  <p className="text-xs text-lux-text-darkSecondary max-w-2xl leading-relaxed">
                    Pautas em alta detectadas nos grandes centros internacionais (Robb Report, Forbes, Hodinkee, RM Sotheby's, Architectural Digest e Boat International). Bateu o olho? Clique em <strong>[ ✦ Importar & Redigir com IA ]</strong> e a matéria é redigida com a voz de autoridade do Radar e publicada direto na Capa!
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleScoutLiveFeeds}
                    disabled={isScouting}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold text-black hover:opacity-95 text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <Globe className={`w-3.5 h-3.5 ${isScouting ? 'animate-spin' : ''}`} />
                    <span>{isScouting ? 'Rastreando o Mundo...' : '🌐 Rastrear Novas Pautas no Mundo Agora'}</span>
                  </button>
                  <button
                    onClick={handleRenewPautas}
                    className="px-4 py-2 rounded-xl border border-lux-gold/40 text-lux-gold hover:bg-lux-gold/10 text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Renovar Janela 24h</span>
                  </button>
                  <button
                    onClick={handleResetHomologated}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-lux-gold" />
                    <span>Restaurar Acervo</span>
                  </button>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-lux-text-darkSecondary gap-2">
                <div className="flex items-center gap-4">
                  <span>Pautas no Radar: <strong className="text-white">{hotPautas.length}</strong></span>
                  <span>Disponíveis: <strong className="text-amber-400">{hotPautas.filter(p => p.status === 'available').length}</strong></span>
                  <span>Publicadas: <strong className="text-lux-emerald">{hotPautas.filter(p => p.status === 'imported').length}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-lux-text-muted">Parâmetro de Publicação:</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${autoPublish ? 'bg-lux-emerald text-black' : 'bg-white/10 text-white'}`}>
                    {autoPublish ? '⚡ Publicar Direto na Capa' : '✍ Salvar como Rascunho'}
                  </span>
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'Todos os Feeds', value: 'todos' },
                { label: 'Supercarros', value: 'supercarros' },
                { label: 'Alta Relojoaria', value: 'relogios' },
                { label: 'Arquitetura & Mansões', value: 'arquitetura' },
                { label: 'Destinos & Iates', value: 'destinos' }
              ].map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedPautaCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedPautaCategory === cat.value
                      ? 'bg-lux-gold text-black shadow-sm font-bold'
                      : 'bg-black/5 dark:bg-lux-bg-cardDark text-lux-text-secondary hover:text-lux-text-primary dark:hover:text-white border border-lux-border-light dark:border-lux-border-dark'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {hotPautas
                .filter(p => selectedPautaCategory === 'todos' || p.categorySlug === selectedPautaCategory)
                .map(pauta => {
                  const author = AUTHORS[pauta.authorSlug] || AUTHORS['henrique-vianna'];
                  const isImporting = importingPautaId === pauta.id;
                  const getPhotoIdHelper = (url) => {
                    if (!url) return '';
                    const m = url.match(/photo-[a-z0-9\-]+/i);
                    return m ? m[0] : '';
                  };
                  const pPhoto = getPhotoIdHelper(pauta.suggestedImage);
                  const pTitle = (pauta.suggestedHook || pauta.originalTitle || '').toLowerCase();
                  const isAlreadyOnSite = articles.some(a => {
                    const aPhoto = getPhotoIdHelper(a.image);
                    const aTitle = (a.title || '').toLowerCase();
                    if (pPhoto && aPhoto && pPhoto === aPhoto) return true;
                    if (pTitle && aTitle && (aTitle.includes(pTitle.slice(0, 22)) || pTitle.includes(aTitle.slice(0, 22)))) return true;
                    return false;
                  });
                  const isImported = pauta.status === 'imported' || isAlreadyOnSite;

                  return (
                    <div
                      key={pauta.id}
                      className={`p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-sm relative overflow-hidden group ${
                        isImported
                          ? 'bg-lux-emerald/5 border-lux-emerald/30'
                          : 'bg-white dark:bg-lux-bg-cardDark border-lux-border-light dark:border-lux-border-dark hover:border-lux-gold/60'
                      }`}
                    >
                      {/* Top Badges */}
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pauta.badgeColor}`}>
                              {pauta.source}
                            </span>
                            <span className="text-[10px] uppercase font-semibold text-lux-text-muted">
                              {pauta.category}
                            </span>
                            <button
                              onClick={() => setRankingExplanationModal(pauta)}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono border border-lux-gold/40 bg-lux-gold/10 text-lux-gold hover:bg-lux-gold/20 transition-colors"
                              title="Clique para ver o motivo deste ranking nos 4 pilares"
                            >
                              <Award className="w-3 h-3 text-lux-gold" />
                              <span>Score {pauta.rankingScore || 90} ({pauta.rankingTier || 'A'})</span>
                              <HelpCircle className="w-2.5 h-2.5 text-lux-text-muted" />
                            </button>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            <Clock className="w-3 h-3" />
                            <span>{pauta.validityLabel} ({pauta.publishedTime})</span>
                          </div>
                        </div>

                        {/* Magnetic Hook Title */}
                        <h3 className="font-serif text-base sm:text-lg font-bold leading-snug text-lux-text-primary dark:text-white group-hover:text-lux-gold transition-colors mb-2">
                          {pauta.suggestedHook}
                        </h3>

                        {/* Summary */}
                        <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed italic mb-3">
                          "{pauta.summary}"
                        </p>

                        {/* Specs Preview */}
                        {pauta.specsPreview && (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {Object.entries(pauta.specsPreview).slice(0, 4).map(([k, v]) => (
                              <div
                                key={k}
                                className="p-2 rounded-lg bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark"
                              >
                                <span className="text-[9px] uppercase tracking-wider text-lux-text-muted block font-semibold">
                                  {k}
                                </span>
                                <span className="font-medium text-xs text-lux-text-primary dark:text-white truncate block">
                                  {v}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer & Action */}
                      <div className="space-y-3 pt-3 border-t border-lux-border-light dark:border-lux-border-dark">
                        <div className="flex items-center justify-between text-xs">
                          {/* Colunista */}
                          <div className="flex items-center gap-2">
                            <img
                              src={author.avatar}
                              alt={author.name}
                              className="w-7 h-7 rounded-full object-cover border border-lux-gold"
                            />
                            <div>
                              <span className="font-semibold block text-[11px] text-lux-text-primary dark:text-white leading-tight">
                                {author.name}
                              </span>
                              <span className="text-[9px] text-lux-text-muted block">
                                {author.role}
                              </span>
                            </div>
                          </div>

                          {/* Link de origem */}
                          <a
                            href={pauta.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-lux-gold hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span>Ver no {pauta.source.split(' ')[0]}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        {/* Distinct Action Buttons: Capa vs Feed */}
                        <div>
                          {isImported ? (
                            <div className="w-full py-2.5 px-4 rounded-xl bg-lux-emerald/10 border border-lux-emerald/30 text-lux-emerald text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>✦ Publicada no Radar (Ver no Site)</span>
                            </div>
                          ) : isImporting ? (
                            <div className="w-full py-2.5 px-4 rounded-xl bg-black/10 dark:bg-white/10 text-lux-gold text-xs font-bold flex items-center justify-center gap-2 shadow-sm">
                              <RefreshCw className="w-4 h-4 animate-spin text-lux-gold" />
                              <span>Google Gemini Redigindo Ensaio...</span>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <button
                                onClick={() => handleImportPauta(pauta, 'hero')}
                                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold text-black font-bold text-[11px] uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-1.5 shadow hover:scale-[1.01] active:scale-[0.99]"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-black" />
                                <span>✦ Publicar na Capa</span>
                              </button>

                              <button
                                onClick={() => handleImportPauta(pauta, 'feed')}
                                className="py-2.5 px-3 rounded-xl border border-lux-gold/60 bg-lux-gold/5 hover:bg-lux-gold/15 text-lux-gold font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                                title="Publica no feed do site e na categoria, sem alterar o destaque da Capa"
                              >
                                <span>✦ Publicar no Feed</span>
                              </button>
                            </div>
                          )}
                        </div>

                      </div>

                    </div>
                  );
                })}
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: DROPS & COTAÇÕES DA SEMANA */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'drops' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-lux-text-muted">
                Edite os 4 índices e cotações da barra superior em tempo real. As alterações refletem instantaneamente no site.
              </p>
              <button
                onClick={loadData}
                className="inline-flex items-center gap-1.5 text-xs text-lux-gold font-semibold uppercase tracking-wider hover:underline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Atualizar</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {drops.map((drop) => (
                <div key={drop.id} className="p-5 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-lux-gold">
                      {drop.type}
                    </span>
                    <span className="text-[10px] bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded font-medium">
                      {drop.id}
                    </span>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-lux-text-muted mb-1 font-semibold">
                      Título do Item / Ativo
                    </label>
                    <input
                      type="text"
                      defaultValue={drop.title}
                      onBlur={(e) => handleUpdateDrop(drop.id, 'title', e.target.value)}
                      className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded p-2 text-xs font-serif font-bold focus:outline-none focus:border-lux-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase text-lux-text-muted mb-1 font-semibold">
                        Valor / Cotação
                      </label>
                      <input
                        type="text"
                        defaultValue={drop.val}
                        onBlur={(e) => handleUpdateDrop(drop.id, 'val', e.target.value)}
                        className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded p-2 text-xs text-lux-emerald font-semibold focus:outline-none focus:border-lux-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-lux-text-muted mb-1 font-semibold">
                        Tag / Selo
                      </label>
                      <input
                        type="text"
                        defaultValue={drop.tag}
                        onBlur={(e) => handleUpdateDrop(drop.id, 'tag', e.target.value)}
                        className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded p-2 text-xs focus:outline-none focus:border-lux-gold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: ASSINANTES VIP */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'subscribers' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg font-bold">Base de Membros do Radar Privado</h3>
                <p className="text-xs text-lux-text-muted">
                  Lista de e-mails de investidores e colecionadores cadastrados através do rodapé.
                </p>
              </div>

              <button
                onClick={handleExportSubscribersCSV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lux-text-primary dark:bg-lux-gold text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity shadow"
              >
                <Download className="w-4 h-4" />
                <span>Exportar Base CSV</span>
              </button>
            </div>

            <div className="bg-white dark:bg-lux-bg-cardDark rounded-xl border border-lux-border-light dark:border-lux-border-dark overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-black/5 dark:bg-black/30 border-b border-lux-border-light dark:border-lux-border-dark text-[10px] uppercase tracking-wider text-lux-text-muted">
                  <tr>
                    <th className="p-4">E-mail VIP</th>
                    <th className="p-4">Data de Inscrição</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-lux-border-light dark:divide-lux-border-dark">
                  {subscribers.map((sub, idx) => (
                    <tr key={sub.id || idx} className="hover:bg-black/5 dark:hover:bg-white/5">
                      <td className="p-4 font-mono font-medium text-lux-gold">
                        {sub.email}
                      </td>
                      <td className="p-4 text-lux-text-muted">
                        {sub.created_at ? new Date(sub.created_at).toLocaleString('pt-BR') : 'Hoje'}
                      </td>
                      <td className="p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-lux-emerald bg-lux-emerald/10 px-2 py-0.5 rounded">
                          {sub.status || 'Ativo'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: MESA DE CONCIERGE (LEADS) */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'concierge' && (
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-lg font-bold">Solicitações de Atendimento VIP</h3>
              <p className="text-xs text-lux-text-muted">
                Contatos de clientes interessados em adquirir itens ou consultar cotas de alocação privada.
              </p>
            </div>

            <div className="space-y-3">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-5 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-lux-text-primary dark:text-lux-text-darkPrimary">
                        {inq.name}
                      </span>
                      <span className="text-[10px] font-bold uppercase bg-lux-emerald/10 text-lux-emerald px-2 py-0.5 rounded">
                        {inq.status || 'Pendente'}
                      </span>
                    </div>
                    <div className="text-xs text-lux-text-muted flex flex-wrap items-center gap-3">
                      <span>WhatsApp: <strong className="text-lux-text-primary dark:text-white">{inq.phone}</strong></span>
                      {inq.email && <span>• E-mail: <strong>{inq.email}</strong></span>}
                      <span>• Data: {inq.created_at ? new Date(inq.created_at).toLocaleDateString('pt-BR') : 'Hoje'}</span>
                    </div>
                    {inq.article_title && (
                      <div className="text-xs text-lux-gold font-medium pt-1">
                        Item: {inq.article_title}
                      </div>
                    )}
                    {inq.message && (
                      <p className="text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary italic pt-1 max-w-2xl">
                        "{inq.message}"
                      </p>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/${inq.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá ${inq.name}, aqui é do Concierge do Radar do Luxo sobre sua solicitação referente a ${inq.article_title || 'nosso acervo'}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lux-emerald text-white text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity flex-shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Iniciar WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: GUIA SUPABASE & SQL */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'supabase' && (
          <div className="space-y-6 max-w-4xl">
            <div className="p-6 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark space-y-4">
              <div className="flex items-center gap-2 text-lux-gold text-xs font-bold uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>Status da Conexão em Tempo Real</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark">
                  <span className="text-[10px] text-lux-text-muted uppercase block">Modo Atual</span>
                  <span className="font-bold text-sm">{dbStatus.mode}</span>
                </div>
                <div className="p-3 rounded bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark">
                  <span className="text-[10px] text-lux-text-muted uppercase block">URL do Projeto</span>
                  <span className="font-mono text-xs">{dbStatus.url}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-lux-border-light dark:border-lux-border-dark space-y-3">
                <h4 className="font-serif text-base font-bold">Como Conectar seu Supabase em 3 Minutos:</h4>
                <ol className="list-decimal list-inside space-y-2 text-xs text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed">
                  <li>
                    Acesse seu painel no <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-lux-gold underline font-semibold">Supabase Dashboard</a>.
                  </li>
                  <li>
                    Vá em <strong>SQL Editor</strong> &gt; <strong>+ New query</strong>.
                  </li>
                  <li>
                    Abra o arquivo <code className="bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-lux-gold">schema.sql</code> que criamos na raiz deste projeto, copie todo o conteúdo e cole no SQL Editor do Supabase.
                  </li>
                  <li>
                    Clique em <strong>Run</strong>. As tabelas de artigos, autores, newsletter, drops e concierge serão criadas e preenchidas automaticamente.
                  </li>
                  <li>
                    Vá em <strong>Project Settings &gt; API</strong>, copie a <strong>Project URL</strong> e a <strong>anon public key</strong>, e cole no arquivo <code className="bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-lux-gold">.env</code> deste projeto.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* -------------------------------------------------------------------- */}
      {/* AI ARTICLE GENERATOR MODAL (MOTOR EDITORIAL DO RADAR) */}
      {/* -------------------------------------------------------------------- */}
      {isAIGeneratorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-lux-bg-cardDark rounded-2xl border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-hidden flex flex-col">
            
            {/* Golden Header Line */}
            <div className="h-1 bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold" />

            {/* Modal Header */}
            <div className="p-6 border-b border-lux-border-light dark:border-lux-border-dark flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-lux-gold" />
                  <span>MOTOR EDITORIAL • O JULGAMENTO HUMANO</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">
                  Gerador de Matérias com IA
                </h3>
              </div>
              <button
                onClick={() => setIsAIGeneratorOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-lux-text-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1 text-xs">
              
              {!generatedArticle ? (
                /* Input Form */
                <form onSubmit={handleGenerateWithAI} className="space-y-5">
                  {/* Engine Configuration & Status */}
                  <div className="p-3 rounded-xl bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-lux-gold" />
                      <span className="font-semibold text-lux-text-primary dark:text-white">
                        Motor Ativo:
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        geminiKey 
                          ? 'bg-lux-emerald/15 text-lux-emerald border border-lux-emerald/30' 
                          : 'bg-lux-gold/15 text-lux-gold border border-lux-gold/30'
                      }`}>
                        {geminiKey ? '✦ Google Gemini API Conectada' : '✦ Sintetizador Semântico Local'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowKeyConfig(prev => !prev)}
                      className="text-[11px] text-lux-text-muted hover:text-lux-gold flex items-center gap-1 transition-colors"
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>{showKeyConfig ? 'Ocultar Chave' : 'Configurar Chave Gemini'}</span>
                    </button>
                  </div>

                  {/* Optional Gemini Key Input */}
                  {showKeyConfig && (
                    <div className="p-4 rounded-xl bg-lux-gold/5 border border-lux-gold/30 space-y-3 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-lux-gold flex items-center gap-1.5">
                          <Key className="w-3.5 h-3.5" />
                          <span>Chave de API do Google Gemini (Opcional)</span>
                        </span>
                        {keySavedToast && (
                          <span className="text-[10px] text-lux-emerald font-semibold">Salvo com sucesso!</span>
                        )}
                      </div>
                      <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed">
                        Se você tiver uma chave gratuita do Google AI Studio, cole aqui para gerar redações ao vivo com o modelo Gemini 1.5 Flash. Se deixar vazio, o Radar usará o Sintetizador Semântico Local com o mesmo método humano.
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          value={geminiKey}
                          onChange={(e) => setGeminiKey(e.target.value)}
                          placeholder="Cole sua AI Studio API Key (AIzaSy...)"
                          className="flex-1 bg-white dark:bg-black/50 border border-lux-border-light dark:border-lux-border-dark rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-lux-gold"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            saveGeminiApiKey(geminiKey);
                            setKeySavedToast(true);
                            setTimeout(() => setKeySavedToast(false), 2500);
                          }}
                          className="px-4 py-2 bg-lux-gold text-black font-semibold text-xs rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Salvar Chave
                        </button>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1.5">
                      Link de Notícia ou Pauta a ser Investigada *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      placeholder="Cole aqui a URL de um artigo (Robb Report, Sotheby's, Hodinkee) ou digite um tema..."
                      className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-xl p-3 text-xs font-serif text-lux-text-primary dark:text-white focus:outline-none focus:border-lux-gold leading-relaxed"
                    />
                  </div>

                  {/* Suggestion Pills */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-lux-text-muted font-semibold block mb-2">
                      Ou experimente um exemplo com 1 clique:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Ferrari 250 GTO 1962 leiloada por US$ 51M na Sotheby\'s de Nova York',
                        'Patek Philippe 1518 em ouro rosa arrematado em Genebra',
                        'Vila Brutalista suspensa sobre falésias em Capri com travertino romano',
                        'Hermès Birkin Faubourg White Bus: A costura manual de 1837 em Paris'
                      ].map((sug, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setAiInput(sug)}
                          className="text-[11px] px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-lux-gold/20 hover:text-lux-gold transition-colors border border-lux-border-light dark:border-lux-border-dark text-left"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  </div>

                  {aiError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs">
                      {aiError}
                    </div>
                  )}

                  {/* Parameter: Auto Publish vs Manual Approval */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-lux-gold/10 border border-lux-gold/30">
                    <div className="flex items-center gap-2.5">
                      <Zap className={`w-4 h-4 ${autoPublish ? 'text-lux-gold' : 'text-lux-text-muted'}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-lux-text-primary dark:text-white">
                            Publicação Direta na Capa (Modo Piloto / Testes)
                          </span>
                          <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${autoPublish ? 'bg-lux-emerald text-black' : 'bg-black/20 text-lux-text-muted'}`}>
                            {autoPublish ? 'Publicar Direto' : 'Revisão Manual'}
                          </span>
                        </div>
                        <span className="text-[10px] text-lux-text-secondary dark:text-lux-text-darkSecondary block mt-0.5">
                          {autoPublish 
                            ? 'A matéria gerada pela IA assumirá o topo da Capa do site imediatamente.' 
                            : 'A matéria será salva como Rascunho para você revisar e aprovar antes de ir ao ar.'}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const next = !autoPublish;
                        setAutoPublish(next);
                        localStorage.setItem('radar_auto_publish', String(next));
                      }}
                      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors flex-shrink-0 ${autoPublish ? 'bg-lux-gold' : 'bg-black/20 dark:bg-white/20'}`}
                    >
                      <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${autoPublish ? 'translate-x-5' : ''}`} />
                    </button>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isGenerating}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-black" />
                          <span>Google Gemini Analisando em Profundidade...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-black" />
                          <span>{autoPublish ? '✦ Gerar & Publicar Direto na Capa' : '✦ Gerar Rascunho para Aprovação'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-black/5 dark:bg-black/20 border border-lux-border-light dark:border-lux-border-dark space-y-2 text-[11px] text-lux-text-muted leading-relaxed">
                    <div className="font-semibold text-lux-text-primary dark:text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-lux-gold" />
                      <span>Como o Motor do Radar opera esta pauta:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Avalia o peso histórico e ponto de ruptura (Gravitas).</li>
                      <li>Seleciona o colunista adequado (Henrique, Clara ou Gabriel) pela substância.</li>
                      <li>Remove clichês automáticos e injeta sensorialidade mecânica e tátil.</li>
                      <li>Gera ficha técnica e salva a matéria como rascunho seguro.</li>
                    </ul>
                  </div>
                </form>
              ) : (
                /* Generated Preview & Review */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  
                  {/* Result Header Banner */}
                  <div className="p-4 rounded-xl bg-lux-emerald/10 border border-lux-emerald/30 text-lux-emerald flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-lux-emerald" />
                      <span>Matéria Redigida com Sucesso pelo Julgamento Humano</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lux-emerald/20 text-lux-emerald">
                        {generatedArticle.engineSource?.startsWith('gemini') ? '✦ Google Gemini Flash (Ao Vivo)' : '✦ Motor Semântico Local'}
                      </span>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded ${
                        autoPublish 
                          ? 'bg-lux-emerald text-black font-extrabold shadow' 
                          : 'bg-black/10 dark:bg-white/10 text-lux-text-primary dark:text-white'
                      }`}>
                        {autoPublish ? '✦ Publicado na Capa' : 'Rascunho Pronto'}
                      </span>
                    </div>
                  </div>

                  {/* Author Attribution Card */}
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark flex items-start gap-4">
                    <img
                      src={AUTHORS[generatedArticle.authorSlug]?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'}
                      alt={generatedArticle.authorName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-lux-gold flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-serif font-bold text-sm text-lux-text-primary dark:text-white">
                          {generatedArticle.authorName}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-lux-emerald" />
                        <span className="text-[10px] text-lux-gold uppercase font-semibold">
                          {generatedArticle.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-lux-gold font-medium mb-1">
                        {generatedArticle.authorRole}
                      </p>
                      <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed italic">
                        "{generatedArticle.reasoning}"
                      </p>
                    </div>
                  </div>

                  {/* Article Title & Cover Preview */}
                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl font-bold leading-tight text-lux-text-primary dark:text-lux-text-darkPrimary">
                      {generatedArticle.title}
                    </h2>

                    <p className="text-sm font-light text-lux-text-secondary dark:text-lux-text-darkSecondary italic leading-relaxed">
                      {generatedArticle.excerpt}
                    </p>

                    {generatedArticle.image && (
                      <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-lux-border-light dark:border-lux-border-dark shadow-md max-h-48">
                        <img src={generatedArticle.image} alt="Preview" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold">
                          Fotografia de Acervo Sugerida
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Formatted Content Paragraphs */}
                  <div className="p-4 rounded-xl bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-lux-gold block border-b border-lux-border-light dark:border-lux-border-dark pb-2">
                      CORPO DA MATÉRIA ({generatedArticle.contentParagraphs.length} Parágrafos Sensoriais)
                    </span>
                    {generatedArticle.contentParagraphs.map((para, i) => (
                      <p key={i} className="text-xs leading-relaxed font-serif text-lux-text-secondary dark:text-lux-text-darkSecondary">
                        {i === 0 ? (
                          <>
                            <span className="float-left text-2xl font-bold text-lux-gold pr-2 leading-none">
                              {para.charAt(0)}
                            </span>
                            {para.slice(1)}
                          </>
                        ) : (
                          para
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Technical Specifications */}
                  {generatedArticle.specs && Object.keys(generatedArticle.specs).length > 0 && (
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-lux-gold block mb-2">
                        FICHA TÉCNICA HOMOLOGADA
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        {Object.entries(generatedArticle.specs).map(([k, v]) => (
                          <div key={k} className="p-2 rounded bg-white dark:bg-lux-bg-cardDark border border-lux-border-light dark:border-lux-border-dark">
                            <span className="text-[9px] uppercase tracking-wider text-lux-text-muted block font-semibold">
                              {k}
                            </span>
                            <span className="font-semibold text-lux-text-primary dark:text-white">
                              {v}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons for Generated Article */}
                  <div className="pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setGeneratedArticle(null)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-xs font-semibold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      ← Gerar Outra Pauta
                    </button>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full sm:w-auto">
                      {autoPublish ? (
                        <a
                          href={`/artigo/${generatedArticle.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-lux-gold text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Ver no Ar na Capa ↗</span>
                        </a>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => handleSaveGeneratedArticle('draft')}
                            className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-lux-text-muted hover:text-lux-text-primary dark:hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                          >
                            Salvar Rascunho
                          </button>

                          <button
                            type="button"
                            onClick={() => handleSaveGeneratedArticle('feed')}
                            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-lux-gold text-lux-gold hover:bg-lux-gold/10 font-bold text-xs uppercase tracking-wider transition-colors shadow"
                            title="Publica no feed e nas categorias sem alterar o destaque da Capa atual"
                          >
                            ✦ Publicar no Feed
                          </button>

                          <button
                            type="button"
                            onClick={() => handleSaveGeneratedArticle('hero')}
                            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-lux-gold text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                            title="Publica imediatamente assumindo o destaque principal da Capa"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Publicar na Capa</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      )}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-lux-bg-cardDark rounded-2xl border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-lux-border-light dark:border-lux-border-dark flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-lux-gold block mb-1">
                  Mesa Editorial
                </span>
                <h3 className="font-serif text-xl font-bold">
                  {editingArticle ? 'Editar Matéria do Radar' : 'Publicar Nova Matéria'}
                </h3>
              </div>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-lux-text-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Scrollable Body */}
            <form onSubmit={handleSaveArticle} className="p-6 space-y-4 overflow-y-auto flex-1 text-xs">
              
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  Título da Matéria *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ex: Novo Pagani Utopia Roadster em Fibra de Carbono Crua"
                  className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 font-serif font-bold text-sm focus:outline-none focus:border-lux-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                    Autor *
                  </label>
                  <select
                    value={formData.authorSlug}
                    onChange={(e) => setFormData({ ...formData, authorSlug: e.target.value })}
                    className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 focus:outline-none focus:border-lux-gold"
                  >
                    <option value="henrique-vianna">Henrique Vianna (Editor-Chefe)</option>
                    <option value="clara-meirelles">Clara Meirelles (Alta Relojoaria)</option>
                    <option value="gabriel-fontes">Gabriel Fontes (Hipercarros & Naval)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                    Categoria *
                  </label>
                  <select
                    value={formData.categorySlug}
                    onChange={(e) => {
                      const sel = CATEGORIES.find(c => c.slug === e.target.value);
                      setFormData({ 
                        ...formData, 
                        categorySlug: e.target.value,
                        category: sel ? sel.name : 'Supercarros'
                      });
                    }}
                    className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 focus:outline-none focus:border-lux-gold"
                  >
                    <option value="supercarros">Supercarros</option>
                    <option value="relogios">Alta Relojoaria</option>
                    <option value="arquitetura">Arquitetura</option>
                    <option value="estilo">Alta-Costura</option>
                    <option value="destinos">Destinos & Iates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                    Formato *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 focus:outline-none focus:border-lux-gold"
                  >
                    <option value="article">Artigo de Leitura</option>
                    <option value="video">Mini-Doc em Vídeo</option>
                  </select>
                </div>
              </div>

              {/* Video Specific fields */}
              {formData.type === 'video' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 rounded-lg bg-black/5 dark:bg-black/30 border border-lux-gold/30">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-lux-gold mb-1">
                      URL do Vídeo (MP4 / Stream)
                    </label>
                    <input
                      type="url"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                      placeholder="https://assets.mixkit.co/..."
                      className="w-full bg-transparent border border-lux-border-light dark:border-lux-border-dark rounded p-2 focus:outline-none focus:border-lux-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-semibold text-lux-gold mb-1">
                      Duração (Ex: 04:18)
                    </label>
                    <input
                      type="text"
                      value={formData.videoDuration}
                      onChange={(e) => setFormData({ ...formData, videoDuration: e.target.value })}
                      placeholder="04:18"
                      className="w-full bg-transparent border border-lux-border-light dark:border-lux-border-dark rounded p-2 focus:outline-none focus:border-lux-gold"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  URL da Fotografia de Capa *
                </label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 focus:outline-none focus:border-lux-gold"
                />
                {formData.image && (
                  <div className="mt-2 relative aspect-[21/9] rounded-lg overflow-hidden border border-lux-border-light dark:border-lux-border-dark max-h-36">
                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  Resumo Executivo (Lead / Excerpt) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Breve resumo de 2 a 3 linhas apresentando o produto ou evento..."
                  className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 focus:outline-none focus:border-lux-gold"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  Corpo do Artigo (Separe os parágrafos com linha em branco)
                </label>
                <textarea
                  rows={5}
                  value={formData.contentParagraphsText}
                  onChange={(e) => setFormData({ ...formData, contentParagraphsText: e.target.value })}
                  placeholder="Primeiro parágrafo da matéria...&#10;&#10;Segundo parágrafo detalhando a manufatura..."
                  className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 focus:outline-none focus:border-lux-gold font-serif leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-lux-text-muted mb-1">
                  Ficha Técnica (Uma linha por especificação no formato 'chave: valor')
                </label>
                <textarea
                  rows={3}
                  value={formData.specsText}
                  onChange={(e) => setFormData({ ...formData, specsText: e.target.value })}
                  placeholder="potencia: 1.200 cv&#10;aceleracao: 0-100 em 2,1s&#10;valor: € 3.600.000"
                  className="w-full bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded-lg p-2.5 font-mono text-[11px] focus:outline-none focus:border-lux-gold"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isHero}
                    onChange={(e) => setFormData({ ...formData, isHero: e.target.checked })}
                    className="accent-lux-gold w-4 h-4 rounded"
                  />
                  <span className="font-semibold text-xs">Definir como Destaque Principal da Capa</span>
                </label>

                <div className="flex items-center gap-2">
                  <span className="text-lux-text-muted font-semibold">Status:</span>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="bg-black/5 dark:bg-black/30 border border-lux-border-light dark:border-lux-border-dark rounded p-1 text-xs font-bold"
                  >
                    <option value="published">Publicado</option>
                    <option value="draft">Rascunho</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-lux-border-light dark:border-lux-border-dark flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="px-5 py-2.5 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-xs font-semibold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-lux-gold text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Matéria</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* MODAL DE EXPLICAÇÃO DO RANKING EDITORIAL (4 PILARES) */}
      {/* -------------------------------------------------------------------- */}
      {rankingExplanationModal && (() => {
        const item = rankingExplanationModal;
        const score = item.rankingScore || calculateEditorialScore(item).totalScore || 90;
        const analysis = calculateEditorialScore({ ...item, rankingScore: score });
        const breakdown = analysis.breakdown || {};
        const tier = analysis.tier || (score >= 94 ? 'S+' : score >= 88 ? 'A' : 'B');
        const isArticle = Boolean(item.slug || item.publishedAt || item.published_at);
        const dynamicWeight = isArticle ? calculateCapaWeight(item) : null;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[92vh] bg-white dark:bg-lux-bg-cardDark rounded-2xl border border-lux-border-light dark:border-lux-border-dark shadow-2xl overflow-hidden flex flex-col">
              
              {/* Golden Header Line */}
              <div className="h-1 bg-gradient-to-r from-lux-gold via-lux-gold-light to-lux-gold" />

              {/* Modal Header */}
              <div className="p-6 border-b border-lux-border-light dark:border-lux-border-dark flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-lux-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-1">
                    <Award className="w-3.5 h-3.5 text-lux-gold" />
                    <span>AUDITORIA EDITORIAL • SISTEMA DE RANKING MULTIDIMENSIONAL</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    {item.title || item.suggestedHook}
                  </h3>
                  {item.source && (
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-lux-text-muted">
                      <span>Fonte Homologada: <strong className="text-lux-gold">{item.source}</strong></span>
                      {item.sourceUrl && (
                        <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="text-lux-gold hover:underline flex items-center gap-1">
                          Link original <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setRankingExplanationModal(null)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-lux-text-muted transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 space-y-6 overflow-y-auto flex-1 text-xs">
                
                {/* Score Big Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-lux-gold/15 via-lux-gold/5 to-transparent border border-lux-gold/30 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-black/40 border-2 border-lux-gold flex flex-col items-center justify-center text-center">
                      <span className="font-mono text-2xl font-black text-lux-gold leading-none">{score}</span>
                      <span className="text-[9px] uppercase tracking-wider text-lux-text-muted font-bold mt-0.5">/ 100</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-lux-text-primary dark:text-white">
                          Classificação Editorial
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                          tier === 'S+' 
                            ? 'bg-lux-gold text-black shadow' 
                            : tier === 'A' 
                            ? 'bg-lux-emerald/20 text-lux-emerald border border-lux-emerald/30' 
                            : 'bg-black/20 text-lux-text-muted'
                        }`}>
                          Tier {tier} • {tier === 'S+' ? 'Obra-Prima / Capa Natural' : tier === 'A' ? 'Editorial Nobre / Feed Premium' : 'Pauta Complementar'}
                        </span>
                      </div>
                      <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary mt-1 leading-relaxed">
                        {analysis.rationale || 'Pontuação calculada com base no peso de capital, relevância dinástica, avanços mecânicos e escassez.'}
                      </p>
                    </div>
                  </div>

                  {dynamicWeight && (
                    <div className="p-3 rounded-lg bg-black/20 dark:bg-black/40 border border-lux-border-light dark:border-lux-border-dark text-right">
                      <span className="text-[10px] uppercase tracking-wider text-lux-text-muted block font-semibold">Peso Dinâmico para Capa</span>
                      <div className="flex items-center justify-end gap-1 font-mono text-base font-bold text-lux-gold">
                        <Activity className="w-4 h-4" />
                        <span>{item.isPinnedHero ? '999 pts (Fixado)' : `${dynamicWeight.currentWeight} pts`}</span>
                      </div>
                      <span className="text-[9px] text-lux-text-muted block">
                        {item.isPinnedHero ? 'Decaimento temporal pausado' : `Decaimento: -${dynamicWeight.decayPercentage}% (${dynamicWeight.hoursElapsed}h no ar)`}
                      </span>
                    </div>
                  )}
                </div>

                {/* The 4 Pillars Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-lux-border-light dark:border-lux-border-dark pb-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-lux-gold">
                      DESMEMBRAMENTO DOS 4 PILARES HOMOLOGADOS
                    </span>
                    <span className="text-[10px] text-lux-text-muted">
                      Base matemática sem achismos
                    </span>
                  </div>

                  {/* 1. Econômico */}
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-black/25 border border-lux-border-light dark:border-lux-border-dark space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-lux-gold" />
                        <span className="font-bold text-xs text-lux-text-primary dark:text-white">
                          1. Impacto Econômico & Liquidez (Peso: 30%)
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs text-lux-gold">
                        {breakdown.economic?.score ?? 20} / 30 pts
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-lux-gold to-lux-gold-light rounded-full transition-all duration-500"
                        style={{ width: `${((breakdown.economic?.score ?? 20) / 30) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed pt-0.5">
                      {breakdown.economic?.reason || 'Ativo de alto valor com liquidez e refúgio patrimonial estável.'}
                    </p>
                  </div>

                  {/* 2. Social & Dinástico */}
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-black/25 border border-lux-border-light dark:border-lux-border-dark space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="font-bold text-xs text-lux-text-primary dark:text-white">
                          2. Relevância Social & Dinástica (Peso: 25%)
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs text-blue-400">
                        {breakdown.social?.score ?? 18} / 25 pts
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-400 rounded-full transition-all duration-500"
                        style={{ width: `${((breakdown.social?.score ?? 18) / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed pt-0.5">
                      {breakdown.social?.reason || 'Chancela de prestígio estabelecido entre círculos refinados e comitês de investimento.'}
                    </p>
                  </div>

                  {/* 3. Engenharia & Manufatura */}
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-black/25 border border-lux-border-light dark:border-lux-border-dark space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-lux-emerald" />
                        <span className="font-bold text-xs text-lux-text-primary dark:text-white">
                          3. Inovação em Engenharia & Manufatura (Peso: 25%)
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs text-lux-emerald">
                        {breakdown.engineering?.score ?? 19} / 25 pts
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-lux-emerald rounded-full transition-all duration-500"
                        style={{ width: `${((breakdown.engineering?.score ?? 19) / 25) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed pt-0.5">
                      {breakdown.engineering?.reason || 'Excelência construtiva, materiais aeroespaciais ou preservação de técnicas seculares.'}
                    </p>
                  </div>

                  {/* 4. Escassez & Acesso */}
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-black/25 border border-lux-border-light dark:border-lux-border-dark space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="font-bold text-xs text-lux-text-primary dark:text-white">
                          4. Fator de Escassez & Acesso Restrito (Peso: 20%)
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs text-purple-400">
                        {breakdown.scarcity?.score ?? 16} / 20 pts
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-400 rounded-full transition-all duration-500"
                        style={{ width: `${((breakdown.scarcity?.score ?? 16) / 20) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary leading-relaxed pt-0.5">
                      {breakdown.scarcity?.reason || 'Tiragem rigorosamente controlada com distribuição seletiva fechada.'}
                    </p>
                  </div>
                </div>

                {/* Practical Advice Banner */}
                <div className="p-3.5 rounded-xl bg-lux-gold/10 border border-lux-gold/30 text-[11px] text-lux-text-secondary dark:text-lux-text-darkSecondary flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-lux-gold flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-lux-text-primary dark:text-white block mb-0.5">
                      Diretriz da Mesa Editorial do Radar:
                    </strong>
                    Matérias com pontuação acima de <strong>94 pts (Tier S+)</strong> são qualificadas para assumir o topo da Capa imediatamente. Matérias entre <strong>85 e 93 pts (Tier A)</strong> devem ir preferencialmente para o Feed Geral, mantendo a Capa preservada.
                  </div>
                </div>

              </div>

              {/* Modal Footer with Actions */}
              <div className="p-4 border-t border-lux-border-light dark:border-lux-border-dark flex flex-wrap items-center justify-between gap-3 bg-black/5 dark:bg-black/20">
                <button
                  type="button"
                  onClick={() => setRankingExplanationModal(null)}
                  className="px-4 py-2 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-xs font-semibold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Fechar Auditoria
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  {/* If it's a pauta, show import buttons directly from here! */}
                  {!isArticle && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          const p = rankingExplanationModal;
                          setRankingExplanationModal(null);
                          handleImportPauta(p, 'feed');
                        }}
                        className="px-3.5 py-2 rounded-lg border border-lux-gold text-lux-gold hover:bg-lux-gold/10 text-xs font-bold uppercase tracking-wider transition-colors shadow"
                      >
                        ✦ Publicar no Feed
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const p = rankingExplanationModal;
                          setRankingExplanationModal(null);
                          handleImportPauta(p, 'hero');
                        }}
                        className="px-4 py-2 rounded-lg bg-lux-gold text-black hover:opacity-90 text-xs font-bold uppercase tracking-wider transition-opacity shadow flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Publicar na Capa</span>
                      </button>
                    </>
                  )}

                  {/* If it's an article, show promote / pin buttons */}
                  {isArticle && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          handleTogglePin(item.id);
                          setRankingExplanationModal(null);
                        }}
                        className="px-3.5 py-2 rounded-lg border border-lux-border-light dark:border-lux-border-dark text-lux-text-primary dark:text-white hover:bg-lux-gold/10 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                      >
                        {item.isPinnedHero ? <PinOff className="w-3.5 h-3.5 text-lux-gold" /> : <Pin className="w-3.5 h-3.5" />}
                        <span>{item.isPinnedHero ? 'Desafixar da Capa' : 'Fixar na Capa'}</span>
                      </button>

                      {!item.isHero && (
                        <button
                          type="button"
                          onClick={() => {
                            handlePromoteHero(item.id);
                            setRankingExplanationModal(null);
                          }}
                          className="px-4 py-2 rounded-lg bg-lux-gold text-black hover:opacity-90 text-xs font-bold uppercase tracking-wider transition-opacity shadow flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Promover para Capa</span>
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        );
      })()}

    </div>
  );
}
