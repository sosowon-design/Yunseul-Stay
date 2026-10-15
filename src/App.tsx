/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  Music, 
  Send, 
  ChevronRight, 
  ChevronLeft, 
  Quote, 
  Star, 
  Coffee, 
  Compass, 
  Car, 
  Train, 
  Menu, 
  X, 
  Instagram, 
  ArrowRight, 
  ArrowUp, 
  Calendar, 
  Users, 
  Check, 
  Copy, 
  Navigation, 
  ShieldCheck, 
  ChevronDown,
  Heart,
  Volume2,
  VolumeX,
  Flame,
  Wind,
  Sunrise,
  Moon,
  Clock,
  Bed,
  Bath,
  Tv,
  Eye,
  Layers,
  Info,
  CheckCircle2,
  AlertCircle,
  Footprints,
  Play,
  Pause,
  RotateCcw,
  Radio,
  Wine,
  Phone,
  MessageCircle
} from 'lucide-react';
// @ts-ignore
import oceanBedroomLuxuryNowin from './assets/images/ocean_bedroom_luxury_nowin_1782654486090.jpg';
// @ts-ignore
import emotionalLpTurntable from './assets/images/emotional_lp_turntable_1783201680844.jpg';
// @ts-ignore
import specialTeaRitualImg from './assets/images/yunseul_pool_tea_modern_1788446162910.jpg';
// @ts-ignore
import specialLpExpImg from './assets/images/special_lp_experience_1787424541072.jpg';
// @ts-ignore
import specialGuestJournalImg from './assets/images/yunseul_pencil_study_atelier_1788721304306.jpg';
// @ts-ignore
import specialSoundMeditationImg from './assets/images/yunseul_pool_sound_modern_1788446199272.jpg';
// @ts-ignore
import scenicHeonhwaDriveImg from './assets/images/scenic_heonhwa_road_calm_1788466287677.jpg';
// @ts-ignore
import scenicBadabuchaeTrailImg from './assets/images/scenic_badabuchae_deck_1788376000854.jpg';
// @ts-ignore
import scenicGeumjinBeachImg from './assets/images/scenic_geumjin_sunset_1788376014495.jpg';
// @ts-ignore
import scenicJeongdongjinSunriseImg from './assets/images/scenic_jeongdongjin_dawn_soft_1788466274395.jpg';

// --- Types ---
type Page = 'home' | 'story' | 'rooms' | 'special' | 'experience' | 'location' | 'booking';
type Language = 'ko' | 'en';

// --- Constants ---
const BRAND_CONTENT = {
  name: "YUNSEUL",
  location: "강릉 헌화로 바다 바로 앞",
  locationEn: "Directly facing the sea on Heonhwa-ro, Gangneung",
  concept: "Minimalism & Sound of Waves",
  conceptEn: "Minimalism & Sound of Waves",
  slogans: [
    "Where the waves stay, your breath becomes quiet.",
    "Minimalist rest by the sea, filled by emptying.",
    "A place to carry memories that sparkle like Yunseul."
  ],
  about: `창을 열면 들려오는 파도 소리가 어지러운 마음을 정돈해 줍니다. 우리는 불필요한 것들을 덜어내고, 자연의 소리와 고요한 풍경으로 채워 넣은 완전한 고요 속 머무름을 지향합니다.`,
  aboutEn: `The sound of waves when opening the window calms a restless mind. We aim for a stay of complete serenity, removing the unnecessary and filling the space with the sounds of nature and peaceful scenery.`,
  rooms: [
    {
      id: "room-1",
      name: "1F GARDEN LOUNGE",
      nameKo: "1F 가든 라운지",
      desc: "정원으로 이어지는 1층 다이닝 & 라운지 공간. 미니멀한 가구와 따사로운 햇살이 온전히 당신의 시간이 됩니다.",
      descEn: "1st floor dining & lounge space connecting to the private garden. Minimalist furniture and warm sunlight become entirely your time.",
      longDesc: "정원과 바다 풍경이 시원하게 펼쳐지는 1층 독채 라운지입니다. 최고급 아일랜드 키친과 6인용 오크 다이닝 테이블에서 소중한 사람들과 함께 맛있는 식사와 향긋한 티타임을 즐기실 수 있습니다.",
      longDescEn: "A 1st floor exclusive private lounge with sweeping views of the garden and sea. Enjoy delightful dining and aromatic tea time with loved ones at the premium island kitchen and 6-person oak dining table.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
      features: ["오픈형 다이닝 라운지", "프라이빗 정원 연결", "와이드 통창 파노라마 뷰", "아일랜드 주방 & 다도 공간"],
      featuresEn: ["Open Dining Lounge", "Direct Garden Access", "Panoramic Glass View", "Island Kitchen & Tea Table"],
      size: "프라이빗 돌담 정원과 탁 트인 통창 다이닝 & 아일랜드 키친",
      sizeEn: "Private stone wall garden, panoramic glass dining & island kitchen",
      capacity: "기준 2인 / 최대 8인 (1인 추가 30,000원)",
      capacityEn: "Standard 2 guests / Max 8 guests (30,000 KRW per extra guest)",
      amenities: ["6인용 오크 원목 테이블", "프리미엄 빌트인 오픈 키친", "마샬 워번 블루투스 스피커", "발뮤다 토스터 및 드립포트", "야외 프라이빗 돌담 정원"],
      amenitiesEn: ["6-Person Oak Dining Table", "Premium Built-in Open Kitchen", "Marshall Woburn Bluetooth Speaker", "Balmuda Toaster & Drip Kettle", "Outdoor Stone Wall Garden"]
    },
    {
      id: "room-3",
      name: "1F SUNRISE HEATED POOL",
      nameKo: "1F 선라이즈 온수풀",
      desc: "하늘과 물빛의 구분이 평온하게 사라지는 사계절 개별 온수 수영장에서 온전한 이완을 경험하세요.",
      descEn: "Experience deep relaxation in the all-season private heated pool where the boundary between sky and water serenely dissolves.",
      longDesc: "사계절 내내 따뜻한 33℃ 온수에서 동해 수평선을 바라보며 물놀이와 온전한 이완을 즐길 수 있는 단독 프라이빗 인피니티 풀입니다. 선베드에 누워 시원한 바닷바람을 맞으며 일상의 무거움을 내려놓고 깊은 쉼을 느껴보세요.",
      longDescEn: "A private infinity heated pool maintaining 33℃ warm water year-round with horizon sea views. Recline on the sunbed, feel the refreshing ocean breeze, and embrace deep restorative calm.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      features: ["사계절 프라이빗 온수 수영장", "수평선 오션 뷰", "풀사이드 릴렉스 선덱", "아웃도어 티 라운지"],
      featuresEn: ["Year-round Heated Pool", "Horizon Ocean View", "Poolside Relax Sundeck", "Outdoor Tea Lounge"],
      size: "하늘과 동해 바다가 맞닿은 사계절 전용 인피니티 온수풀 & 선덱 라운지",
      sizeEn: "Infinity heated pool & sundeck lounge touching the East Sea",
      capacity: "기준 2인 / 최대 8인 (1인 추가 30,000원)",
      capacityEn: "Standard 2 guests / Max 8 guests (30,000 KRW per extra guest)",
      amenities: ["사계절 자동 항온 33℃ 시스템", "풀사이드 테라스 선베드 2구", "대형 호텔 아웃도어 비치타월", "방수 블루투스 사운드 시스템", "실내외 연결 샤워 공간"],
      amenitiesEn: ["Automatic 33℃ Constant Water System", "2 Poolside Sunbeds", "Large Luxury Beach Towels", "Waterproof Bluetooth Sound", "Indoor-Outdoor Connected Shower"]
    },
    {
      id: "room-2",
      name: "2F OCEAN BEDROOM",
      nameKo: "2F 오션 베드룸",
      desc: "황금빛 일출과 잔잔한 파도가 머무는 곳. 아늑한 린넨 침구 속에서 오직 파도 소리에만 집중하는 쉼입니다.",
      descEn: "Awaken to golden sunrises and soothing waves, wrapped in cozy linen with only the sound of the ocean.",
      longDesc: "침대에 누워 창밖으로 펼쳐지는 동해의 푸른 물결과 붉은 일출을 한눈에 담습니다. 최고급 프리미엄 매트리스와 오가닉 린넨 침구가 깊은 숙면을 돕고, 프라이빗 테라스로 스며드는 바닷바람이 편안한 휴식을 선사합니다.",
      longDescEn: "From bed, take in the vast blue waves and vibrant sunrise over the East Sea. Premium Simmons mattress and organic linen bedding ensure deep restorative sleep, complemented by gentle sea breezes from the private terrace.",
      image: oceanBedroomLuxuryNowin,
      features: ["시몬스 프리미엄 오션뷰 침실", "프라이빗 오션 테라스", "하이파이 오디오 시스템", "은은한 감성 무드 조명"],
      featuresEn: ["Simmons Premium Ocean Bed", "Private Ocean Terrace", "Hi-Fi Audio System", "Subtle Mood Lighting"],
      size: "수평선과 일출을 침대에서 마주하는 파노라마 오션뷰 & 프라이빗 테라스",
      sizeEn: "Panoramic ocean view facing sunrise from bed & private terrace",
      capacity: "기준 2인 / 최대 8인 (1인 추가 30,000원)",
      capacityEn: "Standard 2 guests / Max 8 guests (30,000 KRW per extra guest)",
      amenities: ["시몬스 최고급 킹사이즈 침대", "뱅앤올룹슨 Beosound 스피커", "테라스 프라이빗 데이베드", "친환경 오가닉 코튼 샤워 가운", "프라이빗 오션 뷰 스파"],
      amenitiesEn: ["Simmons King-size Mattress", "Bang & Olufsen Beosound Speaker", "Terrace Daybed", "Organic Cotton Bathrobes", "Private Ocean View Spa"]
    },
    {
      id: "room-4",
      name: "3F STARLIGHT MINDFUL ATELIER",
      nameKo: "3F 별빛 사색 아틀리에",
      desc: "동해 바다가 내려다보이는 원목 데스크와 턴테이블의 LP 선율, 조용히 마음을 적어 내려가는 사색의 서재입니다.",
      descEn: "A serene oceanview study where solid oak writing desk and analog vinyl melodies embrace quiet contemplation.",
      longDesc: "창밖으로 펼쳐진 동해의 고요한 바다와 아날로그 바이닐의 따뜻한 선율이 머무는 3층 사색 공간입니다. 책 한 권을 천천히 읽거나 연필로 생각을 기록하며, 일상의 분주함을 비워내고 나만의 온전한 속도를 마주해 보세요.",
      longDescEn: "A 3rd-floor contemplative sanctuary where peaceful ocean waves meet warm vinyl melodies. Read quietly or jot down reflections with graphite pencil, leaving behind daily busyness for true serenity.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      features: ["파노라마 오션뷰 사색 데스크", "턴테이블 & 오리지널 LP 컬렉션", "원목 필경 책상 & 수제 방명록", "싱잉볼 사운드 힐링 코너"],
      featuresEn: ["Panoramic Oceanview Study Desk", "Turntable & Original Vinyl LPs", "Oak Writing Desk & Guest Journal", "Singing Bowl Sound Corner"],
      size: "바다를 마주하는 사색 데스크와 아날로그 선율이 머무는 3층 서재",
      sizeEn: "3rd-floor study embracing oceanfront writing desk and vinyl melodies",
      capacity: "기준 2인 / 최대 8인 (1인 추가 30,000원)",
      capacityEn: "Standard 2 guests / Max 8 guests (30,000 KRW per extra guest)",
      amenities: ["고음질 오디오테크니카 턴테이블", "클래식/재즈 명반 LP 20선", "300gsm 코튼 원고지 & 연필 세트", "오션뷰 리딩 라운지 체어 & 블랭킷", "다이슨 에어랩 멀티 스타일러"],
      amenitiesEn: ["Audio-Technica Turntable", "Curated Classical & Jazz Vinyls", "300gsm Cotton Journaling Set", "Oceanview Reading Lounge Chair & Throw", "Dyson Airwrap Multi-styler"]
    }
  ],
  specials: [
    {
      title: "Morning Infinity Pool",
      titleKo: "모닝 인피니티 온수풀",
      titleEn: "Morning Infinity Heated Pool",
      desc: "수평선과 하늘이 맞닿는 따사로운 다목적 온수 수영장에서 동해 바다의 푸른 은빛 윤슬을 가장 온전하게 온 몸으로 품어내는 일탈을 느껴보세요.",
      descEn: "Immerse in the heated pool where sky meets ocean, embracing the glittering blue waves of the East Sea.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Private Dining",
      titleKo: "프라이빗 다이닝",
      titleEn: "Private Dining",
      desc: "부드러운 오크 원목 가구와 전면 통창 너머 청량한 파도가 흐르는 사적 다이닝 룸에서 셰프의 정갈한 계절 다이닝을 프라이빗하게 마음껏 즐기세요.",
      descEn: "Enjoy curated seasonal private dining in a serene space featuring oak furniture and panoramic sea views.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Silent Tea Therapy",
      titleKo: "고요한 다도 테라피",
      titleEn: "Silent Tea Therapy",
      desc: "정선된 오크 찻상과 자연 본질의 따스함이 깃든 다구로 따뜻한 온기가 주는 깊은 내면의 평화와 온전한 쉼을 경험하실 수 있습니다.",
      descEn: "Experience deep inner peace and tranquil rest through warm handcrafted tea and oak teaware.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Sunset Firepit Ritual",
      titleKo: "선셋 화로 불멍 리추얼",
      titleEn: "Sunset Firepit Ritual",
      desc: "동해의 붉은 낙조를 바라보며 모닥불 앞 아웃도어 소파에서 따뜻한 온기와 은빛 파도 백소리에 스며드는 낭만의 밤을 영접해 보세요.",
      descEn: "Watch the crimson sunset by the outdoor firepit, serenaded by the rhythmic whisper of evening waves.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  commonSpaces: [
    {
      title: "Lounge & Library",
      subtitle: "조용한 몰입과 아날로그 서재의 온기",
      desc: "따뜻한 내추럴 오크 향이 그윽하게 맴도는 서재와 미니멀한 휴식이 깃든 라운지. 엄선된 100여 권의 디자인 도서, 시가 가득한 고전 문학집과 함께 조용한 몰입의 사색을 누비며 가슴 속 조용한 평화를 소생시킵니다.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      specs: ["24시간 인문학 서재 개방", "프리미엄 싱글오리진 핸드드립바", "자율 LP 사운드트랙 플레이어"]
    },
    {
      title: "Garden & Walkway",
      subtitle: "조경 디자이너가 설계한 사색적 돌길",
      desc: "정교하게 다듬어 낸 돌길과 동해 바닷바람을 맞이하는 푸른 잔디 야외 정원. 아침 이슬을 가득 머금은 야생화와 돌담 틈 사이로 흘러나오는 자연 본질의 호흡을 한 걸음마다 새기며 온전한 걷기의 명상을 경험하세요.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
      specs: ["전용 디자이너 조경 산책로", "은은한 대나무 가로수 야간 조명", "휴식용 아웃도어 빈백 & 데크"]
    },
    {
      title: "Sunset Deck",
      subtitle: "붉게 번지는 동해 수평선의 낭만",
      desc: "헌화로 절벽 위에 위치하여 가슴을 호쾌하게 열어주는 야외 데크 공간. 수평선 밑으로 장강하게 타오르며 침잠하는 동해의 따스한 낙조를 오롯이 영접하며 지친 자아의 매일을 따뜻하고 성스럽게 어루만져 봅니다.",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e3a9?auto=format&fit=crop&w=1200&q=80",
      specs: ["프라이빗 오션뷰 베드소파", "따뜻한 이브닝 불멍(Firepit) 존", "낙조 전용 사운드트랙 세트"]
    },
    {
      title: "Mindfulness Tea Room",
      subtitle: "침묵 속에서 퍼지는 다도와 자연의 호흡",
      desc: "정선된 오크 다도 찻상과 일엽편주 전통 다구가 정갈하게 마련된 명상의 다도방. 창밖으로 스며드는 은은한 달빛과 바람이 흔드는 풍경 소리에 귀 기울이며 따뜻하고 오롯한 내면의 안식을 경험하는 공간입니다.",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80",
      specs: ["전통 수제 다구 및 다기 세트 완비", "시즌 프리미엄 싱글오리진 찻잎 제공", "개인용 명상 싱잉볼 & 음향 세팅"]
    }
  ],
  locationImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80",
  mockReviews: [
    "정말 조용해서 파도 소리만 들려요. 힐링 그 자체였습니다.",
    "침구가 너무 깨끗하고 포근해서 꿀잠 잤어요. 조식도 정갈하고 맛있습니다.",
    "인테리어가 너무 예뻐요. 군더더기 없는 미니멀한 감성이 딱 제 스타일입니다.",
    "헌화로 바닷길 바로 앞이라 아침 산책하기 너무 좋았어요. 사장님도 친절하세요.",
    "바다 뷰가 환상적입니다. 창가에 앉아만 있어도 시간이 금방 가네요."
  ]
};

// --- Components ---

const FloatingConsultationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled beyond hero section (approx. 500px)
      if (window.pageYOffset > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="스테이 윤슬 실시간 상담 문의"
        title="실시간 상담 문의"
        className="fixed bottom-20 sm:bottom-21 md:bottom-22 right-5 sm:right-6 md:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-[#84654D] hover:bg-[#6E533D] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group border border-white/40 hover:scale-105 cursor-pointer"
      >
        <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
      </motion.button>

      {/* Sleek Minimal Consultation Popover with KakaoTalk */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-34 sm:bottom-36 right-5 sm:right-6 md:right-8 z-50 w-72 sm:w-80 bg-white rounded-2xl border border-[#E3DED4] p-5 shadow-2xl space-y-3"
          >
            <div className="flex items-center justify-between border-b border-[#E3DED4] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#84654D] animate-pulse" />
                <h4 className="text-[14px] font-serif font-bold text-deep-ink">윤슬 실시간 상담 문의</h4>
              </div>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)}
                className="text-deep-ink/50 hover:text-deep-ink cursor-pointer p-1"
                aria-label="닫기"
              >
                <X size={15} />
              </button>
            </div>
            
            <p className="text-[12px] text-deep-ink/75 font-serif leading-relaxed font-light">
              객실 예약 상담, 맞춤 일정 및 편안한 머무름에 관한 문의는 카카오톡 또는 유선 전화로 편하게 남겨주세요.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="https://open.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-[#84654D] hover:bg-[#6E533D] text-white text-[12px] font-serif font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer border border-[#84654D]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.767 1.838 5.19 4.606 6.57-.203.748-.737 2.716-.843 3.125-.133.513.187.506.393.369.162-.108 2.57-1.745 3.606-2.45.728.106 1.48.161 2.238.161 5.523 0 10-3.477 10-7.775S17.523 3 12 3z"/>
                </svg>
                <span>카카오톡 1:1 상담 채널</span>
              </a>
              <a
                href="tel:1544-0634"
                className="w-full py-2.5 px-3 bg-[#F7F5F0] hover:bg-[#EFECE6] text-deep-ink border border-[#E3DED4] text-[12px] font-serif font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer"
              >
                <Phone size={13} className="text-[#84654D]" />
                <span>유선 전화 상담 (1544-0634)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Hide on hero section (first ~480px)
      if (window.pageYOffset > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="fixed bottom-6 sm:bottom-7 md:bottom-8 right-5 sm:right-6 md:right-8 z-50 w-11 h-11 glass rounded-full flex items-center justify-center text-deep-ink border border-white/50 hover:bg-[#84654D] hover:border-[#84654D] hover:text-white transition-all duration-300 group shadow-xl cursor-pointer"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ 
  currentPage, 
  onNavigate,
  language,
  setLanguage
}: { 
  currentPage: Page, 
  onNavigate: (p: Page, roomId?: string | null, expTab?: 'tea' | 'guestbook' | 'sound', targetId?: string, forceRefresh?: boolean) => void,
  language: Language,
  setLanguage: (l: Language) => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { labelKo: string, labelEn: string, value: Page }[] = [
    { labelKo: '윤슬 스토리', labelEn: 'STORY', value: 'home' },
    { labelKo: '객실 안내', labelEn: 'SPACES', value: 'rooms' },
    { labelKo: '특별한 경험', labelEn: 'EXPERIENCE', value: 'experience' },
    { labelKo: '오시는 길', labelEn: 'LOCATION', value: 'location' },
  ];

  const isHome = currentPage === 'home';
  const navTextColor = (!isScrolled && isHome) ? 'text-white' : 'text-deep-ink';

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    onNavigate('home', null, 'tea', undefined, true);
  };

  const handleNavItemClick = (item: { labelKo: string, labelEn: string, value: Page }) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    onNavigate(item.value, null, 'tea', undefined, true);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled || !isHome ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#E3DED4] py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={handleLogoClick}
            className={`text-2xl md:text-3xl font-cormorant tracking-[0.15em] font-light hover:opacity-75 transition-all cursor-pointer ${navTextColor}`}
          >
            YUNSEUL
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-7 text-[12px] tracking-wider font-sans font-medium">
              {navItems.map(item => {
                const isActive = currentPage === item.value;
                return (
                  <button 
                    key={item.value + item.labelEn}
                    onClick={() => handleNavItemClick(item)}
                    className={`transition-all duration-300 relative cursor-pointer no-underline select-none ${
                      !isScrolled && isHome
                        ? (isActive 
                            ? 'text-white font-bold drop-shadow-md' 
                            : 'text-white/80 hover:text-[#FFF5EB] hover:drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]')
                        : (isActive 
                            ? 'text-[#84654D] font-bold' 
                            : 'text-deep-ink/75 hover:text-[#B38D6E]')
                    }`}
                  >
                    {language === 'en' ? item.labelEn : item.labelKo}
                  </button>
                );
              })}
            </div>
            
            {/* Reservation Button & Language Switcher */}
            <div className="flex items-center space-x-4 border-l border-current/20 pl-7">
              {/* 1. Real-time Reservation Button */}
              <button 
                id="btn-nav-booking"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  onNavigate('booking', null, 'tea', undefined, true);
                }}
                className={`text-[12px] tracking-wider uppercase px-5 py-2 transition-all font-medium cursor-pointer shadow-sm rounded-lg border font-sans ${
                  !isScrolled && isHome 
                    ? 'text-white border-white/80 hover:bg-white hover:text-stone-900' 
                    : 'text-white bg-[#84654D] border-[#84654D] hover:bg-[#6E533D] hover:border-[#6E533D]'
                }`}
              >
                {language === 'en' ? 'Book Now' : '실시간 예약'}
              </button>

              {/* 2. KR / EN Toggle - Translucent glass styling */}
              <div className={`flex items-center rounded-full p-1 border text-[11px] font-sans backdrop-blur-md transition-all ${
                !isScrolled && isHome 
                  ? 'bg-white/15 border-white/25 text-white/90 shadow-xs' 
                  : 'bg-stone-900/10 border-stone-800/15 text-[#3A2E26] shadow-xs'
              }`}>
                <button
                  type="button"
                  onClick={() => setLanguage('ko')}
                  className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                    language === 'ko' 
                      ? (!isScrolled && isHome ? 'bg-white/35 backdrop-blur-md text-white shadow-xs font-semibold' : 'bg-[#84654D]/80 backdrop-blur-md text-white shadow-xs font-semibold')
                      : (!isScrolled && isHome ? 'text-white/70 hover:text-white hover:bg-white/15' : 'text-[#6B5A4E]/80 hover:text-stone-900 hover:bg-stone-900/10')
                  }`}
                >
                  KR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                    language === 'en' 
                      ? (!isScrolled && isHome ? 'bg-white/35 backdrop-blur-md text-white shadow-xs font-semibold' : 'bg-[#84654D]/80 backdrop-blur-md text-white shadow-xs font-semibold')
                      : (!isScrolled && isHome ? 'text-white/70 hover:text-white hover:bg-white/15' : 'text-[#6B5A4E]/80 hover:text-stone-900 hover:bg-stone-900/10')
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Toggle - Translucent glass styling */}
            <div className={`flex items-center rounded-full p-0.5 border text-[10px] font-sans backdrop-blur-md ${
              !isScrolled && isHome 
                ? 'bg-white/15 border-white/25 text-white/90 shadow-2xs' 
                : 'bg-stone-900/10 border-stone-800/15 text-[#3A2E26] shadow-2xs'
            }`}>
              <button
                type="button"
                onClick={() => setLanguage('ko')}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  language === 'ko' 
                    ? (!isScrolled && isHome ? 'bg-white/35 backdrop-blur-sm text-white font-bold shadow-2xs' : 'bg-[#84654D]/80 backdrop-blur-sm text-white font-bold shadow-2xs') 
                    : (!isScrolled && isHome ? 'text-white/70 hover:bg-white/10' : 'text-[#6B5A4E]/80 hover:bg-stone-900/10')
                }`}
              >
                KR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  language === 'en' 
                    ? (!isScrolled && isHome ? 'bg-white/35 backdrop-blur-sm text-white font-bold shadow-2xs' : 'bg-[#84654D]/80 backdrop-blur-sm text-white font-bold shadow-2xs') 
                    : (!isScrolled && isHome ? 'text-white/70 hover:bg-white/10' : 'text-[#6B5A4E]/80 hover:bg-stone-900/10')
                }`}
              >
                EN
              </button>
            </div>

            <button 
              className={`cursor-pointer ${navTextColor}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#F7F5F0] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogoClick();
                }} 
                className="text-2xl font-cormorant tracking-widest text-deep-ink text-left cursor-pointer"
              >
                {BRAND_CONTENT.name}
              </button>
              <button onClick={() => setIsMenuOpen(false)} className="text-deep-ink cursor-pointer">
                <X size={24} />
              </button>
            </div>
            
            {/* Mobile Lang Selector */}
            <div className="flex items-center gap-2 mb-6 bg-white p-1.5 rounded-xl border border-[#E3DED4]">
              <button
                type="button"
                onClick={() => setLanguage('ko')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  language === 'ko' ? 'bg-[#3A322C] text-white' : 'text-deep-ink/60'
                }`}
              >
                한국어 (KR)
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  language === 'en' ? 'bg-[#3A322C] text-white' : 'text-deep-ink/60'
                }`}
              >
                English (EN)
              </button>
            </div>

            <div className="flex flex-col space-y-5">
              {navItems.map(item => (
                <button 
                  key={item.value + item.labelEn}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavItemClick(item);
                  }}
                  className="text-base font-sans font-medium tracking-wider text-deep-ink text-left border-b border-[#E3DED4] pb-4 cursor-pointer hover:text-stone-700"
                >
                  {language === 'en' ? item.labelEn : item.labelKo}
                </button>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  onNavigate('booking', null, 'tea', undefined, true);
                }}
                className="text-base font-sans font-medium tracking-wider text-[#523E2D] text-left border-b border-[#E3DED4] pb-4 flex items-center justify-between cursor-pointer"
              >
                <span>{language === 'en' ? 'Online Reservation' : '실시간 예약'}</span>
                <span className="text-[11px] font-sans tracking-wider bg-[#523E2D]/10 text-[#523E2D] px-3 py-1 rounded-full font-semibold">
                  {language === 'en' ? 'Book' : '바로가기'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface PageHeaderProps {
  title: string;
  koTitle?: string;
  subtitle: string;
  image: string;
}

const PageHeader = ({ title, koTitle, subtitle, image }: PageHeaderProps) => {
  return (
    <header className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-deep-ink">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover natural-motion-img"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/35 z-[1]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="relative z-10 text-center space-y-5 px-6"
      >
        <span className="text-[15px] tracking-[0.25em] text-[#C8BBA8] uppercase font-cormorant font-semibold block">{subtitle}</span>
        <h1 className="text-2xl md:text-[38px] font-cormorant text-white uppercase tracking-[0.2em] font-light leading-tight">
          {title}
        </h1>
        {koTitle && (
          <p className="text-[13px] md:text-sm text-white/80 font-serif tracking-wider font-light mt-2">
            {koTitle}
          </p>
        )}
        <div className="w-12 h-px bg-[#84654D] mx-auto mt-6" />
      </motion.div>
    </header>
  );
};

interface LegalPolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  language?: Language;
}

