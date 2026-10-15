const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// Helper to assert replacements
function replaceOrFail(source, target, replacement) {
  if (!source.includes(target)) {
    console.error(`ERROR: Target substring not found: ${target.substring(0, 100)}...`);
    process.exit(1);
  }
  return source.replace(target, replacement);
}

// 1. Introduction section image replacement
console.log("Replacing intro section images...");
const oldIntroImgs = `<div className="aspect-[16/10] w-full overflow-hidden rounded-md shadow-2xl border border-soft-gray/30 bg-[#F5F4F0] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80" 
                  alt="Yunseul Stay Coastal Architecture" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.03] group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Overlapping Small Detail Image (Bedding with sunset light) */}
              <div className="absolute -bottom-10 -left-10 w-1/3 aspect-[3/4] rounded-md overflow-hidden shadow-2xl border-4 border-white hidden md:block group hover:-translate-y-2 transition-transform duration-500 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80" 
                  alt="Yunseul Stay Detail rest" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.05]" />
              </div>`;

const newIntroImgs = `<div className="aspect-[16/10] w-full overflow-hidden rounded-md shadow-2xl border border-soft-gray/30 bg-[#F5F4F0] relative group">
                <img 
                  src={BRAND_CONTENT.locationImage} 
                  alt="Yunseul Stay Coastal Architecture" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.03] group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Overlapping Small Detail Image (Bedding with sunset light) */}
              <div className="absolute -bottom-10 -left-10 w-1/3 aspect-[3/4] rounded-md overflow-hidden shadow-2xl border-4 border-white hidden md:block group hover:-translate-y-2 transition-transform duration-500 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" 
                  alt="Yunseul Stay Detail rest" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.05]" />
              </div>`;

code = replaceOrFail(code, oldIntroImgs, newIntroImgs);


// 2. Add useEffect to HomePage for auto-advance and visual progress bar
console.log("Replacing HomePage with auto-advance and progress bar...");
const oldHomePageStart = `const HomePage = ({ 
  onNavigate 
}: { 
  onNavigate: (p: Page, roomId?: string | null, expTab?: 'tea' | 'lp' | 'guestbook') => void 
}) => {
  const [activeHealingIndex, setActiveHealingIndex] = useState(0);
  const healingSlides = [`;

const newHomePageStart = `const HomePage = ({ 
  onNavigate 
}: { 
  onNavigate: (p: Page, roomId?: string | null, expTab?: 'tea' | 'lp' | 'guestbook') => void 
}) => {
  const [activeHealingIndex, setActiveHealingIndex] = useState(0);
  const healingSlides = [`;

code = replaceOrFail(code, oldHomePageStart, newHomePageStart);

// Let's add the useEffect inside HomePage. We'll search for 'const healingSlides = [' and place the useEffect right after '  ];'
const oldHealingSlidesBlock = `      image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1600&h=600&q=80",
    }
  ];

  return (`;

const newHealingSlidesBlock = `      image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1600&h=600&q=80",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHealingIndex((prev) => (prev === healingSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [activeHealingIndex, healingSlides.length]);

  return (`;

code = replaceOrFail(code, oldHealingSlidesBlock, newHealingSlidesBlock);


// 3. Add slider transition progress visualizer
console.log("Adding transition speed visualizer to A DAY OF HEALING section...");
const oldSliderLayout = `              {/* Slider Arrows */}
              <button
                onClick={() => setActiveHealingIndex((prev) => (prev === 0 ? healingSlides.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/30 hover:bg-accent-gold hover:border-accent-gold hover:text-deep-ink text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <button
                onClick={() => setActiveHealingIndex((prev) => (prev === healingSlides.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/30 hover:bg-accent-gold hover:border-accent-gold hover:text-deep-ink text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>`;

const newSliderLayout = `              {/* Slider Arrows */}
              <button
                onClick={() => setActiveHealingIndex((prev) => (prev === 0 ? healingSlides.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/30 hover:bg-accent-gold hover:border-accent-gold hover:text-deep-ink text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
                aria-label="Previous slide"
              >
                &larr;
              </button>
              <button
                onClick={() => setActiveHealingIndex((prev) => (prev === healingSlides.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/30 hover:bg-accent-gold hover:border-accent-gold hover:text-deep-ink text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
                aria-label="Next slide"
              >
                &rarr;
              </button>

              {/* Progress Bar showing slide transition duration */}
              <div className="absolute bottom-0 left-0 h-[4px] bg-white/10 w-full z-20">
                <motion.div
                  key={activeHealingIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-accent-gold"
                />
              </div>
            </div>`;

