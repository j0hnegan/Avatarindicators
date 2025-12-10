import { useState, useRef, useCallback } from "react";
import svgPaths from "./svg-rjk13lumvv";
import svgPathsCard from "./svg-4ik55nx1tv";
import svgPathsCardHeader from "./svg-xg6gjeaaib";
import { ClientCard } from "../components/ClientCard";
import { Zap } from "lucide-react";

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center p-[12px] relative rounded-[40.317px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33] whitespace-pre">Add Task</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center p-[12px] relative rounded-[40.317px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33] whitespace-pre">See all</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center p-[12px] relative rounded-[40.317px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33] whitespace-pre">View completed</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.96px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tasks
      </p>
      <Frame35 />
    </div>
  );
}

function Bullet() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Bullet">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2D2D2D)" id="Ellipse 13" r="11.5" stroke="var(--stroke-0, #939393)" />
        </svg>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[18.936px] items-center relative shrink-0">
      <div className="relative shrink-0 rounded-full border-[2px] border-[#52CBFA] border-solid w-[24px] h-[24px] flex items-center justify-center">
        <div className="rounded-full border border-[#27272A] border-solid w-[20px] h-[20px] flex items-center justify-center">
          <img alt="" className="block size-[18px] rounded-full object-cover" src="https://images.unsplash.com/photo-1705830337569-47a1a24b0ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzYzMzYyNzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">Mike Franelli</p>
      </div>
    </div>
  );
}

function Client() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="Client">
      <Frame36 />
      <Frame71 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[16px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5aa8de] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-[14px] whitespace-pre">
          <span className="font-['Mona_Sans:Bold',sans-serif] font-bold not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            Due
          </span>
          <span>{` : Mon, April 24`}</span>
        </p>
      </div>
      <Client />
    </div>
  );
}

function TaskContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Task Content">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.07]">Respond to Sammie Reedsport’ direct message</p>
      </div>
      <Frame74 />
    </div>
  );
}

function TaskHorizontal() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[415px]" data-name="Task (horizontal)">
      <Bullet />
      <TaskContent />
    </div>
  );
}

function Bullet1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Bullet">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2D2D2D)" id="Ellipse 13" r="11.5" stroke="var(--stroke-0, #939393)" />
        </svg>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[18.936px] items-center relative shrink-0">
      <div className="relative shrink-0 rounded-full border-[2px] border-[#08F7AD] border-solid w-[24px] h-[24px] flex items-center justify-center">
        <div className="rounded-full border border-[#27272A] border-solid w-[20px] h-[20px] flex items-center justify-center">
          <img alt="" className="block size-[18px] rounded-full object-cover" src="https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMyNzcxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">Mike Franelli</p>
      </div>
    </div>
  );
}

function Client1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="Client">
      <Frame37 />
      <Frame72 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[16px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5aa8de] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-[14px] whitespace-pre">
          <span className="font-['Mona_Sans:Bold',sans-serif] font-bold not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            Due
          </span>
          <span>{` : Mon, April 24`}</span>
        </p>
      </div>
      <Client1 />
    </div>
  );
}

function TaskContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Task Content">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.07]">Consult overdue with Taylor Tiumi; schedule today</p>
      </div>
      <Frame76 />
    </div>
  );
}

function TaskHorizontal1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[415px]" data-name="Task (horizontal)">
      <Bullet1 />
      <TaskContent1 />
    </div>
  );
}

function Bullet2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Bullet">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2D2D2D)" id="Ellipse 13" r="11.5" stroke="var(--stroke-0, #939393)" />
        </svg>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[18.936px] items-center relative shrink-0">
      <div className="relative shrink-0 rounded-full border-[2px] border-[#7F79EC] border-solid w-[24px] h-[24px] flex items-center justify-center">
        <div className="rounded-full border border-[#27272A] border-solid w-[20px] h-[20px] flex items-center justify-center bg-[#52525B]">
          <span className="text-[8px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white leading-none" style={{ fontVariationSettings: "'wdth' 100" }}>MF</span>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">Mike Franelli</p>
      </div>
    </div>
  );
}

function Client2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="Client">
      <Frame38 />
      <Frame73 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[16px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5aa8de] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-[14px] whitespace-pre">
          <span className="font-['Mona_Sans:Bold',sans-serif] font-bold not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            Due
          </span>
          <span>{` : Mon, April 24`}</span>
        </p>
      </div>
      <Client2 />
    </div>
  );
}

function TaskContent2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Task Content">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.07]">Lauren Singer has an outstanding invoice that needs to be paid</p>
      </div>
      <Frame77 />
    </div>
  );
}

function TaskHorizontal2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[415px]" data-name="Task (horizontal)">
      <Bullet2 />
      <TaskContent2 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full">
      <TaskHorizontal />
      <TaskHorizontal1 />
      <TaskHorizontal2 />
    </div>
  );
}

