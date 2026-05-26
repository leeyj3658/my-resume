import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink, Award, Code2, Briefcase, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Unified Smart Complex Parking",
      subtitle: "통합 스마트 복합 주차관제 웹서비스",
      period: "2026.04 ~ 2026.05 (5주)",
      description: "AI 기반 번호판 인식부터 상가 할인 연동, 자동 결제까지 입주민과 방문객 모두를 위한 올인원 주차 관리 자동화 플랫폼",
      role: "Full-Stack Developer (분석/개발)",
      achievements: [
        "홈 대시보드 및 실시간 현황 UI 구현",
        "신고 관리 시스템 Full-Process 설계 및 개발",
        "AI 서버 비동기 통신 및 AWS S3 이미지 파이프라인 구축",
        "데이터 무결성을 위한 스냅샷 방식 적용",
        "CORS 이슈 및 JWT/Cookie 인증 안정화"
      ],
      technologies: ["Java 21", "Spring Boot 3.5", "React 19", "Python 3.12", "FastAPI", "AWS S3", "Docker", "Jenkins"],
      awards: ["프로젝트 최우수상", "SW인재상"],
      deployments: [
        { name: "사용자", url: "https://user.parking-system.store", description: "입주민·방문객 페이지 - 차량등록, 주차내역, 결제까지 한곳에서 처리" },
        { name: "관리자", url: "https://admin.parking-system.store", description: "관리자 대시보드 - 실시간 주차현황, 입출차 기록/할인/수정/강제출차 운영도구" },
        { name: "키오스크", url: "https://kiosk.parking-system.store", description: "현장 키오스크 - 번호판 인식, 상가할인, Toss결제로 출차 정산 자동화" }
      ]
    },
    {
      title: "창고형 식품 재고 관리 시스템",
      subtitle: "WAREHOUSE",
      period: "2026.01 ~ 2026.01 (3주)",
      description: "식품 재고 관리와 권한 별 업무 처리의 복잡성을 개선하기 위한 권한 기반 창고형 재고 관리 프로그램",
      role: "Full-Stack Developer (분석/개발)",
      achievements: [
        "권한 기반 접근 제어 시스템 구현",
        "재고 현황 대시보드 개발",
        "AJAX 기반 실시간 데이터 통신"
      ],
      technologies: ["Java 17", "Spring Boot", "MyBatis", "Oracle DB", "JavaScript", "HTML5/CSS3"],
      awards: []
    }
  ];

  const techStack = {
    "Backend": ["Java", "Spring Boot", "Spring Security", "JPA", "QueryDSL", "Python", "FastAPI"],
    "Frontend": ["React 19", "Redux Toolkit", "React Query", "Zustand", "TypeScript", "Tailwind CSS"],
    "Database": ["MySQL", "Redis", "Oracle DB"],
    "DevOps": ["AWS (EC2, S3, CloudFront, ALB)", "Docker", "Docker Compose", "Jenkins CI/CD", "GitHub Actions"],
    "AI/ML": ["YOLOv8", "EasyOCR", "LangChain", "OpenAI API"],
    "Tools": ["Git/GitHub", "Figma", "Postman", "IntelliJ IDEA", "VS Code"]
  };

  const education = [
    {
      period: "2025.09 ~ 2026.05",
      title: "클라우드 기반 AI 활용 자바&파이썬 풀스택 개발자 과정",
      institution: "한국ICT인재개발원",
      awards: ["특모범상 (출석률 100%)", "프로젝트 최우수상", "SW인재상"]
    },
    {
      period: "2021.10",
      title: "AI데이터 라벨러 양성교육 기본과정",
      institution: "부산정보산업진흥원",
      description: "학습 데이터 가공 및 라벨링 기초 교육. 데이터가 기술의 기초가 되는 과정을 경험하며, 데이터 무결성의 중요성을 깨달음.",
      awards: []
    },
    {
      period: "1999.03 ~ 2005.02",
      title: "경영학 학사",
      institution: "한신대학교",
      awards: []
    }
  ];

  const certifications = [
    {
      title: "병원동행매니져",
      issuer: "관련 기관"
    },
    {
      title: "바리스타",
      issuer: "관련 기관"
    },
    {
      title: "운전면허",
      issuer: "대한민국"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Gradient Orb - Top Right */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl" />
        {/* Subtle Gradient Orb - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-primary transition-all duration-300 z-50" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/70 backdrop-blur-md border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">이윤진</h1>
          <div className="flex gap-4">
            <a href="mailto:greathera@naver.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:01028363658" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              이윤진
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Full-Stack Developer | Java & Python
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              문제를 끝까지 해결하는 집요함, 데이터의 무결성을 지키는 개발자.
              <br />
              성실함과 기술적 근성으로 신뢰할 수 있는 시스템을 구축합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <a href="mailto:greathera@naver.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  이메일 보내기
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:01028363658" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  010-2836-3658
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Card Section */}
      <section className="py-12 md:py-16 border-b border-border/50 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-primary/20 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-primary mb-1">생년월일</p>
              <p className="text-sm font-medium text-foreground">1981.2.10</p>
              <p className="text-xs text-muted-foreground">파주, 대한민국</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-primary/20 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-primary mb-1">학력</p>
              <p className="text-sm font-medium text-foreground">한신대학교</p>
              <p className="text-xs text-muted-foreground">경영학과 졸업</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-primary/20 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-primary mb-1">교육</p>
              <p className="text-sm font-medium text-foreground">한국ICT인재개발원</p>
              <p className="text-xs text-muted-foreground">클라우드·AI풀스택 (7개월)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 border-b border-border/50 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">성장의 가치</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                어린 시절 부모님의 인삼 농사를 도우며 "인내의 가치"를 배웠습니다. 이는 비전공자로서 늦은 나이에 시작한 개발 공부의 막막함을 이겨내는 가장 큰 힘이 되었습니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                모르는 개념이 나오면 이해될 때까지 파고들고, 에러가 발생하면 해결될 때까지 자리를 뜨지 않는 "기술적 근성"은 이 인내의 시간에서 비롯되었습니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">팀 협업</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                20여 년간 다양한 사회 경험을 거치며 깨달은 최고의 가치는 "나보다 우리"라는 상생의 정신입니다. 개발은 혼자 하는 작업이 아니라 동료와의 끊임없는 소통을 통해 완성되는 과정입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                세대와 직급을 아우르는 성숙한 소통 능력으로 팀 내 유기적인 협업을 이끌어내고, 프로젝트의 목표를 향해 원활하게 나아가는 윤활유 역할을 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 border-b border-border/50 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 border-b border-border/50 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-border/50 bg-white/50 backdrop-blur-sm hover:bg-white/70">
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-lg text-primary font-medium mb-2">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </div>
                  {project.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.awards.map((award) => (
                        <Badge key={award} variant="default" className="bg-primary text-primary-foreground flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">역할: {project.role}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">주요 성과</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.deployments && project.deployments.length > 0 && (
                  <div className="mb-4 pb-4 border-b border-border/50">
                    <h4 className="text-sm font-semibold text-foreground mb-3">배포 링크</h4>
                    <div className="space-y-2">
                      {project.deployments.map((deployment) => (
                        <div key={deployment.name} className="bg-white/30 backdrop-blur-sm rounded-lg p-3 border border-border/50 hover:shadow-sm transition-all">
                          <a
                            href={deployment.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm mb-1 transition-colors"
                          >
                            {deployment.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <p className="text-xs text-muted-foreground leading-relaxed">{deployment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">기술 스택</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 border-b border-border/50 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Education
          </h2>
          <div className="space-y-5">
            {education.map((edu, idx) => (
              <Card key={idx} className="p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary mb-2">{edu.period}</p>
                    <h3 className="text-xl font-bold text-foreground mb-1">{edu.title}</h3>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                  {edu.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.awards.map((award) => (
                        <Badge key={award} variant="default" className="bg-primary text-primary-foreground flex items-center gap-1 whitespace-nowrap">
                          <Award className="w-3 h-3" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                새로운 기회와 협업에 항상 열려 있습니다. 편하게 연락 주세요.
              </p>
              
              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Email */}
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">이메일</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">가장 빠른 연락 방법입니다</p>
                  <Button asChild size="sm" variant="default" className="w-full">
                    <a href="mailto:greathera@naver.com">
                      greathera@naver.com
                    </a>
                  </Button>
                </div>
                
                {/* Phone */}
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">전화</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">긴급 연락처</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <a href="tel:01028363658">
                      010-2836-3658
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <h3 className="font-semibold text-foreground mb-4 text-center">주요 링크</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild variant="ghost" size="sm">
                    <a href="https://github.com/leeyj3658" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2026 이윤진. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
