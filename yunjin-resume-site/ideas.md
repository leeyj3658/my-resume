# 이윤진 웹 이력서 사이트 - 디자인 아이디어

## <response>

### 아이디어 1: "기술적 집요함" - 미니멀 모더니즘

**Design Movement**: 스위스 타이포그래피 + 기술 미니멀리즘

**Core Principles**:
- 명확한 정보 계층 구조: 텍스트와 공간으로만 이야기 전개
- 절제된 컬러 팔레트: 네이비 + 화이트 + 악센트 컬러 최소화
- 기하학적 정확성: 그리드 기반 레이아웃, 정렬된 섹션 분할
- 정보 우선주의: 장식보다 내용, 기술 스택과 프로젝트 상세가 주인공

**Color Philosophy**:
- **Primary**: 깊은 네이비 (#1e3a8a) - 신뢰감, 기술적 전문성
- **Secondary**: 밝은 슬레이트 (#64748b) - 보조 정보, 부드러운 대비
- **Accent**: 밝은 파란색 (#0ea5e9) - 상호작용, 강조 요소
- **Background**: 거의 순백 (#f8fafc) - 텍스트 가독성 극대화

**Layout Paradigm**:
- 좌측 고정 네비게이션 (또는 상단 스티키 헤더)
- 우측 콘텐츠 영역: 세로 스크롤로 자연스러운 정보 흐름
- 섹션 구분선: 미묘한 보더 또는 여백으로 표현
- 프로젝트 카드: 텍스트 기반, 마우스 호버 시 미묘한 배경 변화

**Signature Elements**:
1. 큰 타이포그래피 헤더: "이윤진 | Full-Stack Developer" (고급스러운 세리프 또는 굵은 산세리프)
2. 기술 스택 시각화: 태그 형태의 기술 배지 (라운드 코너, 미묘한 배경색)
3. 타임라인 또는 수직 구분선: 교육/경력/프로젝트를 시간 순서로 연결

**Interaction Philosophy**:
- 부드러운 페이드인/페이드아웃
- 호버 시 텍스트 컬러 변화 또는 배경 미묘한 강조
- 스크롤 진행에 따른 섹션 하이라이트 (현재 보고 있는 섹션 표시)
- 클릭 가능한 요소는 명확한 커서 변화

**Animation**:
- 페이지 로드 시: 섹션별 스태거 페이드인 (100-150ms 간격)
- 호버: 0.2s ease-out 트랜지션으로 컬러/배경 변화
- 스크롤 기반: 진행 바 또는 섹션 인디케이터 부드러운 이동
- 모든 애니메이션은 `prefers-reduced-motion` 존중

**Typography System**:
- **Display**: Pretendard Bold 또는 Noto Sans KR Bold (48px, 이름/헤더)
- **Heading**: Pretendard SemiBold (28px, 섹션 제목)
- **Body**: Pretendard Regular (16px, 본문)
- **Caption**: Pretendard Medium (12px, 기술 배지, 보조 정보)
- 라인 높이: 1.6 (본문), 1.3 (헤더) - 가독성 최적화

<probability>0.08</probability>

</response>

## <response>

### 아이디어 2: "성장의 여정" - 워밍 그래디언트 + 스토리텔링

**Design Movement**: 컨템포러리 웹 디자인 + 내러티브 포트폴리오

**Core Principles**:
- 감정적 연결: 개발자의 성장 과정을 시각적으로 표현
- 부드러운 그래디언트: 따뜻한 톤으로 인간미 있는 느낌
- 카드 기반 구성: 각 프로젝트/경험이 독립적인 이야기
- 시각적 풍부함: 아이콘, 미묘한 패턴, 그림자 활용

**Color Philosophy**:
- **Primary**: 따뜻한 파란색 (#2563eb) → 보라색 그래디언트 (#7c3aed)
- **Secondary**: 산호색 (#ff6b6b) - 강조, 성과 표시
- **Accent**: 금색 (#fbbf24) - 수상, 특별한 성취
- **Background**: 부드러운 그래디언트 (흰색 → 연한 파란색)

**Layout Paradigm**:
- 풀스크린 히어로 섹션: 이름 + 슬로건 + 배경 그래디언트
- 카드 그리드: 프로젝트/교육을 카드 형태로 배치
- 오버래핑 섹션: 섹션 경계를 그래디언트 또는 곡선으로 표현
- 플로팅 요소: 아이콘이나 배지가 미묘하게 떠있는 느낌

**Signature Elements**:
1. 히어로 배경: 추상적인 그래디언트 + 미묘한 애니메이션
2. 프로젝트 카드: 그림자 깊이, 호버 시 부상하는 효과
3. 성과 배지: 별, 트로피 아이콘 + 금색 강조

**Interaction Philosophy**:
- 호버 시 카드 부상 (translateY -8px)
- 클릭 시 모달 또는 상세 페이지로 전환
- 스크롤 시 요소들이 부드럽게 나타나는 인 뷰 애니메이션
- 마우스 무브에 반응하는 미묘한 패럴렉스

**Animation**:
- 페이지 로드: 히어로 배경 부드러운 줌인 (0.8s)
- 카드 진입: 스태거 페이드 + 스케일 (0.3s ease-out)
- 호버: 카드 부상 (0.2s ease-out) + 그림자 강화
- 스크롤 기반: 요소 페이드인 (Intersection Observer)

**Typography System**:
- **Display**: Noto Sans KR Bold (52px, 히어로 제목)
- **Heading**: Noto Sans KR SemiBold (32px, 섹션)
- **Subheading**: Pretendard SemiBold (20px, 카드 제목)
- **Body**: Pretendard Regular (16px, 본문)
- 라인 높이: 1.7 (본문) - 따뜻한 느낌의 여유로운 간격

<probability>0.07</probability>

</response>

## <response>

### 아이디어 3: "데이터 중심" - 다크 모드 + 기술 시각화

**Design Movement**: 기술 대시보드 + 데이터 비즈 미니멀리즘

**Core Principles**:
- 다크 모드 우선: 기술 전문성과 현대성 강조
- 데이터 시각화: 기술 스택, 경험을 그래프/차트로 표현
- 고대비 악센트: 네온 컬러로 기술 요소 강조
- 모듈식 구성: 각 섹션이 독립적인 대시보드 패널처럼 표현

**Color Philosophy**:
- **Primary**: 깊은 검정 (#0f172a) - 배경, 신뢰감
- **Secondary**: 다크 슬레이트 (#1e293b) - 카드 배경
- **Accent**: 네온 청록색 (#06b6d4) - 상호작용, 기술 강조
- **Highlight**: 네온 보라색 (#a855f7) - 특별한 성과

**Layout Paradigm**:
- 비대칭 그리드: 좌측 고정 정보, 우측 스크롤 콘텐츠
- 기술 스택 시각화: 원형 또는 네트워크 다이어그램
- 프로젝트 타임라인: 수평 또는 수직 진행 표시
- 통계 요소: "100% 출석률", "3개 수상" 등을 숫자로 강조

**Signature Elements**:
1. 기술 스택 네트워크: 연결된 노드로 기술 간 관계 표현
2. 성과 카운터: 숫자 애니메이션으로 성취 강조
3. 프로젝트 스펙트럼: 기술별 색상 코딩

**Interaction Philosophy**:
- 호버 시 기술 노드 강조 및 관련 정보 표시
- 클릭으로 기술 상세 정보 팝업
- 스크롤 진행에 따른 프로그레스 바
- 마우스 위치에 따른 미묘한 글로우 효과

**Animation**:
- 페이지 로드: 기술 노드 순차 나타남 (각 50ms 간격)
- 숫자 카운터: 0에서 목표값까지 카운트업 (1.5s)
- 호버: 노드 글로우 + 연결선 강조 (0.3s)
- 스크롤 기반: 진행 바 부드러운 이동

**Typography System**:
- **Display**: IBM Plex Mono Bold 또는 Courier Prime Bold (48px, 기술 감성)
- **Heading**: Pretendard SemiBold (28px, 섹션)
- **Monospace**: IBM Plex Mono (14px, 기술 스택, 코드 같은 느낌)
- **Body**: Pretendard Regular (16px, 본문)
- 라인 높이: 1.6 (본문) - 다크 모드 최적화

<probability>0.06</probability>

</response>

---

## 선택된 디자인

**아이디어 1: "기술적 집요함" - 미니멀 모더니즘**을 선택합니다.

**선택 이유**:
- 이윤진 개발자의 핵심 가치인 "기술적 집요함"과 "신뢰성"을 가장 잘 표현
- 정보 우선주의로 이력서의 핵심 내용(경력, 기술, 프로젝트)이 명확하게 드러남
- 미니멀하면서도 전문적인 느낌으로 채용담당자에게 좋은 인상 제공
- 모바일/데스크탑 반응형 구현이 간단하고 가독성 우수
- 스크롤 진행 인디케이터로 사용자 경험 향상