function Tasks() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[37px] items-start left-[32px] top-[-343px] w-[1119px]" data-name="Tasks">
      <Frame39 />
      <Frame34 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex font-['Mona_Sans:Bold',sans-serif] font-bold gap-[40px] items-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap uppercase" data-name>
      <div className="flex flex-col justify-center relative shrink-0 text-white tracking-[-0.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Dashboard</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#898989]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Clients</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#898989]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Index</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#898989]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Coaches</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#898989]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Programs</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[26.006px] relative shrink-0 w-[123.232px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 26">
        <g id="Frame 577">
          <g id="Frame 679">
            <path d={svgPaths.p19443500} fill="var(--fill-0, #8D8D96)" id="Vector" />
            <g id="PhChat">
              <path d={svgPaths.p2bc69e00} fill="var(--fill-0, #8D8D96)" id="Vector_2" />
            </g>
          </g>
          <path d={svgPaths.p27407c0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col h-[26.006px] items-start justify-between relative shrink-0">
      <Frame30 />
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-between relative shrink-0 w-full" data-name="Header Nav">
      <div className="h-[28px] relative shrink-0 w-[110px]" data-name="CoachRx_White-6855787d72e0da9e54266727c85e549a 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/8988f58f3d77ccefb92f92d04b4880d9a969c424.png" />
      </div>
      <Component />
      <Frame44 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-[11px] top-0 w-[1440px]">
      <HeaderNav />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

// Holly Cox Card Components
function HollyCardIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g data-figma-bg-blur-radius="3" id="Frame 926">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="24" rx="12" width="24" />
          <path d={svgPathsCardHeader.p23fd0680} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="bgblur_0_35_568_clip_path" transform="translate(3 3)">
            <rect height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HollyCardIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g data-figma-bg-blur-radius="3" id="Frame 927">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="24" rx="12" width="24" />
          <path d={svgPathsCardHeader.p3912b100} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="bgblur_0_35_571_clip_path" transform="translate(3 3)">
            <rect height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HollyCardIcon3() {
  return (
    <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Frame 928">
            <path d={svgPathsCardHeader.p38cbc500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPathsCardHeader.p2ff59b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HollyCardIcon3Wrapper() {
  return (
    <div className="backdrop-blur-[1.5px] backdrop-filter bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[20px] shrink-0 size-[24px]" data-name="Frame">
      <HollyCardIcon3 />
    </div>
  );
}

function HollyCardHeaderIcons() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start justify-end right-[12px] top-[calc(50%-8px)] translate-y-[-50%]">
      <HollyCardIcon1 />
      <HollyCardIcon2 />
      <HollyCardIcon3Wrapper />
    </div>
  );
}

function HollyCardHeader() {
  return (
    <div className="relative h-[72px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E12AFB] to-[#FF2056]" />
        <img alt="" className="absolute max-w-none mix-blend-soft-light object-50%-50% object-cover opacity-[0.76] size-full" src="/assets/8fb29c9b39c178de0ad31cdd7dd4862c29a944ba.png" />
      </div>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative size-full">
          <HollyCardHeaderIcons />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e441fb] border-[5px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HollyCardTeamBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] box-border content-stretch flex gap-[2px] items-center p-[2px] relative rounded-[17px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <div className="bg-black relative rounded-[32px] shrink-0 size-[16px]">
        <div className="absolute aspect-[3840/2160] bottom-[31.25%] left-1/2 top-[31.25%] translate-x-[-50%]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/5551f2ffc84c48cc9a5dff421ac5238fa2a0fa42.png" />
        </div>
      </div>
      <div className="overflow-clip relative rounded-[14px] shrink-0 size-[16px]">
        <div className="absolute aspect-[512/512] bottom-0 left-1/2 top-0 translate-x-[-50%]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/assets/f1231b9b145fa91c62c5ffd92ed0a9dd8dffdb29.png" />
        </div>
      </div>
    </div>
  );
}

function HollyCardName() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0 w-[244px]">
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17] overflow-ellipsis overflow-hidden whitespace-pre">Holly Cox</p>
      </div>
      <HollyCardTeamBadge />
    </div>
  );
}

function HollyCardSessions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[244px]">
      <div className="flex flex-col font-['Mona_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] tracking-[-0.12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17]">12 Completed Sessions</p>
      </div>
    </div>
  );
}

function HollyCardNameSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <HollyCardName />
      <HollyCardSessions />
    </div>
  );
}

function HollyCardInfo() {
  return (
    <div className="content-stretch flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[-0.12px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[244px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17]">
          <span className="font-['Mona_Sans:Medium',sans-serif] font-medium not-italic text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Client Since:
          </span>
          <span className="font-['Mona_Sans:Medium',sans-serif] font-medium not-italic text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
          </span>
          03/20/2025
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[244px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17]">
          <span className="font-['Mona_Sans:Medium',sans-serif] font-medium not-italic text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Last Consult:
          </span>
          <span>{` 09/01/2025`}</span>
        </p>
      </div>
    </div>
  );
}

function HollyCardExerciseBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[3px] pr-[6px] py-[3px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#52cbfa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[16px]">
        <div className="relative shrink-0 size-[14px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPathsCard.p3792b00} fill="#045A7C" />
          </svg>
        </div>
      </div>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Exercise due `}</p>
    </div>
  );
}

function HollyCardLifestyleBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[3px] pr-[6px] py-[3px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#08f7ad] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[16px]">
        <div className="relative shrink-0 size-[12px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPathsCard.p20510080} fill="#036345" />
          </svg>
        </div>
      </div>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Lifestyle due `}</p>
    </div>
  );
}

function HollyCardConsultBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[3px] pr-[6px] py-[3px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-[#7f79ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[16px]">
        <div className="overflow-clip relative shrink-0 size-[14px]">
          <div className="absolute h-[8.517px] left-[calc(50%-0.26px)] top-[calc(50%-0.24px)] translate-x-[-50%] translate-y-[-50%] w-[11.49px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
              <g clipPath="url(#clip0_35_561)">
                <path d={svgPathsCard.p295f6080} fill="#191386" />
              </g>
              <defs>
                <clipPath id="clip0_35_561">
                  <rect fill="white" height="8.51742" width="11.49" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consult overdue
      </p>
    </div>
  );
}

function HollyCardBadges() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
      <HollyCardExerciseBadge />
      <HollyCardLifestyleBadge />
      <HollyCardConsultBadge />
    </div>
  );
}

