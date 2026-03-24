<script>
  export let title = '';
  export let subtitle = '';
  export let href = '#';
  export let icon = '';
</script>

<a
  {href}
  class="flex items-center bg-[#ebebeb] rounded-[40px] md:rounded-[100px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_3px_2px_0px_rgba(0,0,0,0.25)] h-[50px] sm:h-[59px] md:h-[69px] px-[6px] gap-3 md:gap-4 hover:brightness-95 transition-all"
>
  <div
    class="shrink-0 w-[40px] h-[40px] sm:w-[47px] sm:h-[47px] md:w-[53px] md:h-[53px] overflow-hidden"
  >
    <img src={icon} alt="" class="w-full h-full object-cover" />
  </div>

  <div class="flex flex-col leading-normal">
    <span class="font-bold text-[16px] sm:text-[20px] md:text-[24px] text-black">
      {title}
    </span>
    <span class="font-normal text-[12px] sm:text-[12px] md:text-[16px] text-black">
      {subtitle}
    </span>
  </div>
</a>
