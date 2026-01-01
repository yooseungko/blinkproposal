import { Icon } from '@iconify/react'

export default function BusinessOverview() {
    return (
        <section id="business-overview" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">01</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">사업 개요</h2>
                        <p className="text-stone-500 mt-2">Business Overview</p>
                    </div>
                </div>

                {/* 헤드라인 + 목업 */}
                <div className="mb-16">
                    <div className="glass-card p-8 md:p-12 mb-8">
                        <div className="text-center mb-8">
                            <p className="text-3xl md:text-4xl font-black mb-6 gradient-text">
                                "3년전에 만든 PDF가 매달 수익으로?"
                            </p>
                            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
                                서랍 속에 잠든 PDF 콘텐츠를 AI가 분석하여 <span className="text-emerald-600 font-semibold">10편의 숏폼 영상</span>으로 자동 변환.<br />
                                SNS에서 바이럴되고, 궁금한 사람들이 <span className="text-emerald-600 font-semibold">원본 PDF를 구매</span>합니다.
                            </p>
                        </div>

                        {/* 목업: PDF → 숏폼 → 수익 */}
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                            {/* 3년전 PDF */}
                            <div className="text-center">
                                <div className="bg-stone-100 rounded-2xl p-6 mb-4 border-2 border-dashed border-stone-300 relative">
                                    <div className="absolute -top-2 -left-2 bg-stone-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        2021
                                    </div>
                                    <div className="w-16 h-20 mx-auto bg-gradient-to-br from-red-400 to-red-500 rounded-lg shadow-lg flex items-center justify-center mb-3">
                                        <Icon icon="lucide:file-text" className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-sm font-bold text-stone-700">marketing_ebook.pdf</div>
                                    <div className="text-xs text-stone-400 mt-1">🗓 3년째 서랍 속에...</div>
                                </div>
                                <div className="text-stone-500 text-sm">잠자고 있던 PDF</div>
                            </div>

                            {/* 화살표 + AI 변환 */}
                            <div className="text-center py-4">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Icon icon="lucide:sparkles" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-emerald-600 font-bold">AI 자동 변환</span>
                                    <Icon icon="lucide:sparkles" className="w-5 h-5 text-emerald-500" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="hidden md:block">
                                        <Icon icon="lucide:arrow-right" className="w-12 h-12 text-emerald-400" />
                                    </div>
                                    <div className="md:hidden">
                                        <Icon icon="lucide:arrow-down" className="w-12 h-12 text-emerald-400" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 mt-4">
                                    {[1, 2, 3, 4, 5].map((n) => (
                                        <div key={n} className="w-6 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-md shadow-sm flex items-center justify-center">
                                            <Icon icon="lucide:play" className="w-3 h-3 text-white" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs text-stone-500 mt-2">10편 숏폼 자동 생성</div>
                            </div>

                            {/* 매달 수익 */}
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-4 border-2 border-emerald-300 relative">
                                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                        <Icon icon="lucide:trending-up" className="w-3 h-3" />
                                        수익
                                    </div>
                                    <div className="text-4xl font-black text-emerald-600 mb-2">₩120만</div>
                                    <div className="text-sm text-stone-600 font-medium">매달 수익 발생</div>
                                    <div className="mt-3 flex justify-center gap-1">
                                        {['1월', '2월', '3월'].map((month) => (
                                            <div key={month} className="bg-emerald-500/20 text-emerald-700 text-xs px-2 py-1 rounded-full">
                                                {month} +40만
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-emerald-600 text-sm font-semibold">🎉 PDF가 돈이 되는 순간</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Flow Visual */}
                <div className="glass-card p-8 md:p-12">
                    <h3 className="text-xl font-bold mb-8 text-center text-stone-900">블링크의 가치 창출 과정</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-stone-100 flex items-center justify-center mb-3">
                                <Icon icon="lucide:file-text" className="w-7 h-7 text-stone-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">PDF 콘텐츠</div>
                            <div className="text-xs text-stone-500">전자책, 교재, 리포트</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-3">
                                <Icon icon="lucide:cpu" className="w-7 h-7 text-emerald-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">AI 분석</div>
                            <div className="text-xs text-stone-500">핵심 내용 추출</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-3">
                                <Icon icon="lucide:film" className="w-7 h-7 text-emerald-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">숏폼 생성</div>
                            <div className="text-xs text-stone-500">10편 자동 제작</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-3">
                                <Icon icon="lucide:rocket" className="w-7 h-7 text-orange-500" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">마케팅 부스트</div>
                            <div className="text-xs text-stone-500">SNS 바이럴 확산</div>
                        </div>

                        <Icon icon="lucide:arrow-right" className="w-6 h-6 text-emerald-500 rotate-90 md:rotate-0 flex-shrink-0" />

                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/30 border-2 border-emerald-500/50 flex items-center justify-center mb-3">
                                <Icon icon="lucide:wallet" className="w-7 h-7 text-emerald-600" />
                            </div>
                            <div className="font-bold mb-1 text-stone-900 text-sm">PDF 판매</div>
                            <div className="text-xs text-stone-500">수익 창출</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
