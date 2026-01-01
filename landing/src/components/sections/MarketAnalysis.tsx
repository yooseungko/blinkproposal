import { Icon } from '@iconify/react'

export default function MarketAnalysis() {
    return (
        <section id="market-analysis" className="section-container relative">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">03</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">시장 분석</h2>
                        <p className="text-stone-500 mt-2">Market Analysis</p>
                    </div>
                </div>

                {/* 시장 규모 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        시장 규모
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="glass-card p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                <Icon icon="lucide:book-open" className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div className="text-4xl font-black gradient-text mb-2">3조원</div>
                            <p className="text-stone-600 font-semibold mb-2">국내 전자책 시장</p>
                            <p className="text-xs text-stone-500">2025년 기준 예상</p>
                        </div>

                        <div className="glass-card p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                <Icon icon="lucide:video" className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div className="text-4xl font-black gradient-text mb-2">5조원</div>
                            <p className="text-stone-600 font-semibold mb-2">국내 숏폼 광고 시장</p>
                            <p className="text-xs text-stone-500">연 23% 성장 중</p>
                        </div>

                        <div className="glass-card p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                <Icon icon="lucide:graduation-cap" className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div className="text-4xl font-black gradient-text mb-2">21조원</div>
                            <p className="text-stone-600 font-semibold mb-2">국내 이러닝 시장</p>
                            <p className="text-xs text-stone-500">2025년 기준</p>
                        </div>
                    </div>

                    {/* 시장 규모 근거 */}
                    <div className="glass-card p-6 bg-stone-50/50">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon icon="lucide:file-text" className="w-4 h-4 text-stone-500" />
                            <span className="text-sm font-semibold text-stone-700">시장 규모 근거</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 text-xs text-stone-600">
                            <div>
                                <div className="font-semibold text-stone-700 mb-2">📚 전자책 시장 (3조원)</div>
                                <ul className="space-y-1.5">
                                    <li>• 한국출판문화산업진흥원 2024 보고서</li>
                                    <li>• 연평균 성장률 8.5% (2020-2025)</li>
                                    <li>• 리디북스, 밀리의서재, 예스24 등 플랫폼 성장</li>
                                </ul>
                            </div>
                            <div>
                                <div className="font-semibold text-stone-700 mb-2">🎬 숏폼 광고 시장 (5조원)</div>
                                <ul className="space-y-1.5">
                                    <li>• 방송통신위원회 2024 미디어 이용 조사</li>
                                    <li>• 틱톡, 릴스, 쇼츠 광고비 급증</li>
                                    <li>• MZ세대 하루 평균 시청시간 87분</li>
                                </ul>
                            </div>
                            <div>
                                <div className="font-semibold text-stone-700 mb-2">🎓 이러닝 시장 (21조원)</div>
                                <ul className="space-y-1.5">
                                    <li>• 한국이러닝산업협회 2024 통계</li>
                                    <li>• COVID-19 이후 비대면 학습 정착</li>
                                    <li>• 기업 교육 + 자기계발 시장 확대</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 목표 시장 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        목표 시장
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-8 border-l-4 border-emerald-500">
                            <h4 className="text-xl font-bold mb-4 text-stone-900">1차 타겟: 크리에이터</h4>
                            <ul className="space-y-3 text-stone-600">
                                <li className="flex items-start gap-3">
                                    <Icon icon="lucide:check" className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>전자책 저자, 강사, 교육 콘텐츠 제작자</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="lucide:check" className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>PDF 콘텐츠를 보유한 1인 창작자</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="lucide:check" className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>숏폼을 통한 새로운 수익원 필요</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card p-8 border-l-4 border-emerald-400">
                            <h4 className="text-xl font-bold mb-4 text-stone-900">2차 타겟: 기업</h4>
                            <ul className="space-y-3 text-stone-600">
                                <li className="flex items-start gap-3">
                                    <Icon icon="lucide:check" className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>출판사, 학원, 교육 기업</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="lucide:check" className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>대량의 교육 콘텐츠 보유 기업</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon icon="lucide:check" className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>숏폼 마케팅 니즈가 있는 기업</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 경쟁 우위 */}
                <div className="glass-card p-8 md:p-12 bg-emerald-500/5 border-emerald-500/20">
                    <h3 className="text-2xl font-bold mb-8 text-center text-stone-900">블링크의 차별화 포인트</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">유일</div>
                            <p className="text-sm text-stone-600">PDF→숏폼+판매 통합</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">30분</div>
                            <p className="text-sm text-stone-600">10편 자동 생성</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">80%</div>
                            <p className="text-sm text-stone-600">크리에이터 수익</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black gradient-text mb-2">AI</div>
                            <p className="text-sm text-stone-600">데이터 기반 최적화</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