code = replaceOrFail(code, oldSliderLayout, newSliderLayout);


// 4. Add Section below A DAY OF HEALING
console.log("Adding elegant invitation section below A DAY OF HEALING...");
const oldAdayOfHealingEnd = `            </div>
          </div>
        </div>
      </section>
    </div>
  );
};`;

const newAdayOfHealingEnd = `            </div>
          </div>
        </div>
      </section>

      {/* Section: Elegant Invitation / Journey's End */}
      <section className="bg-white py-32 border-b border-soft-gray/20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold block">EXPERIENCE JOURNEY</span>
          
          <h2 className="text-3xl md:text-4xl font-serif text-deep-ink leading-tight font-light uppercase tracking-wide">
            빛과 바람, 물이 빚어내는<br />
            온전한 휴식의 여정으로
          </h2>
          
          <p className="text-sm text-deep-ink/70 font-serif leading-relaxed font-light max-w-xl mx-auto">
            세상의 속도에서 잠시 벗어나, 자연이 건네는 가장 순수한 영감의 순간들을 경험해 보세요. <br />
            차 우리기 리추얼부터 아날로그 LP 감상까지, 당신을 위해 정성스레 준비된 쉼의 디테일들이 기다리고 있습니다.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <button 
              onClick={() => onNavigate('rooms')}
              className="px-8 py-4 border border-deep-ink text-deep-ink text-[11px] tracking-[0.2em] uppercase hover:bg-deep-ink hover:text-white transition-all duration-500 font-bold rounded-sm shadow-sm cursor-pointer"
            >
              객실 둘러보기 &rarr;
            </button>
            <button 
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 bg-deep-ink text-white text-[11px] tracking-[0.2em] uppercase hover:bg-accent-gold hover:text-white transition-all duration-500 font-bold rounded-sm shadow-md cursor-pointer"
            >
              실시간 예약하기 &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};`;

code = replaceOrFail(code, oldAdayOfHealingEnd, newAdayOfHealingEnd);


// 5. LP Sound Section Updates
console.log("Updating LP / Sound section description text, title/genre, and paragraph styling...");

// Reduce description to a single line
const oldLPDescText = `                    <p className="text-sm text-deep-ink/50 font-serif leading-relaxed font-light">
                      아날로그 무드의 소리와 자연의 소리가 평온하게 춤추는 공간. 룸에 배치된 고급 턴테이블에 수제 자켓 LP를 올리면 조용한 위안을 느낄 수 있는 음성이 흘러나옵니다.
                    </p>`;

const newLPDescText = `                    <p className="text-sm text-deep-ink/50 font-serif leading-relaxed font-light">
                      아날로그 턴테이블에 수제 자켓 LP를 올려 고요한 동해 바다 소리와 깊은 위안의 선율을 감상해보세요.
                    </p>`;

code = replaceOrFail(code, oldLPDescText, newLPDescText);

// Keep only one text in "Minimalist Deep Zen Sound Quiet Wave Meditation" by clearing genre
const oldLPMidnightGenre = `                      { 
                        id: 'midnight', 
                        title: "Quiet Wave Meditation", 
                        genre: "Minimalist Deep Zen Sound", 
                        desc: "완벽하게 어두워진 바다와 깊이를 가늠할 수 없는 야간 파도의 긴 저역 주파수 음향 테라피 오디오 트랙",`;

const newLPMidnightGenre = `                      { 
                        id: 'midnight', 
                        title: "Quiet Wave Meditation", 
                        genre: "", 
                        desc: "완벽하게 어두워진 바다와 깊이를 가늠할 수 없는\\n야간 파도의 긴 저역 주파수 음향 테라피 오디오 트랙",`;

code = replaceOrFail(code, oldLPMidnightGenre, newLPMidnightGenre);