function HollyCardContent() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[40px] px-[16px] relative w-full">
          <HollyCardNameSection />
          <HollyCardInfo />
          <HollyCardBadges />
        </div>
      </div>
    </div>
  );
}

function HollyCardAvatarIndicator() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div 
      className="absolute bg-[#ff2056] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[40px] overflow-clip px-[5px] py-[8px] rounded-[17px] size-[16px] top-[40px] cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="relative shrink-0 size-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPathsCard.p3ecbf470} stroke="#FFEBF0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </svg>
      </div>
      {showTooltip && (
        <div 
          className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 bg-[#27272A] text-white text-[12px] px-[8px] py-[4px] rounded-[4px] whitespace-nowrap pointer-events-none shadow-lg"
          style={{ zIndex: 1000 }}
        >
          Working out now
          <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-[#27272A]" />
        </div>
      )}
    </div>
  );
}

function HollyCardAvatar() {
  return (
    <div className="absolute left-[16px] size-[56px] top-[44px]">
      <div className="absolute left-0 size-[56px] top-0">
        <img alt="" className="block max-w-none size-full" height="56" src="/assets/9b9d629be6761019d6b90d8bfb972eecb1a0458f.png" width="56" />
      </div>
      <HollyCardAvatarIndicator />
    </div>
  );
}

function HollyCoxCard() {
  return (
    <div className="bg-[#2f2f32] relative rounded-[6px] w-[276px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <HollyCardHeader />
        <HollyCardContent />
        <HollyCardAvatar />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Frame16() {
  const [showCard, setShowCard] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    // Cancel any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowCard(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Delay hiding the card to allow time to move to it
    hideTimeoutRef.current = setTimeout(() => {
      setShowCard(false);
    }, 1000); // 1 second delay before hiding
  }, []);

  return (
    <div
      className="content-stretch flex gap-[10.111px] items-start relative shrink-0"
    >
      <div
        className="relative shrink-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Pulsing circle around entire avatar - behind everything, 48x48 */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{ zIndex: 0 }}>
          <div className="rounded-full w-[48px] h-[48px]" style={{ animation: 'pulse 4s linear infinite', background: 'linear-gradient(135deg, #E12AFB, #FF2056)' }} />
        </div>
        {/* Actual avatar with gradient border */}
        <div className="relative rounded-full w-[48px] h-[48px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E12AFB, #FF2056)', zIndex: 1 }}>
          <div className="rounded-full border-2 border-[#27272A] border-solid w-[42px] h-[42px] flex items-center justify-center bg-[#111113]">
            <img alt="" className="block size-[36px] rounded-full object-cover" src="/assets/9b9d629be6761019d6b90d8bfb972eecb1a0458f.png" />
          </div>
          {/* Static green dot with icon - on top */}
          <div
            className="absolute right-[0px] bottom-[0px] w-[16px] h-[16px] rounded-full flex items-center justify-center"
            style={{ zIndex: 2, backgroundColor: '#FF2056' }}
          >
            <Zap className="size-[12px] text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      {showCard && (
        <div
          className="absolute left-[58px] top-[-120px] z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <HollyCoxCard />
        </div>
      )}
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.17] overflow-ellipsis overflow-hidden">Holly Cox</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[151px]">
      <Frame16 />
      <Frame41 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p57b0a00} fill="var(--fill-0, #045A7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#52cbfa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon />
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Exercise due `}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p3dce0f00} fill="var(--fill-0, #036345)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#08f7ad] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon1 />
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Lifestyle due `}</p>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[10px] left-[calc(50%-0.26px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.49px]" data-name="image (2) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
        <g clipPath="url(#clip0_1_8104)" id="image (2) 1">
          <path d={svgPaths.p1818d600} fill="var(--fill-0, #191386)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_8104">
            <rect fill="white" height="10" width="13.49" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon">
      <Image />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#7f79ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon2 />
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consult overdue
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p3dce0f00} fill="var(--fill-0, #036345)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#08f7ad] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon3 />
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Missed lifestyle 2x in a row
      </p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <Pill />
      <Pill1 />
      <Pill2 />
      <Pill3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[12px] py-0 relative w-full">
          <Frame24 />
          <Frame116 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3d6ee500} id="Vector" stroke="var(--stroke-0, #8D8D96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29ff4970} id="Vector_2" stroke="var(--stroke-0, #8D8D96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[18px] relative shrink-0 w-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
        <g id="Frame 614">
          <path d={svgPaths.p2331b840} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-0" />;
}

function Frame81() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-[7px]" />;
}

function Frame82() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-[14px]" />;
}

function Component2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[8px]" data-name="Component 2">
      <Frame79 />
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="h-[18.209px] relative shrink-0 w-[18.207px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p1512ce80} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </svg>
      </div>
      <div className="h-[18.828px] relative shrink-0 w-[17.379px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
          <path d={svgPaths.pe325980} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </svg>
      </div>
      <Frame4 />
      <Frame31 />
      <Component2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame40 />
      <Frame25 />
    </div>
  );
}

function TableEntry() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="table/entry">
      <div aria-hidden="true" className="absolute border-[#323232] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame21 />
    </div>
  );
}

