import { techstack } from "../../public/data_techstack";

const TechStack = () => {
  return (
    <div className="flex flex-col justify-evenly max-w-3xl">
      <p className="text-xl pb-2">What I typically use</p>

      {techstack.map((item, i) => {
        return (
          <div key={`item.${i}`}>
            <div className="grid md:grid-cols-10 grid-cols-3 gap-x-5 gap-y-5">
              {item.list.map((skill, i) => {
                return (
                  <div
                    className="flex flex-col gap-y-2 text-center items-center justify-center"
                    key={`skill.${i}`}
                  >
                    <div>{skill.icon}</div>
                    <p className="text-xs">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
