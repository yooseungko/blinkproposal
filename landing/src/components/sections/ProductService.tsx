import { Icon } from '@iconify/react'

export default function ProductService() {
    return (
        <section id="product-service" className="section-container relative">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">05</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">제품/서비스</h2>
                        <p className="text-stone-500 mt-2">Product & Service</p>
                    </div>
                </div>

                {/* 서비스 라인업 */}
                <div className="glass-card p-8 md:p-12 mb-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/30">
                    <h3 className="text-2xl font-bold mb-8 text-center text-stone-900">서비스 라인업</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 블링크 스튜디오 - 부각 */}
                        <div className="relative border-2 border-emerald-500 rounded-2xl p-8 bg-white shadow-lg shadow-emerald-500/20">
                            <div className="absolute -top-3 left-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                <Icon icon="lucide:play" className="w-3 h-3" />
                                시범운영중
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                    <Icon icon="lucide:video" className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-2xl font-black gradient-text">블링크 스튜디오</h4>
                            </div>
                            <p className="text-stone-600 mb-4 font-medium">PDF를 숏폼으로 변환하는 AI 제작 솔루션</p>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="font-medium">AI 자동 스크립트 생성</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="font-medium">프리미엄 영상 편집</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="font-medium">멀티 플랫폼 배포</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="font-medium">A/B 테스트 최적화</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-4 border-t border-emerald-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-stone-500">현재 베타 테스터 모집중</span>
                                    <span className="text-emerald-600 font-bold">🚀 NOW</span>
                                </div>
                            </div>
                        </div>

                        {/* 블링크 앱 */}
                        <div className="relative border border-stone-300 rounded-2xl p-8 bg-stone-50/50">
                            <div className="absolute -top-3 left-4 px-3 py-1 bg-stone-400 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                <Icon icon="lucide:clock" className="w-3 h-3" />
                                출시 예정
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-stone-300 flex items-center justify-center">
                                    <Icon icon="lucide:smartphone" className="w-6 h-6 text-stone-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-stone-500">블링크 앱</h4>
                            </div>
                            <p className="text-stone-500 mb-4">숏폼 콘텐츠 마켓플레이스</p>
                            <ul className="space-y-3 text-sm text-stone-500">
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:circle" className="w-4 h-4 text-stone-400" />
                                    콘텐츠 판매 및 수익화
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:circle" className="w-4 h-4 text-stone-400" />
                                    맞춤형 추천 시스템
                                </li>
                                <li className="flex items-center gap-2">
                                    <Icon icon="lucide:circle" className="w-4 h-4 text-stone-400" />
                                    구독 서비스
                                </li>
                            </ul>
                            <div className="mt-6 pt-4 border-t border-stone-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-stone-400">2025년 하반기 예정</span>
                                    <span className="text-stone-400 font-medium">COMING SOON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI 파이프라인 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        AI 자동화 파이프라인
                    </h3>

                    <div className="glass-card p-8 md:p-12">
                        <div className="grid md:grid-cols-7 gap-4">
                            {[
                                { icon: "lucide:upload", title: "PDF 업로드", desc: "콘텐츠 등록" },
                                { icon: "lucide:scan", title: "AI 분석", desc: "핵심 추출" },
                                { icon: "lucide:file-text", title: "스크립트 생성", desc: "자동 작성" },
                                { icon: "lucide:mic", title: "음성 합성", desc: "TTS 생성" },
                                { icon: "lucide:image", title: "비주얼 생성", desc: "AI 이미지" },
                                { icon: "lucide:film", title: "영상 편집", desc: "자동 편집" },
                                { icon: "lucide:share-2", title: "배포", desc: "멀티 플랫폼" },
                            ].map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                                        <Icon icon={step.icon} className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div className="text-sm font-bold text-stone-900 mb-1">{step.title}</div>
                                    <div className="text-xs text-stone-500">{step.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 프로세스 플로우 시각화 (HTML/CSS 목업) */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        콘텐츠 생성 프로세스
                    </h3>

                    <div className="glass-card p-6 md:p-10 overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-8 items-start">

                            {/* Step 1: PDF 업로드 */}
                            <div className="text-center">
                                <div className="text-sm font-bold text-emerald-600 mb-4">STEP 1</div>
                                <div className="bg-white rounded-2xl border-2 border-dashed border-emerald-300 p-8 mb-4 hover:border-emerald-500 transition-colors">
                                    <div className="w-20 h-24 mx-auto bg-gradient-to-br from-red-400 to-red-500 rounded-lg shadow-lg flex items-center justify-center mb-4 relative">
                                        <Icon icon="lucide:file-text" className="w-10 h-10 text-white" />
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                            <Icon icon="lucide:upload" className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-xs text-stone-500">marketing_ebook.pdf</div>
                                    <div className="text-xs text-stone-400 mt-1">2.4 MB</div>
                                </div>
                                <div className="text-lg font-bold text-stone-900 mb-1">PDF 업로드</div>
                                <p className="text-sm text-stone-500">콘텐츠를 업로드하면<br />AI가 자동 분석</p>
                            </div>

                            {/* Arrow 1 */}
                            <div className="hidden md:flex items-center justify-center absolute left-1/3 top-1/2 -translate-y-1/2">
                                <Icon icon="lucide:chevron-right" className="w-8 h-8 text-emerald-400" />
                            </div>

                            {/* Step 2: 후킹 & 스토리 선택 */}
                            <div className="text-center">
                                <div className="text-sm font-bold text-emerald-600 mb-4">STEP 2</div>
                                <div className="bg-white rounded-2xl border border-stone-200 p-4 mb-4 shadow-sm">
                                    <div className="text-xs font-semibold text-stone-700 mb-3 text-left flex items-center gap-2">
                                        <Icon icon="lucide:sparkles" className="w-4 h-4 text-emerald-500" />
                                        AI 추천 후킹 & 스토리
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { title: "충격적 통계", selected: true },
                                            { title: "문제 제기", selected: true },
                                            { title: "성공 스토리", selected: false },
                                            { title: "Before/After", selected: true },
                                            { title: "전문가 인용", selected: false },
                                            { title: "질문형 훅", selected: false },
                                            { title: "반전 스토리", selected: true },
                                            { title: "공감 훅", selected: false },
                                            { title: "숫자 강조", selected: true },
                                            { title: "트렌드 연결", selected: false },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className={`text-xs p-2 rounded-lg flex items-center gap-1.5 transition-all ${item.selected
                                                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                                                    : 'bg-stone-50 border border-stone-200 text-stone-500'
                                                    }`}
                                            >
                                                <Icon
                                                    icon={item.selected ? "lucide:check-circle" : "lucide:circle"}
                                                    className={`w-3.5 h-3.5 ${item.selected ? 'text-emerald-500' : 'text-stone-300'}`}
                                                />
                                                <span className="truncate">{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3 text-xs text-emerald-600 font-semibold">5개 선택됨</div>
                                </div>
                                <div className="text-lg font-bold text-stone-900 mb-1">후킹 & 스토리 선택</div>
                                <p className="text-sm text-stone-500">10가지 AI 추천 중<br />원하는 스타일 선택</p>
                            </div>

                            {/* Arrow 2 */}
                            <div className="hidden md:flex items-center justify-center absolute left-2/3 top-1/2 -translate-y-1/2">
                                <Icon icon="lucide:chevron-right" className="w-8 h-8 text-emerald-400" />
                            </div>

                            {/* Step 3: 숏폼 출력 */}
                            <div className="text-center">
                                <div className="text-sm font-bold text-emerald-600 mb-4">STEP 3</div>
                                <div className="flex justify-center gap-3 mb-4">
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="relative group">
                                            <div className="w-16 h-28 bg-gradient-to-br from-stone-900 to-stone-700 rounded-xl shadow-lg overflow-hidden">
                                                {/* 영상 썸네일 목업 */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                                        <Icon icon="lucide:play" className="w-4 h-4 text-white ml-0.5" />
                                                    </div>
                                                </div>
                                                {/* 진행 바 */}
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                                                    <div className="h-full bg-emerald-400" style={{ width: `${30 + num * 20}%` }}></div>
                                                </div>
                                                {/* 라벨 */}
                                                <div className="absolute top-2 left-2 right-2">
                                                    <div className="text-[8px] text-white font-semibold truncate">Hook {num}</div>
                                                </div>
                                            </div>
                                            {/* 완료 뱃지 */}
                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow">
                                                <Icon icon="lucide:check" className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-lg font-bold text-stone-900 mb-1">숏폼 완성</div>
                                <p className="text-sm text-stone-500">선택한 스토리로<br />프리미엄 숏폼 자동 생성</p>
                            </div>
                        </div>

                        {/* 화살표 연결선 */}
                        <div className="hidden md:flex justify-around items-center mt-6 -mx-4">
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-full max-w-[80px] h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-emerald-400"></div>
                                <Icon icon="lucide:chevron-right" className="w-5 h-5 text-emerald-500 -ml-1" />
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-full max-w-[80px] h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-300 to-transparent"></div>
                                <Icon icon="lucide:chevron-right" className="w-5 h-5 text-emerald-500 -ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 최적화 AI (Performance Analytics) 목업 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        최적화 AI
                        <span className="text-sm font-normal text-stone-500 ml-2">Performance Analytics</span>
                    </h3>

                    {/* 기술 스택 뱃지 */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-600 font-mono">XGBoost</span>
                        <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-600 font-mono">A/B Testing Engine</span>
                        <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-600 font-mono">Real-time Analytics</span>
                        <span className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs text-stone-600 font-mono">ML Prediction</span>
                    </div>

                    {/* 메인 대시보드 */}
                    <div className="bg-stone-900 rounded-2xl p-6 md:p-8 shadow-2xl">
                        {/* 대시보드 헤더 */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-700">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-emerald-400 text-sm font-semibold">LIVE</span>
                                <span className="text-stone-400 text-sm">Performance Dashboard</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-stone-500">
                                <Icon icon="lucide:clock" className="w-3.5 h-3.5" />
                                Last updated: 2s ago
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* 왼쪽: 실시간 성과 차트 */}
                            <div className="md:col-span-2 space-y-6">
                                {/* KPI 카드 */}
                                <div className="grid grid-cols-4 gap-3">
                                    {[
                                        { label: "Total Views", value: "26.3K", change: "+12.4%", icon: "lucide:eye" },
                                        { label: "Avg. CTR", value: "6.4%", change: "+2.1%", icon: "lucide:mouse-pointer-click" },
                                        { label: "Watch Time", value: "38s", change: "+8.2%", icon: "lucide:timer" },
                                        { label: "Conversion", value: "3.2%", change: "+0.8%", icon: "lucide:target" },
                                    ].map((kpi, i) => (
                                        <div key={i} className="bg-stone-800/50 rounded-xl p-3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon icon={kpi.icon} className="w-3.5 h-3.5 text-stone-400" />
                                                <span className="text-[10px] text-stone-400 uppercase tracking-wider">{kpi.label}</span>
                                            </div>
                                            <div className="text-lg font-bold text-white">{kpi.value}</div>
                                            <div className="text-xs text-emerald-400">{kpi.change}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* 성과 비교 차트 (목업) */}
                                <div className="bg-stone-800/50 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-semibold text-white">A/B Test Results</span>
                                        <div className="flex gap-4 text-xs">
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-stone-400">Hook A</span>
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                                <span className="text-stone-400">Hook B</span>
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                                <span className="text-stone-400">Hook C</span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* 바 차트 목업 */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-stone-500 w-16">Views</span>
                                            <div className="flex-1 flex gap-1">
                                                <div className="h-6 bg-emerald-500 rounded" style={{ width: '75%' }}></div>
                                                <div className="h-6 bg-blue-500 rounded" style={{ width: '52%' }}></div>
                                                <div className="h-6 bg-orange-500 rounded" style={{ width: '31%' }}></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-stone-500 w-16">CTR</span>
                                            <div className="flex-1 flex gap-1">
                                                <div className="h-6 bg-emerald-500 rounded" style={{ width: '82%' }}></div>
                                                <div className="h-6 bg-blue-500 rounded" style={{ width: '61%' }}></div>
                                                <div className="h-6 bg-orange-500 rounded" style={{ width: '48%' }}></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-stone-500 w-16">Retention</span>
                                            <div className="flex-1 flex gap-1">
                                                <div className="h-6 bg-emerald-500 rounded" style={{ width: '68%' }}></div>
                                                <div className="h-6 bg-blue-500 rounded" style={{ width: '55%' }}></div>
                                                <div className="h-6 bg-orange-500 rounded" style={{ width: '42%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 상세 메트릭 테이블 */}
                                <div className="bg-stone-800/50 rounded-xl overflow-hidden">
                                    <table className="w-full text-xs">
                                        <thead>
                                            <tr className="border-b border-stone-700">
                                                <th className="text-left p-3 text-stone-400 font-medium">Version</th>
                                                <th className="text-right p-3 text-stone-400 font-medium">Views</th>
                                                <th className="text-right p-3 text-stone-400 font-medium">CTR</th>
                                                <th className="text-right p-3 text-stone-400 font-medium">Avg. Time</th>
                                                <th className="text-right p-3 text-stone-400 font-medium">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { name: "충격 통계형", views: "12.4K", ctr: "8.2%", time: "45s", score: 92, winner: true },
                                                { name: "문제 제기형", views: "8.7K", ctr: "6.1%", time: "38s", score: 78, winner: false },
                                                { name: "Before/After", views: "5.2K", ctr: "4.8%", time: "32s", score: 65, winner: false },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-stone-700/50">
                                                    <td className="p-3 text-white flex items-center gap-2">
                                                        {row.winner && <Icon icon="lucide:crown" className="w-3.5 h-3.5 text-yellow-500" />}
                                                        {row.name}
                                                    </td>
                                                    <td className="p-3 text-right text-stone-300">{row.views}</td>
                                                    <td className="p-3 text-right text-stone-300">{row.ctr}</td>
                                                    <td className="p-3 text-right text-stone-300">{row.time}</td>
                                                    <td className="p-3 text-right">
                                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${row.score >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                                                            row.score >= 60 ? 'bg-blue-500/20 text-blue-400' :
                                                                'bg-orange-500/20 text-orange-400'
                                                            }`}>{row.score}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 오른쪽: AI 예측 & 인사이트 */}
                            <div className="space-y-4">
                                {/* 바이럴 예측 */}
                                <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-4 border border-emerald-500/30">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon icon="lucide:brain" className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">AI Prediction</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-16 h-16">
                                            <svg className="w-16 h-16 transform -rotate-90">
                                                <circle cx="32" cy="32" r="28" strokeWidth="4" className="fill-none stroke-stone-700" />
                                                <circle
                                                    cx="32" cy="32" r="28" strokeWidth="4"
                                                    className="fill-none stroke-emerald-500"
                                                    strokeDasharray={`${78 * 1.76} 176`}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-lg font-black text-white">78%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">바이럴 확률</div>
                                            <div className="text-xs text-emerald-400">Top 22% predicted</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-stone-400 p-2 bg-stone-800/50 rounded-lg">
                                        💡 <span className="text-white">추천:</span> "충격 통계형" 훅을 메인으로 업로드하세요
                                    </div>
                                </div>

                                {/* 자동 학습 로그 */}
                                <div className="bg-stone-800/50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon icon="lucide:activity" className="w-4 h-4 text-violet-400" />
                                        <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">Learning Log</span>
                                    </div>
                                    <div className="space-y-2 font-mono text-[10px]">
                                        <div className="flex items-start gap-2">
                                            <span className="text-stone-500">14:32</span>
                                            <span className="text-emerald-400">✓</span>
                                            <span className="text-stone-300">Pattern analysis complete</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-stone-500">14:33</span>
                                            <span className="text-emerald-400">✓</span>
                                            <span className="text-stone-300">Hook optimization applied</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-stone-500">14:34</span>
                                            <span className="text-blue-400">→</span>
                                            <span className="text-stone-300">Model retraining...</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-stone-500">14:35</span>
                                            <span className="text-violet-400 animate-pulse">●</span>
                                            <span className="text-violet-400">Syncing to next gen...</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 최적화 팁 */}
                                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon icon="lucide:lightbulb" className="w-4 h-4 text-orange-400" />
                                        <span className="text-xs font-semibold text-orange-400">Insight</span>
                                    </div>
                                    <p className="text-xs text-stone-300 leading-relaxed">
                                        "숫자를 강조한 훅이 <span className="text-orange-400 font-semibold">2.3배</span> 높은 CTR을 기록합니다"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 데이터로 진화하는 숏폼 */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-stone-900">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        데이터로 진화하는 숏폼
                    </h3>

                    <div className="glass-card p-6 md:p-10">
                        {/* 진화 타임라인 */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* v1.0 - 후킹 문구 5개 생성 */}
                            <div className="relative">
                                <div className="absolute -top-3 left-4 px-3 py-1 bg-stone-400 text-white text-xs font-bold rounded-full">
                                    v1.0
                                </div>
                                <div className="bg-stone-100 rounded-2xl p-4 pt-6">
                                    <div className="text-sm font-semibold text-stone-500 mb-2">AI 후킹 문구 생성</div>
                                    <div className="text-xs text-stone-400 mb-3">5개 버전 자동 생성</div>

                                    {/* 후킹 문구 리스트 */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200">
                                            <div className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center text-[10px] font-bold text-white">1</div>
                                            <span className="text-xs text-stone-600">"3분만에 영어 실력 폭발하는 비밀"</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200">
                                            <div className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center text-[10px] font-bold text-white">2</div>
                                            <span className="text-xs text-stone-600">"이것 모르면 영어 공부 헛수고"</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200">
                                            <div className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center text-[10px] font-bold text-white">3</div>
                                            <span className="text-xs text-stone-600">"원어민이 매일 쓰는 표현 TOP5"</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200">
                                            <div className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center text-[10px] font-bold text-white">4</div>
                                            <span className="text-xs text-stone-600">"97%가 틀리는 영어 발음"</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200">
                                            <div className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center text-[10px] font-bold text-white">5</div>
                                            <span className="text-xs text-stone-600">"영어 잘하는 사람들의 공통점"</span>
                                        </div>
                                    </div>

                                    <div className="text-center text-xs text-stone-400">
                                        <Icon icon="lucide:bot" className="w-4 h-4 inline mr-1" />
                                        AI 자동 생성
                                    </div>
                                </div>

                                {/* 화살표 */}
                                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                    <Icon icon="lucide:chevron-right" className="w-6 h-6 text-blue-400" />
                                </div>
                            </div>

                            {/* v2.0 - A/B 테스트로 2개 선별 */}
                            <div className="relative">
                                <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                                    v2.0
                                </div>
                                <div className="bg-blue-50 rounded-2xl p-4 pt-6 border border-blue-200">
                                    <div className="text-sm font-semibold text-blue-600 mb-2">A/B 테스트 선별</div>
                                    <div className="text-xs text-blue-400 mb-3">성과 상위 2개 선정</div>

                                    {/* A/B 테스트 결과 */}
                                    <div className="space-y-3 mb-4">
                                        {/* 승자 A */}
                                        <div className="p-3 bg-white rounded-xl border-2 border-blue-400 relative">
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">A</span>
                                            </div>
                                            <div className="text-xs text-blue-700 font-medium mb-2">"97%가 틀리는 영어 발음"</div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1">
                                                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                                                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold text-blue-600">78%</span>
                                            </div>
                                            <div className="text-[10px] text-blue-400 mt-1">CTR 7.2%</div>
                                        </div>

                                        {/* 승자 B */}
                                        <div className="p-3 bg-white rounded-xl border-2 border-blue-300 relative">
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">B</span>
                                            </div>
                                            <div className="text-xs text-blue-600 font-medium mb-2">"3분만에 영어 실력 폭발하는 비밀"</div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1">
                                                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                                                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '65%' }}></div>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold text-blue-500">65%</span>
                                            </div>
                                            <div className="text-[10px] text-blue-400 mt-1">CTR 5.8%</div>
                                        </div>

                                        {/* 탈락 표시 */}
                                        <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
                                            <Icon icon="lucide:x-circle" className="w-4 h-4" />
                                            <span>나머지 3개 탈락</span>
                                        </div>
                                    </div>

                                    <div className="text-center text-xs text-blue-500">
                                        <Icon icon="lucide:split" className="w-4 h-4 inline mr-1" />
                                        데이터 기반 선별
                                    </div>
                                </div>

                                {/* 화살표 */}
                                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                    <Icon icon="lucide:chevron-right" className="w-6 h-6 text-emerald-400" />
                                </div>
                            </div>

                            {/* v3.0 - 완성 템플릿 */}
                            <div className="relative">
                                <div className="absolute -top-3 left-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                    <Icon icon="lucide:crown" className="w-3 h-3" /> v3.0
                                </div>
                                <div className="bg-emerald-50 rounded-2xl p-4 pt-6 border-2 border-emerald-500">
                                    <div className="text-sm font-semibold text-emerald-600 mb-2">완성 템플릿 🔥</div>
                                    <div className="text-xs text-emerald-400 mb-3">모든 요소 최적화</div>

                                    {/* 완성된 요소들 */}
                                    <div className="space-y-2 mb-4">
                                        <div className="p-2.5 bg-white rounded-lg border border-emerald-300">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Icon icon="lucide:type" className="w-4 h-4 text-emerald-500" />
                                                <span className="text-xs font-semibold text-emerald-700">타이틀</span>
                                            </div>
                                            <div className="text-[11px] text-stone-600 pl-6">"97%가 틀리는 영어 발음"</div>
                                        </div>

                                        <div className="p-2.5 bg-white rounded-lg border border-emerald-300">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Icon icon="lucide:subtitles" className="w-4 h-4 text-emerald-500" />
                                                <span className="text-xs font-semibold text-emerald-700">자막 스타일</span>
                                            </div>
                                            <div className="flex gap-1 pl-6">
                                                <div className="px-2 py-0.5 bg-yellow-400 rounded text-[9px] font-bold text-black">강조</div>
                                                <div className="px-2 py-0.5 bg-stone-800 rounded text-[9px] text-white">기본</div>
                                            </div>
                                        </div>

                                        <div className="p-2.5 bg-white rounded-lg border border-emerald-300">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Icon icon="lucide:image" className="w-4 h-4 text-emerald-500" />
                                                <span className="text-xs font-semibold text-emerald-700">영상 스타일</span>
                                            </div>
                                            <div className="flex gap-1 pl-6">
                                                <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-400 to-cyan-500"></div>
                                                <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-400 to-pink-500"></div>
                                                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-400 to-blue-500"></div>
                                            </div>
                                        </div>

                                        <div className="p-2.5 bg-white rounded-lg border border-emerald-300">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Icon icon="lucide:mouse-pointer-click" className="w-4 h-4 text-emerald-500" />
                                                <span className="text-xs font-semibold text-emerald-700">CTA 버튼</span>
                                            </div>
                                            <div className="pl-6">
                                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-[10px] text-white font-bold">
                                                    지금 바로 시작하기
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                                            <Icon icon="lucide:check-circle" className="w-3 h-3" />
                                            제작 완료
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 하단 통계 - 강조 */}
                        <div className="mt-8 pt-8 border-t border-stone-200">
                            {/* 성과 상승 그래프 */}
                            <div className="mb-6">
                                <div className="text-center mb-4">
                                    <span className="text-sm text-stone-500">버전별 성과 변화</span>
                                </div>
                                <div className="flex items-end justify-center gap-8 h-32">
                                    {/* CTR 그래프 */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex items-end gap-2 h-24">
                                            <div className="w-8 bg-stone-300 rounded-t-lg" style={{ height: '25%' }}>
                                                <div className="text-[10px] text-center text-stone-500 -mt-4">2.1%</div>
                                            </div>
                                            <div className="w-8 bg-blue-400 rounded-t-lg" style={{ height: '58%' }}>
                                                <div className="text-[10px] text-center text-blue-600 -mt-4">4.8%</div>
                                            </div>
                                            <div className="w-8 bg-emerald-500 rounded-t-lg" style={{ height: '100%' }}>
                                                <div className="text-[10px] text-center text-emerald-600 -mt-4 font-bold">8.2%</div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-stone-600">CTR</span>
                                    </div>
                                    {/* 시청시간 그래프 */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex items-end gap-2 h-24">
                                            <div className="w-8 bg-stone-300 rounded-t-lg" style={{ height: '27%' }}>
                                                <div className="text-[10px] text-center text-stone-500 -mt-4">12초</div>
                                            </div>
                                            <div className="w-8 bg-blue-400 rounded-t-lg" style={{ height: '62%' }}>
                                                <div className="text-[10px] text-center text-blue-600 -mt-4">28초</div>
                                            </div>
                                            <div className="w-8 bg-emerald-500 rounded-t-lg" style={{ height: '100%' }}>
                                                <div className="text-[10px] text-center text-emerald-600 -mt-4 font-bold">45초</div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-stone-600">평균 시청시간</span>
                                    </div>
                                </div>
                                {/* 범례 */}
                                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-stone-500">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 bg-stone-300 rounded"></div>
                                        <span>v1.0</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 bg-blue-400 rounded"></div>
                                        <span>v2.0</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                                        <span>v3.0</span>
                                    </div>
                                </div>
                            </div>

                            {/* 핵심 통계 카드 */}
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                                        <Icon icon="lucide:database" className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div className="text-2xl font-black text-emerald-600 mb-1">10만+</div>
                                    <div className="text-xs text-stone-600">시청 데이터 학습</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                                        <Icon icon="lucide:refresh-cw" className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="text-2xl font-black text-blue-600 mb-1">주 1회</div>
                                    <div className="text-xs text-stone-600">자동 업데이트</div>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                                        <Icon icon="lucide:trending-up" className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div className="text-2xl font-black text-orange-600 mb-1">3배 ↑</div>
                                    <div className="text-xs text-stone-600">평균 성과 향상</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
