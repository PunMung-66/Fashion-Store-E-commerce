function LoadingScreen() {
  return (
    <>
      <div className="h-[100vh] flex justify-center py-10 text-[18px] xl:text-[24px] 2xl:text-[32px]">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full bg-secondary-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M18.7554 31.6415C17.9656 32.388 17.5166 33.4321 17.5166 34.5194C17.5166 35.6068 17.9548 36.64 18.7554 37.3974C18.8257 37.4677 18.9177 37.5002 19.0151 37.5002C19.1125 37.5002 19.199 37.4677 19.2747 37.3974C20.0754 36.64 20.5136 35.6176 20.5136 34.5194C20.5136 33.4213 20.0646 32.388 19.2747 31.6415C19.1287 31.5062 18.9015 31.5062 18.7608 31.6415H18.7554Z"
                fill="#DEF81C"
              />
              <path
                d="M23.9167 28.2494C23.722 28.2061 23.5326 28.3197 23.4731 28.5091C23.1756 29.5423 23.3162 30.6729 23.8626 31.598C24.4198 32.5393 25.3124 33.1939 26.3781 33.4373C26.4052 33.4427 26.4322 33.4481 26.4593 33.4481C26.6216 33.4481 26.773 33.3399 26.8163 33.1776C27.1192 32.1282 26.9786 31.03 26.4268 30.0887C25.8804 29.1582 24.9608 28.4874 23.9113 28.2494H23.9167Z"
                fill="#DEF81C"
              />
              <path
                d="M14.1096 28.2494C13.0602 28.4874 12.1405 29.1582 11.5941 30.0887C11.0369 31.03 10.9017 32.1282 11.2046 33.1776C11.2533 33.3399 11.3994 33.4481 11.5617 33.4481C11.5887 33.4481 11.6158 33.4481 11.6428 33.4373C12.7085 33.1939 13.6011 32.5393 14.1583 31.598C14.7047 30.6675 14.8508 29.5423 14.5478 28.5091C14.4937 28.3197 14.299 28.2061 14.1042 28.2494H14.1096Z"
                fill="#DEF81C"
              />
              <path
                d="M20.3685 28.7853C20.2603 28.7421 20.1413 28.7907 20.0926 28.8935C19.8276 29.4615 19.8113 30.1215 20.0439 30.7058C20.282 31.2954 20.7364 31.7498 21.326 31.9879C21.3531 31.9987 21.3801 32.0041 21.4072 32.0041C21.4883 32.0041 21.5695 31.9554 21.6019 31.8797C21.867 31.3008 21.8832 30.6571 21.6506 30.0674C21.418 29.4832 20.9474 29.018 20.3685 28.7853Z"
                fill="#DEF81C"
              />
              <path
                d="M17.9332 28.8984C17.8845 28.7956 17.7655 28.7469 17.6573 28.7902C17.0731 29.0228 16.6078 29.4881 16.3752 30.0723C16.1372 30.662 16.1588 31.3057 16.4239 31.8846C16.4618 31.9657 16.5375 32.009 16.6186 32.009C16.6457 32.009 16.6727 32.009 16.6998 31.9928C17.2894 31.7601 17.7493 31.3057 17.9819 30.7107C18.2145 30.1264 18.1983 29.4664 17.9332 28.8984Z"
                fill="#DEF81C"
              />
              <path
                d="M27.3249 27.0646C27.2113 27.0754 27.1247 27.1782 27.1301 27.2918C27.1626 27.9193 27.4547 28.5089 27.9362 28.9147C28.3581 29.2717 28.872 29.461 29.4184 29.461C29.505 29.461 29.5861 29.461 29.6727 29.4448C29.7863 29.434 29.8728 29.3312 29.8674 29.2176C29.835 28.5793 29.5482 28.0058 29.0614 27.5947C28.5853 27.189 27.9524 26.9942 27.3303 27.0591L27.3249 27.0646Z"
                fill="#DEF81C"
              />
              <path
                d="M10.7063 27.0649C10.0842 26.9946 9.45128 27.1893 8.97523 27.6004C8.48836 28.0116 8.20705 28.5904 8.16919 29.2234C8.16378 29.337 8.25033 29.4397 8.36393 29.4506C8.45049 29.4614 8.53164 29.4668 8.61819 29.4668C9.15916 29.4668 9.67849 29.2774 10.1004 28.9204C10.5765 28.5147 10.8686 27.9196 10.9065 27.2975C10.9119 27.1839 10.8253 27.0811 10.7117 27.0703L10.7063 27.0649Z"
                fill="#DEF81C"
              />
              <path
                d="M29.012 23.0342C28.0978 22.7854 27.1132 22.9314 26.3072 23.4237C26.1611 23.5157 26.107 23.705 26.1882 23.8565C26.6372 24.6896 27.4162 25.3063 28.3304 25.5497C28.6333 25.6309 28.9363 25.6687 29.2338 25.6687C29.8613 25.6687 30.478 25.4956 31.0298 25.1548C31.1759 25.0628 31.23 24.8735 31.1488 24.722C30.6944 23.8781 29.9317 23.2776 29.0066 23.0288L29.012 23.0342Z"
                fill="#DEF81C"
              />
              <path
                d="M9.69381 25.5556C10.608 25.3121 11.387 24.69 11.836 23.8623C11.9172 23.7109 11.8685 23.5215 11.717 23.4296C10.911 22.9373 9.92643 22.7912 9.01219 23.0401C8.08714 23.2889 7.32978 23.8894 6.86996 24.7333C6.78882 24.8848 6.8375 25.0741 6.98897 25.1661C7.54076 25.5069 8.15746 25.68 8.78499 25.68C9.08793 25.68 9.39087 25.6421 9.6884 25.561L9.69381 25.5556Z"
                fill="#DEF81C"
              />
              <path
                d="M24.5172 26.4972C24.6308 26.4864 24.7173 26.389 24.7119 26.27C24.6849 25.6317 24.4036 25.0529 23.9275 24.6363C23.4515 24.2252 22.8239 24.025 22.2018 24.0845C22.0882 24.0953 22.0017 24.1927 22.0071 24.3117C22.0341 24.9392 22.3208 25.5343 22.7915 25.9454C23.2134 26.3133 23.7382 26.5081 24.29 26.5081C24.3657 26.5081 24.4414 26.5081 24.5172 26.4972Z"
                fill="#DEF81C"
              />
              <path
                d="M15.8294 24.0845C15.2073 24.025 14.5744 24.2252 14.1037 24.6363C13.6223 25.0529 13.3464 25.6317 13.3193 26.27C13.3193 26.3836 13.4005 26.4864 13.5141 26.4972C13.5898 26.5026 13.6656 26.5081 13.7413 26.5081C14.2931 26.5081 14.8178 26.3133 15.2398 25.9454C15.7104 25.5343 15.9971 24.9392 16.0242 24.3117C16.0242 24.1981 15.943 24.1007 15.8294 24.0845Z"
                fill="#DEF81C"
              />
              <path
                d="M32.3608 8.94794C32.7286 9.05614 33.1073 9.11023 33.486 9.11023C34.1784 9.11023 34.8654 8.93172 35.4713 8.58009C36.4234 8.0283 37.0888 7.14111 37.3431 6.06999C37.3918 5.87525 37.2782 5.6805 37.0834 5.6264C36.0285 5.31264 34.9249 5.44247 33.9728 5.99426C33.0316 6.53523 32.3499 7.44946 32.1011 8.50435C32.0524 8.6991 32.166 8.89385 32.3608 8.94794Z"
                fill="#DEF81C"
              />
              <path
                d="M27.2054 6.43737C27.2324 6.43737 27.2649 6.43737 27.2973 6.42655C28.3414 6.16688 29.2502 5.47985 29.7804 4.54398C30.3159 3.59187 30.4349 2.49371 30.1158 1.44423C30.0563 1.25489 29.8615 1.14129 29.6722 1.18998C28.6119 1.45505 27.7301 2.12044 27.1891 3.07255C26.659 4.00842 26.5346 5.13904 26.8537 6.17229C26.9024 6.32917 27.0485 6.43737 27.2108 6.43737H27.2054Z"
                fill="#DEF81C"
              />
              <path
                d="M37.4793 14.1999C36.7327 13.3993 35.7211 12.9503 34.6284 12.9395C34.6175 12.9395 34.6067 12.9395 34.5959 12.9395C33.5302 12.9395 32.4969 13.3776 31.7558 14.1458C31.6206 14.2865 31.6152 14.5137 31.7558 14.6597C32.4915 15.4495 33.5302 15.9094 34.6067 15.9202C34.6175 15.9202 34.6338 15.9202 34.6446 15.9202C35.7211 15.9202 36.7273 15.4928 37.4793 14.7138C37.6145 14.5732 37.6199 14.346 37.4793 14.1999Z"
                fill="#DEF81C"
              />
              <path
                d="M29.5534 7.22784C29.1639 7.72012 28.9962 8.35847 29.0881 8.98058C29.1043 9.08877 29.1963 9.16451 29.3045 9.16451C29.3099 9.16451 29.3153 9.16451 29.3261 9.16451C29.9483 9.11041 30.5325 8.79124 30.922 8.29896C31.3169 7.80127 31.4792 7.17916 31.3872 6.54622C31.371 6.43262 31.2682 6.35148 31.1546 6.3623C30.5217 6.4218 29.9537 6.73015 29.5588 7.22784H29.5534Z"
                fill="#DEF81C"
              />
              <path
                d="M30.3977 11.0303C30.3328 11.1223 30.349 11.2521 30.441 11.3279C30.8467 11.6525 31.3552 11.8256 31.8691 11.8256C31.9773 11.8256 32.0855 11.8202 32.1937 11.8039C32.8212 11.712 33.373 11.3766 33.7409 10.8572C33.8058 10.7653 33.7896 10.6354 33.6976 10.5597C33.1999 10.1648 32.5778 9.9971 31.9449 10.0891C31.3228 10.181 30.7601 10.5218 30.3977 11.0358V11.0303Z"
                fill="#DEF81C"
              />
              <path
                d="M24.2952 3.90048C24.333 3.90048 24.3763 3.88966 24.4142 3.86802C24.9389 3.52721 25.3068 2.97543 25.4204 2.35872C25.534 1.7312 25.3933 1.10368 25.0147 0.589757C24.9443 0.497792 24.8199 0.470744 24.7225 0.53566C24.187 0.88188 23.8299 1.41744 23.7163 2.04496C23.6027 2.66166 23.7488 3.30542 24.1221 3.81393C24.1653 3.87343 24.2303 3.90048 24.2952 3.90048Z"
                fill="#DEF81C"
              />
              <path
                d="M34.3353 17.8088C33.7457 17.5979 33.0857 17.6411 32.5285 17.9279C32.4257 17.982 32.3824 18.101 32.4311 18.2092C32.6854 18.7826 33.1668 19.2316 33.7565 19.4426C34.0107 19.5345 34.2704 19.5778 34.5301 19.5778C34.8871 19.5778 35.2387 19.4913 35.5687 19.329C35.6715 19.2749 35.7148 19.1559 35.6715 19.0477C35.4118 18.4634 34.9412 18.0252 34.3461 17.8143L34.3353 17.8088Z"
                fill="#DEF81C"
              />
              <path
                d="M22.3046 3.69455C22.0557 2.76949 21.4553 2.00673 20.6168 1.5469C20.4653 1.46576 20.276 1.51444 20.184 1.66051C19.6809 2.47737 19.5402 3.43488 19.7891 4.35994C20.0325 5.27417 20.6492 6.05317 21.4769 6.50758C21.5256 6.53463 21.5797 6.54545 21.6338 6.54545C21.742 6.54545 21.8502 6.49135 21.9097 6.38857C22.4074 5.58252 22.548 4.59796 22.3046 3.68914V3.69455Z"
                fill="#DEF81C"
              />
              <path
                d="M29.0832 18.8311C28.9101 18.8311 28.7695 18.9771 28.7641 19.1502C28.737 20.0915 29.1103 21.0166 29.7757 21.6874C30.4302 22.3419 31.2904 22.6936 32.21 22.6936C32.2425 22.6936 32.2804 22.6936 32.3128 22.6936C32.4859 22.6936 32.6266 22.5475 32.632 22.3744C32.659 21.4169 32.2966 20.5135 31.6204 19.8373C30.9496 19.1719 30.0245 18.7986 29.0832 18.8311Z"
                fill="#DEF81C"
              />
              <path
                d="M24.2739 9.83537C24.3118 9.83537 24.3551 9.82455 24.3875 9.80291C24.9177 9.46751 25.2909 8.92114 25.4099 8.30443C25.529 7.68232 25.3937 7.04939 25.0259 6.53547C24.9609 6.4435 24.8311 6.41645 24.7337 6.47596C24.1982 6.81677 23.8357 7.34692 23.7113 7.97444C23.5923 8.59114 23.7329 9.2349 24.0954 9.74341C24.1387 9.80291 24.2036 9.83537 24.2739 9.83537Z"
                fill="#DEF81C"
              />
              <path
                d="M29.1859 14.8441C28.5908 14.6386 27.9363 14.6872 27.3791 14.9794C27.2763 15.0335 27.233 15.1579 27.2817 15.2607C27.5414 15.8341 28.0282 16.2777 28.6233 16.4779C28.8667 16.5644 29.121 16.6023 29.3698 16.6023C29.7323 16.6023 30.0947 16.5157 30.4301 16.3372C30.5329 16.2831 30.5762 16.1587 30.5275 16.0559C30.2624 15.4771 29.7864 15.0443 29.1859 14.8387V14.8441Z"
                fill="#DEF81C"
              />
              <path
                d="M2.53815 8.59083C3.14404 8.94246 3.83107 9.12098 4.52351 9.12098C4.90219 9.12098 5.28086 9.06688 5.64872 8.95869C5.83806 8.90459 5.95166 8.70443 5.90838 8.51509C5.65954 7.46021 4.97251 6.54597 4.03664 6.005C3.08453 5.45321 1.98096 5.32338 0.92607 5.63714C0.736731 5.69124 0.623128 5.8914 0.666406 6.08074C0.920661 7.15185 1.58605 8.04445 2.53815 8.59083Z"
                fill="#DEF81C"
              />
              <path
                d="M3.40854 15.9314C4.48507 15.9206 5.52373 15.4607 6.25944 14.6763C6.39469 14.5303 6.38928 14.3085 6.25944 14.1624C5.51832 13.3942 4.48507 12.9561 3.41936 12.9561C3.40854 12.9561 3.39772 12.9561 3.3869 12.9561C2.29415 12.9669 1.28254 13.4105 0.536002 14.2165C0.40076 14.3626 0.40076 14.5844 0.536002 14.7304C1.28795 15.5094 2.29415 15.9368 3.37067 15.9368C3.38149 15.9368 3.39772 15.9368 3.40854 15.9368V15.9314Z"
                fill="#DEF81C"
              />
              <path
                d="M10.717 6.43241C10.7494 6.43782 10.7765 6.44322 10.8089 6.44322C10.9712 6.44322 11.1173 6.34044 11.166 6.17815C11.4851 5.15031 11.3607 4.01969 10.8306 3.0784C10.295 2.1263 9.41324 1.4555 8.34753 1.19584C8.15278 1.14715 7.95803 1.26075 7.90394 1.45009C7.58477 2.49416 7.70378 3.59773 8.23934 4.54984C8.76949 5.49112 9.6729 6.17815 10.7224 6.43241H10.717Z"
                fill="#DEF81C"
              />
              <path
                d="M4.31793 10.5593C4.22597 10.6296 4.20974 10.7594 4.27465 10.8568C4.64251 11.3761 5.18889 11.7115 5.82182 11.8035C5.93002 11.8197 6.03821 11.8251 6.14641 11.8251C6.66032 11.8251 7.16883 11.652 7.57456 11.3274C7.66652 11.2571 7.68275 11.1273 7.61784 11.0299C7.25539 10.516 6.69278 10.1698 6.07067 10.0832C5.44315 9.99124 4.82103 10.1589 4.31793 10.5538V10.5593Z"
                fill="#DEF81C"
              />
              <path
                d="M8.69405 9.16941C8.69405 9.16941 8.70487 9.16941 8.71569 9.16941C8.82388 9.16941 8.91585 9.09367 8.93208 8.98548C9.02404 8.36337 8.85093 7.72502 8.46684 7.23274C8.07194 6.73505 7.50933 6.4267 6.8764 6.3672C6.7628 6.35097 6.66001 6.43752 6.64378 6.55112C6.55182 7.17865 6.71952 7.80076 7.10902 8.30386C7.49851 8.79614 8.07735 9.1099 8.70487 9.16941H8.69405Z"
                fill="#DEF81C"
              />
              <path
                d="M5.48571 17.9334C4.92852 17.6467 4.26853 17.6088 3.67888 17.8144C3.07841 18.0253 2.60776 18.4635 2.3481 19.0478C2.29941 19.1505 2.3481 19.275 2.45088 19.3291C2.78087 19.4968 3.1325 19.5779 3.48954 19.5779C3.74921 19.5779 4.00887 19.5346 4.26313 19.4427C4.85278 19.2317 5.33965 18.7827 5.5885 18.2093C5.63718 18.1065 5.5885 17.9821 5.49112 17.928L5.48571 17.9334Z"
                fill="#DEF81C"
              />
              <path
                d="M13.6005 3.87876C13.6383 3.9004 13.6762 3.91122 13.7195 3.91122C13.7844 3.91122 13.8547 3.87876 13.8926 3.82467C14.2604 3.31616 14.4119 2.67241 14.2983 2.0557C14.1847 1.42818 13.8277 0.892622 13.2921 0.546402C13.1947 0.481486 13.0649 0.508535 13 0.600499C12.6267 1.11442 12.4807 1.74194 12.5943 2.36946C12.7079 2.98617 13.0757 3.53795 13.6005 3.87876Z"
                fill="#DEF81C"
              />
              <path
                d="M9.24043 19.1561C9.24043 18.983 9.09436 18.8423 8.92125 18.8369C7.97456 18.8045 7.04951 19.1777 6.38412 19.8431C5.70791 20.5193 5.34546 21.4173 5.37251 22.3803C5.37251 22.5534 5.51857 22.694 5.69168 22.6994C5.72413 22.6994 5.762 22.6994 5.79446 22.6994C6.71411 22.6994 7.57424 22.3424 8.22882 21.6932C8.89962 21.0278 9.26747 20.1028 9.24043 19.1561Z"
                fill="#DEF81C"
              />
              <path
                d="M16.5379 6.51877C17.3656 6.06977 17.9823 5.28536 18.2257 4.37113C18.4745 3.44607 18.3339 2.48856 17.8308 1.6717C17.7388 1.52564 17.5495 1.47154 17.398 1.5581C16.5541 2.01792 15.9536 2.77527 15.7102 3.70574C15.4668 4.61997 15.6128 5.60454 16.1051 6.40517C16.1646 6.50254 16.2728 6.56205 16.381 6.56205C16.4351 6.56205 16.4892 6.55123 16.5379 6.52418V6.51877Z"
                fill="#DEF81C"
              />
              <path
                d="M10.6304 14.9901C10.0732 14.698 9.41866 14.6493 8.82359 14.8549C8.22312 15.0604 7.74707 15.4932 7.48199 16.072C7.4333 16.1748 7.48199 16.2993 7.57937 16.3533C7.91477 16.5265 8.27722 16.6184 8.63966 16.6184C8.88851 16.6184 9.14276 16.5751 9.3862 16.494C9.98126 16.2884 10.4681 15.8448 10.7278 15.2768C10.7765 15.174 10.7278 15.0496 10.6304 14.9955V14.9901Z"
                fill="#DEF81C"
              />
              <path
                d="M13.2752 6.48124C13.1778 6.42174 13.048 6.44337 12.9831 6.54075C12.6152 7.06008 12.4746 7.6876 12.599 8.30971C12.718 8.92642 13.0913 9.4728 13.6214 9.8082C13.6593 9.82983 13.6972 9.84065 13.735 9.84065C13.8053 9.84065 13.8703 9.8082 13.9135 9.74869C14.276 9.24018 14.4166 8.59102 14.2976 7.97972C14.1786 7.35761 13.8108 6.82205 13.2752 6.48124Z"
                fill="#DEF81C"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen