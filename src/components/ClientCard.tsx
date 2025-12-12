import svgPaths from "../imports/svg-nhy92oxovn";
import { Zap } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

interface Badge {
  type: 'exercise' | 'lifestyle' | 'consult';
  label: string;
}

interface ClientCardProps {
  name: string;
  avatarSrc: string;
  completedSessions: number;
  badges: Badge[];
  borderColor: string;
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <foreignObject height="30" width="30" x="-3" y="-3">
          <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_0_6_461_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
        </foreignObject>
        <g data-figma-bg-blur-radius="3" id="Frame 926">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="24" rx="12" width="24" />
          <path d={svgPaths.p23fd0680} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="bgblur_0_6_461_clip_path" transform="translate(3 3)">
            <rect height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <foreignObject height="30" width="30" x="-3" y="-3">
          <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_0_6_452_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
        </foreignObject>
        <g data-figma-bg-blur-radius="3" id="Frame 927">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="24" rx="12" width="24" />
          <path d={svgPaths.p3912b100} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="bgblur_0_6_452_clip_path" transform="translate(3 3)">
            <rect height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Frame 928">
            <path d={svgPaths.p38cbc500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2ff59b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FrameClose() {
  return (
    <div className="backdrop-blur-[1.5px] backdrop-filter bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[20px] shrink-0 size-[24px]" data-name="Frame">
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start justify-end right-[12px] top-[calc(50%-8px)] translate-y-[-50%]">
      <Frame13 />
      <Frame14 />
      <FrameClose />
    </div>
  );
}

function Frame10({ avatarSrc, borderColor }: { avatarSrc: string; borderColor: string }) {
  return (
    <div className="h-[72px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#057099] inset-0" />
        <img alt="" className="absolute max-w-none mix-blend-soft-light object-50%-50% object-cover opacity-20 size-full" src={avatarSrc} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-start p-[16px] relative w-full">
          <Frame12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-solid inset-0 pointer-events-none" style={{ borderWidth: '5px 0px 0px', borderColor }} />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-black relative rounded-[32px] shrink-0 size-[16px]">
      <div className="absolute aspect-[3840/2160] bottom-[31.25%] left-1/2 top-[31.25%] translate-x-[-50%]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/5551f2ffc84c48cc9a5dff421ac5238fa2a0fa42.png" />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="overflow-clip relative rounded-[14px] shrink-0 size-[16px]">
      <div className="absolute aspect-[512/512] bottom-0 left-1/2 top-0 translate-x-[-50%]" data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/f1231b9b145fa91c62c5ffd92ed0a9dd8dffdb29.png" />
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] box-border content-stretch flex gap-[2px] items-center p-[2px] relative rounded-[17px] shrink-0" data-name="Input-field">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame6({ name }: { name: string }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17] overflow-ellipsis overflow-hidden whitespace-pre">{name}</p>
      </div>
      <InputField />
    </div>
  );
}

function Frame7({ completedSessions }: { completedSessions: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] tracking-[-0.12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17]">{completedSessions} completed sessions</p>
      </div>
    </div>
  );
}

function Frame11({ name, completedSessions }: { name: string; completedSessions: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-center relative shrink-0 w-full">
      <Frame6 name={name} />
      <Frame7 completedSessions={completedSessions} />
    </div>
  );
}

function ExerciseBadge({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[3px] pr-[6px] py-[3px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#52cbfa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[16px]">
        <div className="relative shrink-0 size-[14px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="icon">
              <path d={svgPaths.p57b0a00} fill="var(--fill-0, #045A7C)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{label}</p>
    </div>
  );
}

function LifestyleBadge({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[3px] pr-[6px] py-[3px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#08f7ad] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[16px]">
        <div className="relative shrink-0 size-[12px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="icon">
              <path d={svgPaths.p20510080} fill="var(--fill-0, #036345)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{label}</p>
    </div>
  );
}

function ConsultBadge({ label }: { label: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[3px] pr-[6px] py-[3px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#7f79ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[16px]">
        <div className="overflow-clip relative shrink-0 size-[14px]">
          <div className="absolute h-[8.517px] left-[calc(50%-0.26px)] top-[calc(50%-0.24px)] translate-x-[-50%] translate-y-[-50%] w-[11.49px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
              <g clipPath="url(#clip0_6_458)" id="image (2) 1">
                <path d={svgPaths.p295f6080} fill="var(--fill-0, #191386)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_6_458">
                  <rect fill="white" height="8.51742" width="11.49" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{label}</p>
    </div>
  );
}

function Frame16({ badges }: { badges: Badge[] }) {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
      {badges.map((badge, index) => {
        if (badge.type === 'exercise') {
          return <ExerciseBadge key={index} label={badge.label} />;
        } else if (badge.type === 'lifestyle') {
          return <LifestyleBadge key={index} label={badge.label} />;
        } else if (badge.type === 'consult') {
          return <ConsultBadge key={index} label={badge.label} />;
        }
        return null;
      })}
    </div>
  );
}

function Frame8({ name, completedSessions, badges }: { name: string; completedSessions: number; badges: Badge[] }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[40px] px-[16px] relative w-full">
          <Frame11 name={name} completedSessions={completedSessions} />
          <Frame16 badges={badges} />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="absolute bg-[#73e292] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[40px] overflow-clip px-[5px] py-[8px] rounded-[17px] size-[16px] top-[40px] cursor-pointer" data-name="Frame">
          <Zap className="shrink-0 size-[10px] text-[#036345]" strokeWidth={2.5} />
        </div>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        sideOffset={4}
        className="bg-[#000] text-white p-[2px] rounded-[4px] text-xs"
      >
        Working out now
      </TooltipContent>
    </Tooltip>
  );
}

function Frame17({ avatarSrc }: { avatarSrc: string }) {
  return (
    <div className="absolute left-[16px] size-[56px] top-[44px]">
      <div className="absolute left-0 size-[56px] top-0">
        <img alt="" className="block max-w-none size-full rounded-full object-cover" height="56" src={avatarSrc} width="56" />
      </div>
      <Frame5 />
    </div>
  );
}

export function ClientCard({ name, avatarSrc, completedSessions, badges, borderColor }: ClientCardProps) {
  return (
    <div className="bg-[#2f2f32] relative rounded-[6px] w-[236px] z-50">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame10 avatarSrc={avatarSrc} borderColor={borderColor} />
        <Frame8 name={name} completedSessions={completedSessions} badges={badges} />
        <Frame17 avatarSrc={avatarSrc} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}
