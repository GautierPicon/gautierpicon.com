<script>
  export let title = '';
  export let subtitle = '';
  export let href = '#';
  export let icon = '';
  export let invertOnHover = false;
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center justify-between w-full h-13.5 sm:h-15.5 md:h-17 px-4 bg-zinc-50 border border-zinc-200/60 rounded-full transition-all duration-200 hover:bg-[#111111] hover:border-[#111111] active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
>
  <div class="flex items-center gap-3.5 grow min-w-0">
    {#if icon}
      <div
        class="rounded-xs shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 overflow-hidden flex items-center justify-center p-0.5 group-hover:border-zinc-800 transition-colors"
      >
        <img
          src={icon}
          alt=""
          width="44"
          height="44"
          class="w-full h-full object-contain transition-[filter] duration-150 {invertOnHover
            ? 'group-hover:invert'
            : ''}"
          loading="lazy"
          decoding="async"
        />
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
    class="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors duration-150 shrink-0 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2.5"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
</a>
