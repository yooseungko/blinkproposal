import { Icon } from '@iconify/react'

export default function VisionMission() {
    return (
        <section id="vision-mission" className="section-container relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">11</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">비전 & 미션</h2>
                        <p className="text-stone-500 mt-2">Vision & Mission</p>
                    </div>
                </div>

                {/* 비전 */}
                <div className="mb-16">
                    <div className="glass-card p-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/20 text-center">
                        <div className="text-sm text-emerald-600 font-semibold mb-4">VISION</div>
                        <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            <span className="gradient-text">
                                초지능 학습 에이전트로 발전
                            </span>
                        </h3>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                            AI 에이전트가 실시간 트렌드를 읽고<br />
                            크리에이터의 목소리로 지식을 유통하는<br />
                            <span className="font-semibold text-emerald-600">지능형 플랫폼</span>으로 진화할 것입니다.
                        </p>
                    </div>
                </div>

                {/* 비즈니스 확장단계 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        비즈니스 확장단계
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* 시나리오 1 */}
                        <div className="glass-card p-6 border-2 border-emerald-500/50 relative">
                            <div className="absolute -top-3 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                현재 단계
                            </div>
                            <div className="text-emerald-600 text-sm font-semibold mb-2 mt-2">SCENARIO 1</div>
                            <h4 className="text-xl font-bold mb-4 text-stone-900">숏폼으로 PDF 마케팅</h4>
                            <p className="text-sm text-stone-600 leading-relaxed mb-4">
                                PDF 콘텐츠를 숏폼으로 변환하여 마케팅 도구로 활용.
                                숏폼을 보고 PDF를 구매하는 수익 모델.
                            </p>
                            <div className="text-xs text-stone-500">
                                → 크리에이터 수익화 지원
                            </div>
                        </div>

                        {/* 시나리오 2 */}
                        <div className="glass-card p-6 border border-emerald-400/30">
                            <div className="text-emerald-500 text-sm font-semibold mb-2">SCENARIO 2</div>
                            <h4 className="text-xl font-bold mb-4 text-stone-900">구독형 숏폼 콘텐츠</h4>
                            <p className="text-sm text-stone-600 leading-relaxed mb-4">
                                숏폼 자체가 구독 가능한 프리미엄 학습 콘텐츠.
                                숏폼 드라마처럼 몰입하는 교육 경험.
                            </p>
                            <div className="text-xs text-stone-500">
                                → 구독 경제 모델
                            </div>
                        </div>

                        {/* 시나리오 3 */}
                        <div className="glass-card p-6 border border-violet-300/30 bg-violet-50/30">
                            <div className="text-violet-500 text-sm font-semibold mb-2 flex items-center gap-1">
                                <Icon icon="lucide:sparkles" className="w-3 h-3" />
                                SCENARIO 3
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-stone-900">초지능 학습 에이전트</h4>
                            <p className="text-sm text-stone-600 leading-relaxed mb-4">
                                AI가 실시간 트렌드를 분석하고,
                                크리에이터 목소리로 지식을 자동 유통.
                            </p>
                            <div className="text-xs text-violet-500 font-medium">
                                → 자율 지능형 콘텐츠 생태계
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-stone-500 text-sm mt-6 flex items-center justify-center gap-2">
                        <Icon icon="lucide:rocket" className="w-4 h-4 text-violet-500" />
                        PDF 판매는 첫 번째 시나리오일 뿐. 궁극적인 목표는 <span className="text-violet-600 font-semibold">초지능 학습 에이전트</span>입니다.
                    </p>
                </div>

                {/* 결론 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        결론
                    </h3>

                    <div className="glass-card p-8 md:p-12 bg-emerald-500/5 border-emerald-500/20">
                        <div className="max-w-4xl mx-auto">
                            <h4 className="text-3xl font-bold mb-6 text-center">
                                <span className="gradient-text">
                                    블링크 스튜디오는 단순한 영상 제작 툴이 아닙니다
                                </span>
                            </h4>
                            <p className="text-xl text-stone-600 text-center mb-8 leading-relaxed">
                                <span className="font-bold text-stone-900">초지능 학습 에이전트</span>로 진화합니다
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="glass-card p-6 bg-white/50">
                                    <h5 className="font-bold mb-4 text-emerald-600">핵심 경쟁력</h5>
                                    <ul className="space-y-2 text-sm text-stone-600">
                                        <li className="flex items-start gap-2">
                                            <Icon icon="lucide:check" className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>AI가 하나의 PDF에서 다양한 버전의 숏폼 생성</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Icon icon="lucide:check" className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>숏폼 드라마 수준의 구독 가능한 콘텐츠 퀄리티</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Icon icon="lucide:check" className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>숏폼 자체가 가치를 가지는 학습 경험</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="glass-card p-6 bg-violet-50/50 border-violet-200">
                                    <h5 className="font-bold mb-4 text-violet-600">초지능 학습 에이전트</h5>
                                    <ul className="space-y-2 text-sm text-stone-600">
                                        <li className="flex items-start gap-2">
                                            <Icon icon="lucide:bot" className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                            <span>실시간 트렌드 분석 및 콘텐츠 자동 생성</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Icon icon="lucide:mic" className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                            <span>크리에이터 목소리로 지식 유통</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Icon icon="lucide:brain" className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                            <span>자율 진화하는 지능형 플랫폼</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-violet-50 rounded-xl border border-violet-200">
                                <p className="text-lg text-stone-600 leading-relaxed mb-4">
                                    <span className="font-bold text-stone-900">블링크 스튜디오는</span><br />
                                    <span className="font-bold bg-gradient-to-r from-emerald-600 to-violet-600 bg-clip-text text-transparent">초지능 학습 에이전트로 진화합니다.</span>
                                </p>
                                <p className="text-sm text-stone-500 italic flex items-center justify-center gap-2">
                                    <Icon icon="lucide:sparkles" className="w-4 h-4 text-violet-500" />
                                    AI가 실시간 트렌드를 읽고, 크리에이터의 목소리로 지식을 유통합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="glass-card p-8 text-center">
                    <h4 className="text-2xl font-bold mb-6 gradient-text">문의</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <Icon icon="lucide:mail" className="w-5 h-5 text-emerald-500" />
                            <a href="mailto:lauren@alarmtutor.com" className="text-lg font-semibold text-emerald-600 hover:text-emerald-500 transition-colors">
                                lauren@alarmtutor.com
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Icon icon="lucide:globe" className="w-5 h-5 text-emerald-500" />
                            <a href="https://blink.ai.kr" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-emerald-600 hover:text-emerald-500 transition-colors">
                                blink.ai.kr
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