// Change rendering of desc with whitespace-pre-line
const oldAlbumDescRender = `<p className="text-xs text-deep-ink/50 px-2 leading-relaxed font-serif font-light">{album.desc}</p>`;
const newAlbumDescRender = `<p className="text-xs text-deep-ink/50 px-2 leading-relaxed font-serif font-light whitespace-pre-line">{album.desc}</p>`;

code = replaceOrFail(code, oldAlbumDescRender, newAlbumDescRender);


// 6. Rooms page condensed RESERVATION section to horizontal / 1-line paragraph
console.log("Refactoring Rooms Page condensed Reservation section to horizontal row...");
const oldRoomsBookingSection = `      {/* Condensed Reservation Section */}
      <section id="booking-section" className="bg-[#FAF9F6] border-t border-soft-gray py-28 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold block">RESERVATION</span>
          <h2 className="text-2xl md:text-3xl font-serif text-deep-ink uppercase tracking-wider font-light">머무름 예약 안내</h2>
          <p className="text-xs md:text-sm text-deep-ink/65 font-serif leading-relaxed font-light max-w-lg mx-auto">
            하루 한 팀, 오직 당신만을 위해 온전히 비워진 사적 휴식을 선사합니다.<br />
            실시간 객실 캘린더 확인 및 상세 예약은 예약 페이지에서 진행하실 수 있습니다.
          </p>
          <div className="w-12 h-px bg-accent-gold" />
          <button 
            onClick={() => onNavigate('booking')}
            className="px-12 py-4 bg-deep-ink text-white text-[11px] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-white transition-all duration-500 font-bold rounded-sm shadow-md cursor-pointer"
          >
            실시간 예약하기 &rarr;
          </button>
        </div>
      </section>`;

const newRoomsBookingSection = `      {/* Condensed Reservation Section (Horizontal Row Layout) */}
      <section id="booking-section" className="bg-[#FAF9F6] border-t border-soft-gray py-20 px-6 md:px-12 lg:px-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold block">RESERVATION</span>
            <h2 className="text-2xl md:text-3xl font-serif text-deep-ink uppercase tracking-wider font-light">머무름 예약 안내</h2>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs md:text-sm text-deep-ink/65 font-serif leading-relaxed font-light">
              윤슬 스테이의 감각적인 공간들을 자유롭게 둘러보시고, 당신만을 위해 준비된 특별한 하루를 지금 바로 예약해 보세요.
            </p>
          </div>

          <div className="shrink-0">
            <button 
              onClick={() => onNavigate('booking')}
              className="px-12 py-4 bg-deep-ink text-white text-[11px] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-white transition-all duration-500 font-bold rounded-sm shadow-md cursor-pointer whitespace-nowrap"
            >
              실시간 예약하기 &rarr;
            </button>
          </div>
        </div>
      </section>`;

code = replaceOrFail(code, oldRoomsBookingSection, newRoomsBookingSection);


// 7. Define MonthCalendar and insert it inside BookingForm/BookingPage
console.log("Defining MonthCalendar component and restructuring BookingForm/BookingPage side-by-side...");

