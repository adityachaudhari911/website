import { content } from "../Content";

const Services = () => {
  const { services } = content;

  const handleServiceClick = (link) => {
    window.location.href = link;
  };

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              onClick={() => handleServiceClick(content.link)}
              style={{
                height: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                src={content.logo}
                alt="..."
                className="mx-auto"
                style={{ maxWidth: "100%", maxHeight: "80%" }}
              />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
