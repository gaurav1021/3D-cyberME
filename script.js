function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./image1/male0001.png
     ./image1/male0002.png
     ./image1/male0003.png
     ./image1/male0004.png
     ./image1/male0005.png
     ./image1/male0006.png
     ./image1/male0007.png
     ./image1/male0008.png
     ./image1/male0009.png
     ./image1/male0010.png
     ./image1/male0011.png
     ./image1/male0012.png
     ./image1/male0013.png
     ./image1/male0014.png
     ./image1/male0015.png
     ./image1/male0016.png
     ./image1/male0017.png
     ./image1/male0018.png
     ./image1/male0019.png
     ./image1/male0020.png
     ./image1/male0021.png
     ./image1/male0022.png
     ./image1/male0023.png
     ./image1/male0024.png
     ./image1/male0025.png
     ./image1/male0026.png
     ./image1/male0027.png
     ./image1/male0028.png
     ./image1/male0029.png
     ./image1/male0030.png
     ./image1/male0031.png
     ./image1/male0032.png
     ./image1/male0033.png
     ./image1/male0034.png
     ./image1/male0035.png
     ./image1/male0036.png
     ./image1/male0037.png
     ./image1/male0038.png
     ./image1/male0039.png
     ./image1/male0040.png
     ./image1/male0041.png
     ./image1/male0042.png
     ./image1/male0043.png
     ./image1/male0044.png
     ./image1/male0045.png
     ./image1/male0046.png
     ./image1/male0047.png
     ./image1/male0048.png
     ./image1/male0049.png
     ./image1/male0050.png
     ./image1/male0051.png
     ./image1/male0052.png
     ./image1/male0053.png
     ./image1/male0054.png
     ./image1/male0055.png
     ./image1/male0056.png
     ./image1/male0057.png
     ./image1/male0058.png
     ./image1/male0059.png
     ./image1/male0060.png
     ./image1/male0061.png
     ./image1/male0062.png
     ./image1/male0063.png
     ./image1/male0064.png
     ./image1/male0065.png
     ./image1/male0066.png
     ./image1/male0067.png
     ./image1/male0068.png
     ./image1/male0069.png
     ./image1/male0070.png
     ./image1/male0071.png
     ./image1/male0072.png
     ./image1/male0073.png
     ./image1/male0074.png
     ./image1/male0075.png
     ./image1/male0076.png
     ./image1/male0077.png
     ./image1/male0078.png
     ./image1/male0079.png
     ./image1/male0080.png
     ./image1/male0081.png
     ./image1/male0082.png
     ./image1/male0083.png
     ./image1/male0084.png
     ./image1/male0085.png
     ./image1/male0086.png
     ./image1/male0087.png
     ./image1/male0088.png
     ./image1/male0089.png
     ./image1/male0090.png
     ./image1/male0091.png
     ./image1/male0092.png
     ./image1/male0093.png
     ./image1/male0094.png
     ./image2/male0095.png
     ./image2/male0096.png
     ./image2/male0097.png
     ./image2/male0098.png
     ./image2/male0099.png
     ./image2/male0100.png
     ./image2/male0101.png
     ./image2/male0102.png
     ./image2/male0103.png
     ./image2/male0104.png
     ./image2/male0105.png
     ./image2/male0106.png
     ./image2/male0107.png
     ./image2/male0108.png
     ./image2/male0109.png
     ./image2/male0110.png
     ./image2/male0111.png
     ./image2/male0112.png
     ./image2/male0113.png
     ./image2/male0114.png
     ./image2/male0115.png
     ./image2/male0116.png
     ./image2/male0117.png
     ./image2/male0118.png
     ./image2/male0119.png
     ./image2/male0120.png
     ./image2/male0121.png
     ./image2/male0122.png
     ./image2/male0123.png
     ./image2/male0124.png
     ./image2/male0125.png
     ./image2/male0126.png
     ./image2/male0127.png
     ./image2/male0128.png
     ./image2/male0129.png
     ./image2/male0130.png
     ./image2/male0131.png
     ./image2/male0132.png
     ./image2/male0133.png
     ./image2/male0134.png
     ./image2/male0135.png
     ./image2/male0136.png
     ./image2/male0137.png
     ./image2/male0138.png
     ./image2/male0139.png
     ./image2/male0140.png
     ./image2/male0141.png
     ./image2/male0142.png
     ./image2/male0143.png
     ./image2/male0144.png
     ./image2/male0145.png
     ./image2/male0146.png
     ./image2/male0147.png
     ./image2/male0148.png
     ./image2/male0149.png
     ./image2/male0150.png
     ./image2/male0151.png
     ./image2/male0152.png
     ./image2/male0153.png
     ./image2/male0154.png
     ./image2/male0155.png
     ./image2/male0156.png
     ./image2/male0157.png
     ./image2/male0158.png
     ./image2/male0159.png
     ./image2/male0160.png
     ./image2/male0161.png
     ./image2/male0162.png
     ./image2/male0163.png
     ./image2/male0164.png
     ./image2/male0165.png
     ./image2/male0166.png
     ./image2/male0167.png
     ./image2/male0168.png
     ./image2/male0169.png
     ./image2/male0170.png
     ./image2/male0171.png
     ./image2/male0172.png
     ./image2/male0173.png
     ./image2/male0174.png
     ./image2/male0175.png
     ./image2/male0176.png
     ./image2/male0177.png
     ./image2/male0178.png
     ./image2/male0179.png
     ./image2/male0180.png
     ./image2/male0181.png
     ./image2/male0182.png
     ./image2/male0183.png
     ./image2/male0184.png
     ./image2/male0185.png
     ./image2/male0186.png
     ./image2/male0187.png
     ./image2/male0188.png
     ./image2/male0189.png
     ./image2/male0190.png
     ./images/male0191.png
     ./image3/male0192.png
     ./image3/male0193.png
     ./image3/male0194.png
     ./image3/male0195.png
     ./image3/male0196.png
     ./image3/male0197.png
     ./image3/male0198.png
     ./image3/male0199.png
     ./image3/male0200.png
     ./image3/male0201.png
     ./image3/male0202.png
     ./image3/male0203.png
     ./image3/male0204.png
     ./image3/male0205.png
     ./image3/male0206.png
     ./image3/male0207.png
     ./image3/male0208.png
     ./image3/male0209.png
     ./image3/male0210.png
     ./image3/male0211.png
     ./image3/male0212.png
     ./image3/male0213.png
     ./image3/male0214.png
     ./image3/male0215.png
     ./image3/male0216.png
     ./image3/male0217.png
     ./image3/male0218.png
     ./image3/male0219.png
     ./image3/male0220.png
     ./image3/male0221.png
     ./image3/male0222.png
     ./image3/male0223.png
     ./image3/male0224.png
     ./image3/male0225.png
     ./image3/male0226.png
     ./image3/male0227.png
     ./image3/male0228.png
     ./image3/male0229.png
     ./image3/male0230.png
     ./image3/male0231.png
     ./image3/male0232.png
     ./image3/male0233.png
     ./image3/male0234.png
     ./image3/male0235.png
     ./image3/male0236.png
     ./image3/male0237.png
     ./image3/male0238.png
     ./image3/male0239.png
     ./image3/male0240.png
     ./image3/male0241.png
     ./image3/male0242.png
     ./image3/male0243.png
     ./image3/male0244.png
     ./image3/male0245.png
     ./image3/male0246.png
     ./image3/male0247.png
     ./image3/male0248.png
     ./image3/male0249.png
     ./image3/male0250.png
     ./image3/male0251.png
     ./image3/male0252.png
     ./image3/male0253.png
     ./image3/male0254.png
     ./image3/male0255.png
     ./image3/male0256.png
     ./image3/male0257.png
     ./image3/male0258.png
     ./image3/male0259.png
     ./image3/male0260.png
     ./image3/male0261.png
     ./image3/male0262.png
     ./image3/male0263.png
     ./image3/male0264.png
     ./image3/male0265.png
     ./image3/male0266.png
     ./image3/male0267.png
     ./image3/male0268.png
     ./image3/male0269.png
     ./image3/male0270.png
     ./image3/male0271.png
     ./image3/male0272.png
     ./image3/male0273.png
     ./image3/male0274.png
     ./image4/male0275.png
     ./image4/male0276.png
     ./image4/male0277.png
     ./image4/male0278.png
     ./image4/male0279.png
     ./image4/male0280.png
     ./image4/male0281.png
     ./image4/male0282.png
     ./image4/male0283.png
     ./image4/male0284.png
     ./image4/male0285.png
     ./image4/male0286.png
     ./image4/male0287.png
     ./image4/male0288.png
     ./image4/male0289.png
     ./image4/male0290.png
     ./image4/male0291.png
     ./image4/male0292.png
     ./image4/male0293.png
     ./image4/male0294.png
     ./image4/male0295.png
     ./image4/male0296.png
     ./image4/male0297.png
     ./image4/male0298.png
     ./image4/male0299.png
     ./image4/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  
  // hRatio = hRatio/2;
  var vRatio = canvas.height / img.height;
  // vRatio = vRatio/2;
  if (window.innerWidth < 1200) {
    vRatio = vRatio / 2;
    hRatio = hRatio / 2;
  }

  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

const gitHubButton = document.getElementById('github');

gitHubButton.onclick = function (){
  window.open("https://www.github.com/gaurav1021/","_self");
}