const monthCalendarCode = `
const MonthCalendar = ({ 
  checkIn, 
  setCheckIn, 
  checkOut, 
  setCheckOut 
}: { 
  checkIn: string; 
  setCheckIn: (d: string) => void; 
  checkOut: string; 
  setCheckOut: (d: string) => void; 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)); // Default June 2026
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed (5 for June)
  
  // Booked dates: weekends & busy weekdays
  const bookedDates = [
    "2026-06-12", "2026-06-13", "2026-06-14", "2026-06-20", "2026-06-21", "2026-06-27", "2026-06-28",
    "2026-07-03", "2026-07-04", "2026-07-10", "2026-07-11", "2026-07-17", "2026-07-18", "2026-07-24", "2026-07-25", "2026-07-31"
  ];

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m, 1).getDay();

  const totalDays = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    if (year === 2026 && month === 0) return;
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    if (year === 2026 && month === 11) return;
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const daysArray = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let d = 1; d <= totalDays; d++) {
    daysArray.push(d);
  }

  const handleDateClick = (dayNum: number) => {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(dayNum).padStart(2, '0');
    const dateStr = \`\${year}-\${formattedMonth}-\${formattedDay}\`;

    if (bookedDates.includes(dateStr)) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(dateStr);
      setCheckOut('');
    } else {
      const checkInDate = new Date(checkIn);
      const clickedDate = new Date(dateStr);
      if (clickedDate > checkInDate) {
        setCheckOut(dateStr);
      } else {
        setCheckIn(dateStr);
        setCheckOut('');
      }
    }
  };

  return (
    <div className="border border-soft-gray bg-[#FAF9F6] p-6 rounded-md space-y-4 shadow-sm w-full">
      <div className="flex items-center justify-between pb-2 border-b border-soft-gray/50">
        <button 
          type="button" 
          onClick={prevMonth}
          className="p-1 hover:text-accent-gold text-deep-ink font-bold transition-colors cursor-pointer"
        >
          &larr;
        </button>
        <span className="font-serif font-semibold text-deep-ink text-xs md:text-sm">
          {year}년 {month + 1}월
        </span>
        <button 
          type="button" 
          onClick={nextMonth}
          className="p-1 hover:text-accent-gold text-deep-ink font-bold transition-colors cursor-pointer"
        >
          &rarr;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((day, idx) => (
          <span 
            key={idx} 
            className={\`text-[10px] font-bold font-sans py-1 \${
              idx === 0 ? 'text-red-500/70' : idx === 6 ? 'text-blue-500/70' : 'text-deep-ink/40'
            }\`}
          >
            {day}
          </span>
        ))}

        {daysArray.map((day, idx) => {
          if (day === null) {
            return <div key={idx} className="aspect-square" />;
          }

          const formattedMonth = String(month + 1).padStart(2, '0');
          const formattedDay = String(day).padStart(2, '0');
          const dateStr = \`\${year}-\${formattedMonth}-\${formattedDay}\`;

          const isBooked = bookedDates.includes(dateStr);
          const isSelectedCheckIn = checkIn === dateStr;
          const isSelectedCheckOut = checkOut === dateStr;
          const isInRange = checkIn && checkOut && new Date(dateStr) > new Date(checkIn) && new Date(dateStr) < new Date(checkOut);

          let bgClass = "hover:bg-accent-gold/10 text-deep-ink";
          if (isBooked) {
            bgClass = "text-deep-ink/20 line-through cursor-not-allowed bg-deep-ink/5";
          } else if (isSelectedCheckIn || isSelectedCheckOut) {
            bgClass = "bg-[#C5A059] text-white font-bold rounded-sm shadow-sm";
          } else if (isInRange) {
            bgClass = "bg-[#C5A059]/15 text-deep-ink font-medium";
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isBooked}
              onClick={() => handleDateClick(day)}
              className={\`aspect-square flex items-center justify-center text-xs transition-all duration-300 rounded-sm font-sans relative \${bgClass} \${!isBooked ? 'cursor-pointer' : ''}\`}
            >
              <span>{day}</span>
              {!isBooked && !isSelectedCheckIn && !isSelectedCheckOut && !isInRange && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#C5A059]/40" />
              )}
            </button>
          );
        })}
      </div>

      <div className="pt-2 border-t border-soft-gray/50 flex flex-wrap justify-between gap-2 text-[9px] text-deep-ink/50 font-serif">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 border border-[#C5A059] rounded-sm bg-[#FAF9F6]" />
          <span>예약 가능</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-[#C5A059] rounded-sm" />
          <span>선택됨</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-[#C5A059]/15 rounded-sm" />
          <span>기간 선택</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-deep-ink/5 text-deep-ink/20 line-through rounded-sm flex items-center justify-center text-[7px]">✕</span>
          <span>예약완료</span>
        </div>
      </div>
    </div>
  );
};
`;

// Inject MonthCalendar definition above BookingForm
code = replaceOrFail(code, `const BookingForm = () => {`, `${monthCalendarCode}\nconst BookingForm = () => {`);

