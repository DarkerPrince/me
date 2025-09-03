import React from "react";
import ShowcaseItem from "./Components/showcaseItem";

var sampleimages = [
  "https://dl.dropboxusercontent.com/scl/fi/m0lnpaqjg27cg1h09fjpf/Slide-16_9-1.png?rlkey=7rp8epsspvcryq0krdeiy0o6u&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/2bxbxpwnt3wi8wyiwowft/Telebirr-Picture-3.png?rlkey=9rdeqb9uetbzbwebxb1rx47j1&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/sb4le2ulngl310s5ew3zy/Telebirr-Picture-2.png?rlkey=br052htgz0xpujczxnoslj4fk&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/qegtiuhkr9ebr4kveigkv/distributer2.png?rlkey=eo2cqu37q1lb29vz6x0z3dwdd&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/01cldmunt03ocfw3w829s/Frame-1000006172.png?rlkey=d9mqim6a0w12f8yr91s0tk6xi&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/imfhi5moswtnqtalee6kw/Org-Dash.png?rlkey=mkml6frxwwg7kz84l5rtp55ea&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/dtrsadn33rrucv3os5gu7/Elearning.png?rlkey=fluqlc9oncsecyaz4qi2cf7qr&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/z4h4ibazykdhaig6m69dc/more-detials.png?rlkey=gmmjttz90jvmrxgjvrh4k5wlz&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/qvxoml1v51tiojilmj645/Master-dashboard.png?rlkey=n9h592f50gnxnj8qnr0qs8lph&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/t3xncg8f1vn7b5306u8p5/Hero-page.png?rlkey=z2p49ran6c07nfpyklly5baef&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/o9p7jc267agq2vhzsyvpu/Campaign-Members.png?rlkey=yakffdxw5skmd3uu2lti786jy&dl=0",
  "https://dl.dropboxusercontent.com/scl/fi/vob0e0dk8uyiy2rrkzwuw/Frames.png?rlkey=sk7t07fi4p73wvvkkvd5j6q9b&dl=0",
];

var blurHashItems = ["qASPU.D%jrt7-=-;_4?bMwR.IToLx]xt-;xaxuo#V@oeNGjERkRi?b%gofjYIoITIUIU-;-;ozadM|IAIUMy-;xuf+aeRkRiNGRj",
 "zHQ].,M{~WRj9Gxuxtof.8ofxtxuIUNG%2WB00Rjxuxut7RjRjxa~Wt7E1RjxtayNGoeMxRjbcoft6ofWCR*?at7M|M{oJs:ofWCD%a}tRWBRjt6ofWB",
"q8HMp7V?05%h04E104x]RjxaD*Rj-oNe-pjY00%1~9Rk^hM|^gNG%goz-;xaD*MxD%WC0BNH$_M_$~-;xrV?RjE2xZWrR-?aWYt7",
"qFQv:#IU}?s.57NHwuxZIqkDxts.WBIpaesl=_oe57R*?GoeNIj[?Fs:EMIpxZ%1flRkE2s.%2NHIpt6xZR+I[WB-Ut7R.NHRjsm",
"z6Qv,ny?-B=|.8MJ%#e=00.SMxM{cEDi%gV@00%fIU9aW?xaM{bY008_%M?Hn3%gIBt800H?.8g3H?yXDitR00Mdx]R.IA%gVs%L00RjtRt7Riofxat7",
"zLPGT{+Y?wFftRo#?btm00rDtST0NexuIpNb02%2RkR*s:flR%M{0.J:Vs$gjYRiofxZ0:E+VrwbaeWAjY%1T#%#IAi^s:M{V?Mx4.Ioxus:M|xtWCof",
"zDRMSd%N_M%f%29F%Oxa?H9FyCxuIU-;RkV@?u-;4UIUx^nht7t6%ftSVsoKR+ROtRoy%La#axjsRjjYWCNFxa?HD%IU%gRiaeRjt6Rjs;xuM{adW?ax",
"qIE#QpVe?Ht6?HtR^+bEnmR*t7ayoeWAR*oL?HW.oMjbWBRjayofkpspWBbHWBogf5WV~WjFaeWUWBogWBWUxuo2spofWpj[ofay",
"qVR{rkog_NoLIVWBjEt7.9aeIAf+n#ofo#V[R4ofogV@o#bHV@oex]WBRit7oIWBWVa}t6j@RjWXozj?j[j?bIkCt7adRjkDt7az",
"z3RpOU00030D0403030p8t-.yOOjOkKIk*pBF^Tu=^=JrtWExZ-Ax]9txF%2M~M~bbxs_2gNw]$xa0s9t4xV?ZIVV_xbjIjIa$of?G$+nif|xXxZoKbX",
"z3RpOU00030D0403030p8t-.yOOjOkKIk*pBF^Tu=^=JrtWExZ-Ax]9txF%2M~M~bbxs_2gNw]$xa0s9t4xV?ZIVV_xbjIjIa$of?G$+nif|xXxZoKbX",
"q9RfqRELs9tR4ot7-;xa~qxujYS4tRoeV?sl4nWCt7t6MxWBx]t7%MR+S5NGs:j]WVofIUj[R*WWn$t6ofae%Ms:ozf+ofjtaykC"
];
function Showcase() {
  return (
    <div className="flex flex-col items-center py-12 px-4 lg:px-12 bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 lg:w-1/2">
        <h2 className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
          Sample Showcase
        </h2>
        <p className="text-center text-sm text-slate-500 dark:text-slate-300 mt-2">
          Mobile & Web UI Designs: Inspiring categories for modern interfaces.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {sampleimages.map((imgUrl, index) => (
          <ShowcaseItem
            key={index}
            showImg={imgUrl}
            blurHash={blurHashItems[index]}
            className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
}

export default Showcase;