function NeedsAttentionItem() {
  return (
    <div className="bg-zinc-800 relative shrink-0 w-full" data-name="Needs attention item">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10.111px] items-start relative shrink-0">
      <div className="relative shrink-0 rounded-full border-[3px] border-[#52CBFA] border-solid w-[48px] h-[48px] flex items-center justify-center">
        <div className="rounded-full border-2 border-[#27272A] border-solid w-[40px] h-[40px] flex items-center justify-center">
          <img alt="" className="block size-[36px] rounded-full" src="/assets/bf320913b5de35f8fa50c7fa2d3c0ba64a1499b2.png" />
        </div>
        <div className="absolute bg-[#08F7AD] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] rounded-[17px] size-[16px] right-[-2px] bottom-[-2px]">
          <div className="shrink-0 size-[14px]" />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.17] overflow-ellipsis overflow-hidden">Phoenix Zamora</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[151px]">
      <Frame17 />
      <Frame42 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p57b0a00} fill="var(--fill-0, #045A7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#52cbfa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon4 />
    </div>
  );
}

function Pill4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame5 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Exercise due `}</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[10px] left-[calc(50%-0.26px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.49px]" data-name="image (2) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
        <g clipPath="url(#clip0_1_8104)" id="image (2) 1">
          <path d={svgPaths.p1818d600} fill="var(--fill-0, #191386)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_8104">
            <rect fill="white" height="10" width="13.49" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon">
      <Image1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#7f79ec] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon5 />
    </div>
  );
}

function Pill5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame6 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consult overdue
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p57b0a00} fill="var(--fill-0, #045A7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#52cbfa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon6 />
    </div>
  );
}

function PillExerciseCompliance() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill/Exercise compliance">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame7 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`<50% exercise compliance`}</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <Pill4 />
      <Pill5 />
      <PillExerciseCompliance />
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[12px] py-0 relative w-full">
          <Frame26 />
          <Frame119 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3d6ee500} id="Vector" stroke="var(--stroke-0, #8D8D96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29ff4970} id="Vector_2" stroke="var(--stroke-0, #8D8D96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
        <g id="Frame 614">
          <path d={svgPaths.p2331b840} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-0" />;
}

function Frame98() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-[7px]" />;
}

function Frame99() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-[14px]" />;
}

function Component4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[8px]" data-name="Component 2">
      <Frame83 />
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="h-[18.209px] relative shrink-0 w-[18.207px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p1512ce80} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </svg>
      </div>
      <div className="h-[18.828px] relative shrink-0 w-[17.379px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
          <path d={svgPaths.pe325980} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </svg>
      </div>
      <Frame8 />
      <Frame32 />
      <Component4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame43 />
      <Frame27 />
    </div>
  );
}

function TableEntry1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="table/entry">
      <div aria-hidden="true" className="absolute border-[#323232] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame22 />
    </div>
  );
}

function NeedsAttentionItem1() {
  return (
    <div className="bg-zinc-800 relative shrink-0 w-full" data-name="Needs attention item">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <TableEntry1 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10.111px] items-start relative shrink-0">
      <div className="relative shrink-0 rounded-full border-[3px] border-[#08F7AD] border-solid w-[48px] h-[48px] flex items-center justify-center">
        <div className="rounded-full border-2 border-[#27272A] border-solid w-[40px] h-[40px] flex items-center justify-center bg-[#52525B]">
          <span className="text-[14px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white leading-none" style={{ fontVariationSettings: "'wdth' 100" }}>FC</span>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.17] overflow-ellipsis overflow-hidden">Fernanda Carter</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[151px]">
      <Frame18 />
      <Frame45 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p57b0a00} fill="var(--fill-0, #045A7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#52cbfa] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon7 />
    </div>
  );
}

function Pill6() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame9 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Exercise due `}</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.p3dce0f00} fill="var(--fill-0, #036345)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#08f7ad] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[5px] py-[8px] relative rounded-[17px] shrink-0 size-[18px]" data-name="Frame">
      <Icon8 />
    </div>
  );
}

function Pill7() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[6px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Pill">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame10 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`<50% lifestyle compliance`}</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <Pill6 />
      <Pill7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[12px] py-0 relative w-full">
          <Frame28 />
          <Frame120 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3d6ee500} id="Vector" stroke="var(--stroke-0, #8D8D96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29ff4970} id="Vector_2" stroke="var(--stroke-0, #8D8D96)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[18px] relative shrink-0 w-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
        <g id="Frame 614">
          <path d={svgPaths.p2331b840} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-0" />;
}

function Frame102() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-[7px]" />;
}

function Frame103() {
  return <div className="absolute bg-white left-[2px] rounded-[29px] size-[4px] top-[14px]" />;
}

function Component5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[8px]" data-name="Component 2">
      <Frame101 />
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="h-[18.209px] relative shrink-0 w-[18.207px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p1512ce80} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </svg>
      </div>
      <div className="h-[18.828px] relative shrink-0 w-[17.379px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
          <path d={svgPaths.pe325980} fill="var(--fill-0, #8D8D96)" id="Vector" />
        </svg>
      </div>
      <Frame11 />
      <Frame33 />
      <Component5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame46 />
      <Frame29 />
    </div>
  );
}

function TableEntry2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="table/entry">
      <div aria-hidden="true" className="absolute border-[#323232] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame23 />
    </div>
  );
}

function NeedsAttentionItem2() {
  return (
    <div className="bg-zinc-800 relative shrink-0 w-full" data-name="Needs attention item">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[16px] py-0 relative w-full">
          <TableEntry2 />
        </div>
      </div>
    </div>
  );
}

