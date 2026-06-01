<script>
  export let title = '';
  export let subtitle = '';
  export let href = '#';
  export let icon = '';
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center justify-between w-full h-[54px] sm:h-[62px] md:h-[68px] px-4 bg-zinc-50 border border-zinc-200/60 rounded-full transition-all duration-200 hover:bg-[#111111] hover:border-[#111111] group"
>
  <div class="flex items-center gap-3.5 grow min-w-0">
    {#if icon}
      <div
        class="rounded-xs shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] overflow-hidden flex items-center justify-center p-0.5 group-hover:border-zinc-800 transition-colors"
      >
        <img src={icon} alt="" class="w-full h-full object-contain" />
      </div>
    {/if}

    <div class="flex flex-col text-left leading-tight truncate">
      <span
        class="font-medium text-[14px] sm:text-[15px] text-[#111111] group-hover:text-white transition-colors duration-150 truncate"
      >
        {title}
      </span>
      {#if subtitle}
        <span
          class="font-normal text-[11.5px] sm:text-[12px] text-zinc-400 group-hover:text-zinc-400 transition-colors duration-150 mt-0.5 truncate"
        >
          {subtitle}
        </span>
      {/if}
    </div>
  </div>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-3.5 w-3.5 text-zinc-400 group-hover:text-white transition-colors duration-150 shrink-0 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2.5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
</a>
