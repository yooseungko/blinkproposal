import { Icon } from '@iconify/react'

export default function OperationsPlan() {
    return (
        <section id="operations-plan" className="section-container relative">
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">07</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">운영 계획</h2>
                        <p className="text-stone-500 mt-2">Operations Plan</p>
                    </div>
                </div>

                {/* 인력 구성 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        인력 구성
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 필수 인력 */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                                    <Icon icon="lucide:users" className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-stone-900">필수 인력</h4>
                                <span className="text-xs text-emerald-600 font-medium bg-emerald-100 px-2 py-0.5 rounded-full">창업 초기</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200">
                                    <Icon icon="lucide:briefcase" className="w-5 h-5 text-emerald-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">CEO</span>
                                        <span className="text-sm text-stone-500 ml-2">비즈니스 전략 및 대외 협력</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200">
                                    <Icon icon="lucide:cpu" className="w-5 h-5 text-emerald-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">CTO</span>
                                        <span className="text-sm text-stone-500 ml-2">AI 엔진 개발 및 인프라 구축</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200">
                                    <Icon icon="lucide:palette" className="w-5 h-5 text-emerald-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">제품 디자이너</span>
                                        <span className="text-sm text-stone-500 ml-2">UX/UI 설계</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200">
                                    <Icon icon="lucide:megaphone" className="w-5 h-5 text-emerald-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">마케터</span>
                                        <span className="text-sm text-stone-500 ml-2">고객 확보 및 커뮤니티 운영</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-200">
                                    <Icon icon="lucide:video" className="w-5 h-5 text-emerald-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">영상 PD</span>
                                        <span className="text-sm text-stone-500 ml-2">템플릿 제작 및 품질 관리</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                                <span className="text-sm text-stone-500">총 <span className="font-bold text-emerald-600">5명</span></span>
                            </div>
                        </div>

                        {/* 확장 인력 */}
                        <div className="glass-card p-6 border-blue-200 bg-blue-50/50">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                                    <Icon icon="lucide:user-plus" className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-stone-900">확장 인력</h4>
                                <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-0.5 rounded-full">6개월~</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                    <Icon icon="lucide:bot" className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">AI 엔지니어</span>
                                        <span className="text-sm text-blue-600 font-medium ml-2">×2</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                    <Icon icon="lucide:server" className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">백엔드 개발자</span>
                                        <span className="text-sm text-blue-600 font-medium ml-2">×2</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                    <Icon icon="lucide:handshake" className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">세일즈 매니저</span>
                                        <span className="text-sm text-blue-600 font-medium ml-2">×1</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                                    <Icon icon="lucide:headphones" className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <span className="font-semibold text-stone-900">고객 지원</span>
                                        <span className="text-sm text-blue-600 font-medium ml-2">×1</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-blue-200 text-center">
                                <span className="text-sm text-stone-500">추가 <span className="font-bold text-blue-600">+6명</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI/ML 핵심 차별화 */}
                <div className="glass-card p-8 md:p-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-bold mb-4">
                            <Icon icon="lucide:sparkles" className="w-4 h-4" />
                            핵심 차별화
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900">AI/ML 자체 개발 기술</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border-2 border-emerald-500/30 hover:border-emerald-500 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                                <Icon icon="lucide:target" className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h4 className="text-lg font-bold text-stone-900 mb-2">후킹 탐지 알고리즘</h4>
                            <p className="text-sm text-stone-600">
                                클릭률 높은 후킹 문구를 자동 생성하고 최적의 패턴을 탐지합니다.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                <Icon icon="lucide:split" className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="text-lg font-bold text-stone-900 mb-2">A/B 테스팅 엔진</h4>
                            <p className="text-sm text-stone-600">
                                여러 버전을 동시에 테스트하고 최고 성과 버전을 자동 선별합니다.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border-2 border-violet-500/30 hover:border-violet-500 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                                <Icon icon="lucide:brain" className="w-6 h-6 text-violet-600" />
                            </div>
                            <h4 className="text-lg font-bold text-stone-900 mb-2">성과 예측 ML 모델</h4>
                            <p className="text-sm text-stone-600">
                                시청 데이터를 학습하여 콘텐츠 성과를 사전에 예측합니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-stone-500">
                            <Icon icon="lucide:lock" className="w-4 h-4 inline mr-1" />
                            모든 핵심 기술은 <span className="font-semibold text-emerald-600">자체 개발</span>로 경쟁사 진입장벽 확보
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