// Now modify BookingForm's return layout to have side-by-side columns
const oldBookingFormFields = `  return (
    <form onSubmit={handleSubmit} className="bg-white border border-soft-gray p-8 md:p-12 rounded-lg shadow-xl space-y-8 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2 col-span-1">
          <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">예약자 성함</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="성함을 입력해 주세요"
            className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-4 text-sm text-deep-ink font-light rounded transition-colors"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">연락처</label>
          <input 
            type="tel" 
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-4 text-sm text-deep-ink font-light rounded transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2 col-span-1">
          <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">체크인 (입실일)</label>
          <input 
            type="date" 
            required
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-4 text-sm text-deep-ink font-light rounded transition-colors"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">체크아웃 (퇴실일)</label>
          <input 
            type="date" 
            required
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-4 text-sm text-deep-ink font-light rounded transition-colors"
          />
        </div>
        <div className="space-y-2 col-span-1">
          <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">머무실 인원 (최대 8인)</label>
          <div className="flex items-center bg-[#FAF9F6] border border-soft-gray rounded overflow-hidden">
            <button 
              type="button" 
              onClick={() => setGuests(prev => Math.max(1, prev - 1))}
              className="p-4 hover:bg-soft-gray text-deep-ink text-sm font-bold transition-colors w-12"
            >
              -
            </button>
            <span className="flex-1 text-center text-sm font-semibold text-deep-ink">{guests}명</span>
            <button 
              type="button" 
              onClick={() => setGuests(prev => Math.min(8, prev + 1))}
              className="p-4 hover:bg-soft-gray text-deep-ink text-sm font-bold transition-colors w-12"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {calculateTotal() > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FAF9F6] border border-soft-gray/60 p-6 rounded-md flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] text-accent-gold tracking-widest font-bold block uppercase font-sans">Estimated Stay details</span>
            <h4 className="text-sm font-medium text-deep-ink">독채 독점 대여 ({calculateNights()}박) &middot; 인원 {guests}명</h4>
          </div>
          <div className="text-center md:text-right">
            <span className="text-xs text-deep-ink/50 block">총 이용금액 (세금 포함)</span>
            <span className="text-2xl font-serif font-bold text-accent-gold">{formatPrice(calculateTotal())}</span>
          </div>
        </motion.div>
      )}

      {errorMsg && (
        <p className="text-xs text-red-500 font-serif font-light">{errorMsg}</p>
      )}

      <button 
        type="submit"
        className="w-full py-5 bg-deep-ink text-white text-[12px] tracking-[0.4em] uppercase hover:bg-accent-gold transition-colors duration-500 font-medium rounded-sm shadow-md hover:shadow-lg"
      >
        실시간 예약 신청하기
      </button>
    </form>
  );`;

const newBookingFormFields = `  return (
    <form onSubmit={handleSubmit} className="bg-white border border-soft-gray p-6 md:p-10 rounded-lg shadow-xl font-serif">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Month Calendar */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">실시간 예약 현황 및 날짜 선택</label>
          <p className="text-[11px] text-deep-ink/40 font-light leading-relaxed mb-2">
            아래 달력에서 입실일과 퇴실일을 차례대로 클릭하시면 예약 일정이 자동으로 설정됩니다. (회색 표시일은 예약 완료)
          </p>
          <MonthCalendar 
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
          />
        </div>

        {/* Right Column: Customer Info & Guest Count Input */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">예약자 성함</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="성함을 입력해 주세요"
                className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-3.5 text-sm text-deep-ink font-light rounded transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">연락처</label>
              <input 
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-3.5 text-sm text-deep-ink font-light rounded transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">체크인 (입실일)</label>
              <input 
                type="date" 
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-3.5 text-sm text-deep-ink font-light rounded transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">체크아웃 (퇴실일)</label>
              <input 
                type="date" 
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-soft-gray focus:border-accent-gold focus:outline-none p-3.5 text-sm text-deep-ink font-light rounded transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-deep-ink/70 font-semibold uppercase tracking-wider block">머무실 인원 (최대 8인)</label>
              <div className="flex items-center bg-[#FAF9F6] border border-soft-gray rounded overflow-hidden h-[46px]">
                <button 
                  type="button" 
                  onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                  className="p-3.5 hover:bg-soft-gray text-deep-ink text-sm font-bold transition-colors w-12"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm font-semibold text-deep-ink">{guests}명</span>
                <button 
                  type="button" 
                  onClick={() => setGuests(prev => Math.min(8, prev + 1))}
                  className="p-3.5 hover:bg-soft-gray text-deep-ink text-sm font-bold transition-colors w-12"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {calculateTotal() > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FAF9F6] border border-soft-gray/60 p-5 rounded-md flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[9px] text-accent-gold tracking-widest font-bold block uppercase font-sans">Estimated Stay details</span>
                <h4 className="text-xs font-medium text-deep-ink">독채 독점 대여 ({calculateNights()}박) &middot; 인원 {guests}명</h4>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-[10px] text-deep-ink/50 block">총 이용금액 (세금 포함)</span>
                <span className="text-xl font-serif font-bold text-accent-gold">{formatPrice(calculateTotal())}</span>
              </div>
            </motion.div>
          )}

          {errorMsg && (
            <p className="text-xs text-red-500 font-serif font-light">{errorMsg}</p>
          )}

          <button 
            type="submit"
            className="w-full py-4.5 bg-[#111111] text-white text-[12px] tracking-[0.4em] uppercase hover:bg-accent-gold transition-colors duration-500 font-medium rounded-sm shadow-md hover:shadow-lg cursor-pointer"
          >
            실시간 예약 신청하기
          </button>
        </div>
      </div>
    </form>
  );`;

