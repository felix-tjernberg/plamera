<template>

<svg v-if="name === 'task_overview' " width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="12.6765" width="22" height="9.82553" rx="1.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3333 18.0393L16.7708 18.9412L19.1666 16.2554" :stroke="color" stroke-linecap="round"/>
<rect x="0.5" y="0.5" width="22" height="9.82553" rx="1.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3333 5.86276L16.7708 6.76472L19.1666 4.05884" :stroke="color" stroke-linecap="round"/>
</svg>

<svg v-else-if="name === 'calendar' " width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.2215 9.7961H21.7881" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1272 13.8643H17.1368" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5048 13.8643H12.5144" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.87282 13.8643H7.88247" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1272 17.9128H17.1368" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5048 17.9128H12.5144" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.87282 17.9128H7.88247" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7122 2.08337V5.51127" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29744 2.08337V5.51127" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9149 3.72839H8.09475C5.0357 3.72839 3.125 5.43249 3.125 8.56488V17.9916C3.125 21.1732 5.0357 22.9167 8.09475 22.9167H16.9052C19.9739 22.9167 21.875 21.2028 21.875 18.0704V8.56488C21.8846 5.43249 19.9836 3.72839 16.9149 3.72839Z" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-else-if=" name === 'notifications' " width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.64667 14.3616V14.1335C3.68014 13.4586 3.89644 12.8047 4.27327 12.2592C4.9005 11.5599 5.32988 10.7274 5.51635 9.82918C5.51635 9.13494 5.51635 8.43077 5.57699 7.73653C5.89028 4.39422 9.19506 2.08337 12.4594 2.08337H12.5403C15.8046 2.08337 19.1094 4.39422 19.4328 7.73653C19.4934 8.43077 19.4328 9.13494 19.4833 9.82918C19.6725 10.7295 20.1013 11.5646 20.7264 12.2491C21.1061 12.8096 21.3227 13.4611 21.353 14.1335V14.3517C21.3756 15.2584 21.0633 16.1426 20.4738 16.8411C19.6947 17.6578 18.6376 18.1659 17.5025 18.2692C14.1739 18.6263 10.8156 18.6263 7.48709 18.2692C6.35325 18.1615 5.29764 17.6541 4.51582 16.8411C3.9354 16.142 3.62731 15.2631 3.64667 14.3616Z" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.95306 21.7206C10.4731 22.3734 11.2569 22.7958 12.0752 22.8945C12.9136 22.9931 13.7575 22.7598 14.4201 22.2462C14.6259 22.0943 14.8072 21.9177 14.9658 21.7206" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg v-else-if=" name === 'settings' " width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6736 7.94119L21.0252 6.8161C20.4767 5.8641 19.2611 5.53568 18.3078 6.08193V6.08193C17.8541 6.34925 17.3126 6.42509 16.8028 6.29273C16.293 6.16037 15.8569 5.83068 15.5904 5.37636C15.4191 5.08758 15.327 4.75867 15.3255 4.42289V4.42289C15.3389 3.88453 15.1358 3.36285 14.7604 2.97667C14.385 2.59049 13.8693 2.3727 13.3307 2.37292H12.0245C11.4968 2.37292 10.9909 2.58317 10.6187 2.95716C10.2465 3.33115 10.0387 3.83805 10.0412 4.36568V4.36568C10.0256 5.45506 9.13799 6.32994 8.0485 6.32983C7.71271 6.32634 7.3838 6.25425 7.09503 6.06286V6.06286C6.14172 5.51661 4.92615 5.84503 4.37763 6.79703L3.6816 7.94119C3.13375 8.89201 3.4577 10.1068 4.40624 10.6586V10.6586C5.0228 11.0146 5.40263 11.6724 5.40263 12.3844C5.40263 13.0963 5.0228 13.7542 4.40624 14.1101V14.1101C3.4589 14.6582 3.1346 15.8701 3.6816 16.818V16.818L4.3395 17.9526C4.5965 18.4164 5.0277 18.7586 5.53769 18.9035C6.04768 19.0485 6.59441 18.9842 7.05689 18.7249V18.7249C7.51153 18.4597 8.05331 18.387 8.5618 18.5251C9.07029 18.6591 9.50336 18.9927 9.76474 19.4496C9.93613 19.7384 10.0282 20.0673 10.0317 20.4031V20.4031C10.0317 21.5036 10.9259 22.3958 12.0245 22.3958H13.3307C14.4276 22.3958 15.3182 21.5094 15.3255 20.4126V20.4126C15.3209 19.8833 15.5301 19.375 15.9043 19.0007C16.2786 18.6264 16.7869 18.4173 17.3162 18.4198C17.6512 18.4288 17.9788 18.5205 18.2697 18.6868V18.6868C19.2205 19.2547 20.4353 18.9107 20.9871 17.9622V17.9622L21.6736 16.818C21.9393 16.3619 22.0122 15.8187 21.8762 15.3087C21.7402 14.7986 21.4065 14.3638 20.949 14.1006V14.1006C20.4914 13.8374 20.1577 13.4026 20.0217 12.8926C19.8857 12.3825 19.9586 11.8393 20.2243 11.3832C20.3971 11.0815 20.6473 10.8314 20.949 10.6586V10.6586C21.8918 10.1071 22.215 8.8994 21.6736 7.95073V7.95073V7.94119Z" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12.6825" cy="12.3844" r="2.746" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>

<script>
export default {
props: ['name', 'color']
}

</script>

<style>


</style>
