import { Icon } from '@iconify/react'

export default function MarketingStrategy() {
    return (
        <section id="marketing-strategy" className="section-container relative">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">06</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">마케팅 전략</h2>
                        <p className="text-stone-500 mt-2">Marketing Strategy</p>
                    </div>
                </div>

                {/* 마케팅 소재 문구 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        마케팅 소재 문구
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* 문구 1 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <Icon icon="lucide:quote" className="w-8 h-8 text-white/30 mb-3" />
                            <p className="text-white font-bold text-lg leading-relaxed">
                                "청담동 학원강사의 실시간 학습 자료를 볼 수 있는 곳?"
                            </p>
                        </div>

                        {/* 문구 2 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <Icon icon="lucide:quote" className="w-8 h-8 text-white/30 mb-3" />
                            <p className="text-white font-bold text-lg leading-relaxed">
                                "3년 전에 만든 PDF가 지금도 팔린다고?"
                            </p>
                        </div>

                        {/* 문구 3 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <Icon icon="lucide:quote" className="w-8 h-8 text-white/30 mb-3" />
                            <p className="text-white font-bold text-lg leading-relaxed">
                                "대치동 영어쌤의 수능 비밀 노트"
                            </p>
                        </div>

                        {/* 문구 4 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <Icon icon="lucide:quote" className="w-8 h-8 text-white/30 mb-3" />
                            <p className="text-white font-bold text-lg leading-relaxed">
                                "세상에서 가장 쉬운 경제 숏폼 뉴스"
                            </p>
                        </div>

                        {/* 문구 5 (추가) */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <Icon icon="lucide:quote" className="w-8 h-8 text-white/30 mb-3" />
                            <p className="text-white font-bold text-lg leading-relaxed">
                                "PDF 한 권이 숏폼 10개로, 30분 만에?"
                            </p>
                        </div>

                        {/* 문구 6 (추가) */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <Icon icon="lucide:quote" className="w-8 h-8 text-white/30 mb-3" />
                            <p className="text-white font-bold text-lg leading-relaxed">
                                "잠자던 전자책이 다시 돈을 벌기 시작했다"
                            </p>
                        </div>
                    </div>
                </div>

                {/* 바이럴 마케팅 */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        바이럴 마케팅
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-card p-6 border-t-4 border-orange-500">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                                <Icon icon="lucide:gift" className="w-6 h-6 text-orange-500" />
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-stone-900">매달 100명 무료</h4>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                선착순 긴급성 활용으로 빠른 사용자 확보
                            </p>
                        </div>

                        <div className="glass-card p-6 border-t-4 border-pink-500">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                                <Icon icon="lucide:trending-up" className="w-6 h-6 text-pink-500" />
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-stone-900">성공 사례 콘텐츠</h4>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                "1권으로 조회수 100만" 스토리 제작
                            </p>
                        </div>

                        <div className="glass-card p-6 border-t-4 border-violet-500">
                            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                                <Icon icon="lucide:hash" className="w-6 h-6 text-violet-500" />
                            </div>
                            <h4 className="text-lg font-bold mb-2 text-stone-900">크리에이터 챌린지</h4>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                #블링크챌린지 해시태그 캠페인
                            </p>
                        </div>
                    </div>
                </div>

                {/* 파트너십 & 콘텐츠 마케팅 */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* 파트너십 */}
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                                <Icon icon="lucide:handshake" className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-stone-900">파트너십</h4>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                                <Icon icon="lucide:youtube" className="w-5 h-5 text-red-500" />
                                <span className="text-sm text-stone-700">유튜브/인스타 교육 크리에이터와 제휴</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                                <Icon icon="lucide:building-2" className="w-5 h-5 text-blue-500" />
                                <span className="text-sm text-stone-700">중소 출판사 협회와 MOU</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                                <Icon icon="lucide:school" className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm text-stone-700">학원 프랜차이즈 본부와 계약</span>
                            </div>
                        </div>
                    </div>

                    {/* 콘텐츠 마케팅 */}
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                                <Icon icon="lucide:pen-tool" className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-stone-900">콘텐츠 마케팅</h4>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                                <Icon icon="lucide:file-text" className="w-5 h-5 text-orange-500" />
                                <div>
                                    <span className="text-sm font-medium text-stone-900">블로그</span>
                                    <span className="text-sm text-stone-500 ml-2">"전자책 마케팅 완벽 가이드"</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                                <Icon icon="lucide:play-circle" className="w-5 h-5 text-red-500" />
                                <div>
                                    <span className="text-sm font-medium text-stone-900">유튜브</span>
                                    <span className="text-sm text-stone-500 ml-2">숏폼 제작 노하우 공유</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                                <Icon icon="lucide:mail" className="w-5 h-5 text-blue-500" />
                                <div>
                                    <span className="text-sm font-medium text-stone-900">뉴스레터</span>
                                    <span className="text-sm text-stone-500 ml-2">주간 숏폼 트렌드 분석</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 블링크 크리에이터 커뮤니티 */}
                <div className="glass-card p-8 md:p-12 bg-gradient-to-br from-violet-500/10 to-pink-500/10 border-violet-500/20">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-full text-sm font-bold mb-4">
                            <Icon icon="lucide:users" className="w-4 h-4" />
                            Blink Guild
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900">블링크 크리에이터 커뮤니티</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-violet-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                                    <Icon icon="lucide:network" className="w-5 h-5 text-violet-600" />
                                </div>
                                <h4 className="text-lg font-bold text-stone-900">네트워크 효과</h4>
                            </div>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                숏폼 제작 노하우를 공유하는 크리에이터들을 위한 <span className="font-semibold text-violet-600">폐쇄형 커뮤니티</span>를 운영합니다.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-pink-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                                    <Icon icon="lucide:sparkles" className="w-5 h-5 text-pink-600" />
                                </div>
                                <h4 className="text-lg font-bold text-stone-900">성과 기반 매칭</h4>
                            </div>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                조회수가 높은 숏폼 제작자와 양질의 PDF를 보유한 출판사를 <span className="font-semibold text-pink-600">AI가 자동으로 매칭</span>하여 공동 수익 모델을 제안합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
