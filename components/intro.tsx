const Intro = () => {
  return (
    <div className="banner">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Ken Blog
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          欢迎来到我的小站，我是杜康，一名计算机软件工程师，创业者。我毕业于Texas
          A&M
          University，曾经在抖音，美团等互联网公司工作。目前的主要工作是计算机图形学，计算机视觉，以及Web前端开发。
          <br />
          <br />
          这里主要记录我的目前的研究，以及工作项目展示，我的B站主页里面有我制作的图形学课程，大家感兴趣可以关注一下哦。
        </h4>
      </section>
    </div>
  );
};

export default Intro;
