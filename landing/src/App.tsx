import { useState, useEffect } from 'react'
import './App.css'
import BusinessOverview from './components/sections/BusinessOverview'
import MarketAnalysis from './components/sections/MarketAnalysis'
import BusinessModel from './components/sections/BusinessModel'
import ProductService from './components/sections/ProductService'
import MarketingStrategy from './components/sections/MarketingStrategy'
import OperationsPlan from './components/sections/OperationsPlan'
import FinancialPlan from './components/sections/FinancialPlan'
import Milestones from './components/sections/Milestones'
import VisionMission from './components/sections/VisionMission'
import Philosophy from './components/sections/Philosophy'
import Team from './components/sections/Team'

function App() {
  const [activeSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: '홈' },
    { id: 'business-overview', label: '사업 개요' },
    { id: 'market-analysis', label: '시장 분석' },
    { id: 'business-model', label: '비즈니스 모델' },
    { id: 'product-service', label: '제품/서비스' },
    { id: 'marketing-strategy', label: '마케팅 전략' },
    { id: 'operations-plan', label: '운영 계획' },
    { id: 'financial-plan', label: '재무 계획' },
  ]

  return (
    <div className="min-h-screen bg-stone-50 tech-grid">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-4' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-black text-white">
              B
            </div>
            <span className="font-bold text-lg gradient-text">Blink Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${activeSection === item.id ? 'text-emerald-600' : 'text-stone-500'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
            문의하기
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* 숏폼 파노라마 배경 */}
        <div className="absolute inset-0">
          {/* 숏폼 카드들 - 왼쪽 영역 */}
          <div className="absolute left-4 md:left-8 lg:left-16 top-0 bottom-0 w-40 md:w-48 flex flex-col justify-center gap-3 z-0">
            {[
              { hook: "💡 이것만 알면 매출 3배", color: "from-violet-500 to-purple-600" },
              { hook: "🔥 99%가 모르는 비밀", color: "from-orange-500 to-red-500" },
              { hook: "⚡ 단 3분만 투자하세요", color: "from-cyan-500 to-blue-500" },
              { hook: "🎯 성공한 사람들의 공통점", color: "from-emerald-500 to-teal-500" },
              { hook: "✨ 초보도 쉽게 따라하기", color: "from-pink-500 to-rose-500" },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative w-28 md:w-32 h-48 md:h-52 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl transform ${i % 2 === 0 ? 'rotate-3' : '-rotate-2'} opacity-40 hover:opacity-60 transition-all hover:scale-105`}
                style={{ marginLeft: `${(i % 3) * 12}px` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-2 right-2">
                  <div className="text-[9px] md:text-[10px] text-white font-bold leading-tight">{item.hook}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 숏폼 카드들 - 오른쪽 영역 */}
          <div className="absolute right-4 md:right-8 lg:right-16 top-0 bottom-0 w-40 md:w-48 flex flex-col justify-center gap-3 z-0">
            {[
              { hook: "📈 수익 10배 올리는 법", color: "from-pink-500 to-rose-500" },
              { hook: "🚀 1시간 만에 완성하기", color: "from-amber-500 to-orange-500" },
              { hook: "💰 무자본으로 시작하기", color: "from-green-500 to-emerald-500" },
              { hook: "🎬 전문가처럼 만들기", color: "from-indigo-500 to-violet-500" },
              { hook: "🔑 핵심만 콕콕 짚어주기", color: "from-cyan-500 to-blue-500" },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative w-28 md:w-32 h-48 md:h-52 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl transform ${i % 2 === 0 ? '-rotate-3' : 'rotate-2'} ml-auto opacity-40 hover:opacity-60 transition-all hover:scale-105`}
                style={{ marginRight: `${(i % 3) * 12}px` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-2 right-2">
                  <div className="text-[9px] md:text-[10px] text-white font-bold leading-tight">{item.hook}</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 추가 배경 그라디언트 */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-stone-600">AI 기반 숏폼 콘텐츠 솔루션</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-stone-900">
              <span className="gradient-text">PDF 한 권으로 숏폼 10편을,</span>
              <br />
              <span className="gradient-text">매출은 10배로</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              전자책, 교재, 리포트 등 다양한 PDF 콘텐츠를 AI로 분석하여<br className="hidden md:block" />
              <span className="text-emerald-600 font-bold">숏폼 영상으로 자동 변환</span>, 판매까지 한 번에
            </p>

            {/* Key Value Props */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-black gradient-text mb-2">AI 분석</div>
                <p className="text-sm text-stone-500">PDF → 다양한 버전의 숏폼</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-black gradient-text mb-2">프리미엄</div>
                <p className="text-sm text-stone-500">구독 가능한 학습 콘텐츠</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-black gradient-text mb-2">플랫폼</div>
                <p className="text-sm text-stone-500">맞춤형 학습 탐색 경험</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('business-overview')}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold text-lg text-white hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
              >
                사업계획서 살펴보기
              </button>
              <button className="px-8 py-4 glass-card-hover font-semibold text-lg text-stone-700">
                문의하기
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Business Overview Section */}
      <BusinessOverview />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Market Analysis Section */}
      <MarketAnalysis />

      {/* Business Model Section */}
      <BusinessModel />

      {/* Product & Service Section */}
      <ProductService />

      {/* Marketing Strategy Section */}
      <MarketingStrategy />

      {/* Operations Plan Section */}
      <OperationsPlan />

      {/* Financial Plan Section */}
      <FinancialPlan />

      {/* Milestones Section */}
      <Milestones />

      {/* Team Section */}
      <Team />

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12 bg-white/50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-black text-white">
                B
              </div>
              <span className="font-bold text-xl gradient-text">Blink Studio</span>
            </div>
            <p className="text-stone-500 text-sm mb-4">
              AI 기반 맞춤형 학습 콘텐츠 플랫폼
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-stone-500 mb-6">
              <a href="mailto:lauren@alarmtutor.com" className="hover:text-emerald-600 transition-colors">
                lauren@alarmtutor.com
              </a>
              <span>|</span>
              <a href="https://blink.ai.kr" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                blink.ai.kr
              </a>
            </div>
            <p className="text-center text-stone-400 text-xs">
              © 2026 Blink Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
