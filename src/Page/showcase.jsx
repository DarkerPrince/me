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
var socialMediaSample = [
  "https://drive.google.com/uc?export=view&id=10N1OlB1vXMpNw5yrqdPU7tzx_2Yu6t_2",
  "https://drive.google.com/uc?export=view&id=1FivsMV1xxyxAFg8TIVh9UgcIt36bAkxA",
  "https://drive.google.com/uc?export=view&id=17FnK9CYDC8FaQcCZux7GWvMwDREy4u_u",
  "https://drive.google.com/uc?export=view&id=1hc9qftcv8hbQOA67zuTOYkqAvu7vJJZa",
  "https://drive.google.com/uc?export=view&id=1FivsMV1xxyxAFg8TIVh9UgcIt36bAkxA",
  "https://drive.google.com/uc?export=view&id=17FnK9CYDC8FaQcCZux7GWvMwDREy4u_u",
  "https://drive.google.com/uc?export=view&id=1hc9qftcv8hbQOA67zuTOYkqAvu7vJJZa",
  "https://drive.google.com/uc?export=view&id=14yMegGOXNZ743tp0IOIpGThSRGIB695K",
  "https://drive.google.com/uc?export=view&id=1JKhuecDuB2j2-3cJKF1bORKF_r0BoCTZ",
  "https://drive.google.com/uc?export=view&id=1WdAsvHc-b4g1_NIKwa1gO8HxKWizFrOg",
  "https://drive.google.com/uc?export=view&id=1Oik6iqGivMvQgfhmG0u2YNlXlSX6k1xd",
  "https://drive.google.com/uc?export=view&id=1AnrqKndYkTQwFNt2k9a49YqXnyO3Kl-A",
  "https://drive.google.com/uc?export=view&id=1lBI_qDi8k6qZo1c6a9Oc1AQ2lLAvn08X",
];

function Showcase() {
  return (
    <div className="flex flex-col items-center">
      <div className=" px-12 lg:w-1/2 flex flex-col items-center justify-center">
        <p className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {" "}
          Sample Showcase
        </p>
        <p className="text-center text-sm text-slate-400">
          Mobile & Web UI Designs: Inspiring categories for modern interfaces.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {sampleimages.map((imgUrl, index) => {
          console.log({ imgUrl });
          return (
            <ShowcaseItem
              showImg={imgUrl}
              key={index}
              blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Showcase;
