import { AnimatedTestimonialsDemo } from "./Testamonila";

function Testamonial() {
  return (
    <section className="bg-[#DBD8D8] pt-[20px] md:pt-[120px] pb-[20px] md:pb-[120px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testamonial;