function NeedsAttentionTable() {
  return (
    <div className="absolute left-0 rounded-[18px] top-[110px] w-[872px]" data-name="Needs attention table">
      <div className="content-stretch flex flex-col items-start overflow-visible relative rounded-[inherit] w-[872px]">
        <NeedsAttentionItem />
        <NeedsAttentionItem1 />
        <NeedsAttentionItem2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Frame88() {
  return <div className="bg-[#36b4e5] h-[2px] shrink-0 w-full" />;
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[#3db2e0] text-[20px] text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Needs Attention
      </p>
      <Frame88 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0">
      <Frame142 />
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Client Insights
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Tab">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        All
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.p993f80} fill="var(--fill-0, #52CBFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Tab">
      <Icon9 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Exercise due (2)
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.p12c76000} fill="var(--fill-0, #08F7AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Tab">
      <Icon10 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lifestyle due (3)
      </p>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[10px] left-[calc(50%-0.26px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.49px]" data-name="image (2) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
        <g clipPath="url(#clip0_1_8089)" id="image (2) 1">
          <path d={svgPaths.p1818d600} fill="var(--fill-0, #7F79EC)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_8089">
            <rect fill="white" height="10" width="13.49" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon">
      <Image2 />
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Tab">
      <Icon11 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consult due (1)
      </p>
    </div>
  );
}

function QuickFilters() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0" data-name="Quick filters">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function Frame109() {
  return <div className="bg-white rounded-[29px] shrink-0 size-[6px]" />;
}

function QuickFiltersExpanded() {
  return (
    <div className="absolute bg-[#343434] box-border content-stretch flex gap-[4px] h-[31px] items-center justify-center left-[512px] px-[8px] py-[4px] rounded-[16px] top-0" data-name="Quick filters expanded">
      {[...Array(3).keys()].map((_, i) => (
        <Frame109 key={i} />
      ))}
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute h-[31px] left-0 top-[55px] w-[506px]">
      <QuickFilters />
      <QuickFiltersExpanded />
    </div>
  );
}

function Frame131() {
  return (
    <div className="absolute h-[368px] left-0 top-0 w-[872px]">
      <NeedsAttentionTable />
      <Frame130 />
      <Frame129 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="h-[368px] relative shrink-0 w-[872px]">
      <Frame131 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute left-[2px] size-[16px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p279a9700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function LearnMore() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[20px] left-[460px] rounded-[14px] top-1/2 translate-y-[-50%] w-[88px]" data-name="Learn more">
      <div className="h-[20px] overflow-clip relative rounded-[inherit] w-[88px]">
        <Frame12 />
        <p className="absolute font-['Mona_Sans:Medium',sans-serif] font-medium leading-none left-[21px] not-italic text-[12px] text-nowrap text-white top-[4px] tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Learn More
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_2px_0px_inset_rgba(255,255,255,0.05),1px_1px_1px_0px_inset_rgba(255,255,255,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame118() {
  return (
    <div className="absolute h-[21px] left-0 top-[33px] w-[548px]">
      <p className="absolute font-['Mona_Sans:Regular',sans-serif] font-normal leading-[1.5] left-0 not-italic text-[0px] text-[14px] text-nowrap text-white top-0 tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          1 of 10
        </span>{" "}
        <span className="text-[rgba(255,255,255,0.7)]">clients contacted at least 1 time for the week of</span> <span className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>{`Monday 10/15/24. `}</span>
      </p>
      <LearnMore />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[548px]">
      <p className="absolute font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] left-0 not-italic text-[0px] text-[20px] text-nowrap text-white top-0 tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Touchpoints `}</span>
        <span className="font-['Mona_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>
          (10%)
        </span>
      </p>
      <Frame118 />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ImageContainer">
      <div className="relative shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="96" src="/assets/77a8c03f423f62dcde724b6d15346d106e113a7a.png" width="96" />
      </div>
    </div>
  );
}

function ClientNameNameTouchpointsAmount() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="ClientNameName&TouchpointsAmount">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">John Egan (0)</p>
      </div>
    </div>
  );
}

function Client3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Client">
      <ImageContainer />
      <ClientNameNameTouchpointsAmount />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ImageContainer">
      <div className="relative shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="96" src="/assets/fa703ca86fed7ec9f57678ff27be0a80e8e4b9de.png" width="96" />
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="absolute right-0 size-[24px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 802">
          <rect fill="var(--fill-0, white)" height="12" id="Rectangle 5550" width="13" x="5.66016" y="6" />
          <path d={svgPaths.p15574400} fill="var(--fill-0, #73E292)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClientNameNameTouchpointsAmount1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="ClientNameName&TouchpointsAmount">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">John Egan (1)</p>
      </div>
    </div>
  );
}

function Client4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Client">
      <ImageContainer1 />
      <Frame75 />
      <ClientNameNameTouchpointsAmount1 />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ImageContainer">
      <div className="relative shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="96" src="/assets/e29e579b4528597dce0b274f8d620e89802fb569.png" width="96" />
      </div>
    </div>
  );
}

function ClientNameNameTouchpointsAmount2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="ClientNameName&TouchpointsAmount">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">John Egan (0)</p>
      </div>
    </div>
  );
}

function Client5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Client">
      <ImageContainer2 />
      <ClientNameNameTouchpointsAmount2 />
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ImageContainer">
      <div className="relative shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="96" src="/assets/6a03c232949ee08ae82efa4e8b8db2d1af1ce007.png" width="96" />
      </div>
    </div>
  );
}

function ClientNameNameTouchpointsAmount3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="ClientNameName&TouchpointsAmount">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">John Egan (0)</p>
      </div>
    </div>
  );
}

function Client6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Client">
      <ImageContainer3 />
      <ClientNameNameTouchpointsAmount3 />
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ImageContainer">
      <div className="relative shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="96" src="/assets/ae03c1e28444fe6b4dee2839b0588c3a30652858.png" width="96" />
      </div>
    </div>
  );
}

function ClientNameNameTouchpointsAmount4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="ClientNameName&TouchpointsAmount">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">John Egan (0)</p>
      </div>
    </div>
  );
}

