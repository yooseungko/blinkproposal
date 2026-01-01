import { Icon } from '@iconify/react'

export default function BusinessModel() {
    return (
        <section id="business-model" className="section-container relative">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">04</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">비즈니스 모델</h2>
                        <p className="text-stone-500 mt-2">Business Model</p>
                    </div>
                </div>

                {/* 수익 모델 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        수익 모델
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* 모델 1: 프리미엄 구독 */}
                        <div className="glass-card p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
                            {/* 배경 장식 */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -mr-12 -mt-12"></div>

                            {/* 헤더 */}
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                                        <Icon icon="lucide:sparkles" className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-emerald-600 font-semibold">MODEL 1</div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-2">숏폼 스튜디오 SaaS</h4>
                                <p className="text-sm text-stone-500 mb-5">개인/크리에이터용 월간 구독</p>

                                {/* 가격표 */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-100">
                                        <span className="text-sm text-stone-600">무료</span>
                                        <span className="text-sm font-bold text-stone-400">월 3편</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-100">
                                        <span className="text-sm text-stone-600">베이직</span>
                                        <div className="text-right">
                                            <span className="text-sm font-bold text-stone-700">₩9,900</span>
                                            <span className="text-xs text-stone-400 ml-1">/월</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                                        <span className="text-sm text-emerald-700 font-medium">프로 ⭐</span>
                                        <div className="text-right">
                                            <span className="text-sm font-bold text-emerald-700">₩29,900</span>
                                            <span className="text-xs text-emerald-500 ml-1">/월</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-100">
                                        <span className="text-sm text-stone-600">비즈니스</span>
                                        <div className="text-right">
                                            <span className="text-sm font-bold text-stone-700">₩99,000</span>
                                            <span className="text-xs text-stone-400 ml-1">/월</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 모델 2: 판매 수수료 */}
                        <div className="glass-card p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
                            {/* 배경 장식 */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl -mr-12 -mt-12"></div>

                            {/* 헤더 */}
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                                        <Icon icon="lucide:coins" className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-orange-600 font-semibold">MODEL 2</div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-2">숏폼 마켓플레이스</h4>
                                <p className="text-sm text-stone-500 mb-5">PDF 판매 시 수수료 20%</p>

                                {/* 수익 분배 시각화 */}
                                <div className="mb-4">
                                    <div className="flex h-8 rounded-lg overflow-hidden mb-3">
                                        <div className="bg-emerald-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '80%' }}>
                                            80%
                                        </div>
                                        <div className="bg-orange-500 flex items-center justify-center text-white text-xs font-bold" style={{ width: '20%' }}>
                                            20%
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-emerald-600 font-medium">👤 크리에이터</span>
                                        <span className="text-orange-600 font-medium">🏢 플랫폼</span>
                                    </div>
                                </div>

                                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                                    <div className="flex items-center gap-2 text-sm text-emerald-700">
                                        <Icon icon="lucide:gift" className="w-4 h-4" />
                                        <span>판매자 숏폼 제작 <span className="font-bold">무료</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 모델 3: B2B 맞춤 */}
                        <div className="glass-card p-6 relative overflow-hidden group hover:shadow-lg transition-shadow">
                            {/* 배경 장식 */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-12 -mt-12"></div>

                            {/* 헤더 */}
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                                        <Icon icon="lucide:building-2" className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-600 font-semibold">MODEL 3</div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-2">B2B 제작</h4>
                                <p className="text-sm text-stone-500 mb-5">기업용 대량 제작 계약</p>

                                {/* 가격표 */}
                                <div className="space-y-2">
                                    <div className="p-3 rounded-lg bg-stone-100">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm text-stone-600">편당 제작</span>
                                            <span className="text-sm font-bold text-stone-700">₩5~10만</span>
                                        </div>
                                        <div className="text-xs text-stone-400">대량 주문 시</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-stone-100">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm text-stone-600">연간 계약</span>
                                            <span className="text-sm font-bold text-stone-700">₩500~2,000만</span>
                                        </div>
                                        <div className="text-xs text-stone-400">출판사/학원</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm text-blue-700 font-medium">화이트라벨</span>
                                            <span className="text-sm font-bold text-blue-700">₩5,000만~</span>
                                        </div>
                                        <div className="text-xs text-blue-500">OEM 솔루션</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 확장 가능한 비즈니스 모델 */}
                <div className="glass-card p-8 md:p-12 bg-emerald-500/5 border-emerald-500/20">
                    <h4 className="text-2xl font-bold mb-6 text-center">
                        <span className="gradient-text">확장 가능한 비즈니스 모델</span>
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">3가지</div>
                            <div className="text-sm text-stone-600">핵심 수익원</div>
                            <div className="text-xs text-stone-500 mt-1">구독 + 수수료 + B2B</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">4단계</div>
                            <div className="text-sm text-stone-600">확장 전략</div>
                            <div className="text-xs text-stone-500 mt-1">MVP → 플랫폼화</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">540억</div>
                            <div className="text-sm text-stone-600">Year 5 목표 매출</div>
                            <div className="text-xs text-stone-500 mt-1">연 매출 규모</div>
                        </div>
                    </div>
                    <p className="text-center text-stone-500 text-sm flex items-center justify-center gap-2">
                        <Icon icon="lucide:lightbulb" className="w-4 h-4 text-emerald-500" />
                        데이터가 쌓일수록 강력해지는 네트워크 효과 기반 비즈니스
                    </p>
                </div>
            </div>
        </section>
    )
}