code = replaceOrFail(code, oldBookingFormFields, newBookingFormFields);

// Update BookingPage container to max-w-6xl
const oldBookingPageContainer = `<section className="py-24 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-lg border border-soft-gray/40 shadow-xl">`;

const newBookingPageContainer = `<section className="py-24 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-lg border border-soft-gray/40 shadow-xl">`;

code = replaceOrFail(code, oldBookingPageContainer, newBookingPageContainer);


// 8. Revert LocationPage structure and put KAKAO/NAVER Map buttons directly below address
console.log("Reverting LocationPage and placing map action buttons below address...");
const oldLocationPage = `const LocationPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader 
      title="LOCATION" 
      koTitle="바다의 반짝임에 이르는 길"
      subtitle="Directions" 
      image="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=80"
    />
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Address, Map Buttons, & Directions Details */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 space-y-10"
        >
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent-gold font-sans font-bold block">Location</span>
            <h2 className="text-3xl font-serif text-deep-ink tracking-wide font-light">오시는 길</h2>
            <div className="w-12 h-px bg-accent-gold mt-4" />
          </div>

          {/* Elegant Address Block */}
          <div className="bg-[#FAF9F6] p-8 rounded-md border border-soft-gray/50 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-accent-gold shrink-0 mt-1" />
              <div className="space-y-2">
                <p className="text-xl font-serif text-deep-ink leading-relaxed">
                  강원특별자치도 강릉시<br />옥계면 헌화로 456
                </p>
                <p className="text-[10.5px] text-deep-ink/40 font-light tracking-widest uppercase">
                  456, Heonhwa-ro, Okgye-myeon, Gangneung-si, Gangwon-do, Republic of Korea
                </p>
              </div>
            </div>

            {/* Map Action Buttons grouped here directly under address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-deep-ink/5">
              <a 
                href="https://map.naver.com/v5/search/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%98%A5%EA%B3%84%EB%A9%B4%20%ED%97%8C%ED%99%94%EB%A1%9C%20456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[#111111] text-[11px] tracking-[0.2em] font-sans border border-[#111111] hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white hover:shadow-md text-center transition-all duration-500 font-bold rounded-sm cursor-pointer"
              >
                <MapPin size={13} className="shrink-0" />
                NAVER MAP CHECK
              </a>
              <a 
                href="https://map.kakao.com/?q=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%98%A5%EA%B3%84%EB%A9%B4%20%ED%97%8C%ED%99%94%EB%A1%9C%20456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[#111111] text-[11px] tracking-[0.2em] font-sans border border-[#111111] hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white hover:shadow-md text-center transition-all duration-500 font-bold rounded-sm cursor-pointer"
              >
                <Compass size={13} className="shrink-0" />
                KAKAO MAP CHECK
              </a>
            </div>
          </div>

          {/* Transit Details */}
          <div className="space-y-8 pt-2">
            {/* By Car Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                <h5 className="text-[11px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold">자가용 이용 시</h5>
              </div>
              <div className="pl-4 border-l border-accent-gold/20 py-1">
                <p className="text-xs md:text-sm text-deep-ink font-serif font-light leading-relaxed">
                  영동고속도로 &rarr; 동해고속도로 &rarr; <strong>옥계 IC 진출</strong> (약 7분 소요) &rarr; 금진항 방면 &rarr; 헌화로 해안선 바다 바로 앞에 위치
                </p>
              </div>
            </div>

            {/* Public Transport Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                <h5 className="text-[11px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold">대중교통 이용 시</h5>
              </div>
              <div className="pl-4 border-l border-accent-gold/20 space-y-4 py-1">
                <div className="space-y-1">
                  <span className="text-[9px] text-accent-gold font-sans tracking-widest font-bold block uppercase">Taxi & Car Sharing</span>
                  <p className="text-xs text-deep-ink/65 font-serif leading-relaxed font-light">
                    강릉역 KTX 혹은 정동진역에서 택시나 카셰어링 이용 시 동해안을 품은 해안선 절경을 타고 약 25-30분이 소요됩니다.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-accent-gold font-sans tracking-widest font-bold block uppercase">City Bus (112번)</span>
                  <p className="text-xs text-deep-ink/65 font-serif leading-relaxed font-light">
                    강릉역 건너편 버스정류장에서 <strong>112번 시내버스</strong> 탑승 후 <strong>금진리</strong> 정류장 하차. 헌화로 푸른 솔바람과 파도를 느끼며 바다 방향으로 약 3분간 산책하듯 걸어오시면 만나실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Stunning visual Map frame */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="lg:col-span-7 space-y-4"
        >
          <div className="aspect-[4/3] bg-soft-gray overflow-hidden shadow-2xl relative rounded-md border border-soft-gray group">
            <img 
              src={BRAND_CONTENT.locationImage} 
              alt="Location of Yunseul" 
              className="w-full h-full object-cover opacity-85 group-hover:scale-[1.01] transition-transform duration-[2s]" 
              referrerPolicy="no-referrer"
            />
            
            {/* Pulsing Map Marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-gold/30 rounded-full animate-ping scale-150" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full animate-pulse scale-110" />
                <MapPin size={56} className="text-accent-gold relative z-10 filter drop-shadow-lg" />
              </div>
            </div>

            {/* Glowing Map Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3.5 border border-white/50 shadow-xl rounded-full flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-deep-ink font-bold font-sans">YUNSEUL VILLAGE</p>
            </div>
          </div>

          <p className="text-[11px] text-deep-ink/40 text-right font-serif font-light tracking-wide italic pr-2">
            * 헌화로 해안도로 바다 바로 앞에 위치하여, 객실 전면창 너머 가림막 없는 광활한 동해 수평선을 영접합니다.
          </p>
        </motion.div>
      </div>`;