function Client7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Client">
      <ImageContainer4 />
      <ClientNameNameTouchpointsAmount4 />
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="ImageContainer">
      <div className="relative shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="block max-w-none size-full" height="96" src="/assets/7abaef858f7961852e92af8d4b0ec2bf4f060f3f.png" width="96" />
      </div>
    </div>
  );
}

function ClientNameNameTouchpointsAmount5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="ClientNameName&TouchpointsAmount">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[1.33] overflow-ellipsis overflow-hidden">John Egan (0)</p>
      </div>
    </div>
  );
}

function Client8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Client">
      <ImageContainer5 />
      <ClientNameNameTouchpointsAmount5 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Client3 />
      <Client4 />
      <Client5 />
      <Client6 />
      <Client7 />
      <Client8 />
      <Client6 />
      <Client3 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] overflow-clip top-[24px] w-[872px]">
      <Frame84 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute h-[178px] left-0 rounded-[8px] top-[62px] w-[872px]">
      <Frame85 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3da69900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3f599600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#343434] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] right-0 rounded-[8px] top-0" data-name="Button">
      <Frame13 />
    </div>
  );
}

function Touchpoints() {
  return (
    <div className="h-[240px] relative shrink-0 w-[872px]" data-name="Touchpoints">
      <Frame86 />
      <Frame78 />
      <Button3 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Touchpoints />
    </div>
  );
}

function MaterialDesignIconsFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Design Icons/Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_8075)" id="Material Design Icons/Filled">
          <g id="Vector"></g>
          <path d={svgPaths.p1ef8e700} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_8075">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sorting() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[2px] py-[4px] relative rounded-[8px] shrink-0" data-name="Sorting">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        All Clients
      </p>
      <MaterialDesignIconsFilled />
    </div>
  );
}

function Frame111() {
  return <div className="bg-[#36b4e5] h-[2px] shrink-0 w-full" />;
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[73px]">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#36b4e5] text-[16px] tracking-[-0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Exercises
      </p>
      <Frame111 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame89 />
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lifestyle
      </p>
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weekly Check-Ins
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Sorting />
      <Frame90 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Activity Feed
      </p>
      <Frame91 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10.111px] items-start relative shrink-0">
      <div className="relative shrink-0 rounded-full border-[3px] border-[#FFD230] border-solid w-[48px] h-[48px] flex items-center justify-center">
        <div className="rounded-full border-2 border-[#27272A] border-solid w-[40px] h-[40px] flex items-center justify-center">
          <img alt="" className="block size-[36px] rounded-full" src="/assets/267d4cef8aaac3e28a8856190af368113575d720.png" />
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.25px]">
      <div className="flex flex-col font-['Mona_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17] overflow-ellipsis overflow-hidden text-[16px] text-nowrap whitespace-pre">Fernanda Carter</p>
      </div>
      <div className="-webkit-box flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(255,255,255,0.7)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17] text-[16px] text-nowrap whitespace-pre">Due date Aug 16, 2024</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame19 />
      <Frame92 />
    </div>
  );
}

function ExerciseOrder() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Exercise Order">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Exercise Order">
          <rect fill="var(--fill-0, #323236)" height="36" id="Rectangle 5549" rx="8" width="36" />
          <path d={svgPaths.pa99bff0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap w-[259px]">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-end relative shrink-0 text-[#5aa8de] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Warmup</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d9d9d9] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">1 mile jog</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame49 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[125px] items-center relative shrink-0 w-[280px]">
      <Frame54 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[480px]">
      <ExerciseOrder />
      <Frame53 />
    </div>
  );
}

function Frame59() {
  return null;
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[115px] items-center justify-end relative shrink-0">
      <Frame59 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-[418px]">
      <Frame60 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame62 />
      <Frame57 />
    </div>
  );
}

function Group4() {
  return (
    <div className="basis-0 bg-zinc-800 box-border content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px px-0 py-[12px] relative rounded-[8px] shrink-0">
      <Frame51 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex h-[84px] items-center justify-between relative shrink-0 w-full" data-name="Card">
      <Group4 />
    </div>
  );
}

function ExerciseOrder1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Exercise Order">
      <div className="absolute bg-[#323236] inset-0 rounded-[8px]" />
      <div className="absolute bottom-1/4 flex flex-col font-['Mona_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[38.89%] not-italic right-[36.11%] text-[12px] text-center text-nowrap text-white top-[27.78%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap w-[259px]">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-end relative shrink-0 text-[#5aa8de] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Power Clean</p>
      </div>
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d9d9d9] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-nowrap whitespace-pre">Spend 8 minutes building to a tough set of 2</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame50 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[125px] items-center relative shrink-0 w-[280px]">
      <Frame55 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[480px]">
      <ExerciseOrder1 />
      <Frame56 />
    </div>
  );
}

function PhVideo() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="PhVideo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="PhVideo 1">
          <path d={svgPaths.p26a2ae00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <PhVideo />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9b9b9b] text-[12px] text-center text-nowrap tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.43] underline whitespace-pre">1 video attached by client</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[60px] relative shrink-0 w-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 60">
        <g id="Frame 774">
          <g id="Status">
            <path d={svgPaths.pddd1200} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p10a60b00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.253846" />
          </g>
          <path d={svgPaths.p323ff870} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[115px] items-center justify-end relative shrink-0">
      <Frame61 />
      <Frame64 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame69 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame63 />
      <Frame58 />
    </div>
  );
}

