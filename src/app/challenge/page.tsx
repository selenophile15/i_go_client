"use client";
import NavBar from "@/components/common/topNav";
import Link from "next/link";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { useRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";  //진행도 프로그래스바

interface AchievementBarProps {
  achieved: number;
  goal: number;
}

interface ModalProps {
  icon: string;
  challengeday: string;
  lastday: string;
}

function AchievementBar({ achieved, goal }: AchievementBarProps) {
  const value = Math.min((achieved / goal) * 100, 100);
  return <ProgressBar completed={value} maxCompleted={100} labelColor="transparent" height="8px" bgColor="#01274F"/>;
}

const Modal: React.FC<ModalProps> = ({ icon, challengeday, lastday }) => {
  return (
      <div>
          <div className="flex flex-col items-center bg-[#FAFAFA] rounded-[8px] py-[16px]">
              <div className="text-[18px]">{icon}</div>
              <div className="text-[#01274F] text-[14px] leading-[150%] line-clamp-1 tracking-[-0.8px]">{challengeday}</div>
              <div className="text-[#737373] text-[12px] leading-[150%] line-clamp-1 tracking-[-0.8px]">{lastday}</div>
          </div>
      </div>
  );
};

export default function Home() {
    const divRef = useRef<HTMLDivElement>(null);

    const value = 30;

    const handleDownload = async () => {
        if (!divRef.current) return;

        try {
        const div = divRef.current;
        const canvas = await html2canvas(div, { scale: 2 });
        canvas.toBlob((blob) => {
            if (blob !== null) {
            saveAs(blob, "challenge.png");
            }
        });
        } catch (error) {
        console.error("저장에 실패하였습니다.", error);
        }
    };

  return  (
    <div className="flex flex-col w-full h-full" ref={divRef}>
      {/*header*/}
      <NavBar title="노지각 챌린지" link="/mypage"></NavBar>

      {/*main*/}
      <div className="w-full max-h-full overflow-y-auto">
        <div className="pt-[24px] pb-[32px] px-[16px]">
          <div className="pb-[8px] flex justify-between">
            <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
              달성률
            </p>
            <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
              5/10
            </p>
          </div>
          <div>
            <AchievementBar achieved={50} goal={100} />
          </div>
        </div>
        <div className="px-[16px]"
          style={{
            backgroundImage: `url('/stampway.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            backgroundSize: '352px',
          }}>
          <div>

            <div className="w-full h-[80px] flex justify-center gap-[30px] mb-[50px]"> {/* 123일차 */}
              <div className="w-[80px] border-[2px] border-[#01274F] rounded-[9999px] bg-[#FFFFFF] flex flex-col justify-center items-center">
                <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
                  1일차
                </p>
                <img src="stamp1.svg" alt="이미지" />
                <p className="text-[12px] leading-[130%] tracking-[-0.8px]">
                  완료!
                </p>
              </div>
              <div className="w-[80px] border-[2px] border-[#01274F] rounded-[9999px] bg-[#FFFFFF] flex flex-col justify-center items-center">
                <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
                  2일차
                </p>
                <img src="stamp2.svg" alt="이미지" />
                <p className="text-[12px] leading-[130%] tracking-[-0.8px]">
                  완료!
                </p>
              </div>
              <div className="w-[80px] border-[2px] border-[#01274F] rounded-[9999px] bg-[#FFFFFF] flex flex-col justify-center items-center">
                <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
                  3일차
                </p>
                <img src="stamp3.svg" alt="이미지" />
                <p className="text-[12px] leading-[130%] tracking-[-0.8px]">
                  완료!
                </p>
              </div>
            </div>

            <div className="w-full h-[80px] flex justify-center gap-[40px] mb-[50px]"> {/* 45일차 */}
              <div className="w-[80px] border-[2px] border-[#01274F] rounded-[9999px] bg-[#FFFFFF] flex flex-col justify-center items-center">
                <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
                  5일차
                </p>
                <img src="stamp5.svg" alt="이미지" />
                <p className="text-[12px] leading-[130%] tracking-[-0.8px]">
                  완료!
                </p>
              </div>
              <div className="w-[80px] border-[2px] border-[#01274F] rounded-[9999px] bg-[#FFFFFF] flex flex-col justify-center items-center">
                <p className="text-[14px] leading-[130%] tracking-[-0.8px]">
                  4일차
                </p>
                <img src="stamp4.svg" alt="이미지" />
                <p className="text-[12px] leading-[130%] tracking-[-0.8px]">
                  완료!
                </p>
              </div>
            </div>
            <div className="w-full h-[80px] flex justify-center gap-[30px] mb-[50px]"> {/* 678일차 */}
              <div className="w-[80px] border-[2px] border-[#01274F] border-dotted rounded-[9999px] bg-[#E5E5E5] flex flex-col justify-center items-center">
                <img src="lock.svg" alt="이미지" />
              </div>
              <div className="w-[80px] border-[2px] border-[#01274F] border-dotted rounded-[9999px] bg-[#E5E5E5] flex flex-col justify-center items-center">
                <img src="lock.svg" alt="이미지" />
              </div>
              <div className="w-[80px] border-[2px] border-[#01274F] border-dotted rounded-[9999px] bg-[#E5E5E5] flex flex-col justify-center items-center">
                <img src="lock.svg" alt="이미지" />
              </div>
            </div>

            <div className="w-full h-[80px] flex justify-center gap-[40px] mb-[40px]"> {/* 910일차 */}
              <div className="w-[80px] border-[2px] border-[#01274F] border-dotted rounded-[9999px] bg-[#E5E5E5] flex flex-col justify-center items-center">
                <img src="lock.svg" alt="이미지" />
              </div>
              <div className="w-[80px] border-[2px] border-[#01274F] border-dotted rounded-[9999px] bg-[#E5E5E5] flex flex-col justify-center items-center">
                <img src="lock.svg" alt="이미지" />
              </div>
            </div>

            <div className="py-[10px] px-[5px] bg-[#FFFFFF] border-[2px] border-[#01274F] rounded-[7px] text-[#01274F] text-[15px] tracking-[-0.6px] font-[500]">
              <p className="text-center leading-[130%] tracking-[-0.8px]">
                챌린지 성공!
              </p>
            </div>
            

          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="absolute bottom-[0px] left-[0px]  grid grid-cols-2 w-full bg-[#fff] p-[12px] gap-[12px]">
        <button
          className="hover:opacity-[0.7] cursor-pointer py-[10px] px-[5px] bg-[#01274F] border-[1px] border-[#01274F] rounded-[7px] text-[#fff] text-[15px] tracking-[-0.6px] font-[500]"
          onClick={() => {
            location.href = "/";
          }}
          type="button"
        >
          인스타 스토리 공유하기
        </button>
        <button
          className="hover:opacity-[0.7] cursor-pointer py-[10px] px-[5px] bg-[#fff] border-[2px] border-[#01274F] rounded-[7px] text-[#01274F] text-[15px] tracking-[-0.6px] font-[500]"
          onClick={ handleDownload }
          type="button"
        >
          이미지 저장하기
        </button>
      </div>
    </div>
    );
}