const newLocationPage = `const LocationPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader 
      title="LOCATION" 
      koTitle="바다의 반짝임에 이르는 길"
      subtitle="Directions" 
      image="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=80"
    />
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Stunning visual Map frame (col-span-8) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="aspect-video bg-soft-gray overflow-hidden shadow-2xl relative rounded-md border border-soft-gray group">
            <img 
              src={BRAND_CONTENT.locationImage} 
              alt="Location of Yunseul" 
              className="w-full h-full object-cover opacity-85 group-hover:scale-[1.01] transition-transform duration-[2s]" 
              referrerPolicy="no-referrer"
            />
            
            {/* Pulsing Map Marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-gold/30 rounded-full animate-ping scale-150" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full animate-pulse scale-110" />
                <MapPin size={56} className="text-accent-gold relative z-10 filter drop-shadow-lg" />
              </div>
            </div>

            {/* Glowing Map Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3.5 border border-white/50 shadow-xl rounded-full flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-deep-ink font-bold font-sans">YUNSEUL VILLAGE</p>
            </div>
          </div>

          <p className="text-[11px] text-deep-ink/40 text-right font-serif font-light tracking-wide italic pr-2">
            * 헌화로 해안도로 바다 바로 앞에 위치하여, 객실 전면창 너머 가림막 없는 광활한 동해 수평선을 영접합니다.
          </p>
        </motion.div>

        {/* Right Column: Address, Map Buttons directly below, & Transit Details (col-span-4) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="lg:col-span-4 space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent-gold font-sans font-bold block">Location</span>
            <h2 className="text-3xl font-serif text-deep-ink tracking-wide font-light">오시는 길</h2>
            <div className="w-12 h-px bg-accent-gold mt-4" />
          </div>

          {/* Elegant Address Block */}
          <div className="bg-[#FAF9F6] p-8 rounded-md border border-soft-gray/50 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-accent-gold shrink-0 mt-1" />
              <div className="space-y-2">
                <p className="text-xl font-serif text-deep-ink leading-relaxed">
                  강원특별자치도 강릉시<br />옥계면 헌화로 456
                </p>
                <p className="text-[10.5px] text-deep-ink/40 font-light tracking-widest uppercase">
                  456, Heonhwa-ro, Okgye-myeon, Gangneung-si, Gangwon-do, Republic of Korea
                </p>
              </div>
            </div>

            {/* Map Action Buttons directly under address - hover before color black, then gold */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-deep-ink/5">
              <a 
                href="https://map.naver.com/v5/search/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%98%A5%EA%B3%84%EB%A9%B4%20%ED%97%8C%ED%99%94%EB%A1%9C%20456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#111111] text-white text-[10.5px] tracking-[0.15em] font-sans border border-[#111111] hover:bg-[#C5A059] hover:border-[#C5A059] text-center transition-all duration-500 font-bold rounded-sm shadow-sm cursor-pointer whitespace-nowrap"
              >
                <MapPin size={12} className="shrink-0" />
                NAVER MAP
              </a>
              <a 
                href="https://map.kakao.com/?q=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%98%A5%EA%B3%84%EB%A9%B4%20%ED%97%8C%ED%99%94%EB%A1%9C%20456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#111111] text-white text-[10.5px] tracking-[0.15em] font-sans border border-[#111111] hover:bg-[#C5A059] hover:border-[#C5A059] text-center transition-all duration-500 font-bold rounded-sm shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Compass size={12} className="shrink-0" />
                KAKAO MAP
              </a>
            </div>
          </div>

          {/* Transit Details */}
          <div className="space-y-8 pt-2">
            {/* By Car Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                <h5 className="text-[11px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold">자가용 이용 시</h5>
              </div>
              <div className="pl-4 border-l border-accent-gold/20 py-1">
                <p className="text-xs md:text-sm text-deep-ink font-serif font-light leading-relaxed">
                  영동고속도로 &rarr; 동해고속도로 &rarr; <strong>옥계 IC 진출</strong> (약 7분 소요) &rarr; 금진항 방면 &rarr; 헌화로 해안선 바다 바로 앞에 위치
                </p>
              </div>
            </div>

            {/* Public Transport Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                <h5 className="text-[11px] uppercase tracking-[0.4em] text-accent-gold font-sans font-bold">대중교통 이용 시</h5>
              </div>
              <div className="pl-4 border-l border-accent-gold/20 space-y-4 py-1">
                <div className="space-y-1">
                  <span className="text-[9px] text-accent-gold font-sans tracking-widest font-bold block uppercase">Taxi & Car Sharing</span>
                  <p className="text-xs text-deep-ink/65 font-serif leading-relaxed font-light">
                    강릉역 KTX 혹은 정동진역에서 택시나 카셰어링 이용 시 동해안을 품은 해안선 절경을 타고 약 25-30분이 소요됩니다.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-accent-gold font-sans tracking-widest font-bold block uppercase">City Bus (112번)</span>
                  <p className="text-xs text-deep-ink/65 font-serif leading-relaxed font-light">
                    강릉역 건너편 버스정류장에서 <strong>112번 시내버스</strong> 탑승 후 <strong>금진리</strong> 정류장 하차. 헌화로 푸른 솔바람과 파도를 느끼며 바다 방향으로 약 3분간 산책하듯 걸어오시면 만나실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>`;

code = replaceOrFail(code, oldLocationPage, newLocationPage);

fs.writeFileSync('src/App.tsx', code, 'utf8');
console.log("SUCCESSFULLY COMPLETED ALL MODIFICATIONS!");