function PhUserSound() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="PhUserSound 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="PhUserSound 1">
          <path d={svgPaths.p20cc3940} fill="var(--fill-0, #898989)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <PhUserSound />
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative self-stretch shrink-0 text-[#d9d9d9] text-[12px] w-[390px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.24]">{`"Ensure technique is perfect each rep, remember to focus on drive out of the bottom, eyes and chest forward, fast elbows and catch in the power position"`}</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[57px] items-start relative shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[56px] items-start relative shrink-0">
      <Frame48 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start pl-[8px] pr-0 py-0 relative shrink-0">
      <Frame67 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame68 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#323232] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame70 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Frame52 />
      <Frame47 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-zinc-800 box-border content-stretch flex flex-col gap-[8px] items-start pb-[8px] pt-0 px-0 relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <Frame66 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Card />
      <Card1 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <Frame20 />
          <Frame94 />
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[872px]">
      <Frame96 />
      <Frame93 />
    </div>
  );
}

function Sorting1() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[12px] relative rounded-[12px] shrink-0 w-[872px]" data-name="Sorting">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        View older updates
      </p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame95 />
      <Sorting1 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-zinc-800 box-border content-stretch flex flex-col gap-[80px] items-start p-[24px] relative rounded-[8px] shrink-0">
      <Frame133 />
      <Frame134 />
      <Frame132 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-end left-[24px] pb-0 pt-[16px] px-0 top-[104px] w-[920px]">
      <Frame87 />
      <Frame100 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#3db2e0] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add Task
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        My Tasks
      </p>
      <Button4 />
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Tab">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        In progress
      </p>
    </div>
  );
}

function Tab5() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Tab">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Completed
      </p>
    </div>
  );
}

function QuickFilters1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Quick filters">
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <QuickFilters1 />
    </div>
  );
}

function MaterialDesignIconsFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Design Icons/Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_8035)" id="Material Design Icons/Filled" opacity="0.7">
          <g id="Vector"></g>
          <path d={svgPaths.p33d53300} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #27272A)" />
        </g>
        <defs>
          <clipPath id="clip0_1_8035">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="relative shrink-0 rounded-full border-[2px] border-[#08F7AD] border-solid w-[24px] h-[24px] flex items-center justify-center">
      <div className="rounded-full border border-[#27272A] border-solid w-[20px] h-[20px] flex items-center justify-center">
        <img alt="" className="block size-[18px] rounded-full object-cover" src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzMzNTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame106 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fernanda Carter
      </p>
    </div>
  );
}

function Frame80() {
  return <div className="bg-white rounded-[6px] shrink-0 size-[4px]" />;
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame107 />
      <Frame80 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[#ff7161] text-[14px] text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thursday, Sept 12
      </p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Review Fernanda’s progress, goals and nutrition/supplement plan, and make tweaks if needed
      </p>
      <Frame108 />
    </div>
  );
}

function ToDoItem() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-[400px]" data-name="to-do item">
      <div aria-hidden="true" className="absolute border-[#323232] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MaterialDesignIconsFilled1 />
      <Frame104 />
    </div>
  );
}

function MaterialDesignIconsFilled2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Design Icons/Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_8035)" id="Material Design Icons/Filled" opacity="0.7">
          <g id="Vector"></g>
          <path d={svgPaths.p33d53300} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #27272A)" />
        </g>
        <defs>
          <clipPath id="clip0_1_8035">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="relative shrink-0 rounded-full border-[2px] border-[#52CBFA] border-solid w-[24px] h-[24px] flex items-center justify-center">
      <div className="rounded-full border border-[#27272A] border-solid w-[20px] h-[20px] flex items-center justify-center">
        <img alt="" className="block size-[18px] rounded-full object-cover" src="https://images.unsplash.com/photo-1715423058726-ddea1ec51b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzQwMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame113 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phoenix Zomora
      </p>
    </div>
  );
}

function Frame115() {
  return <div className="bg-white rounded-[6px] shrink-0 size-[4px]" />;
}

function Frame121() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame114 />
      <Frame115 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[#3db2e0] text-[14px] text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thursday, Sept 27
      </p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create competition plan for Phoenix by EOW
      </p>
      <Frame121 />
    </div>
  );
}

function ToDoItem1() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-[400px]" data-name="to-do item">
      <div aria-hidden="true" className="absolute border-[#323232] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MaterialDesignIconsFilled2 />
      <Frame122 />
    </div>
  );
}

function MaterialDesignIconsFilled3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Design Icons/Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_8035)" id="Material Design Icons/Filled" opacity="0.7">
          <g id="Vector"></g>
          <path d={svgPaths.p33d53300} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #27272A)" />
        </g>
        <defs>
          <clipPath id="clip0_1_8035">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="relative shrink-0 rounded-full border-[2px] border-[#7F79EC] border-solid w-[24px] h-[24px] flex items-center justify-center">
      <div className="rounded-full border border-[#27272A] border-solid w-[20px] h-[20px] flex items-center justify-center">
        <img alt="" className="block size-[18px] rounded-full object-cover" src="https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzI4ODc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame123 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dennis
      </p>
    </div>
  );
}

function Frame125() {
  return <div className="bg-white rounded-[6px] shrink-0 size-[4px]" />;
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame124 />
      <Frame125 />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[#3db2e0] text-[14px] text-nowrap tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tuesday, Oct 1
      </p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Respond to Dennis’s direct message
      </p>
      <Frame126 />
    </div>
  );
}

function ToDoItem2() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start pb-[16px] pt-0 px-0 relative shrink-0 w-[400px]" data-name="to-do item">
      <div aria-hidden="true" className="absolute border-[#323232] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MaterialDesignIconsFilled3 />
      <Frame127 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-zinc-800 relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[16px] px-[24px] relative w-full">
          <Frame105 />
          <ToDoItem />
          <ToDoItem1 />
          <ToDoItem2 />
        </div>
      </div>
    </div>
  );
}

