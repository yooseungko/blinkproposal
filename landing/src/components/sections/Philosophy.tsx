import { Icon } from '@iconify/react'

export default function Philosophy() {
    return (
        <section id="philosophy" className="section-container relative">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">02</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">사업 철학</h2>
                        <p className="text-stone-500 mt-2">Philosophy</p>
                    </div>
                </div>

                {/* 메인 헤드라인 */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-stone-900 mb-4">
                        전자책, PDF
                    </h3>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-8">
                        숏폼이 되면 매출이 됩니다
                    </h3>
                </div>

                {/* 역주행의 비밀 카드 */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="glass-card bg-emerald-500/5 border-emerald-500/20 p-8 md:p-10">
                        <div className="flex items-center gap-3 justify-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Icon icon="lucide:trending-up" className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="text-emerald-600 font-bold text-lg">역주행의 비밀</span>
                        </div>

                        <div className="text-center mb-8">
                            <p className="text-lg md:text-xl text-stone-700 mb-2">
                                <span className="text-stone-900 font-bold">무한도전이 역주행한 이유</span>를 아시나요?
                            </p>
                            <p className="text-stone-500">
                                수없이 많은 숏폼이 다시 콘텐츠를 살렸기 때문입니다.
                            </p>
                        </div>

                        <div className="border-t border-emerald-500/20 pt-6 text-center">
                            <p className="text-lg text-stone-700">
                                당신이 만든 소중한 <span className="text-emerald-600 font-bold">전자책</span>,
                            </p>
                            <p className="text-stone-500">
                                방치하지 마세요.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 핵심 메시지 */}
                <div className="text-center mb-16">
                    <p className="text-2xl md:text-3xl text-stone-900 font-bold mb-4">
                        딱 <span className="text-emerald-600">한 권</span>도 블링크가 다시 매출로 만들어 드립니다.
                    </p>
                    <p className="text-lg text-stone-500">
                        <span className="text-emerald-600 font-semibold">블링크 스튜디오</span>가 그 가치를 다시 만들어 드립니다.
                    </p>
                </div>

                {/* 사업 철학 - 숏폼 전쟁에서 승리하는 솔루션 */}
                <div className="glass-card bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 p-8 md:p-12">
                    <div className="flex items-center gap-3 justify-center mb-6">
                        <Icon icon="lucide:swords" className="w-8 h-8 text-orange-500" />
                        <h3 className="text-xl md:text-2xl font-bold text-stone-900">사업 철학</h3>
                    </div>

                    <div className="text-center space-y-6">
                        <p className="text-3xl md:text-4xl font-black text-stone-900">
                            "숏폼 전쟁에서 <span className="gradient-text">승리하는 솔루션</span>이 되자"
                        </p>

                        <div className="max-w-2xl mx-auto space-y-4 text-stone-600">
                            <p className="text-lg leading-relaxed">
                                매일 <span className="text-emerald-600 font-semibold">수백만 개의 숏폼</span>이 쏟아지는 시대.<br />
                                클릭 한 번의 차이가 <span className="text-orange-500 font-semibold">승패를 가릅니다.</span>
                            </p>
                            <p className="text-lg leading-relaxed">
                                우리는 <span className="text-emerald-600 font-semibold">데이터로 무장한 숏폼</span>을 만듭니다.<br />
                                후킹, 자막, 이미지 — 모든 요소를 <span className="text-emerald-600 font-semibold">테스트하고 최적화</span>합니다.
                            </p>
                        </div>

                        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                            <div className="px-4 py-2 bg-stone-500/10 border border-stone-500/30 rounded-full text-sm text-stone-600">
                                ⚔️ 경쟁 숏폼
                            </div>
                            <Icon icon="lucide:vs" className="w-4 h-4 text-stone-400" />
                            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-700">
                                🎯 데이터 최적화
                            </div>
                            <Icon icon="lucide:arrow-right" className="w-4 h-4 text-stone-400" />
                            <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-600 font-bold">
                                🏆 승리하는 숏폼
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
