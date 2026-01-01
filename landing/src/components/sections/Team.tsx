

export default function Team() {
    const teamMembers = [
        {
            name: "고유진",
            nameEn: "Lauren, Ko",
            role: "Founder & CEO",
            image: "/team/lauren.png", // 나중에 실제 이미지로 교체
            quote: "교사들이 매일 만드는 학습자료가 아까워서 어떻게 팔 수 없을까 고민하다 교사 그만두고 창업",
            department: "사업 운영 및 기획",
            background: [
                "연세대 영문학, 심리학 전공",
                "성균관대학교 교육대학원 영어교육 전공 (음성학 석사 논문 지필)",
                "윈글리시 영어연구원, 혜화여고, 경복고 영어교사",
                "교육부장관, 교육장표창 수상, 에듀테크 선도교사",
                "온라인 수업 지원단, 영어권문화 수업 개발 등"
            ]
        },
        {
            name: "강민규",
            nameEn: "Minkyu, Kang",
            role: "CTO",
            image: "/team/minkyu.png", // 나중에 실제 이미지로 교체
            quote: "매일 짧게 책읽기 프로젝트 하다가 숏폼에 관심이 생겨 합류",
            department: "개발 총괄",
            background: [
                "'책이 너무 두껍다' 책너두 대표",
                "한국해양대학교 기계융합기술전공",
                "팀스파르타 소프트웨어 엔지니어",
                "음성인식 AI 개발 경력",
                "한국어 음성인식 모델 개발"
            ]
        },
        {
            name: "고유승",
            nameEn: "Stanley, Ko",
            role: "CDO",
            image: "/team/stanley.png", // 나중에 실제 이미지로 교체
            quote: "숏폼을 매일 보다 중독되서 친누나가 만드는 숏폼 사업에 합류",
            department: "디자인 총괄",
            background: [
                "풀무원 브랜딩 매니지먼트 팀장 역임",
                "LG 생활건강 브랜드 디자인 담당",
                "UX Prototype, PrototypeMe 서비스 디자인",
                "서울대학교 암센터 Medical IP 소프트웨어 UI 디자인",
                "Reddot Design Award 'Communication'"
            ]
        }
    ]

    return (
        <section id="team" className="section-container relative">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Number & Title */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="text-6xl font-black gradient-text">10</div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">팀</h2>
                        <p className="text-stone-500 mt-2">Team</p>
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                        누구보다 숏폼에 진심인<br />
                        <span className="gradient-text">사람들이 만드는 솔루션.</span>
                    </h3>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass-card p-6 hover:shadow-lg transition-shadow">
                            {/* Profile Image & Basic Info */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-20 h-20 rounded-full bg-stone-100 overflow-hidden flex-shrink-0">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold text-stone-900">{member.name}</span>
                                        <span className="text-sm text-stone-500">{member.nameEn}</span>
                                    </div>
                                    <div className="text-emerald-600 font-medium">{member.role}</div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="mb-4 p-3 bg-stone-50 rounded-xl">
                                <p className="text-sm text-stone-600 italic">"{member.quote}"</p>
                            </div>

                            {/* Department */}
                            <div className="mb-3">
                                <span className="text-sm font-bold text-stone-900">{member.department}</span>
                            </div>

                            {/* Background */}
                            <ul className="space-y-1.5 text-xs text-stone-500">
                                {member.background.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