function MyTasks() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[16px] px-0 shrink-0 sticky top-0 w-full" data-name="My tasks">
      <Frame112 />
      <Frame97 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start top-[327px] w-[448px]" style={{ left: '968px' }}>
      <MyTasks />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        30 Days
      </p>
    </div>
  );
}

function MaterialDesignIconsOutlinedKeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Material Design Icons/Outlined/keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_8031)" id="Material Design Icons/Outlined/keyboard_arrow_down">
          <g id="Vector"></g>
          <path d={svgPaths.pdde3a00} fill="var(--fill-0, #555555)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_8031">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownButton() {
  return (
    <div className="bg-[#343434] box-border content-stretch flex gap-[8px] h-[31px] items-center pl-[8px] pr-[2px] py-[4px] relative rounded-[8px] shrink-0" data-name="Dropdown-button">
      <Frame14 />
      <MaterialDesignIconsOutlinedKeyboardArrowDown />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.25px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        My Stats
      </p>
      <DropdownButton />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center ml-[39.5px] mt-[40px] not-italic relative text-[28px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">20</p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path d={svgPaths.p3e0b070} fill="var(--fill-0, white)" id="Ellipse 11" opacity="0.1" />
        </svg>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[45px] items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clients
      </p>
      <p className="basis-0 font-['Mona_Sans:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Total number of active clients `}</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0" data-name>
      <Frame135 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 opacity-0 top-0 w-[400px]" data-name>
      <Group />
      <Component1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center ml-[40px] mt-[40px] not-italic relative text-[0px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">
          <span className="text-[28px]">90</span>
          <span className="font-['Mona_Sans:Light',sans-serif] font-light not-italic text-[#898989] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            %
          </span>
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path d={svgPaths.p3e0b070} fill="var(--fill-0, #7F79EC)" id="Ellipse 10" opacity="0.1" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <div className="absolute bottom-0 left-0 right-0 top-[0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
            <path d={svgPaths.p3aba2400} fill="var(--fill-0, #7F79EC)" id="Ellipse 11" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center not-italic relative shrink-0" data-name>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consult Rate (30d)
      </p>
      <p className="font-['Mona_Sans:Regular',sans-serif] font-normal h-[40px] leading-[1.4] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[296px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consults are tracked when adding consultation notes in your client’s calendar.
      </p>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-0 opacity-0 top-0" data-name>
      <Group1 />
      <Component7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center ml-[40px] mt-[40px] not-italic relative text-[0px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">
          <span className="text-[28px]">31</span>
          <span className="font-['Mona_Sans:Light',sans-serif] font-light not-italic text-[#898989] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            %
          </span>
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path d={svgPaths.p3e0b070} fill="var(--fill-0, #FF7161)" id="Ellipse 10" opacity="0.1" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <div className="absolute bottom-[32.18%] left-1/2 right-0 top-[0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 55">
            <path d={svgPaths.p30c536c0} fill="var(--fill-0, #FF7161)" id="Ellipse 11" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-center justify-center min-h-px min-w-px not-italic relative shrink-0" data-name>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rx Insights
      </p>
      <p className="font-['Mona_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Exercise and Lifestyle insights. An exercise program=a week of exercise prescription.
      </p>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 opacity-0 top-0 w-[400px]" data-name>
      <Group2 />
      <Component9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center ml-[40.5px] mt-[40px] not-italic relative text-[0px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] whitespace-pre">
          <span className="text-[28px]">64</span>
          <span className="font-['Mona_Sans:Light',sans-serif] font-light not-italic text-[#898989] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            %
          </span>
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path d={svgPaths.p3e0b070} fill="var(--fill-0, #D946EF)" id="Ellipse 10" opacity="0.1" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[80px]">
        <div className="absolute bottom-0 left-[12.28%] right-0 top-[0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 80">
            <path d={svgPaths.p177b400} fill="var(--fill-0, #D946EF)" id="Ellipse 11" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0" data-name>
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Client Compliance
      </p>
      <p className="font-['Mona_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Running % of client’s compliance within a given time frame. Total=Exercise+Lifestyle.
      </p>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0 w-[400px]" data-name>
      <Group3 />
      <Component11 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="h-[80px] relative shrink-0 w-[400px]">
      <Component6 />
      <Component8 />
      <Component10 />
      <Component12 />
    </div>
  );
}

function Frame138() {
  return <div className="bg-white rounded-[12px] shrink-0 size-[6px]" />;
}

function Frame139() {
  return <div className="bg-[rgba(255,255,255,0.3)] rounded-[12px] shrink-0 size-[6px]" />;
}

function Frame140() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame138 />
      {[...Array(3).keys()].map((_, i) => (
        <Frame139 key={i} />
      ))}
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Frame140 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-zinc-800 relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[20px] py-[16px] relative w-full">
          <Frame137 />
          <Frame141 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start top-[117px] w-[448px]" style={{ left: '968px' }} data-name="Component 3">
      <Frame136 />
      <Frame128 />
    </div>
  );
}

export default function DashboardNeedsAttention() {
  return (
    <div className="bg-[#171719] relative" style={{ width: '1440px', minHeight: '900px' }} data-name="Dashboard - Needs Attention">
      <div className="absolute h-0 left-[31px] top-[-121px] w-[1121px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1121 1">
            <line id="Line 13" stroke="var(--stroke-0, #2C2C2C)" x2="1121" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Tasks />
      <Frame15 />
      <Frame110 />
      <Frame117 />
      <Component3 />
    </div>
  );
}