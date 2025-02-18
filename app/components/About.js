import data from "../../public/data";

export default function About() {
  return (
    <>
      <h3 className="text-xl pb-10">About me</h3>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <p>{data[0].about_para_one}</p>
          <p>{data[0].about_para_two}</p>
          <p>{data[0].about_para_three}</p>
        </div>

        <p>
          Looking to get in touch or for my CV? Reach me at {data[0].contact}
        </p>
      </div>
    </>
  );
}
