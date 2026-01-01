

export default function FinancialPlan() {
    return (
        <section id="financial-plan" className="section-container relative">
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">07</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">재무 계획</h2>
                        <p className="text-stone-500 mt-2">Financial Plan</p>
                    </div>
                </div>

                {/* 매출 목표 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        5개년 매출 목표
                    </h3>

                    <div className="glass-card p-8 md:p-12">
                        <div className="grid md:grid-cols-5 gap-4">
                            {[
                                { year: "Year 1", revenue: "3.6억", growth: "시드" },
                                { year: "Year 2", revenue: "22.8억", growth: "+533%" },
                                { year: "Year 3", revenue: "127억", growth: "+457%" },
                                { year: "Year 4", revenue: "300억", growth: "+136%" },
                                { year: "Year 5", revenue: "540억", growth: "+80%" },
                            ].map((data, index) => (
                                <div key={index} className="text-center p-6 bg-white/50 rounded-xl border border-emerald-500/20">
                                    <div className="text-sm text-stone-500 mb-2">{data.year}</div>
                                    <div className="text-3xl font-black gradient-text mb-2">{data.revenue}</div>
                                    <div className="text-xs text-emerald-600 font-semibold">{data.growth}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 수익 예측 상세 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        수익 예측
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Year 1 */}
                        <div className="glass-card p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">Year 1</span>
                                <span className="text-lg font-bold text-stone-900">연 3.6억원</span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">B2C 구독</span>
                                    <span className="text-stone-700">1,000명 × 15,000원 = <span className="font-bold">월 1,500만</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">B2B 계약</span>
                                    <span className="text-stone-700">5곳 × 100만원 = <span className="font-bold">월 500만</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">판매 수수료</span>
                                    <span className="text-stone-700">5,000만 × 20% = <span className="font-bold">월 1,000만</span></span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                                <span className="text-emerald-600 font-bold">월 3,000만원</span>
                            </div>
                        </div>

                        {/* Year 2 */}
                        <div className="glass-card p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">Year 2</span>
                                <span className="text-lg font-bold text-stone-900">연 22.8억원</span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">B2C 구독</span>
                                    <span className="text-stone-700">5,000명 × 20,000원 = <span className="font-bold">월 1억</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">B2B 계약</span>
                                    <span className="text-stone-700">20곳 × 150만원 = <span className="font-bold">월 3,000만</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">판매 수수료</span>
                                    <span className="text-stone-700">3억 × 20% = <span className="font-bold">월 6,000만</span></span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                                <span className="text-blue-600 font-bold">월 1.9억원</span>
                            </div>
                        </div>

                        {/* Year 3 */}
                        <div className="glass-card p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-violet-500 text-white text-sm font-bold rounded-full">Year 3</span>
                                <span className="text-lg font-bold text-stone-900">연 127억원</span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">B2C 구독</span>
                                    <span className="text-stone-700">20,000명 × 25,000원 = <span className="font-bold">월 5억</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">B2B 계약</span>
                                    <span className="text-stone-700">50곳 × 200만원 = <span className="font-bold">월 1억</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-stone-50 rounded-lg">
                                    <span className="text-stone-600">판매 수수료</span>
                                    <span className="text-stone-700">10억 × 20% = <span className="font-bold">월 2억</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-violet-50 rounded-lg">
                                    <span className="text-violet-600">플랫폼 수수료</span>
                                    <span className="text-violet-700">20억 × 10% = <span className="font-bold">월 2억</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-violet-50 rounded-lg">
                                    <span className="text-violet-600">데이터 컨설팅</span>
                                    <span className="text-violet-700">20건 × 300만원 = <span className="font-bold">월 6,000만</span></span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                                <span className="text-violet-600 font-bold">월 10.6억원</span>
                            </div>
                        </div>

                        {/* Year 5 */}
                        <div className="glass-card p-6 bg-gradient-to-br from-orange-50 to-rose-50 border-orange-200">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">Year 5</span>
                                <span className="text-lg font-bold text-stone-900">연 540억원</span>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center p-2 bg-white/70 rounded-lg">
                                    <span className="text-stone-600">플랫폼 거래액</span>
                                    <span className="text-stone-700">300억 × 10% = <span className="font-bold">월 30억</span></span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white/70 rounded-lg">
                                    <span className="text-stone-600">데이터 라이선싱</span>
                                    <span className="text-stone-700 font-bold">월 10억</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white/70 rounded-lg">
                                    <span className="text-stone-600">기타 수익</span>
                                    <span className="text-stone-700 font-bold">월 5억</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-orange-200 text-center">
                                <span className="text-orange-600 font-bold text-lg">월 45억원</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 투자 계획 */}
                <div className="glass-card p-8 md:p-12 bg-emerald-500/5 border-emerald-500/20">
                    <h3 className="text-2xl font-bold mb-8 text-center text-stone-900">투자 유치 계획</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white/50 rounded-xl">
                            <div className="text-emerald-600 text-sm font-semibold mb-2">시드</div>
                            <div className="text-4xl font-black gradient-text mb-2">5억원</div>
                            <div className="text-sm text-stone-500">MVP 개발 및 검증</div>
                        </div>
                        <div className="text-center p-6 bg-white/50 rounded-xl">
                            <div className="text-emerald-500 text-sm font-semibold mb-2">시리즈 A</div>
                            <div className="text-4xl font-black gradient-text mb-2">30억원</div>
                            <div className="text-sm text-stone-500">스케일업 및 마케팅</div>
                        </div>
                        <div className="text-center p-6 bg-white/50 rounded-xl">
                            <div className="text-emerald-400 text-sm font-semibold mb-2">시리즈 B</div>
                            <div className="text-4xl font-black gradient-text mb-2">100억원</div>
                            <div className="text-sm text-stone-500">글로벌 확장</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
