<script>
  export let title = '';
  export let subtitle = '';
  export let href = '#';
  export let icon = '';
</script>

<a
  {href}
  class="flex items-center bg-[#ebebeb] rounded-[40px] md:rounded-[100px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_3px_2px_0px_rgba(0,0,0,0.25)] h-[50px] sm:h-[59px] md:h-[69px] px-[6px] gap-3 md:gap-4 md:pl-3 hover:brightness-95 transition-all"
>
  <div
    class="rounded-md shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] overflow-hidden"
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
