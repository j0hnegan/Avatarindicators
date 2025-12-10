import svgPaths from "./svg-vmwbftcr5j";
import imgFrame920 from "figma:asset/8fb29c9b39c178de0ad31cdd7dd4862c29a944ba.png";

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g data-figma-bg-blur-radius="3" id="Frame 926">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="24" rx="12" width="24" />
          <path d={svgPaths.p23fd0680} fill="var(--fill-0, white)" id="Vector" />
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

function Frame4() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g data-figma-bg-blur-radius="3" id="Frame 927">
          <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="24" rx="12" width="24" />
          <path d={svgPaths.p3912b100} fill="var(--fill-0, white)" id="Vector" />
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

function Frame5() {
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

function Frame() {
  return (
    <div className="backdrop-blur-[1.5px] backdrop-filter bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[20px] shrink-0 size-[24px]" data-name="Frame">
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start justify-end right-[12px] top-[calc(50%-8px)] translate-y-[-50%]">
      <Frame3 />
      <Frame4 />
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" />
        <img alt="" className="absolute max-w-none mix-blend-soft-light object-50%-50% object-cover opacity-[0.76] size-full" src={imgFrame920} />
      </div>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[16px] relative size-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e441fb] border-[5px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}