const LegalPolicyModal: React.FC<LegalPolicyModalProps> = ({ isOpen, type, onClose, language = 'ko' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';
  const titleKo = isPrivacy ? '개인정보처리방침' : '윤슬 스테이 이용약관';
  const titleEn = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-xs font-serif animate-fade-in">
      <div 
        className="fixed inset-0"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#FDFCF9] rounded-2xl shadow-2xl border border-[#E3DED4] overflow-hidden flex flex-col z-10"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E3DED4] flex items-center justify-between bg-white">
          <div>
            <span className="text-[11px] tracking-widest text-[#84654D] uppercase font-cormorant font-semibold block">
              {isPrivacy ? 'Privacy & Data Protection' : 'House Rules & Terms'}
            </span>
            <h3 className="text-xl font-serif text-deep-ink font-medium">
              {language === 'en' ? titleEn : titleKo}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F7F5F0] hover:bg-[#EAE4D8] text-deep-ink flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 overflow-y-auto space-y-6 text-[13px] text-deep-ink/80 leading-relaxed font-light">
          {isPrivacy ? (
            language === 'en' ? (
              <div className="space-y-4">
                <p className="font-normal text-deep-ink">
                  YUNSEUL STAY values your personal information and complies with relevant personal data protection laws.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">1. Items of Personal Data Collected</h4>
                  <p>Name, contact phone number, email address, reservation date, guest count, and payment transaction details.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">2. Purpose of Collection and Use</h4>
                  <p>Guest identity verification, reservation confirmation, digital check-in guide dispatch, and customer consultation.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">3. Retention and Use Period</h4>
                  <p>Personal information is immediately destroyed after the statutory retention period mandated by the Act on Consumer Protection in Electronic Commerce (up to 5 years for contract/payment records).</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">4. Rights of Users</h4>
                  <p>Guests may request to inspect, rectify, or delete their personal data at any time via phone (1544-0634) or email.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-normal text-deep-ink">
                  윤슬 스테이(이하 '스테이')는 고객님의 개인정보를 소중히 여기며, 개인정보보호법 및 관련 법령을 철저히 준수합니다.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제1조 (수집하는 개인정보 항목)</h4>
                  <p>스테이는 원활한 예약 접수 및 숙소 안내를 위해 다음의 개인정보를 수집합니다.<br />- 필수항목: 예약자 성명, 휴대전화번호, 이메일, 투숙 일자, 인원 수, 결제 정보</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제2조 (개인정보의 수집 및 이용 목적)</h4>
                  <p>수집된 개인정보는 예약 확정 및 비대면 체크인 안내, 긴급 상황 시 연락, 고객 불만 처리 등의 목적으로만 활용됩니다.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제3조 (보유 및 이용 기간)</h4>
                  <p>이용자의 개인정보는 이용 목적이 달성되면 지체 없이 파기합니다. 단, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령에 따라 대금결제 및 재화 등의 공급에 관한 기록은 5년간 보관합니다.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제4조 (정보주체의 권리 및 연락처)</h4>
                  <p>고객은 언제든지 등록된 개인정보의 열람, 수정, 삭제를 요청할 수 있습니다.<br />- 문의: 1544-0634 (연중무휴 09:00 - 20:00) / 이메일: hdweb@hdweb.co.kr</p>
                </div>
              </div>
            )
          ) : (
            language === 'en' ? (
              <div className="space-y-4">
                <p className="font-normal text-deep-ink">
                  Welcome to YUNSEUL STAY. Please review the following terms and guidelines for a peaceful stay.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">1. Check-in & Check-out</h4>
                  <p>Check-in: 15:00 KST / Check-out: 11:00 KST. Late check-out is subject to additional hourly fees and prior arrangement.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">2. House Rules & Noise Curfew</h4>
                  <p>Yunseul is an entire private villa designed for calm contemplation. Smoking is strictly prohibited across all indoor/outdoor premises. Respect quiet hours after 22:00.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">3. Heated Infinity Pool & Facilities</h4>
                  <p>No glassware or food permitted in the infinity pool. Children must be accompanied by a guardian at all times. Guests are responsible for facility damages.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">4. Cancellation & Refund Policy</h4>
                  <p>Full refund for cancellations made 10 days prior to check-in. Partial refund applies thereafter according to standard stay policies.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-normal text-deep-ink">
                  윤슬 스테이를 찾아주신 고객님께 감사드립니다. 품격 있고 온전한 휴식을 위해 다음 이용약관 및 숙소 규정을 확인해 주시기 바랍니다.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제1조 (입·퇴실 안내)</h4>
                  <p>- 체크인: 오후 3시 (15:00)부터 비대면 스마트 도어락 안내<br />- 체크아웃: 오전 11시 (11:00)까지<br />- 다음 고객을 위한 정밀 객실 정비 및 방역 소독을 위해 퇴실 시간을 엄수해 주시기 바랍니다.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제2조 (정숙 및 공간 이용 에티켓)</h4>
                  <p>- 윤슬 스테이는 조용한 쉼과 사색을 지향하는 독채 공간입니다.<br />- 밤 10시(22:00) 이후에는 야외 테라스 및 고성방가를 자제해 주시기 바랍니다.<br />- 실내 및 테라스를 포함한 전 구역은 엄격한 금연 구역입니다. (위반 시 특수 청소비 부과)</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제3조 (온수풀 및 시설 안전 수칙)</h4>
                  <p>- 사계절 온수풀 이용 시 유리 용기 반입 및 음식물 섭취가 엄격히 금지됩니다.<br />- 미성년자는 반드시 보호자 동반 하에 온수풀을 이용해야 합니다.<br />- 시설물이나 비품의 파손 및 오염 시 실비 변상 책임이 발생할 수 있습니다.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-ink text-sm">제4조 (예약 취소 및 환불 기준)</h4>
                  <p>- 이용일 10일 전 취소 시: 100% 전액 환불<br />- 이용일 7~9일 전 취소 시: 70% 환불<br />- 이용일 4~6일 전 취소 시: 50% 환불<br />- 이용일 1~3일 전 및 당일 취소 시: 환불 불가</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E3DED4] bg-white flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#84654D] hover:bg-[#6E533D] text-white text-xs font-serif font-medium transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Confirm & Close' : '확인 및 닫기'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

interface FooterProps {
  onNavigate: (p: Page, roomId?: string | null, expTab?: 'tea' | 'guestbook' | 'sound') => void;
  language?: Language;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language = 'ko',
  onOpenPrivacy,
  onOpenTerms
}) => (
  <footer className="bg-[#33241B] text-white/90 py-16 md:py-20 px-8 md:px-20 border-t border-white/10 font-serif">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
      <div className="space-y-4">
        <div className="text-[30px] md:text-[34px] font-cormorant tracking-[0.2em] text-white font-light">YUNSEUL</div>
        <div className="flex flex-wrap gap-2 text-white/85 text-[12px]">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3.5 py-1.5 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 hover:text-white cursor-pointer transition-all font-serif"
          >
            Instagram
          </a>
          <a 
            href="https://open.kakao.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3.5 py-1.5 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 hover:text-white cursor-pointer transition-all font-serif inline-flex items-center gap-1.5"
          >
            <span>KakaoTalk</span>
          </a>
          <a 
            href="https://blog.naver.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3.5 py-1.5 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 hover:text-white cursor-pointer transition-all font-serif"
          >
            Blog
          </a>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="text-[15px] uppercase tracking-widest text-white font-bold font-cormorant">Contact</div>
        <div className="text-[13px] leading-relaxed space-y-2 font-serif font-light text-white/85">
          <p>T. 1544-0634</p>
          <p>E. hdweb@hdweb.co.kr</p>
          <p>A. {language === 'en' ? '456, Heonhwa-ro, Okgye-myeon, Gangneung-si, Gangwon-do' : '강원특별자치도 강릉시 옥계면 헌화로 456'}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[15px] uppercase tracking-widest text-white font-bold font-cormorant">Business Info</div>
        <div className="text-[13px] leading-relaxed space-y-2 font-serif font-light text-white/85">
          <p>{language === 'en' ? 'Name : YUNSEUL | CEO : Jeongmin Oh' : '상호 : 윤슬 | 대표 : 오정민'}</p>
          <p>{language === 'en' ? 'Business Reg No : 130-37-46318' : '사업자 번호 : 130-37-46318'}</p>
          <p>{language === 'en' ? 'E-commerce Permit : No. 2010-Gyeonggi Bucheon-924' : '통신판매업신고 : 제 2010-경기부천-924호'}</p>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] tracking-widest text-white/60 font-serif">
      <p>© 2026 YUNSEUL. All rights reserved.</p>
      <div className="flex space-x-8">
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="hover:text-white cursor-pointer transition-colors underline-offset-4 hover:underline bg-transparent border-0 p-0 text-[12px] font-serif tracking-widest text-white/60"
        >
          {language === 'en' ? 'Privacy Policy' : '개인정보처리방침'}
        </button>
        <button
          type="button"
          onClick={onOpenTerms}
          className="hover:text-white cursor-pointer transition-colors underline-offset-4 hover:underline bg-transparent border-0 p-0 text-[12px] font-serif tracking-widest text-white/60"
        >
          {language === 'en' ? 'Terms of Service' : '이용약관'}
        </button>
      </div>
    </div>
  </footer>
);

const HomePage = ({ 
  onNavigate,
  language = 'ko'
}: { 
  onNavigate: (p: Page, roomId?: string | null, expTab?: 'tea' | 'guestbook' | 'sound', targetId?: string) => void,
  language?: Language
}) => {
  const [activeHealingIndex, setActiveHealingIndex] = useState(0);
  const healingSlides = [
    {
      time: "08:30 a.m.",
      floorTimeKo: "1F 가든 티 라운지",
      floorTimeEn: "1F Garden Tea Lounge",
      tabLabelKo: "오션뷰 다도 체험",
      tabLabelEn: "Oceanfront Tea",
      titleKo: "오션뷰 다도 체험",
      titleEn: "Oceanfront Tea Experience",
      descKo: "동해의 아침 바다를 마주하며 백자 다기에 따뜻한 잎차를 우려 편안하게 하루를 깨워보세요.",
      descEn: "Brew warm signature tea in handcrafted porcelain facing the morning sea, quietly greeting a fresh day.",
      highlights: [
        { 
          labelKo: '명인 수제 백자 다기',
          labelEn: 'Master Artisanal Teaware', 
          descKo: '은은한 차의 온기를 오래 지켜주는 백자 다관에 차를 천천히 따르며 여유를 느껴보세요.',
          descEn: 'Gently pour tea into handcrafted white porcelain cups that preserve warmth and delicate notes.' 
        },
        { 
          labelKo: '시그니처 잎차 3종 테이스팅',
          labelEn: '3 Signature Tea Tasting', 
          descKo: '솔잎차, 감물차, 메밀차 중 오늘의 기분에 어울리는 차를 골라 그윽한 향을 음미해보세요.',
          descEn: 'Choose among coastal pine, persimmon leaf, and buckwheat blends to match your morning mood.' 
        },
        { 
          labelKo: '일출 수평선 티 테이블',
          labelEn: 'Sunrise Horizon Tea Table', 
          descKo: '붉게 물드는 아침 바다와 파도를 바라보며 나만의 속도로 차 한 잔을 천천히 즐겨보세요.',
          descEn: 'Take your time enjoying tea at your own pace as the horizon glows with the rising sun.' 
        }
      ],
      image: specialTeaRitualImg,
      actionKo: "다도 프로그램 살펴보기",
      actionEn: "Explore Tea Program",
      target: () => onNavigate('experience', null, 'tea', 'timeless-experiences')
    },
    {
      time: "02:30 p.m.",
      floorTimeKo: "3F 별빛 사색 서재",
      floorTimeEn: "3F Starlight Study",
      tabLabelKo: "오션뷰 서재 & 기록",
      tabLabelEn: "Study & Writing",
      titleKo: "오션뷰 서재 & 기록",
      titleEn: "Ocean Study & Writing",
      descKo: "스마트폰을 잠시 내려놓고 파도 소리를 들으며 코튼 원고지에 나만의 생각을 연필로 기록해보세요.",
      descEn: "Set digital devices aside and write down your quiet thoughts with a pencil on textured paper by the waves.",
      highlights: [
        { 
          labelKo: '영감의 질문 카드',
          labelEn: 'Inspirational Prompts', 
          descKo: '바다와 나를 잇는 7가지 사색 질문 카드를 골라 솔직한 마음을 편안하게 적어보세요.',
          descEn: 'Pick a thoughtful prompt card and let your honest reflections unfold onto the page with ease.' 
        },
        { 
          labelKo: '여행자 방명록 교감',
          labelEn: "Travelers' Guestbook", 
          descKo: '먼저 다녀간 이들의 따뜻한 문장을 읽어보고, 나만의 다정한 이야기도 함께 남겨보세요.',
          descEn: 'Read heartwarming notes left by past travelers and add a gentle sentence of your own.' 
        },
        { 
          labelKo: '별빛 사색 서재 & LP 턴테이블',
          labelEn: 'Starlight Study & Vinyl Record', 
          descKo: '마음에 드는 LP 음악을 턴테이블에 올리고, 파도 소리와 함께 시집의 책장을 넘겨보세요.',
          descEn: 'Place a curated vinyl record on the turntable and turn pages by the scenic ocean window.' 
        }
      ],
      image: specialGuestJournalImg,
      actionKo: "서재 & 기록 살펴보기",
      actionEn: "Explore Study & Writing",
      target: () => onNavigate('experience', null, 'guestbook', 'timeless-experiences')
    },
    {
      time: "10:00 p.m.",
      floorTimeKo: "3F 사운드 아틀리에",
      floorTimeEn: "3F Sound Atelier",
      tabLabelKo: "싱잉볼 사운드 체험",
      tabLabelEn: "Sound Experience",
      titleKo: "싱잉볼 사운드 체험",
      titleEn: "Singing Bowl Sound Experience",
      descKo: "밤바다의 파도 소리에 맞춰 싱잉볼을 조용히 울리며 하루의 피로와 복잡한 생각을 비워보세요.",
      descEn: "Strike the singing bowl in rhythm with nocturnal tides, letting resonant tones release daily fatigue.",
      highlights: [
        { 
          labelKo: '네팔 전통 풀문 싱잉볼',
          labelEn: 'Nepalese Full Moon Bowl', 
          descKo: '말렛으로 싱잉볼을 가볍게 두드려 깊게 퍼져나가는 브라스 공명을 온몸으로 느껴보세요.',
          descEn: 'Gently strike the singing bowl with the mallet and feel the deep resonance soothe your senses.' 
        },
        { 
          labelKo: '헌화로 파도소리 백색소음',
          labelEn: 'Coastal Wave Ocean ASMR', 
          descKo: '창밖 해안에서 밀려오는 밤 파도 소리에 귀를 기울이며 싱잉볼 잔향에 몸을 맡겨보세요.',
          descEn: 'Listen closely to the rolling waves outside the window and let the lingering tones relax your mind.' 
        },
        { 
          labelKo: '편백 아로마 & 숙면 명상',
          labelEn: 'Cypress Aroma & Restful Sleep', 
          descKo: '은은한 편백 방석에 편안히 기대어 긴장을 내려놓고 가장 깊고 포근한 잠을 청해보세요.',
          descEn: 'Lean back on the natural cypress cushion, letting go of all tension to invite restorative sleep.' 
        }
      ],
      image: specialSoundMeditationImg,
      actionKo: "싱잉볼 프로그램 살펴보기",
      actionEn: "Explore Sound Program",
      target: () => onNavigate('experience', null, 'sound', 'timeless-experiences')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHealingIndex((prev) => (prev === healingSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [activeHealingIndex, healingSlides.length]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-deep-ink">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Pool Villa" 
            className="w-full h-full object-cover natural-motion-img-slow"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/25 z-[1]" />
   
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="relative z-10 text-center space-y-8 px-6"
        >
          <span className="text-[14px] md:text-base tracking-[0.35em] text-white/85 uppercase font-cormorant font-medium block">
            {language === 'en' ? 'PRIVATE SEASIDE SANCTUARY & HEALING' : 'EMOTIONAL PRIVATE STAY & HEALING'}
          </span>
          <h1 className="text-[28px] md:text-[46px] lg:text-[58px] font-cormorant text-white uppercase tracking-[0.2em] leading-tight font-light">
            YUNSEUL<br />
            <span className="text-xs md:text-sm tracking-[0.35em] font-cormorant font-normal opacity-80 mt-3 block">
              {language === 'en' ? 'EXCLUSIVE STAY BY THE SEA' : 'STAY BY THE SEA'}
            </span>
          </h1>
          <div className="w-14 h-px bg-[#84654D] mx-auto mt-10" />
        </motion.div>
   
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4">
          <span className="text-[13px] text-white/50 tracking-[0.35em] uppercase font-cormorant font-bold">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#84654D]"
            />
          </div>
        </div>
      </header>
   
      {/* Section 01 - Intro */}
      <section id="home-intro" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F7F5F0] overflow-hidden border-b border-[#E3DED4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column: Editorial & Storytelling */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[15px] tracking-wider text-[#84654D] uppercase font-cormorant font-semibold block">Introduction</span>
              <h2 className="text-[30px] font-serif leading-tight text-deep-ink tracking-wide font-light">
                {language === 'en' ? (
                  <>The Beginning of<br />Serene Sanctuary</>
                ) : (
                  <>바다와 마주하는<br />고요한 안식의 시작</>
                )}
              </h2>
            </div>

            {/* Accent warm vertical divider line & elegant quote */}
            <div className="flex gap-6 items-stretch">
              <div className="w-0.5 bg-[#84654D]/40 shrink-0" />
              <p className="text-base font-serif text-deep-ink/90 font-light leading-relaxed">
                {language === 'en' 
                  ? '"Deep tranquility found through emptying, where only nature whispers."'
                  : '"비움으로써 마주하는 깊은 평온, 자연의 소리만이 나지막이 울리는 여백의 시간."'}
              </p>
            </div>
    
            <p className="text-deep-ink/75 text-[13px] md:text-[14px] leading-relaxed font-light font-serif">
              {language === 'en' ? (
                'Where the shimmering East Sea horizon and gentle waves greet your days. At Yunseul Stay, set aside everyday clamor and embrace a peaceful, unhurried rest focused entirely on yourself amidst the ocean breeze and warm sunlight.'
              ) : (
                '창밖으로 끝없이 펼쳐지는 동해의 푸른 윤슬과 잔잔한 파도 소리가 머무는 자리입니다. 윤슬스테이에서 일상의 번잡함을 잠시 내려놓고, 바닷바람과 햇살의 온기 속에서 온전히 나에게 머무는 깊은 쉼을 누려보세요.'
              )}
            </p>

            {/* Explore Spaces Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  onNavigate('rooms');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#84654D] hover:bg-[#6E533D] text-white text-[12px] font-serif tracking-wider rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
              >
                <span>{language === 'en' ? 'Explore Spaces' : '공간 둘러보기'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
    
          {/* Right Image Column: Luxury Overlapping Image Frame */}
          <div className="lg:col-span-7 relative w-full pt-12 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Large Image */}
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl border border-[#E3DED4] bg-[#EDE8DE] relative group">
                <img 
                  src={BRAND_CONTENT.locationImage} 
                  alt="Yunseul Stay Coastal Architecture" 
                  className="w-full h-full object-cover natural-motion-img"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.03] group-hover:bg-transparent transition-all duration-500" />
              </div>

              {/* Overlapping Small Detail Image */}
              <div className="absolute -bottom-8 -left-8 w-1/3 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-[#F7F5F0] hidden md:block group hover:-translate-y-2 transition-transform duration-500 bg-[#EDE8DE]">
                <img 
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" 
                  alt="Yunseul Stay Detail rest" 
                  className="w-full h-full object-cover natural-motion-img-alt"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/[0.05]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
   
      {/* Section 02 - Exclusive Spaces Showcase */}
      <section id="home-exclusive-spaces" className="pt-24 pb-20 md:pb-24 px-6 md:px-12 bg-white border-b border-[#E3DED4]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[15px] tracking-wider text-[#84654D] uppercase font-cormorant font-semibold block">Exclusive Spaces</span>
            <h2 className="text-2xl md:text-3xl font-serif text-deep-ink uppercase tracking-wider font-light leading-snug">
              {language === 'en' ? 'Four Private Sanctuaries by the Sea' : '윤슬을 품은 4개의 프라이빗 공간'}
            </h2>
            <p className="text-[13px] md:text-sm text-deep-ink/70 font-serif leading-relaxed font-light text-center max-w-3xl">
              {language === 'en' 
                ? 'From the serene garden tea lounge and heated infinity pool to the ocean bedroom and starlight atelier, explore our sanctuary.'
                : '정갈한 돌담 다도부터 사계절 온수풀, 파노라마 오션뷰 침실과 별빛 서재까지 윤슬의 공간을 만나보세요.'}
            </p>
            <div className="w-12 h-px bg-[#84654D] mx-auto mt-3" />
          </div>
   
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                id: "space-1",
                spaceNum: "SPACE 01",
                nameKo: "1F 가든 라운지",
                nameEn: "1F Garden Lounge",
                conceptKo: "돌담 정원과 마주한 프라이빗 다도 쉼",
                conceptEn: "Private welcome tea lounge facing the quiet stone garden",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
                roomTargetId: "room-1"
              },
              {
                id: "space-3",
                spaceNum: "SPACE 02",
                nameKo: "1F 선라이즈 온수풀",
                nameEn: "1F Sunrise Heated Pool",
                conceptKo: "33℃ 사계절 프라이빗 인피니티 온수풀",
                conceptEn: "All-season 33°C private heated infinity pool by the ocean",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
                roomTargetId: "room-3"
              },
              {
                id: "space-2",
                spaceNum: "SPACE 03",
                nameKo: "2F 오션 베드룸",
                nameEn: "2F Ocean Bedroom",
                conceptKo: "황금빛 일출과 잔잔한 파도가 머무는 곳",
                conceptEn: "Golden sunrise and soothing waves embracing the ocean bedroom",
                image: oceanBedroomLuxuryNowin,
                roomTargetId: "room-2"
              },
              {
                id: "space-4",
                spaceNum: "SPACE 04",
                nameKo: "3F 별빛 사색 아틀리에",
                nameEn: "3F Starlight Mindful Atelier",
                conceptKo: "책과 음악이 머무는 사색 서재",
                conceptEn: "A serene sanctuary filled with books and vinyl melodies",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
                roomTargetId: "room-4"
              }
            ].map((space, idx) => (
              <motion.div 
                key={space.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 1.2 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  onNavigate('rooms', space.roomTargetId);
                }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer h-[460px] shadow-lg border border-[#E3DED4] transition-all duration-700 ${
                  idx % 2 === 1 ? 'lg:translate-y-4' : ''
                }`}
              >
                <img 
                  src={space.image} 
                  alt={language === 'en' ? space.nameEn : space.nameKo} 
                  className={`absolute inset-0 w-full h-full object-cover ${
                    idx % 2 === 0 ? 'natural-motion-img' : 'natural-motion-img-alt'
                  } ${
                    space.id === 'space-3' ? 'object-bottom' : 'object-center'
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-700" />

                {/* Bottom Harmonized Text with Space Number Annotation */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white space-y-2.5 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-[#E8DFD3]/90">
                      {space.spaceNum}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif tracking-wide text-white leading-tight font-medium transition-colors">
                    {language === 'en' ? space.nameEn : space.nameKo}
                  </h3>
                  <p className="text-[13px] text-white/80 font-light font-serif leading-relaxed">
                    {language === 'en' ? space.conceptEn : space.conceptKo}
                  </p>
                  
                  {/* View More with underline only appearing on hover */}
                  <div className="pt-2">
                    <span className="inline-flex items-center text-[10px] tracking-widest uppercase text-[#C8BBA8] group-hover:text-white group-hover:underline underline-offset-4 transition-all duration-300 font-sans font-medium">
                      {language === 'en' ? 'View Details →' : 'View More →'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: A DAY OF HEALING - Smooth Sliding Carousel (Placed at the bottom of HomePage) */}
      <section className="bg-[#F7F5F0] py-24 md:py-32 border-b border-[#E3DED4]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[15px] tracking-wider text-[#84654D] font-cormorant font-semibold uppercase block">
              TIMELESS HEALING EXPERIENCES
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-deep-ink">
              {language === 'en' ? "Yunseul Stay Signature Healing Programs" : "윤슬 스테이 시그니처 힐링 프로그램"}
            </h2>
            <p className="text-[13px] md:text-sm text-deep-ink/75 font-serif leading-relaxed max-w-2xl">
              {language === 'en'
                ? 'Three curated healing programs designed to help you relax and focus entirely on your wellness.'
                : '오롯이 나에게 집중하며 심신의 피로를 비워내는 3가지 핵심 힐링 프로그램입니다.'}
            </p>
            <div className="w-12 h-px bg-[#84654D] mt-3" />
          </div>

          {/* Sliding Carousel Stage */}
          <div className="relative bg-white rounded-3xl border border-[#E3DED4] p-6 md:p-10 shadow-sm overflow-hidden space-y-8">

            {/* Sliding Content */}
            <AnimatePresence mode="wait">
              {(() => {
                const currentSlide = healingSlides[activeHealingIndex];
                return (
                  <motion.div
                    key={activeHealingIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Visual Frame - Clean without overlaid text */}
                    <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#EDE8DE] border border-[#E3DED4] shadow-sm group">
                      <img
                        src={currentSlide.image}
                        alt={language === 'en' ? currentSlide.titleEn : currentSlide.titleKo}
                        className="w-full h-full object-cover natural-motion-img"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Narrative Details */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className="space-y-2.5">
                        {/* Floor & Time Single Annotation Badge */}
                        <div className="flex items-center gap-2">
                          <span className="px-3.5 py-1 bg-[#84654D]/10 text-[#84654D] border border-[#84654D]/25 font-serif font-medium text-xs tracking-wide rounded-full shadow-2xs">
                            {language === 'en' ? currentSlide.floorTimeEn : currentSlide.floorTimeKo}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif text-deep-ink font-light leading-snug">
                          {language === 'en' ? currentSlide.titleEn : currentSlide.titleKo}
                        </h3>
                      </div>

                      <p className="text-[13.5px] text-deep-ink/75 font-serif font-light leading-relaxed">
                        {language === 'en' ? currentSlide.descEn : currentSlide.descKo}
                      </p>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => currentSlide.target()}
                          className="px-5 py-2.5 rounded-xl bg-[#84654D] hover:bg-[#6E533D] text-white transition-all duration-300 text-[12px] font-serif font-medium flex items-center gap-2.5 group/btn cursor-pointer shadow-xs hover:shadow-md"
                        >
                          <span>{language === 'en' ? currentSlide.actionEn : currentSlide.actionKo}</span>
                          <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Relocated Navigation Controls: Theme buttons and Arrow Buttons at the bottom */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E3DED4]">
              {/* Step indicator tabs with descriptive titles instead of just times */}
              <div className="flex items-center gap-2 sm:gap-3">
                {healingSlides.map((slide, sIdx) => {
                  const isActive = activeHealingIndex === sIdx;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setActiveHealingIndex(sIdx)}
                      className={`px-4 py-2 rounded-full text-xs font-serif transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#84654D] text-white shadow-xs font-medium'
                          : 'bg-white text-deep-ink/70 border border-[#E3DED4] hover:border-[#84654D]/50 hover:bg-[#F7F5F0]'
                      }`}
                    >
                      <span className="font-sans text-[10px] opacity-75">0{sIdx + 1}</span>
                      <span>{language === 'en' ? slide.tabLabelEn : slide.tabLabelKo}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Arrows and Dot Indicators */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 mr-1">
                  {healingSlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveHealingIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeHealingIndex === dotIdx ? 'w-6 bg-[#84654D]' : 'w-1.5 bg-[#84654D]/25 hover:bg-[#84654D]/50'
                      }`}
                      aria-label={`슬라이드 ${dotIdx + 1}로 이동`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveHealingIndex((prev) => (prev === 0 ? healingSlides.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-xl bg-white border border-[#E3DED4] hover:border-[#84654D] hover:bg-[#84654D] hover:text-white text-deep-ink flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="이전 리추얼 슬라이드"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHealingIndex((prev) => (prev === healingSlides.length - 1 ? 0 : prev + 1))}
                  className="w-8 h-8 rounded-xl bg-white border border-[#E3DED4] hover:border-[#84654D] hover:bg-[#84654D] hover:text-white text-deep-ink flex items-center justify-center transition-all cursor-pointer shadow-xs"
                  aria-label="다음 리추얼 슬라이드"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HomePage ends here */}
    </div>
  );
};

const BookingForm = ({ language = 'ko' }: { language?: Language }) => {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    'rules': false,
    'pool': false,
    'amenities': false,
    'refund': false
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNaverBooking = () => {
    window.open('https://booking.naver.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-10 font-serif text-[13px]">
      {/* Accordion List for Pre-Booking Guidelines */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1 pb-2">
          <div className="space-y-1">
            <span className="text-[13px] font-cormorant font-bold uppercase tracking-wider text-[#7B6248] block">PRE-BOOKING GUIDELINES</span>
            <h4 className="text-lg md:text-xl font-serif text-deep-ink font-light">
              {language === 'en' ? 'Essential Checkpoints Prior to Booking' : '예약 전 필수 확인사항'}
            </h4>
          </div>
        </div>

        {/* Accordion Item 1: 입퇴실 시간 및 필수 이용 수칙 */}
        <div className="bg-[#F7F5F0] border border-[#E3DED4] rounded-xl overflow-hidden transition-all duration-300">
          <button
            type="button"
            onClick={() => toggleAccordion('rules')}
            className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#7B6248]/10 text-[#7B6248] font-cormorant font-bold text-sm flex items-center justify-center">01</span>
              <div>
                <h5 className="text-base font-serif font-medium text-deep-ink">
                  {language === 'en' ? 'Occupancy, Check-in/out & House Guidelines' : '투숙 인원, 입퇴실 시간 및 이용 수칙'}
                </h5>
                <p className="text-[12px] text-deep-ink/60 font-serif">
                  {language === 'en' ? 'Standard 2 / Max 8 guests, contactless check-in, non-smoking policy & safety' : '기준 2인 / 최대 8인, 체크인/아웃 시간, 비대면 입실 및 안전 수칙'}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
              openAccordions['rules'] 
                ? 'rotate-180 bg-[#84654D] text-white border-[#84654D]' 
                : 'bg-white text-[#7B6248]/60 border-[#E3DED4] group-hover:border-[#84654D] group-hover:text-[#84654D] group-hover:bg-[#84654D]/10'
            }`}>
              <ChevronDown size={16} />
            </div>
          </button>

          <AnimatePresence>
            {openAccordions['rules'] && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-[#E3DED4] space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white border border-[#E3DED4] p-4 rounded-lg space-y-1">
                      <span className="text-[11px] uppercase font-cormorant tracking-wider text-[#7B6248] font-bold">OCCUPANCY</span>
                      <p className="text-sm font-serif text-deep-ink font-semibold">
                        {language === 'en' ? 'Standard 2 / Max 8 Guests' : '기준 2인 / 최대 8인'}
                      </p>
                      <p className="text-[11px] text-deep-ink/65 pt-1 border-t border-[#E3DED4]">
                        {language === 'en' ? 'Entire villa single-party exclusive use' : '1일 1팀 전관 독채 단독 프라이빗 이용'}
                      </p>
                    </div>
                    <div className="bg-white border border-[#E3DED4] p-4 rounded-lg space-y-1">
                      <span className="text-[11px] uppercase font-cormorant tracking-wider text-[#7B6248] font-bold">CHECK-IN</span>
                      <p className="text-sm font-serif text-deep-ink font-semibold">
                        {language === 'en' ? 'After 16:00 (4 PM)' : '오후 16:00 이후'}
                      </p>
                      <p className="text-[11px] text-deep-ink/65 pt-1 border-t border-[#E3DED4]">
                        {language === 'en' ? 'Keypad passcode via SMS on arrival morning' : '입실 당일 오전 비대면 도어록 번호 발송'}
                      </p>
                    </div>
                    <div className="bg-white border border-[#E3DED4] p-4 rounded-lg space-y-1">
                      <span className="text-[11px] uppercase font-cormorant tracking-wider text-[#84654D] font-bold">CHECK-OUT</span>
                      <p className="text-sm font-serif text-deep-ink font-semibold">
                        {language === 'en' ? 'Before 11:00 (11 AM)' : '오전 11:00 이전'}
                      </p>
                      <p className="text-[11px] text-deep-ink/65 pt-1 border-t border-[#E3DED4]">
                        {language === 'en' ? 'Thorough sanitization & fresh linens' : '소독 및 최고급 침구 정밀 세팅 진행'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E3DED4] p-5 rounded-lg space-y-2.5 text-[12.5px] text-deep-ink/80 leading-relaxed font-serif">
                    {language === 'en' ? (
                      <>
                        <p>&middot; <strong>Capacity Policy:</strong> Standard 2 guests, up to 8 guests maximum. Extra guest fee: ₩30,000 / night per person (luxury bedding & amenities included).</p>
                        <p>&middot; <strong>No Pets:</strong> Pets are strictly prohibited to prevent allergens and preserve room condition.</p>
                        <p>&middot; <strong>Entirely Non-Smoking:</strong> Indoor smoking including e-cigarettes is strictly prohibited; disinfection fees apply on violation.</p>
                        <p>&middot; <strong>No Unregistered Guests:</strong> Only registered guests may enter and stay in the estate.</p>
                        <p>&middot; <strong>Manner Hours:</strong> Please refrain from loud noise on outdoor terraces after 22:00.</p>
                      </>
                    ) : (
                      <>
                        <p>&middot; <strong>인원 기준 안내:</strong> 기준 2인 / 최대 8인까지 입실 가능하며, 기준 인원 초과 시 1인 1박 30,000원의 추가 요금이 적용됩니다. (최고급 침구 및 어메니티 일체 포함)</p>
                        <p>&middot; <strong>반려동물 동반 불가:</strong> 알러지 방지 및 청결한 룸 컨디션 유지를 위해 반려동물 동반 입실이 엄격히 제한됩니다.</p>
                        <p>&middot; <strong>실내 전 구역 절대 금연:</strong> 전자담배를 포함한 실내 흡연은 절대 금지되며, 위반 시 특수 방역 청소비가 청구됩니다.</p>
                        <p>&middot; <strong>외부 방문객 입실 불가:</strong> 예약 시 등록된 인원 외에 외부인의 무단 방문 및 숙박은 절대 불가합니다.</p>
                        <p>&middot; <strong>야간 에티켓 준수:</strong> 밤 10시(22:00) 이후에는 야외 테라스에서의 고성방가를 삼가 바랍니다.</p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Accordion Item 2: 사계절 온수 인피니티 풀 가이드 */}
        <div className="bg-[#F7F5F0] border border-[#E3DED4] rounded-xl overflow-hidden transition-all duration-300">
          <button
            type="button"
            onClick={() => toggleAccordion('pool')}
            className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#7B6248]/10 text-[#7B6248] font-cormorant font-bold text-sm flex items-center justify-center">02</span>
              <div>
                <h5 className="text-base font-serif font-medium text-deep-ink">
                  {language === 'en' ? 'Four-Season Heated Pool Guidelines' : '사계절 온수 인피니티 풀 이용 안내'}
                </h5>
                <p className="text-[12px] text-deep-ink/60 font-serif">
                  {language === 'en' ? 'Automated water heating, attire guidelines, and safety rules' : '수온 유지 시스템, 복장 규정, 안전 수칙'}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
              openAccordions['pool'] 
                ? 'rotate-180 bg-[#84654D] text-white border-[#84654D]' 
                : 'bg-white text-[#7B6248]/60 border-[#E3DED4] group-hover:border-[#84654D] group-hover:text-[#84654D] group-hover:bg-[#84654D]/10'
            }`}>
              <ChevronDown size={16} />
            </div>
          </button>

          <AnimatePresence>
            {openAccordions['pool'] && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-[#E3DED4] space-y-4">
                  <div className="bg-white border border-[#7B6248]/30 p-5 rounded-lg">
                    <span className="text-[12px] uppercase font-cormorant tracking-wider text-[#7B6248] font-bold">WATER TEMPERATURE</span>
                    <h4 className="text-lg font-serif text-deep-ink font-medium">
                      {language === 'en' ? 'Maintained automatically at 32°C ~ 34°C' : '상시 32°C ~ 34°C 자동 온수 유지'}
                    </h4>
                    <p className="text-[12px] text-deep-ink/70 mt-1">
                      {language === 'en' ? 'Optimal warm water maintained automatically across all four seasons.' : '사계절 내내 쾌적하고 따뜻한 온수풀 온도가 자동 유지됩니다.'}
                    </p>
                  </div>

                  <div className="bg-white border border-[#E3DED4] p-5 rounded-lg space-y-2.5 text-[13px] text-deep-ink/80 leading-relaxed font-serif">
                    {language === 'en' ? (
                      <>
                        <p>&middot; <strong>Swimwear Required:</strong> Please wear proper swimwear or rashguards for hygiene maintenance.</p>
                        <p>&middot; <strong>Caution Slippery:</strong> The poolside can be slippery when wet; no running or diving permitted.</p>
                        <p>&middot; <strong>No Entry after Drinking:</strong> Entering the pool intoxicated is strictly prohibited for guest safety.</p>
                        <p>&middot; <strong>Towels &amp; Robes:</strong> Luxury bath towels and cotton bathrobes are provided poolside.</p>
                      </>
                    ) : (
                      <>
                        <p>&middot; <strong>수영복 착용:</strong> 수질 관리를 위해 반드시 수영복 또는 래시가드를 착용해 주십시오.</p>
                        <p>&middot; <strong>미끄럼 주의:</strong> 물기로 인해 풀사이드 주변이 미끄러울 수 있으니 뛰거나 다이빙을 삼가 주십시오.</p>
                        <p>&middot; <strong>음주 입수 제한:</strong> 안전 사고 예방을 위해 음주 후 수영장 입장은 엄격히 제한됩니다.</p>
                        <p>&middot; <strong>타월 및 가운:</strong> 풀사이드 전용 최고급 바스타월과 순면 가운이 비치되어 있습니다.</p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Accordion Item 3: 무료 포함 어메니티 & 혜택 */}
        <div className="bg-[#F7F5F0] border border-[#E3DED4] rounded-xl overflow-hidden transition-all duration-300">
          <button
            type="button"
            onClick={() => toggleAccordion('amenities')}
            className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#7B6248]/10 text-[#7B6248] font-cormorant font-bold text-sm flex items-center justify-center">03</span>
              <div>
                <h5 className="text-base font-serif font-medium text-deep-ink">
                  {language === 'en' ? 'Complimentary Amenities & Welcome Perks' : '전관 무료 포함 어메니티 & 웰컴 혜택'}
                </h5>
                <p className="text-[12px] text-deep-ink/60 font-serif">
                  {language === 'en' ? 'Tea ceremony set, Aesop bodycare, LP turntable, Dyson hair care' : '다도 다구 세트, Aesop 바디케어, LP 턴테이블, 다이슨 드라이어'}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
              openAccordions['amenities'] 
                ? 'rotate-180 bg-[#84654D] text-white border-[#84654D]' 
                : 'bg-white text-[#7B6248]/60 border-[#E3DED4] group-hover:border-[#84654D] group-hover:text-[#84654D] group-hover:bg-[#84654D]/10'
            }`}>
              <ChevronDown size={16} />
            </div>
          </button>

          <AnimatePresence>
            {openAccordions['amenities'] && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-[#E3DED4] space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-[#E3DED4] rounded-lg space-y-1">
                      <h5 className="text-sm font-serif font-semibold text-deep-ink">
                        {language === 'en' ? 'Welcome & Tea Therapy' : '웰컴 & 티 테라피'}
                      </h5>
                      <p className="text-[12px] text-deep-ink/70 leading-relaxed">
                        {language === 'en' ? '3 handcrafted welcome tea blends & tea set, local Gangneung desserts, illy espresso machine' : '수제 웰컴 티 3종 및 다도 다구 세트, 강릉 로컬 디저트 다과, 일리 캡슐 커피 머신'}
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-[#E3DED4] rounded-lg space-y-1">
                      <h5 className="text-sm font-serif font-semibold text-deep-ink">
                        {language === 'en' ? 'Bedroom & Bath Amenities' : '침실 & 욕실 어메니티'}
                      </h5>
                      <p className="text-[12px] text-deep-ink/70 leading-relaxed">
                        {language === 'en' ? 'Goose-down bedding & 100% cotton linens, Aesop premium body & haircare, Dyson Airwrap' : '호텔식 거위털 침구류 및 100% 순면 린넨, 이솝(Aesop) 프리미엄 바디 & 헤어 케어 세트, 다이슨 에어랩'}
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-[#E3DED4] rounded-lg space-y-1">
                      <h5 className="text-sm font-serif font-semibold text-deep-ink">
                        {language === 'en' ? 'Sound & Entertainment' : '사운드 & 엔터테인먼트'}
                      </h5>
                      <p className="text-[12px] text-deep-ink/70 leading-relaxed">
                        {language === 'en' ? 'Audio-Technica vinyl turntable & curated LP records, B&O speaker, beam projector' : '오디오테크니카 LP 턴테이블 & 큐레이션 바이닐 앨범, 뱅앤올룹슨 스피커, 빔프로젝터'}
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-[#E3DED4] rounded-lg space-y-1">
                      <h5 className="text-sm font-serif font-semibold text-deep-ink">
                        {language === 'en' ? 'Kitchen & Dining' : '주방 & 다이닝'}
                      </h5>
                      <p className="text-[12px] text-deep-ink/70 leading-relaxed">
                        {language === 'en' ? 'Balmuda toaster & kettle, induction cooktop, wine glasses, opener & premium tableware' : '발뮤다 토스터기 & 전기포트, 인덕션, 와인잔 및 오프너, 고급 식기류 일체'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Accordion Item 4: 취소 및 환불 규정 */}
        <div className="bg-[#F7F5F0] border border-[#E3DED4] rounded-xl overflow-hidden transition-all duration-300">
          <button
            type="button"
            onClick={() => toggleAccordion('refund')}
            className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#7B6248]/10 text-[#7B6248] font-cormorant font-bold text-sm flex items-center justify-center">04</span>
              <div>
                <h5 className="text-base font-serif font-medium text-deep-ink">
                  {language === 'en' ? 'Cancellation Fees & Refund Policy' : '취소 수수료 및 환불 규정'}
                </h5>
                <p className="text-[12px] text-deep-ink/60 font-serif">
                  {language === 'en' ? 'Refund percentages categorized by days prior to check-in' : '이용 예정일 기준 일자별 환불 비율 안내'}
                </p>
              </div>
            </div>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
              openAccordions['refund'] 
                ? 'rotate-180 bg-[#84654D] text-white border-[#84654D]' 
                : 'bg-white text-[#7B6248]/60 border-[#E3DED4] group-hover:border-[#84654D] group-hover:text-[#84654D] group-hover:bg-[#84654D]/10'
            }`}>
              <ChevronDown size={16} />
            </div>
          </button>

          <AnimatePresence>
            {openAccordions['refund'] && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-[#E3DED4] space-y-4">
                  <div className="bg-white border border-[#E3DED4] rounded-lg overflow-hidden text-[13px]">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-deep-ink/5 border-b border-[#E3DED4]">
                          <th className="p-3.5 font-semibold text-deep-ink/80">{language === 'en' ? 'Cancellation Timing' : '예약 취소 시점'}</th>
                          <th className="p-3.5 font-semibold text-deep-ink/80 text-right">{language === 'en' ? 'Refund Ratio' : '환불 금액 비율'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E3DED4] text-deep-ink/75">
                        <tr>
                          <td className="p-3.5">{language === 'en' ? 'Up to 10 days before check-in' : '이용 예정일 10일 전까지'}</td>
                          <td className="p-3.5 font-semibold text-[#7B6248] text-right">{language === 'en' ? '100% Full Refund' : '100% 전액 환불'}</td>
                        </tr>
                        <tr>
                          <td className="p-3.5">{language === 'en' ? 'Up to 7 days before check-in' : '이용 예정일 7일 전까지'}</td>
                          <td className="p-3.5 text-right">{language === 'en' ? '90% Refund' : '90% 환불'}</td>
                        </tr>
                        <tr>
                          <td className="p-3.5">{language === 'en' ? 'Up to 5 days before check-in' : '이용 예정일 5일 전까지'}</td>
                          <td className="p-3.5 text-right">{language === 'en' ? '70% Refund' : '70% 환불'}</td>
                        </tr>
                        <tr>
                          <td className="p-3.5">{language === 'en' ? 'Up to 3 days before check-in' : '이용 예정일 3일 전까지'}</td>
                          <td className="p-3.5 text-right">{language === 'en' ? '50% Refund' : '50% 환불'}</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 text-rose-600 font-medium">{language === 'en' ? '2 days before ~ Check-in Day' : '이용 예정일 2일 전 ~ 당일'}</td>
                          <td className="p-3.5 text-rose-600 font-semibold text-right">{language === 'en' ? 'Non-refundable (0%)' : '환불 불가 (0%)'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Distinct Warm Tone Naver Booking Partner Section */}
      <div className="bg-[#EDE7DC] border border-[#DDD6C8] rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#DDD6C8]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold text-[#7B6248] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#7B6248]" />
              <span>{language === 'en' ? 'Naver Booking Partner' : '네이버 예약 파트너'}</span>
            </div>
            <h4 className="text-lg md:text-xl font-serif text-deep-ink font-medium">
              {language === 'en' ? 'Real-Time Online Reservation' : '실시간 예약 진행'}
            </h4>
            <p className="text-[12px] text-deep-ink/65 font-serif font-light leading-relaxed max-w-lg">
              {language === 'en' 
                ? 'Check real-time calendar availability and instant confirmations directly via Naver Booking.'
                : '네이버 예약을 통해 실시간 잔여 객실 조회 및 즉시 예약 확정이 가능합니다.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleNaverBooking}
            className="shrink-0 px-7 py-3.5 bg-[#7B6248] hover:bg-[#634E39] text-white text-[13px] tracking-wider uppercase font-semibold transition-all duration-300 rounded-xl shadow-xs border border-[#7B6248] cursor-pointer inline-flex items-center justify-center gap-2 font-sans"
          >
            <span>{language === 'en' ? 'Book with Naver' : '네이버 예약 바로가기'}</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-deep-ink/75 font-sans leading-relaxed">
          <span>
            {language === 'en' ? (
              <>
                Yunseul Stay: <strong className="font-semibold text-deep-ink">1544-0634</strong> (<span className="font-medium text-deep-ink">Daily 09:00 - 20:00</span>) · KakaoTalk: <strong className="font-semibold text-deep-ink">@yunseul_stay</strong>
              </>
            ) : (
              <>
                윤슬 스테이 문의: <strong className="font-semibold text-deep-ink">1544-0634</strong> (<span className="font-medium text-deep-ink">연중무휴 09:00 - 20:00</span>) · 카카오톡 채널: <strong className="font-semibold text-deep-ink">@윤슬스테이</strong>
              </>
            )}
          </span>
          <span className="text-[11px] text-deep-ink/40 font-serif">
            {language === 'en' ? '* By booking, you agree to all house rules.' : '* 예약 시 이용 수칙 및 환불 규정에 동의한 것으로 간주됩니다.'}
          </span>
        </div>
      </div>
    </div>
  );
};

interface RoomZoneItemProps {
  room: typeof BRAND_CONTENT.rooms[0];
  index: number;
  language?: Language;
}

const RoomZoneItem: React.FC<RoomZoneItemProps> = ({ room, index, language = 'ko' }) => {
  const [activeTab, setActiveTab] = useState<'features' | 'amenities' | 'healing'>('features');
  // Swapped background colors for 02 (cream) and 03 (white)
  const sectionBg = index === 0 ? 'bg-white' : index === 1 ? 'bg-[#F7F5F0]' : index === 2 ? 'bg-white' : 'bg-[#F7F5F0]';

  return (
    <section 
      id={room.id}
      className={`${sectionBg} py-20 md:py-28 border-b border-[#E3DED4] scroll-mt-24`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Single High-Definition Visual Frame */}
          <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="aspect-[16/10] overflow-hidden shadow-xl group relative rounded-2xl bg-[#EDE8DE] border border-[#E3DED4]">
              <img 
                src={room.image} 
                alt={language === 'en' ? room.nameEn || room.name : room.nameKo || room.name} 
                className={`w-full h-full object-cover ${index % 2 === 0 ? 'natural-motion-img' : 'natural-motion-img-alt'}`} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 bg-black/50 backdrop-blur-md text-white text-[11px] font-serif font-light rounded-full border border-white/20 uppercase tracking-wider">
                  {index === 0 && (language === 'en' ? 'Garden View & Tea Lounge' : '가든 뷰 & 다도 라운지')}
                  {index === 1 && (language === 'en' ? 'Four-Season Private Heated Pool' : '사계절 프라이빗 온수풀')}
                  {index === 2 && (language === 'en' ? 'Panoramic Oceanview Bedroom' : '파노라마 오션뷰 침실')}
                  {index === 3 && (language === 'en' ? 'Skylight Starlight Mindful Atelier' : '천창 별빛 사색 아틀리에')}
                </span>
              </div>
            </div>
          </div>

          {/* Room Description & Detail Specs */}
          <div className={`lg:col-span-5 space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[12px] uppercase tracking-widest text-[#84654D] font-serif font-bold">
                  EXCLUSIVE SPACE 0{index + 1}
                </span>
              </div>
              <h2 className="text-2xl md:text-[30px] font-serif leading-tight text-deep-ink uppercase tracking-wide">
                {language === 'en' ? (room.nameEn || room.name) : (room.nameKo || room.name)}
              </h2>
            </div>
            
            <p className="text-[13.5px] text-deep-ink/80 font-serif leading-relaxed font-light whitespace-pre-line">
              {language === 'en' ? room.longDescEn || room.descEn || room.longDesc : room.longDesc}
            </p>

            {/* Quick Specs Grid - Refined with Location & Signature View/Mood */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#F7F5F0] border border-[#E3DED4]">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block flex items-center gap-1">
                  <Compass size={12} /> {language === 'en' ? 'Floor & Location' : '층수 및 위치'}
                </span>
                <p className="text-[12px] font-serif text-deep-ink truncate font-medium">
                  {index === 0 && (language === 'en' ? '1F Private Garden' : '1F 프라이빗 가든')}
                  {index === 1 && (language === 'en' ? '1F Heated Pool Sundeck' : '1F 온수풀 & 선덱')}
                  {index === 2 && (language === 'en' ? '2F Oceanfront Terrace' : '2F 오션프론트 테라스')}
                  {index === 3 && (language === 'en' ? '3F Rooftop Study Attic' : '3F 루프탑 사색 다락')}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block flex items-center gap-1">
                  <Sparkles size={12} /> {language === 'en' ? 'Signature Vibe' : '시그니처 무드'}
                </span>
                <p className="text-[12px] font-serif text-deep-ink font-medium truncate">
                  {index === 0 && (language === 'en' ? 'Stone Garden & Tea' : '돌담 정원 & 감성 다도')}
                  {index === 1 && (language === 'en' ? '33°C Heated Infinity' : '사계절 33℃ 인피니티')}
                  {index === 2 && (language === 'en' ? 'Horizon Ocean Sunrise' : '동해 수평선 & 일출 뷰')}
                  {index === 3 && (language === 'en' ? 'Moonlight Study & Sound Bath' : '달빛 서재 & 사색 싱잉볼')}
                </p>
              </div>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="space-y-3 pt-2">
              <div className="flex border-b border-[#E3DED4] gap-4">
                {[
                  { id: 'features', labelKo: '공간 포인트', labelEn: 'Highlights' },
                  { id: 'amenities', labelKo: '구비 비품', labelEn: 'Amenities' },
                  { id: 'healing', labelKo: '추천 힐링', labelEn: 'Healing Guide' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-2 text-[12px] font-sans font-medium transition-colors relative cursor-pointer ${
                      activeTab === tab.id ? 'text-[#84654D]' : 'text-deep-ink/50 hover:text-deep-ink'
                    }`}
                  >
                    {language === 'en' ? tab.labelEn : tab.labelKo}
                    {activeTab === tab.id && (
                      <motion.div layoutId={`tab-line-${room.id}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#84654D]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="text-[13px] text-deep-ink/75 font-serif font-light min-h-[70px]">
                {activeTab === 'features' && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(language === 'en' && room.featuresEn ? room.featuresEn : room.features).map((feat, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E3DED4] text-[11px] text-[#84654D] font-sans font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xs cursor-default"
                      >
                        <Check size={11} className="shrink-0" /> 
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                )}
                {activeTab === 'amenities' && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[12px]">
                    {(language === 'en' && room.amenitiesEn ? room.amenitiesEn : room.amenities).map((amenity, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-1.5 text-deep-ink/70">
                        <span className="w-1 h-1 rounded-full bg-[#84654D]" />
                        <span className="truncate">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'healing' && (
                  <p className="text-[12.5px] leading-relaxed text-deep-ink/80 pt-1 font-serif">
                    {language === 'en' ? (
                      index === 0 ? "Savor a warm welcome tea ritual while gazing upon the tranquil stone garden. The gentle herbal aroma and whispering ocean breeze melt away daily tensions, creating a timeless space of restorative mindfulness." :
                      index === 1 ? "Immerse yourself in the comforting 33°C four-season heated infinity pool under starlit skies. Pair a glass of wine with the rhythmic cadence of crashing nocturnal waves for an exclusive twilight swim." :
                      index === 2 ? "Awaken to the magnificent crimson dawn rising above the East Sea horizon directly from plush bedding. Golden sunbeams shimmering across the ocean surface fill the sanctuary with warmth and deep inspiration." :
                      "Look out over the serene nocturnal ocean while listening to the warm crackle of vinyl jazz. Settle into an oak desk and armchair to read curated books or journal personal reflections in peaceful solitude."
                    ) : (
                      index === 0 ? "초록빛 돌담 정원의 고즈넉한 풍경을 마주하며 정성스럽게 우려낸 웰컴 다도를 음미해 보세요. 은은하게 퍼지는 찻잎 향과 자연의 바람 소리가 일상의 번잡함을 지우고 온전한 쉼과 마음의 여백을 편안히 전해줍니다." :
                      index === 1 ? "사계절 내내 유지되는 33℃의 포근한 온수풀에 몸을 맡기고, 귓가를 맴도는 밤바다의 깊은 파도 소리와 시원한 해풍을 함께 느껴보세요. 와인 한 잔과 함께 밤하늘의 별을 바라보며 프라이빗한 야간 유영을 즐기실 수 있습니다." :
                      index === 2 ? "동해 수평선 위로 붉고 찬란하게 솟아오르는 헌화로의 일출을 푹신한 침대에 누워 오롯이 맞이합니다. 새벽 바다의 윤슬이 방 안 가득 쏟아지는 경이로운 순간을 감상하며 하루를 평온하게 시작해 보세요." :
                      "창밖으로 펼쳐진 고요한 밤바다를 바라보며 아날로그 LP 턴테이블의 따뜻한 재즈 선율을 켜보세요. 부드러운 원목 데스크와 라운지 체어에 기대어 좋아하는 책을 읽거나 연필로 마음속 생각을 담담하게 적어 내려가는 오롯한 사색의 시간입니다."
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoomsPage = ({ 
  selectedRoomId, 
  setSelectedRoomId, 
  onNavigate,
  language = 'ko'
}: { 
  selectedRoomId: string | null, 
  setSelectedRoomId: (id: string | null) => void, 
  onNavigate: (p: Page) => void,
  language?: Language
}) => {
  useEffect(() => {
    if (selectedRoomId) {
      const element = document.getElementById(selectedRoomId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedRoomId]);

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      <PageHeader 
        title="ROOMS & SPACES" 
        koTitle={language === 'en' 
          ? "Exclusively for One Party per Day: Private Sanctuaries of Rest & Serenity" 
          : "온전한 휴식과 안식을 전하는 프라이빗 독채 공간"}
        subtitle="Exclusive Stay Spaces" 
        image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Rooms Listing */}
      {BRAND_CONTENT.rooms.map((room, i) => (
        <RoomZoneItem key={room.id} room={room} index={i} language={language} />
      ))}

      {/* Stay Guidelines Section */}
      <section className="bg-white pt-24 pb-20 md:pb-28 px-6 md:px-12 border-t border-[#E3DED4]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-[14px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block">
              STAY GUIDELINES
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-deep-ink font-light">
              {language === 'en' ? 'Stay Guidelines' : '숙박 및 이용 안내'}
            </h3>
            <p className="text-[13px] text-deep-ink/70 font-serif leading-relaxed font-light">
              {language === 'en'
                ? 'Curated house rules and stay policies designed to guarantee undisturbed tranquility and supreme cleanliness for all guests.'
                : '모든 고객의 온전하고 평화로운 휴식을 위해 정성스럽게 마련된 이용 가이드입니다.'}
            </p>
            <div className="w-12 h-px bg-[#84654D] mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guide 1 */}
            <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] space-y-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E3DED4] flex items-center justify-center text-[#84654D] shadow-xs">
                <Clock size={18} />
              </div>
              <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                {language === 'en' ? 'Check-in / Out' : '입·퇴실 시간'}
              </h4>
              <ul className="space-y-1.5 text-[12px] text-deep-ink/75 font-serif font-light leading-relaxed">
                {language === 'en' ? (
                  <>
                    <li>• Check-in : From 16:00</li>
                    <li>• Check-out : Before 11:00</li>
                    <li>• Digital keypad code sent on arrival morning</li>
                    <li>• Cleanliness & sanitation protocol strictly observed</li>
                  </>
                ) : (
                  <>
                    <li>• 체크인 : 16:00 이후</li>
                    <li>• 체크아웃 : 11:00 이전</li>
                    <li>• 당일 오전 도어록 비밀번호 자동 발송</li>
                    <li>• 청결한 방역 관리를 위한 시간 준수</li>
                  </>
                )}
              </ul>
            </div>

            {/* Guide 2 */}
            <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] space-y-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E3DED4] flex items-center justify-center text-[#84654D] shadow-xs">
                <Users size={18} />
              </div>
              <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                {language === 'en' ? 'Occupancy & Fees' : '인원 및 초과 요금'}
              </h4>
              <ul className="space-y-1.5 text-[12px] text-deep-ink/75 font-serif font-light leading-relaxed">
                {language === 'en' ? (
                  <>
                    <li>• <strong>Standard 2 / Max 8 guests (Entire Estate)</strong></li>
                    <li>• <strong>Extra guest</strong>: ₩30,000 / night</li>
                    <li>• (Includes luxury bedding & Aesop amenities)</li>
                    <li>• All ages counted in total occupancy</li>
                  </>
                ) : (
                  <>
                    <li>• <strong>기준 2인 / 최대 8인 독채 전관</strong></li>
                    <li>• <strong>초과 요금</strong>: 1인 1박 30,000원</li>
                    <li>• (최고급 침구류 &amp; 어메니티 일체 포함)</li>
                    <li>• 영유아 포함 전 연령 인원수에 산정</li>
                  </>
                )}
              </ul>
            </div>

            {/* Guide 3 */}
            <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] space-y-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E3DED4] flex items-center justify-center text-[#84654D] shadow-xs">
                <Sparkles size={18} />
              </div>
              <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                {language === 'en' ? 'Pool & Amenities' : '온수풀 & 부대시설'}
              </h4>
              <ul className="space-y-1.5 text-[12px] text-deep-ink/75 font-serif font-light leading-relaxed">
                {language === 'en' ? (
                  <>
                    <li>• Four-season 32~34℃ heated water (Complimentary)</li>
                    <li>• Tea set & vinyl turntable complimentary</li>
                    <li>• Dyson Airwrap & Aesop amenities provided</li>
                    <li>• Children must be accompanied by adults in pool</li>
                  </>
                ) : (
                  <>
                    <li>• 사계절 32~34℃ 온수 추가비용 무료</li>
                    <li>• 다도 티세트 &amp; LP 턴테이블 무료 제공</li>
                    <li>• 다이슨 에어랩 &amp; 이솝(Aesop) 어메니티</li>
                    <li>• 유아 온수풀 이용 시 보호자 동반 필수</li>
                  </>
                )}
              </ul>
            </div>

            {/* Guide 4 */}
            <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] space-y-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E3DED4] flex items-center justify-center text-[#84654D] shadow-xs">
                <ShieldCheck size={18} />
              </div>
              <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                {language === 'en' ? 'House Etiquette' : '숙박 수칙 & 에티켓'}
              </h4>
              <ul className="space-y-1.5 text-[12px] text-deep-ink/75 font-serif font-light leading-relaxed">
                {language === 'en' ? (
                  <>
                    <li>• Entire indoor premises strictly <strong>Non-Smoking</strong></li>
                    <li>• Open-fire cooking / deep frying restricted</li>
                    <li>• <strong>Manner Time</strong> : Quiet hours after 22:00</li>
                    <li>• Pets are not permitted</li>
                  </>
                ) : (
                  <>
                    <li>• 실내 전 구역 <strong>절대 금연</strong> (전자담배 포함)</li>
                    <li>• 직화 구이 및 기름진 조리 제한</li>
                    <li>• <strong>매너 타임</strong> : 22:00 이후 야간 정숙</li>
                    <li>• 반려동물 동반 입실 불가</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#F7F5F0] border border-[#E3DED4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="space-y-0.5">
              <p className="text-[13px] font-serif text-deep-ink font-medium">
                {language === 'en' ? 'Have questions regarding your stay or rooms?' : '객실 관련 추가 문의가 필요하신가요?'}
              </p>
              <p className="text-[12px] text-deep-ink/75 font-sans leading-relaxed">
                {language === 'en' ? (
                  <>
                    Yunseul Stay Desk: <strong className="font-semibold text-deep-ink">1544-0634</strong> (<span className="font-medium text-deep-ink">Daily 09:00 - 20:00</span>) · KakaoTalk: <strong className="font-semibold text-deep-ink">@yunseul_stay</strong>
                  </>
                ) : (
                  <>
                    윤슬 스테이 문의: <strong className="font-semibold text-deep-ink">1544-0634</strong> (<span className="font-medium text-deep-ink">연중무휴 09:00 - 20:00</span>) · 카카오톡 채널: <strong className="font-semibold text-deep-ink">@윤슬스테이</strong>
                  </>
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://open.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#84654D]/10 hover:bg-[#84654D]/20 text-[#84654D] border border-[#84654D]/30 text-[12px] font-sans font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer inline-flex items-center gap-1.5 shrink-0"
              >
                <span>카톡 문의하기</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  onNavigate('booking');
                }}
                className="px-5 py-2.5 bg-[#84654D] text-white hover:bg-[#6E533D] text-[12px] font-sans font-semibold rounded-lg shadow-sm transition-colors cursor-pointer inline-flex items-center gap-1.5 shrink-0"
              >
                {language === 'en' ? 'Book Reservation' : '실시간 예약하기'} <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BookingPage = ({ language = 'ko' }: { language?: Language }) => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      <PageHeader 
        title="RESERVATION" 
        koTitle={language === 'en' ? "Reserving Complete Emptiness and Tranquility" : "온전한 비움과 평온으로 채우는 예약"}
        subtitle="Booking Room" 
        image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="pt-16 md:pt-24 pb-20 md:pb-28 px-6 md:px-16 lg:px-24 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto">
          <BookingForm language={language} />
        </div>
      </section>
    </div>
  );
};

const SpecialPage = ({ language = 'ko' }: { language?: Language }) => {
  const [isSeasonModalOpen, setIsSeasonModalOpen] = useState(false);

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      <PageHeader 
        title="SPECIAL SERVICES" 
        koTitle={language === 'en' ? "Sanctuary Immersed in Seasonal Tapestry & Wave Harmonies" : "계절의 수놓음과 파도 소리에 빠져드는 쉼"}
        subtitle="Exclusive Programs" 
        image="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Section 01: Signature Programs Grid */}
      <section className="py-24 md:py-28 bg-[#F7F5F0] border-b border-[#E3DED4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center space-y-3 flex flex-col items-center justify-center">
            <span className="text-[15px] uppercase tracking-wider text-[#7B6248] font-cormorant font-bold block">SIGNATURE PROGRAMS</span>
            <h2 className="text-2xl md:text-3xl font-serif leading-tight text-deep-ink uppercase tracking-wide font-light">
              {language === 'en' ? 'Yunseul Stay Signature Experiences' : '윤슬 스테이 시그니처 체험'}
            </h2>
            <div className="w-12 h-px bg-[#7B6248] mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_CONTENT.specials.map((special, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1.2 }}
                className="space-y-6 group cursor-pointer"
              >
                <div className="space-y-2">
                  <span className="text-[15px] font-cormorant font-bold text-[#7B6248] tracking-wider block uppercase">0{idx + 1} / program</span>
                  <div className="aspect-[4/3] overflow-hidden shadow-md relative rounded-xl bg-[#F7F5F0] border border-[#E3DED4]">
                    <img 
                      src={special.image} 
                      alt={language === 'en' ? special.titleEn || special.title : special.titleKo || special.title} 
                      className={`w-full h-full object-cover ${idx % 2 === 0 ? 'natural-motion-img' : 'natural-motion-img-alt'}`} 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-serif text-deep-ink font-light leading-tight">
                    {language === 'en' ? special.titleEn || special.title : special.titleKo || special.title}
                  </h3>
                  <p className="text-[13px] text-deep-ink/70 font-serif font-light leading-relaxed">
                    {language === 'en' ? special.descEn || special.desc : special.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Seasonal Welcome Drinks Showcase */}
      <section className="pt-24 pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="space-y-6"
            >
              <span className="text-[15px] uppercase tracking-wider text-[#7B6248] font-cormorant font-bold block">SEASONAL RITUAL</span>
              <h3 className="text-xl md:text-3xl font-serif font-light text-deep-ink">
                {language === 'en' ? 'Seasonal Welcome Plate' : '계절을 담은 웰컴 플레이트'}
              </h3>
              <p className="text-[13px] md:text-sm text-deep-ink/70 font-serif leading-relaxed font-light">
                {language === 'en'
                  ? 'We present a signature welcome drink set so you can experience the changing weather and seasons through all five senses. From soothing matcha foam warming winter snowy ridges to sparkling mint lime ade reminiscent of summer waves, discover our season-exclusive ocean welcome tea set.'
                  : '머무시는 날씨와 계절의 변화를 오롯이 오감으로 영접하실 수 있도록 윤슬 스테이만의 특별한 웰컴 드링크 세트를 대접합니다. 차가운 겨울의 설산을 녹여주는 말차 폼부터 싱그러운 여름 파도를 닮은 민트 라임 에이드까지, 지금 시즌 전용 오션웰컴 티 세트를 만나보세요.'}
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setIsSeasonModalOpen(true)}
                  className="px-8 py-3.5 border border-[#7B6248] text-[#7B6248] text-[13px] tracking-wider uppercase hover:bg-[#7B6248] hover:text-white transition-all duration-300 font-semibold rounded-xl font-sans cursor-pointer"
                >
                  {language === 'en' ? 'View Seasonal Beverages' : '시즌 음료 자세히 보기'}
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="aspect-square shadow-lg overflow-hidden rounded-xl border border-[#E3DED4]"
              >
                <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" alt="Spring and Summer Signature Drink" className="w-full h-full object-cover natural-motion-img" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.2 }}
                className="aspect-square shadow-lg overflow-hidden mt-12 rounded-xl border border-[#E3DED4]"
              >
                <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80" alt="Autumn and Winter Signature Drink" className="w-full h-full object-cover natural-motion-img-alt" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Modal */}
      <AnimatePresence>
        {isSeasonModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#F7F5F0] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative rounded-2xl border border-[#E3DED4]"
            >
              <button 
                onClick={() => setIsSeasonModalOpen(false)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-deep-ink hover:bg-deep-ink hover:text-white transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-[35%] bg-white p-8 flex items-center justify-center">
                <div className="w-full h-full max-h-[350px] md:max-h-[500px] overflow-hidden rounded-xl shadow-md">
                  <img src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover natural-motion-img" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="w-full md:w-[65%] p-8 md:p-12 space-y-6 overflow-y-auto">
                <div className="space-y-2">
                  <span className="text-[15px] tracking-wider text-[#7B6248] uppercase font-cormorant font-bold block">Season Beverage</span>
                  <h3 className="text-2xl md:text-[30px] font-serif leading-tight text-deep-ink">
                    {language === 'en' ? 'Seasonal Signature Drinks' : '계절의 시그니처 음료'}
                  </h3>
                </div>
                <div className="space-y-4 text-sm text-deep-ink/75 leading-relaxed font-light font-serif">
                  <p>
                    {language === 'en'
                      ? 'Yunseul Stay thoughtfully prepares seasonal signature welcome drinks so you can taste the distinct atmosphere and rhythm of each season.'
                      : '윤슬 스테이는 계절의 분위기와 리듬을 미각으로도 감각할 수 있도록 매 시즌 시그니처 웰컴 드링크를 정갈하게 준비합니다.'}
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="border-l-2 border-[#7B6248]/50 pl-4 py-1">
                      <p className="font-bold text-deep-ink text-sm">Spring: Peach Blossom Tea</p>
                      <p className="text-[13px]">
                        {language === 'en' 
                          ? 'Handcrafted peach rosehip tea resembling spring petals, savored while facing the East Sea white sands.'
                          : '동해의 백사장을 마주하며 마시는, 봄의 꽃잎을 닮은 새콤달콤한 수제 피치 로즈힙 블렌딩 티'}
                      </p>
                    </div>
                    <div className="border-l-2 border-[#7B6248]/50 pl-4 py-1">
                      <p className="font-bold text-deep-ink text-sm">Summer: Ocean Lime Ade</p>
                      <p className="text-[13px]">
                        {language === 'en'
                          ? 'Sparkling organic lime and fresh mint ade symbolizing the sea cliffs and silvery glistening waves of Heonhwa-ro.'
                          : '헌화로 기암괴석과 은빛 파도를 상징하는, 싱그러운 생민트와 유기농 청라임 탄산 에이드'}
                      </p>
                    </div>
                    <div className="border-l-2 border-[#7B6248]/50 pl-4 py-1">
                      <p className="font-bold text-deep-ink text-sm">Autumn: Cinnamon Apple Es-tea</p>
                      <p className="text-[13px]">
                        {language === 'en'
                          ? 'Warm cinnamon apple tea with crisp red apple pieces and gentle spice reminiscent of a magnificent East Sea sunset.'
                          : '수려한 동해 낙조를 닮은 붉은 사과 과육과 은은한 알싸함이 특징인 따뜻한 시나몬 애플 티'}
                      </p>
                    </div>
                    <div className="border-l-2 border-[#7B6248]/50 pl-4 py-1">
                      <p className="font-bold text-deep-ink text-sm">Winter: Creamy Matcha Herbtea</p>
                      <p className="text-[13px]">
                        {language === 'en'
                          ? 'Deep and velvety organic matcha milk tea foam reinterpreting pure white sea foam and peaceful snowy mountains.'
                          : '새하얀 파도 거품과 고요한 설산을 재해석한, 깊고 부드러운 유기농 말차 밀크티 폼'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setIsSeasonModalOpen(false)}
                    className="w-full py-3.5 bg-[#7B6248] text-white text-[13px] tracking-wider uppercase hover:bg-[#634E39] border border-[#7B6248] transition-all font-semibold cursor-pointer font-sans rounded-xl"
                  >
                    {language === 'en' ? 'Close' : '닫기 (CLOSE)'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LocationPage = ({ language = 'ko' }: { language?: Language }) => {
  const [copied, setCopied] = useState(false);
  const [activeScenicIndex, setActiveScenicIndex] = useState(0);

  const copyAddress = () => {
    navigator.clipboard.writeText("강원특별자치도 강릉시 옥계면 헌화로 456");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scenicCourses = [
    {
      step: "COURSE 01",
      badge: language === 'en' ? "Oceanfront Road" : "해안선 최인접 도로",
      titleKo: "헌화로 환상 드라이브 코스",
      titleEn: "Heonhwa-ro Scenic Coastal Drive",
      timeKo: "차량 10분 소요",
      timeEn: "10 mins by car",
      bestTimeKo: "일몰 30분 전",
      bestTimeEn: "30 mins before sunset",
      descKo: "국내에서 바다와 가장 가까운 헌화로 해안도로입니다. 차창을 열면 넘실거리는 에메랄드빛 동해 파도와 웅장한 기암괴석의 절경이 파노라마처럼 펼쳐집니다.",
      descEn: "Korea's closest sea road where open windows reveal crashing azure waves, seabreeze, and majestic sea cliffs.",
      img: scenicHeonhwaDriveImg,
      icon: Car
    },
    {
      step: "COURSE 02",
      badge: language === 'en' ? "Geological Heritage" : "230만년 해안 단구",
      titleKo: "정동심곡 바다부채길 트레킹",
      titleEn: "Badabuchae Coastal Trekking Trail",
      timeKo: "차량 5분 소요",
      timeEn: "5 mins by car",
      bestTimeKo: "오전 09:00 - 11:00",
      bestTimeEn: "09:00 - 11:00",
      descKo: "천연기념물로 지정된 해안 단구 위를 거니는 목조 데크 산책로입니다. 옥빛 투명한 바다를 내려다보며 자연의 신비로움과 상쾌한 바닷바람을 온몸으로 만끽할 수 있습니다.",
      descEn: "A wooden deck path suspended over 2.3-million-year-old coastal terraces with crystal-clear emerald waters.",
      img: scenicBadabuchaeTrailImg,
      icon: Footprints
    },
    {
      step: "COURSE 03",
      badge: language === 'en' ? "Seaside Stroll Trail" : "해변 산책로",
      titleKo: "금진 해변 노을 맨발 산책로",
      titleEn: "Geumjin Beach Sunset Walkway",
      timeKo: "도보 3분 소요",
      timeEn: "3 mins walk",
      bestTimeKo: "저녁 18:30 - 20:00",
      bestTimeEn: "18:30 - 20:00",
      descKo: "고운 은모래 백사장과 붉은 등대를 따라 여유롭게 걷는 맨발 산책 코스입니다. 해질녘 수평선에 부서지는 황금빛 윤슬을 가장 가까이서 감상할 수 있습니다.",
      descEn: "Barefoot stroll along fine golden sands and the red lighthouse witnessing sun-drenched sea shimmer.",
      img: scenicGeumjinBeachImg,
      icon: Waves
    },
    {
      step: "COURSE 04",
      badge: language === 'en' ? "Sunrise Landmark" : "일출 명소 & 모래시계",
      titleKo: "정동진 모래시계 공원 & 일출",
      titleEn: "Jeongdongjin Sunrise & Landmark",
      timeKo: "차량 10분 소요",
      timeEn: "10 mins by car",
      bestTimeKo: "새벽 일출 30분 전",
      bestTimeEn: "30 mins before sunrise",
      descKo: "세계 최대 규모의 모래시계와 동해안의 상징적인 일출 명소입니다. 끝없이 펼쳐진 수평선 너머로 솟아오르는 장엄한 붉은 아침 햇살을 마주하며 하루를 열어보세요.",
      descEn: "World-famous giant hourglass paired with glorious scarlet sunrises emerging over the endless sea horizon.",
      img: scenicJeongdongjinSunriseImg,
      icon: Sunrise
    }
  ];

  const currentCourse = scenicCourses[activeScenicIndex];
  const CurrentIcon = currentCourse.icon;

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      <PageHeader 
        title="LOCATION" 
        koTitle={language === 'en' ? "Directions & Estate Location Guide" : "찾아오시는 길 및 공간 위치 안내"}
        subtitle="Directions" 
        image="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Section 01: Modern Location & Address Section */}
      <section className="py-20 md:py-28 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[13px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block">
              LOCATION &amp; ADDRESS
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-deep-ink font-light leading-tight">
              {language === 'en' ? 'Directions & Stay Location' : '오시는 길 & 위치 안내'}
            </h2>
            <p className="text-[13px] text-deep-ink/65 font-serif font-light leading-relaxed">
              {language === 'en'
                ? "Located along Korea's closest coastal roadway, Heonhwa-ro, overlooking the East Sea."
                : "바다와 가장 가까운 해안도로 헌화로 바로 앞, 동해를 마주하는 프라이빗 안식처입니다."}
            </p>
            <div className="w-12 h-px bg-[#84654D] mt-2" />
          </div>

          {/* New Balanced Dual-Panel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Atmospheric Seaside Map Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-between bg-white p-4 md:p-6 rounded-3xl border border-[#E3DED4] shadow-sm"
            >
              <div className="aspect-[16/10] w-full bg-[#EDE8DE] overflow-hidden rounded-2xl border border-[#E3DED4] relative group shadow-inner">
                <img 
                  src={BRAND_CONTENT.locationImage} 
                  alt="Location of Yunseul Stay" 
                  className="w-full h-full object-cover natural-motion-img" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Continuous Floating Pulse Marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-[#84654D]">
                      <MapPin size={22} className="text-[#84654D]" />
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[#E3DED4] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#84654D] animate-pulse" />
                    <span className="text-xs font-serif font-medium text-deep-ink">
                      {language === 'en' ? 'Yunseul Stay (Heonhwa-ro 456)' : '윤슬 스테이 (헌화로 456)'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Address Info & Instant Navigation Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#E3DED4] p-7 md:p-9 rounded-3xl shadow-sm space-y-6"
            >
              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-sans font-bold text-[#84654D] uppercase tracking-wider block">
                    {language === 'en' ? 'STAY LOCATION & ADDRESS' : '스테이 위치 및 주소 안내'}
                  </span>
                </div>

                <div className="p-5 bg-[#F7F5F0] rounded-2xl border border-[#E3DED4] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans font-bold text-[#84654D] px-2.5 py-1 bg-[#84654D]/10 rounded-full border border-[#84654D]/20 uppercase tracking-wider">
                      {language === 'en' ? 'Road Name Address' : '도로명 주소'}
                    </span>
                  </div>
                  <p className="text-base md:text-[17px] font-serif font-medium text-deep-ink leading-snug">
                    {language === 'en' 
                      ? '456, Heonhwa-ro, Okgye-myeon, Gangneung-si, Gangwon-do' 
                      : '강원특별자치도 강릉시 옥계면 헌화로 456'}
                  </p>
                  <p className="text-[12px] text-deep-ink/65 font-serif font-light leading-relaxed">
                    {language === 'en' 
                      ? 'Search "Yunseul Stay" or "Heonhwa-ro 456" in any navigation app for direct arrival.'
                      : '네비게이션에 "윤슬 스테이" 또는 "헌화로 456"을 검색하시면 전용 주차장으로 바로 안내됩니다.'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={copyAddress}
                  className={`w-full py-3.5 px-4 rounded-xl border text-[13px] font-sans font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                    copied 
                      ? 'bg-[#84654D] border-[#84654D] text-white' 
                      : 'bg-[#6B5542]/10 border-[#6B5542]/20 hover:bg-[#6B5542] hover:text-white text-[#4A3B32]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-white" />
                      <span>{language === 'en' ? 'Address copied to clipboard' : '주소가 클립보드에 복사되었습니다'}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>{language === 'en' ? 'Copy Road Address' : '주소 복사하기'}</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://map.naver.com/v5/search/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%98%A5%EA%B3%84%EB%A9%B4%20%ED%97%8C%ED%99%94%EB%A1%9C%20456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#84654D] hover:bg-[#6E533D] text-white text-[12px] font-sans font-semibold rounded-xl transition-all text-center cursor-pointer shadow-xs"
                  >
                    <MapPin size={14} className="shrink-0 text-white" />
                    {language === 'en' ? 'Naver Map' : '네이버 지도'}
                  </a>
                  <a 
                    href="https://map.kakao.com/?q=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B0%95%EB%A6%89%EC%8B%9C%20%EC%98%A5%EA%B3%84%EB%A9%B4%20%ED%97%8C%ED%99%94%EB%A1%9C%20456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 px-4 py-3 bg-[#F7F5F0] border border-[#D5CFC5] hover:bg-[#6E533D] hover:border-[#6E533D] hover:text-white text-deep-ink text-[12px] font-sans font-semibold rounded-xl transition-all text-center cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <Compass size={14} className="shrink-0 text-[#84654D] group-hover:text-white transition-colors" />
                    {language === 'en' ? 'Kakao Map' : '카카오 지도'}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Arrival Transit Summary - Icon and Text Aligned Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E3DED4] space-y-3 shadow-xs hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#E3DED4] flex items-center justify-center text-[#84654D] shrink-0">
                  <Car size={18} />
                </div>
                <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                  {language === 'en' ? 'By Car / Expressway' : '자가용 / 고속도로'}
                </h4>
              </div>
              <p className="text-[12.5px] text-deep-ink/75 font-serif leading-relaxed font-light">
                {language === 'en'
                  ? 'Exit Okgye IC on Donghae Expressway, drive 7 mins toward Heonhwa-ro coastal road. Search "Heonhwa-ro 456" or "Yunseul Stay" in navigation for direct guidance.'
                  : '동해고속도로 옥계 IC 진출 후 헌화로 방면 7분 직진. 네비게이션에 "헌화로 456" 또는 "윤슬 스테이" 검색 시 전용 주차장으로 곧바로 안내됩니다.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3DED4] space-y-3 shadow-xs hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#E3DED4] flex items-center justify-center text-[#84654D] shrink-0">
                  <Train size={18} />
                </div>
                <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                  {language === 'en' ? 'KTX / Public Transit' : 'KTX 기차 & 대중교통'}
                </h4>
              </div>
              <p className="text-[12.5px] text-deep-ink/75 font-serif leading-relaxed font-light">
                {language === 'en'
                  ? 'Approx. 15 mins by taxi from KTX Jeongdongjin Station (25 mins from Gangneung Station). Direct your driver to "Heonhwa-ro 456" for drop-off at our entrance.'
                  : 'KTX 정동진역에서 택시로 약 15분, 강릉역에서 약 25분 소요. 택시 탑승 후 기사님께 "헌화로 456 윤슬 스테이"로 요청하시면 대문 앞까지 편리하게 도착합니다.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3DED4] space-y-3 shadow-xs hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#E3DED4] flex items-center justify-center text-[#84654D] shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-[15px] font-serif font-bold text-deep-ink">
                  {language === 'en' ? 'Private Parking & Check-in' : '단독 주차 & 비대면 체크인'}
                </h4>
              </div>
              <p className="text-[12.5px] text-deep-ink/75 font-serif leading-relaxed font-light">
                {language === 'en'
                  ? 'Free private on-site parking (up to 2 vehicles). Safe contactless door lock passcode and welcome arrival instructions are sent automatically via SMS on the morning of check-in.'
                  : '스테이 건물 옆 전용 지상 주차장 무료 완비(최대 2대). 입실 당일 오전 안심 비대면 도어록 비밀번호와 입실 안내문이 등록된 연락처로 자동 발송됩니다.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 02: Guest Privileges & Curated Services */}
      <section className="bg-white border-t border-[#E3DED4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto flex flex-col items-center justify-center">
            <span className="text-[13px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block">
              GUEST PRIVILEGES &amp; SERVICES
            </span>
            <h2 className="text-2xl md:text-3xl font-serif leading-tight text-deep-ink font-light">
              {language === 'en' ? 'Exclusive Privileges for Guests' : '투숙객 전용 시그니처 혜택'}
            </h2>
            <p className="text-[13px] text-deep-ink/65 font-serif leading-relaxed font-light">
              {language === 'en'
                ? 'Curated welcome tea refreshments, luggage storage, and corkage-free dining for your rest.'
                : '웰컴 티와 다과, 무료 짐 보관, 콜키지 프리 다이닝 혜택으로 편안한 쉼을 전합니다.'}
            </p>
            <div className="w-12 h-px bg-[#84654D] mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Perk 01: Welcome Tea & Local Refreshment */}
            <div className="p-7 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] hover:border-[#84654D]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans font-bold text-[#84654D] uppercase tracking-wider">
                    {language === 'en' ? 'WELCOME TEA & TASTE' : '시그니처 웰컴 다과'}
                  </span>
                  <span className="px-2.5 py-1 bg-[#84654D]/10 text-[#84654D] text-[11px] font-sans font-bold rounded-full">
                    {language === 'en' ? 'COMPLIMENTARY' : '웰컴 세트'}
                  </span>
                </div>
                <div>
                  <h4 className="text-[16px] font-serif font-bold text-deep-ink">
                    {language === 'en' ? 'Welcome Tea & Local Refreshment' : '시그니처 웰컴 다과 & 로컬 티'}
                  </h4>
                  <p className="text-[12.5px] text-deep-ink/75 font-serif font-light leading-relaxed mt-2">
                    {language === 'en'
                      ? 'Local artisanal refreshments and handpicked Yunseul signature loose tea leaves prepared in your room upon arrival.'
                      : '체크인 시 강릉의 향을 담은 로컬 다과와 윤슬 시그니처 블렌딩 티 세트가 객실에 정갈하게 준비되어 여정의 피로를 녹여드립니다.'}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E3DED4] text-[11px] font-sans font-medium text-[#84654D] flex items-center gap-1">
                <Sparkles size={12} />
                <span>{language === 'en' ? 'Prepared in room for every guest' : '전 객실 무료 셋업'}</span>
              </div>
            </div>

            {/* Perk 02: Early Luggage Locker */}
            <div className="p-7 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] hover:border-[#84654D]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans font-bold text-[#84654D] uppercase tracking-wider">
                    {language === 'en' ? 'LUGGAGE SERVICE' : '얼리 러기지 보관'}
                  </span>
                  <span className="px-2.5 py-1 bg-[#84654D]/10 text-[#84654D] text-[11px] font-sans font-bold rounded-full">
                    {language === 'en' ? 'FREE COMPLIMENTARY' : '무료 이용'}
                  </span>
                </div>
                <div>
                  <h4 className="text-[16px] font-serif font-bold text-deep-ink">
                    {language === 'en' ? 'Early Luggage Storage Service' : '얼리 러기지(짐) 보관 서비스'}
                  </h4>
                  <p className="text-[12.5px] text-deep-ink/75 font-serif font-light leading-relaxed mt-2">
                    {language === 'en'
                      ? 'Arriving early before 16:00 check-in? Safely store your luggage in our 1F private lounge lockers and enjoy walking Heonhwa-ro freely.'
                      : '체크인 시간(16:00) 전 미리 도착하신 경우, 스테이 1층 전용 보관함에 짐을 먼저 맡기시고 가볍게 해변 산책을 즐기실 수 있습니다.'}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E3DED4] text-[11px] font-sans font-medium text-[#84654D] flex items-center gap-1">
                <Sparkles size={12} />
                <span>{language === 'en' ? '1F Garden Lounge Smart Lockers' : '1층 가든 라운지 전용 스마트 락커'}</span>
              </div>
            </div>

            {/* Perk 03: Corkage Free & Gourmet Setup */}
            <div className="p-7 rounded-2xl bg-[#F7F5F0] border border-[#E3DED4] hover:border-[#84654D]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans font-bold text-[#84654D] uppercase tracking-wider">
                    {language === 'en' ? 'CORKAGE & DINING' : '콜키지 프리 & 다이닝'}
                  </span>
                  <span className="px-2.5 py-1 bg-[#84654D]/10 text-[#84654D] text-[11px] font-sans font-bold rounded-full">
                    {language === 'en' ? 'CORKAGE FREE' : '콜키지 프리'}
                  </span>
                </div>
                <div>
                  <h4 className="text-[16px] font-serif font-bold text-deep-ink">
                    {language === 'en' ? 'Local Dining & Corkage Free Kit' : '로컬 식음료 & 콜키지 프리 키트'}
                  </h4>
                  <p className="text-[12.5px] text-deep-ink/75 font-serif font-light leading-relaxed mt-2">
                    {language === 'en'
                      ? 'Curated guides to fresh seafood delivery plus Riedel crystal wine glasses, electric wine opener, and ice bucket.'
                      : '지역 특산 해산물 포장 배달 가이드 및 리델 크리스탈 와인 잔, 전동 오프너, 아이스버킷 세트가 제공됩니다.'}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E3DED4] text-[11px] font-sans font-medium text-[#84654D] flex items-center gap-1">
                <Sparkles size={12} />
                <span>{language === 'en' ? 'Premium Oak Dining Table Ready' : '오크 다이닝 테이블 완비'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Scenic Coastal Route & Drive - Sleek & Interactive Course Showcase */}
      <section className="bg-[#F7F5F0] border-t border-[#E3DED4] pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-[13px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block">
              SCENIC TRAILS &amp; DRIVE
            </span>
            <h2 className="text-2xl md:text-3xl font-serif leading-tight text-deep-ink font-light">
              {language === 'en' ? 'Heonhwa-ro Coastal Drive & Scenic Routes' : '헌화로 감성 드라이브 & 해안 산책 코스'}
            </h2>
            <p className="text-[13px] text-deep-ink/65 font-serif leading-relaxed font-light">
              {language === 'en'
                ? "Curated coastal trails and scenic driving routes directly connected to Korea's closest coastal roadway, Heonhwa-ro."
                : '국내에서 바다와 가장 가까운 해안도로 ‘헌화로’와 이어지는 추천 힐링 코스입니다.'}
            </p>
            <div className="w-12 h-px bg-[#84654D] mt-2" />
          </div>

          {/* Course Selector Tabs - Clear, scan-friendly layout */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {scenicCourses.map((course, idx) => {
              const isActive = activeScenicIndex === idx;
              const IconComp = course.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveScenicIndex(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs font-serif transition-transform duration-300 flex items-center gap-2 cursor-pointer hover:-translate-y-1 ${
                    isActive
                      ? 'bg-[#84654D] text-white shadow-md font-medium'
                      : 'bg-white text-deep-ink/75 border border-[#E3DED4] shadow-2xs'
                  }`}
                >
                  <IconComp size={13} className={isActive ? 'text-white' : 'text-[#84654D]'} />
                  <span className="font-sans font-bold text-[11px] opacity-80">{course.step}</span>
                  <span className="text-inherit">{language === 'en' ? course.titleEn : course.titleKo.split(' ')[0] + ' ' + (course.titleKo.split(' ')[1] || '')}</span>
                </button>
              );
            })}
          </div>

          {/* Focused Course Spotlight Card */}
          <div className="bg-white rounded-3xl border border-[#E3DED4] p-6 md:p-10 shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              {(() => {
                const course = scenicCourses[activeScenicIndex];
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={activeScenicIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Visual Frame */}
                    <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#EDE8DE] border border-[#E3DED4] shadow-sm group">
                      <img
                        src={course.img}
                        alt={language === 'en' ? course.titleEn : course.titleKo}
                        className="w-full h-full object-cover natural-motion-img"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Editorial & Information */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-2.5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F5F0] rounded-full border border-[#E3DED4] text-[#84654D] text-[11px] font-sans font-bold transition-transform duration-300 hover:translate-x-1 cursor-default">
                          <IconComponent size={13} />
                          <span>{course.step} · {course.badge}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif text-deep-ink font-light leading-snug">
                          {language === 'en' ? course.titleEn : course.titleKo}
                        </h3>
                      </div>

                      <p className="text-[13.5px] text-deep-ink/75 font-serif font-light leading-relaxed">
                        {language === 'en' ? course.descEn : course.descKo}
                      </p>

                      {/* 2 Quick Info Highlight Chips with Icons and Pure Movement Hover */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                        <div className="p-4 bg-[#F7F5F0] rounded-2xl border border-[#E3DED4]/80 space-y-1 transition-transform duration-300 hover:-translate-y-1 cursor-default shadow-2xs">
                          <span className="text-[11px] font-sans text-deep-ink/50 uppercase tracking-wider flex items-center gap-1.5">
                            <Clock size={12} className="shrink-0 text-deep-ink/50" />
                            <span>{language === 'en' ? 'TRAVEL TIME' : '소요 시간'}</span>
                          </span>
                          <p className="text-[13.5px] font-serif font-medium text-deep-ink">
                            {language === 'en' ? course.timeEn : course.timeKo}
                          </p>
                        </div>

                        <div className="p-4 bg-[#F7F5F0] rounded-2xl border border-[#E3DED4]/80 space-y-1 transition-transform duration-300 hover:-translate-y-1 cursor-default shadow-2xs">
                          <span className="text-[11px] font-sans text-deep-ink/50 uppercase tracking-wider flex items-center gap-1.5">
                            <Calendar size={12} className="shrink-0 text-deep-ink/50" />
                            <span>{language === 'en' ? 'BEST VISIT TIME' : '추천 방문 시간'}</span>
                          </span>
                          <p className="text-[13.5px] font-serif font-medium text-deep-ink">
                            {language === 'en' ? course.bestTimeEn : course.bestTimeKo}
                          </p>
                        </div>
                      </div>

                      {/* Course Switch Controls */}
                      <div className="pt-4 border-t border-[#E3DED4] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveScenicIndex((prev) => (prev === 0 ? scenicCourses.length - 1 : prev - 1))}
                            aria-label="Previous Course"
                            className="w-9 h-9 rounded-full border border-[#E3DED4] bg-white text-deep-ink flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-2xs"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveScenicIndex((prev) => (prev === scenicCourses.length - 1 ? 0 : prev + 1))}
                            aria-label="Next Course"
                            className="w-9 h-9 rounded-full border border-[#E3DED4] bg-white text-deep-ink flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-2xs"
                          >
                            <ChevronRight size={16} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5">
                            {scenicCourses.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                type="button"
                                onClick={() => setActiveScenicIndex(dotIdx)}
                                aria-label={`Go to course ${dotIdx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                  activeScenicIndex === dotIdx ? 'w-5 bg-[#84654D]' : 'w-1.5 bg-[#E3DED4] hover:bg-[#84654D]/40'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-sans text-deep-ink/50 font-medium">
                            0{activeScenicIndex + 1} / 0{scenicCourses.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

const ExperiencePage = ({ 
  activeTab, 
  setActiveTab,
  language = 'ko'
}: { 
  activeTab: 'tea' | 'guestbook' | 'sound', 
  setActiveTab: (tab: 'tea' | 'guestbook' | 'sound') => void,
  language?: Language
}) => {
  const rituals = [
    {
      id: 'tea' as const,
      num: '01',
      title: language === 'en' ? 'Oceanfront Tea Experience' : '오션뷰 다도 체험',
      subtitle: language === 'en' ? 'Artisanal porcelain & 3 signature tea tasting' : '백자 다기와 시그니처 잎차 3종 테이스팅',
      enTitle: 'OCEANFRONT TEA CEREMONY',
      category: language === 'en' ? 'PROGRAM 01 · TEA THERAPY' : '프로그램 01 · 다도 체험',
      spaceBadge: language === 'en' ? '1F Garden Tea Lounge · Recommended 08:30 a.m.' : '1F 가든 티 라운지 · 추천 시간 08:30',
      headline: language === 'en'
        ? 'Oceanfront Tea Experience'
        : '오션뷰 다도 체험',
      essence: language === 'en'
        ? 'Brew warm signature tea in handcrafted porcelain facing the morning sea, quietly greeting a fresh day.'
        : '동해의 아침 바다를 마주하며 백자 다기에 따뜻한 잎차를 우려 편안하게 하루를 깨워보세요.',
      highlights: [
        { 
          label: language === 'en' ? 'Master Artisanal Teaware' : '명인 수제 백자 다기', 
          desc: language === 'en' 
            ? 'Gently pour tea into handcrafted white porcelain cups that preserve warmth and delicate notes.' 
            : '은은한 차의 온기를 오래 지켜주는 백자 다관에 차를 천천히 따르며 여유를 느껴보세요.' 
        },
        { 
          label: language === 'en' ? '3 Signature Tea Tasting' : '시그니처 잎차 3종 테이스팅', 
          desc: language === 'en' 
            ? 'Choose among coastal pine, persimmon leaf, and buckwheat blends to match your morning mood.' 
            : '솔잎차, 감물차, 메밀차 중 오늘의 기분에 어울리는 차를 골라 그윽한 향을 음미해보세요.' 
        },
        { 
          label: language === 'en' ? 'Sunrise Horizon Tea Table' : '일출 수평선 티 테이블', 
          desc: language === 'en' 
            ? 'Take your time enjoying tea at your own pace as the horizon glows with the rising sun.' 
            : '붉게 물드는 아침 바다와 파도를 바라보며 나만의 속도로 차 한 잔을 천천히 즐겨보세요.' 
        }
      ],
      amenity: language === 'en'
        ? 'All Rooms: Artisanal white porcelain teaware set, 3 signature tea tins, smart temperature kettle.'
        : '전 객실 비치 : 수제 백자 다기 세트 · 시그니처 잎차 3종 · 온도조절 스마트 티포트',
      img: specialTeaRitualImg,
      icon: Coffee
    },
    {
      id: 'guestbook' as const,
      num: '02',
      title: language === 'en' ? 'Ocean Study & Writing' : '오션뷰 서재 & 기록',
      subtitle: language === 'en' ? 'Vinyl records & analog journal writing' : 'LP 바이닐 감상과 원고지 기록 체험',
      enTitle: 'OCEAN STUDY & JOURNALING',
      category: language === 'en' ? 'PROGRAM 02 · STUDY & WRITING' : '프로그램 02 · 서재 & 기록',
      spaceBadge: language === 'en' ? '3F Starlight Study · Recommended 02:30 p.m.' : '3F 별빛 사색 서재 · 추천 시간 14:30',
      headline: language === 'en'
        ? 'Study & Journaling'
        : '서재 & 사색 기록',
      essence: language === 'en'
        ? 'Set digital devices aside and write down your quiet thoughts with a pencil on textured paper by the waves.'
        : '스마트폰을 잠시 내려놓고 파도 소리를 들으며 코튼 원고지에 나만의 생각을 연필로 기록해보세요.',
      highlights: [
        { 
          label: language === 'en' ? 'Inspirational Prompts' : '영감의 질문 카드', 
          desc: language === 'en' 
            ? 'Pick a thoughtful prompt card and let your honest reflections unfold onto the page with ease.' 
            : '바다와 나를 잇는 7가지 사색 질문 카드를 골라 솔직한 마음을 편안하게 적어보세요.' 
        },
        { 
          label: language === 'en' ? 'Travelers\' Guestbook' : '여행자 방명록 교감', 
          desc: language === 'en' 
            ? 'Read heartwarming notes left by past travelers and add a gentle sentence of your own.' 
            : '먼저 다녀간 이들의 따뜻한 문장을 읽어보고, 나만의 다정한 이야기도 함께 남겨보세요.' 
        },
        { 
          label: language === 'en' ? 'Starlight Study & Vinyl Record' : '별빛 사색 서재 & LP 턴테이블', 
          desc: language === 'en' 
            ? 'Place a curated vinyl record on the turntable and turn pages by the scenic ocean window.' 
            : '마음에 드는 LP 음악을 턴테이블에 올리고, 파도 소리와 함께 시집의 책장을 넘겨보세요.' 
        }
      ],
      amenity: language === 'en'
        ? '3F Study: 300gsm handmade cotton stationery, cedar graphite pencils, archival envelope set.'
        : '3층 서재 비치 : 300gsm 수제 코튼 원고지 · 삼나무 연필 세트 · 나만의 보관용 봉투',
      img: specialGuestJournalImg,
      icon: BookOpen
    },
    {
      id: 'sound' as const,
      num: '03',
      title: language === 'en' ? 'Singing Bowl Sound Experience' : '싱잉볼 사운드 체험',
      subtitle: language === 'en' ? 'Ocean wave ASMR & singing bowl meditation' : '파도 백색소음과 브라스 싱잉볼 이완 명상',
      enTitle: 'SINGING BOWL SOUND THERAPY',
      category: language === 'en' ? 'PROGRAM 03 · SOUND THERAPY' : '프로그램 03 · 사운드 테라피',
      spaceBadge: language === 'en' ? '3F Sound Atelier · Recommended 10:00 p.m.' : '3F 사운드 아틀리에 · 추천 시간 22:00',
      headline: language === 'en'
        ? 'Singing Bowl Sound Therapy'
        : '싱잉볼 사운드 테라피',
      essence: language === 'en'
        ? 'Strike the singing bowl in rhythm with nocturnal tides, letting resonant tones release daily fatigue.'
        : '밤바다의 파도 소리에 맞춰 싱잉볼을 조용히 울리며 하루의 피로와 복잡한 생각을 비워보세요.',
      highlights: [
        { 
          label: language === 'en' ? 'Nepalese Full Moon Bowl' : '네팔 전통 풀문 싱잉볼', 
          desc: language === 'en' 
            ? 'Gently strike the singing bowl with the mallet and feel the deep resonance soothe your senses.' 
            : '말렛으로 싱잉볼을 가볍게 두드려 깊게 퍼져나가는 브라스 공명을 온몸으로 느껴보세요.' 
        },
        { 
          label: language === 'en' ? 'Coastal Wave Ocean ASMR' : '헌화로 파도소리 백색소음', 
          desc: language === 'en' 
            ? 'Listen closely to the rolling waves outside the window and let the lingering tones relax your mind.' 
            : '창밖 해안에서 밀려오는 밤 파도 소리에 귀를 기울이며 싱잉볼 잔향에 몸을 맡겨보세요.' 
        },
        { 
          label: language === 'en' ? 'Cypress Aroma & Restful Sleep' : '편백 아로마 & 숙면 명상', 
          desc: language === 'en' 
            ? 'Lean back on the natural cypress cushion, letting go of all tension to invite restorative sleep.' 
            : '은은한 편백 방석에 편안히 기대어 긴장을 내려놓고 가장 깊고 포근한 잠을 청해보세요.' 
        }
      ],
      amenity: language === 'en'
        ? '3F Atelier: Handcrafted brass singing bowls, suede mallet, natural cypress cushions.'
        : '3층 아틀리에 비치 : 네팔 수제 풀문 싱잉볼 & 스웨이드 말렛 · 편백 명상 방석',
      img: specialSoundMeditationImg,
      icon: Sparkles
    }
  ];

  return (
    <div className="bg-[#F7F5F0] min-h-screen">
      <PageHeader 
        title="EXPERIENCE" 
        koTitle={language === 'en' ? "Deep Reflection & Serenity Through Analog Moments" : "아날로그로 마주하는 깊은 사색과 온전한 쉼"}
        subtitle="Signature Experiences" 
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div id="timeless-experiences" className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-28 space-y-12">
        
        {/* Switcher Header without 'ritual' word */}
        <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center justify-center">
          <span className="text-[13px] uppercase tracking-wider text-[#84654D] font-cormorant font-bold block">
            TIMELESS HEALING EXPERIENCES
          </span>
          <h2 className="text-2xl md:text-3xl font-serif leading-tight text-deep-ink font-light">
            {language === 'en' ? "Yunseul Stay Signature Healing Programs" : "윤슬 스테이 시그니처 힐링 프로그램"}
          </h2>
          <p className="text-[13px] text-deep-ink/65 font-serif leading-relaxed font-light">
            {language === 'en'
              ? 'Three curated healing programs designed to help you relax and focus entirely on your wellness.'
              : '오롯이 나에게 집중하며 심신의 피로를 비워내는 3가지 핵심 힐링 프로그램입니다.'}
          </p>
          <div className="w-12 h-px bg-[#84654D] mt-2" />
        </div>

        {/* Side-by-Side: Left Column (Buttons) & Right Column (Card Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Vertical Program Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {rituals.map((r) => {
              const IconComp = r.icon;
              const isSelected = activeTab === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveTab(r.id)}
                  className={`relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected 
                      ? 'bg-white border-[#84654D] shadow-md ring-2 ring-[#84654D]/25' 
                      : 'bg-white/70 border-[#E3DED4] hover:bg-white hover:border-[#84654D]/40 text-deep-ink shadow-xs'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#84654D] rounded-l-2xl" />
                  )}
                  <div className="flex items-center justify-between pl-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#84654D] text-white' : 'bg-[#F7F5F0] text-[#84654D] border border-[#E3DED4]'
                      }`}>
                        <IconComp size={15} />
                      </div>
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#84654D]">
                        {r.category}
                      </span>
                    </div>
                    <span className="text-[12px] font-serif font-light text-[#84654D]">
                      0{r.num}
                    </span>
                  </div>
                  <div className="space-y-1 pt-1 pl-1">
                    <h4 className="text-[15px] sm:text-[16px] font-serif font-medium text-deep-ink leading-snug break-keep">
                      {r.title}
                    </h4>
                    <p className="text-[12px] sm:text-[11.5px] text-deep-ink/75 font-serif font-light line-clamp-1 break-keep">
                      {r.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card Box Showcase */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E3DED4] shadow-sm overflow-hidden p-5 sm:p-6 md:p-10">
            <AnimatePresence mode="wait">
              {rituals.map((r) => {
                if (activeTab !== r.id) return null;
                const IconComp = r.icon;
                return (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-6 sm:space-y-8"
                  >
                    {/* Visual Frame - Clean, no text overlays */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E3DED4] shadow-sm bg-[#EDE8DE] group">
                      <img 
                        src={r.img} 
                        alt={r.headline} 
                        className="w-full h-full object-cover natural-motion-img" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>

                    {/* Editorial Details */}
                    <div className="space-y-5 sm:space-y-6">
                      <div className="space-y-2.5 sm:space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3.5 py-1 bg-[#84654D]/10 text-[#84654D] border border-[#84654D]/25 font-serif font-medium text-[11.5px] rounded-full shadow-2xs break-keep">
                            {r.spaceBadge}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif text-deep-ink font-light leading-snug pt-1.5 break-keep">
                          {r.headline}
                        </h3>
                      </div>

                      <p className="text-[13.5px] md:text-[14px] text-deep-ink/80 font-serif font-light leading-relaxed break-keep">
                        {r.essence}
                      </p>

                      {/* 3 Highlights Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                        {r.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="p-3.5 sm:p-4 bg-[#F7F5F0] rounded-2xl border border-[#E3DED4]/80 space-y-1.5">
                            <h5 className="text-[13px] sm:text-[12.5px] font-serif font-bold text-deep-ink break-keep">{item.label}</h5>
                            <p className="text-[12px] sm:text-[11.5px] text-deep-ink/75 font-serif leading-relaxed font-light break-keep">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    return (localStorage.getItem('currentPage') as Page) || 'home';
  });
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(() => {
    return localStorage.getItem('selectedRoomId') || null;
  });
  const [experienceTab, setExperienceTab] = useState<'tea' | 'guestbook' | 'sound'>(() => {
    return (localStorage.getItem('experienceTab') as 'tea' | 'guestbook' | 'sound') || 'tea';
  });
  const [language, setLanguage] = useState<Language>('ko');
  const [refreshKey, setRefreshKey] = useState<number>(0);

  // Legal Policies Modal State
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Single unified path navigation
  const handleNavigate = (
    p: Page, 
    roomId: string | null = null, 
    expTab: 'tea' | 'guestbook' | 'sound' = 'tea', 
    targetId?: string,
    forceRefresh: boolean = false
  ) => {
    const targetPage = p === 'story' ? 'home' : p;
    localStorage.setItem('currentPage', targetPage);
    setCurrentPage(targetPage);
    
    // Increment refreshKey whenever forceRefresh is set or when clicking the current page's menu
    if (forceRefresh || (!targetId && targetPage === currentPage)) {
      setRefreshKey(prev => prev + 1);
    }
    
    if (targetPage !== 'rooms') {
      localStorage.removeItem('selectedRoomId');
      setSelectedRoomId(null);
    } else if (roomId) {
      localStorage.setItem('selectedRoomId', roomId);
      setSelectedRoomId(roomId);
    } else {
      localStorage.removeItem('selectedRoomId');
      setSelectedRoomId(null);
    }
    
    localStorage.setItem('experienceTab', expTab);
    setExperienceTab(expTab);
    
    const scrollTarget = p === 'story' ? 'story-section' : targetId;
    if (scrollTarget) {
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top immediately and reinforce
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  };

  // Disable automatic scroll restoration on load/reload to avoid jumping down
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentPage !== 'rooms' || !selectedRoomId) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [currentPage, selectedRoomId, refreshKey]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-gold/10 selection:text-accent-gold">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        language={language}
        setLanguage={setLanguage}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div 
              key={`home-${refreshKey}`} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HomePage 
                onNavigate={handleNavigate}
                language={language}
              />
            </motion.div>
          )}
          {currentPage === 'rooms' && (
            <motion.div 
              key={`rooms-${refreshKey}`} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <RoomsPage 
                selectedRoomId={selectedRoomId} 
                setSelectedRoomId={(id) => {
                  if (id) {
                    localStorage.setItem('selectedRoomId', id);
                  } else {
                    localStorage.removeItem('selectedRoomId');
                  }
                  setSelectedRoomId(id);
                }} 
                onNavigate={handleNavigate}
                language={language}
              />
            </motion.div>
          )}
          {currentPage === 'location' && (
            <motion.div 
              key={`location-${refreshKey}`} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <LocationPage language={language} />
            </motion.div>
          )}
          {currentPage === 'booking' && (
            <motion.div 
              key={`booking-${refreshKey}`} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <BookingPage language={language} />
            </motion.div>
          )}
          {currentPage === 'experience' && (
            <motion.div 
              key={`experience-${refreshKey}`} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ExperiencePage 
                activeTab={experienceTab} 
                setActiveTab={(t) => {
                  localStorage.setItem('experienceTab', t);
                  setExperienceTab(t);
                }} 
                language={language}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer 
        onNavigate={handleNavigate} 
        language={language} 
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />
      <LegalPolicyModal 
        isOpen={!!legalModalType} 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
        language={language} 
      />
      <ScrollToTop />
      <FloatingConsultationButton />
    </div>
  );
}
